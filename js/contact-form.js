document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.vq-form-1');
  if (!form) return;

  const confirmation = document.getElementById('form-confirmation');
  const errorMessage = document.getElementById('form-error');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (confirmation) confirmation.hidden = true;
    if (errorMessage) errorMessage.hidden = true;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      business: form.business.value,
      message: form.message.value,
    };

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      if (confirmation) confirmation.hidden = false;
      form.reset();
    } catch (err) {
      if (errorMessage) errorMessage.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
