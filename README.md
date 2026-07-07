# Maharishi Ayurveda Hospital - Landing Site

A responsive Next.js (App Router) landing site built to match the Figma design
(Desktop 1 + Desktop 2), with a contact form that emails submissions to
`danish@healthus.ai` and a thank-you page.

## Pages

| Route          | Figma frame | Purpose                                   |
| -------------- | ----------- | ----------------------------------------- |
| `/`            | Desktop 1   | NABH-Accredited Ayurvedic Hospital home   |
| `/panchakarma` | Desktop 2   | Vaidya-Led Panchakarma landing            |
| `/thank-you`   | -           | Confirmation shown after form submit      |
| `/api/contact` | -           | Server route that emails form submissions |

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (gold / cream Ayurveda theme)
- Karla font (via `next/font`)
- Nodemailer for email delivery

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in SMTP values
npm run dev                  # http://localhost:3000
```

## Email setup (form -> danish@healthus.ai)

The form posts to `/api/contact`, which sends an email using SMTP.
Set these in `.env.local`:

```env
CONTACT_TO_EMAIL=danish@healthus.ai
CONTACT_FROM_EMAIL=website@healthus.ai
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
```

### Using Gmail
1. Enable 2-Step Verification on the Google account.
2. Create an **App Password** (Google Account -> Security -> App passwords).
3. Put that 16-character password in `SMTP_PASS` and the Gmail address in `SMTP_USER`.

### Using the healthus.ai domain mailbox
Ask your email host for their SMTP host/port/credentials and drop them in the
same variables.

> Until SMTP is configured, the form still works end-to-end (it logs the
> submission on the server and redirects to `/thank-you`) so you can develop
> without credentials. Real emails start sending as soon as the SMTP vars are set.

## Notes on images

To keep the site self-contained, section imagery uses on-brand gold-gradient
placeholders that mirror the Figma image cards. To use real photos, replace the
`GradientMedia` blocks in `src/components/blocks.tsx` (and the hero background in
`src/components/Hero.tsx`) with `next/image`. `images.unsplash.com` is already
allowed in `next.config.mjs`.

## Deploy

Works out of the box on Vercel. Add the same environment variables in the
Vercel project settings.
