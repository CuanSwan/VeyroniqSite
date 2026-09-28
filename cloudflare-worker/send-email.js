const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));

const json = (body, status, headers) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });

export default {
  async fetch(request, env) {
    // Restrict this to your real site's origin once you know it, e.g.
    // 'https://www.veyroniq.com'. '*' is fine to start with since this
    // endpoint only relays a form submission and returns no secret data.
    const corsHeaders = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed.' }, 405, corsHeaders);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'Invalid request body.' }, 400, corsHeaders);
    }

    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const business = (data.business || '').trim();
    const message = (data.message || '').trim();

    if (!name || !email || !message) {
      return json({ error: 'Name, email and message are required.' }, 400, corsHeaders);
    }

    const apiKey = env.RESEND_API_KEY;
    const toEmail = env.CONTACT_TO_EMAIL;
    const fromEmail = env.CONTACT_FROM_EMAIL || 'Veyroniq <onboarding@resend.dev>';

    if (!apiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL.');
      return json({ error: 'Email is not configured.' }, 500, corsHeaders);
    }

    const html = `
      <h2>New enquiry from the Veyroniq contact form</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Business:</strong> ${escapeHtml(business || '-')}</p>
      <p><strong>What they need built:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `New enquiry from ${name}`,
          html,
        }),
      });

      if (!resendResponse.ok) {
        const errText = await resendResponse.text();
        console.error('Resend API error:', resendResponse.status, errText);
        return json({ error: 'Failed to send email.' }, 502, corsHeaders);
      }

      return json({ ok: true }, 200, corsHeaders);
    } catch (err) {
      console.error('Error calling Resend:', err);
      return json({ error: 'Failed to send email.' }, 500, corsHeaders);
    }
  },
};
