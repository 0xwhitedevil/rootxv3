# RootX, Website

Modern cybersecurity company website built with **React 18** + **plain CSS**.

## Tech Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Framework   | React 18 (Create React App)                   |
| Language    | JavaScript (JSX)                              |
| Styling     | Plain CSS with CSS custom properties          |
| Fonts       | Plus Jakarta Sans + Inter (Google Fonts)      |
| Icons       | Inline SVG + emoji                            |
| Animations  | Pure CSS keyframes + React state              |
| Routing     | react-router-dom v6                           |
| Build tool  | react-scripts (Webpack + Babel)               |
| Chat widget | Tawk.to (replace placeholder IDs in index.html) |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm start

# 3. Build for production
npm run build
```

## Changelog (V0.1 + V0.2)

### V0.3 - May 10
1. Team card LinkedIn / Instagram links hidden (kept in data, ready to re-enable).
2. Email rebranded to `info@rootxsecurity.com` everywhere (footer, contact card, FAQ, CTA pill, careers, privacy).
3. Footer brand line updated to "A Unit of Rootecstak Group" with no location appended.
4. Hero badge simplified to "Rootecstak Group" (dropped "A Unit of" and city, per landing-page spec).
5. Office presence updated everywhere to two locations: Chennai, India and Coventry, United Kingdom (Footer contact list, About mission badges, CTA pill, GetQuote office card, FAQ "Where are you based?", Privacy "Who we are", meta description).
6. Terminal mockups removed: Process panel on home page replaced with a clean step-preview card; Services page Deliverables panel replaced with a clean report-style card.
7. "Home" added as the first nav link.
8. FAQ "Where are you based?" rewritten to mention both UK and India; email reference updated.
9. Products page rebuilt as a single overall "Coming Soon" message - the four individual product cards are removed.

### V0.1 - April 12
1. Footer redesigned with Flexbox, mobile responsive, real social SVG icons.
2. Mobile menu refactored as a top-right floating panel with backdrop and staggered links.
3. Dark/light theme toggle (persists via `localStorage`, default dark).
4. Tawk.to chat widget integrated in `public/index.html` (placeholder IDs to be replaced).
5. Logo converted from JPEG/PNG to SVG (`/public/logo.svg`).
6. Team cards become a horizontal scroll-snap carousel on mobile.
7. Toggle animations reworked: navbar hamburger morphs into X, FAQ +/− rotates 135 degrees with spring.
8. Copyright updated to 2026.
9. Products page added with four "Coming Soon" cards.
10. Careers page added with copyable email template (no longer redirects to About).
11. GRC and Security Audit added as services.
12. Menu order reversed: FAQ, About, Team, Process, Products, Services.
13. En-dashes (-) and em-dashes (-) removed from user-facing copy.
14. Hero stats kept; labels nudged toward credible signals (NDA backed, avg. reply time).

### V0.2 - April 20
1. Each service has its own landing page at `/services/<slug>` with deliverables, industries, and "Learn more" entry points.
2. "Book a 20-min Consultation" and "Download Sample Report" CTAs added to home, services, contact, and CTA section.
3. Testimonials section with three client quotes and a four-card proof strip.
4. Industries section: SaaS, Fintech, Healthcare, E-commerce, EdTech, Government.
5. Resources section with Blog / Resource / Threat Report cards (placeholders).
6. "How Our Pricing Works" section with three tiers (Discover, Scope, Partner) and three principles.
7. Threat Feed widget showing recent CVEs and breaches.
8. Hero/About metrics revamped toward credible signals.
9. About and Services copy tweaked.
10. Privacy Policy page at `/privacy`.

## Project Structure

```
src/
├── App.jsx                       # Routes + ScrollToTop + global stylesheets
├── index.js                      # React entry point
├── data/
│   └── services.js               # Single source of truth for all services
├── components/
│   ├── Navbar.jsx                # Floating mobile menu + theme toggle + reversed order
│   ├── Footer.jsx                # Flex row, real SVG socials, 2026 copyright
│   ├── Hero.jsx                  # Hero with credible-signal stats
│   ├── Services.jsx              # Service cards with Learn more links
│   ├── Industries.jsx            # V0.2 #4
│   ├── HowItWorks.jsx            # 5-step process + terminal
│   ├── Testimonials.jsx          # V0.2 #3
│   ├── ThreatFeed.jsx            # V0.2 #7
│   ├── PricingHow.jsx            # V0.2 #6
│   ├── Resources.jsx             # V0.2 #5
│   ├── Team.jsx                  # Carousel on mobile (V0.1 #6)
│   ├── FAQ.jsx                   # Rotating-toggle accordion (V0.1 #7)
│   ├── GetQuote.jsx              # Contact form, GRC/Audit added
│   ├── CTA.jsx                   # Final CTA with sample-report download
│   └── About.jsx                 # About page main composition
├── pages/
│   ├── HomePage.jsx              # Composes home sections
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx          # All services + Industries section
│   ├── ServiceDetail.jsx         # Per-service landing page (V0.2 #1)
│   ├── ProductsPage.jsx          # Coming Soon (V0.1 #9)
│   ├── ProcessPage.jsx
│   ├── TeamPage.jsx
│   ├── FAQPage.jsx
│   ├── CareersPage.jsx           # Email template (V0.1 #10)
│   ├── PrivacyPage.jsx           # V0.2 #10
│   └── ContactPage.jsx
├── hooks/
│   └── useInView.js              # IntersectionObserver hook
└── styles/
    ├── globals.css               # CSS variables, light/dark themes (V0.1 #3)
    ├── Navbar.css                # Mobile floating panel + theme toggle
    ├── Hero.css
    ├── sections.css              # Ticker, services, steps, team, FAQ, CTA, footer
    ├── GetQuote.css              # Contact form
    ├── About.css                 # About page
    ├── InnerPages.css            # Process, team, FAQ, services pages
    └── Additions.css             # New sections: testimonials, industries,
                                  # threat-feed, pricing-how, resources,
                                  # products, careers, privacy, service-detail
