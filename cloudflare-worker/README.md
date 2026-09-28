# Contact form email Worker

A small Cloudflare Worker that holds `RESEND_API_KEY` server-side and
relays the contact form to Resend. Runs entirely on Cloudflare's free
tier (see pricing note below) — no server, no build step for the main
site.

## Deploy (one-time, ~10 minutes)

1. Install Node.js if you don't already have it, then from this
   `cloudflare-worker/` folder run:
   ```
   npx wrangler login
   ```
   This opens a browser to sign in / create a free Cloudflare account.

2. Set the secrets (you'll be prompted to paste each value):
   ```
   npx wrangler secret put RESEND_API_KEY
   npx wrangler secret put CONTACT_TO_EMAIL
   ```
   Optionally also:
   ```
   npx wrangler secret put CONTACT_FROM_EMAIL
   npx wrangler secret put ALLOWED_ORIGIN
   ```

3. Deploy:
   ```
   npx wrangler deploy
   ```
   This prints a URL like `https://veyroniq-contact-form.<your-subdomain>.workers.dev`.

4. Open `js/contact-form.js` in the main site and set `WORKER_URL` at
   the top of the file to that URL, then redeploy the static site.

## Local testing

Copy `.dev.vars.example` to `.dev.vars`, fill in real values, then:
```
npx wrangler dev
```

## Cost

The free tier covers 100,000 requests/day — a contact form will
never get close to that. This costs $0/month in practice.
