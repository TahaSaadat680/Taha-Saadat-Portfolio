# Taha Saadat — Personal Portfolio

Premium personal portfolio for Taha Saadat, a software engineer focused on artificial intelligence, intelligent automation, and full-stack product development.

Live site: [taha-saadat.tahasaadat680.chatgpt.site](https://taha-saadat.tahasaadat680.chatgpt.site)

## Overview

This is a responsive, dependency-light static portfolio designed for recruiters, engineering teams, and potential freelance clients. It presents Taha's engineering background, technical capabilities, selected projects, experience, education, GitHub profile, and contact information in a dark editorial interface.

## Highlights

- Responsive desktop, tablet, and mobile layouts
- Hero entrance animations and scroll-triggered reveals
- Live cursor glow and pointer-based card tilt on desktop
- Scroll progress indicator and active section navigation
- Reduced-motion support for accessibility
- Project presentation for AgriFusion, onboarding automation, computer vision, self-supervised learning, complaint management, and hospital management systems
- Downloadable CV and supplied professional portrait
- GitHub and LinkedIn links
- Mail client contact flow with pre-filled subject and message
- Favicon, sitemap, robots file, and Open Graph metadata

## Project structure

```text
.
├── index.html              # Main portfolio page
├── styles.css              # Design system, responsive styles, and animations
├── script.js               # Navigation, reveals, pointer effects, progress, and form behavior
├── Taha_New_CV.pdf         # Resume used by the Download CV button
├── taha pic.jpeg           # Professional portrait used in the hero
├── favicon.svg             # TS favicon
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Crawler instructions
├── dist/                   # Static deployment output
└── .openai/hosting.json    # Sites hosting configuration
```

## Run locally

No package installation is required. Open `index.html` directly, or serve the directory with a static server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Updating content

1. Edit the content in `index.html`.
2. Adjust visual tokens and responsive rules in `styles.css`.
3. Update interaction behavior in `script.js`.
4. Copy changed static files into `dist/` before publishing.
5. Verify the CV and portrait filenames remain unchanged, or update their references in `index.html`.

## Contact form

The contact form opens a pre-filled email through the visitor's default mail client. For server-side delivery, replace the submit handler with a provider such as Resend or Formspree and keep all credentials in server-side environment variables.

## Deployment

The site is configured for static deployment through OpenAI Sites using `dist/` as the public directory. The same files can also be deployed to GitHub Pages, Netlify, Cloudflare Pages, or any static hosting provider.

## License

Personal portfolio source for Taha Saadat. Contact the owner before reusing the personal portrait, CV, or branding assets.