```

## Tawk.to setup

The chat loader lives in `public/assets/chat.js` (loaded with `<script src="/assets/chat.js" defer>` from `public/index.html`). Open it and replace `YOUR_PROPERTY_ID` and `YOUR_WIDGET_ID` with the values from your Tawk.to dashboard.

**Note on visibility.** Moving the loader out of inline HTML keeps the IDs out of the page's "View Source" output, but it does not hide them from a determined visitor. Anyone using browser DevTools (Network or Sources tab) can still see the request to `embed.tawk.to/<id>/<id>` and the contents of `chat.js`. There is no browser-side way to truly hide JavaScript that the browser is executing.

## Color System

| Variable        | Dark        | Light       | Usage                       |
|-----------------|-------------|-------------|-----------------------------|
| `--amber`       | `#E8A020`   | `#B57A0F`   | Brand accent                |
| `--amber2`      | `#FFB830`   | `#D89117`   | Hover state                 |
| `--bg`          | `#050A0F`   | `#FAFBFC`   | Page background             |
| `--surface`     | `#111B2B`   | `#FFFFFF`   | Cards, panels               |
| `--text`        | `#E8F0F8`   | `#0E1726`   | Primary text                |
| Terminal green  | `#00C88C`   | `#00C88C`   | Terminal accents (constant) |

The theme toggle in the navbar persists choice via `localStorage` under the key `rootx-theme`.

## Sample Pentest Report

`/public/sample-pentest-report.pdf` is a placeholder. Replace with a real redacted report before launch. The download link is referenced from Hero, CTA, Services page header, ServiceDetail aside, and Contact page.

## Deploying to Netlify

```bash
npm run build
# Drag the /build folder to https://app.netlify.com/drop
```

Add a `_redirects` file with `/* /index.html 200` so client-side routes work.

## Contact Info (Update in components)

- Email: `info@rootxsecurity.com`
- Careers: `careers@rootxsecurity.com`
- Privacy: `privacy@rootxsecurity.com`
- Phone: `+91 80723 31337`
- Offices: Chennai, India · Coventry, United Kingdom
- Instagram: `https://www.instagram.com/rootx.services`
- LinkedIn: `https://www.linkedin.com/company/rootx-services/`
