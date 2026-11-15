# BioCurex Pharma

**Innovating Care, Curing Fast.**

A responsive marketing website for **BioCurex Pharma**, a pharmaceutical and healthcare company established in 2017. The site presents the company's product catalogue, quality approach, office locations, and enquiry channels, including direct WhatsApp contact.

Built with **Next.js (App Router)**, **React**, **Tailwind CSS v4**, and **Lucide / React Icons**. The site is fully static — there is no backend, database, authentication, or payment integration.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Product Catalogue](#product-catalogue)
- [Contact & Business Information](#contact--business-information)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Images & Assets](#images--assets)
- [Styling & Design](#styling--design)
- [Responsive Design](#responsive-design)
- [Contact / Enquiry Flow](#contact--enquiry-flow)
- [Social Media](#social-media)
- [Deployment](#deployment)
- [Git Commands](#git-commands)
- [Future Improvements](#future-improvements)

---

## Project Overview

BioCurex Pharma is a pharmaceutical and healthcare brand focused on quality-driven products, innovation, and patient wellbeing. This repository contains the public-facing website, which is designed to:

- Introduce the company, its mission, vision, and values.
- Showcase the complete pharmaceutical product catalogue across therapeutic categories.
- Explain the company's quality principles and process.
- Make it easy for visitors, partners, and customers to get in touch from anywhere.

The site is a content and lead-generation website. Enquiries are composed in the browser and handed off to WhatsApp — no form data is stored or sent to a server by this project.

**Tagline:** *Innovating Care, Curing Fast.*

---

## Features

- **Responsive design** across mobile, tablet, desktop, and wide screens.
- **Home page** with hero, company introduction, featured products, gallery, full product banner, and call to action.
- **About Us page** covering the company story, establishment year (2017), mission, vision, core values, and differentiators.
- **Products page** with the complete product catalogue and an extended product gallery.
- **Quality page** describing quality principles and the product lifecycle process.
- **Contact page** with office locations, phone numbers, email, Instagram, and an enquiry form.
- **Product catalogue** driven by a single data file, with 34 products and images.
- **Product gallery** with two responsive masonry-style grids (9 images on the home page, 34 on the products page).
- **Multiple office locations** — Hyderabad head office and Visakhapatnam local office.
- **Phone and email contact** with `tel:` and `mailto:` links throughout the site.
- **Instagram integration** in the contact page, footer, and social links.
- **WhatsApp integration** via a floating button and a prefilled enquiry flow.
- **Floating WhatsApp button** fixed on every page with a hover/focus tooltip.
- **Product enquiry flow**: each product's *Enquire* button opens the contact page with the product preselected as the enquiry subject.
- **Smooth scroll-to-top behavior** from the footer and when tapping the logo/home link while already on the home page.
- **Responsive navigation** with a sticky header, desktop links, phone CTA, and a collapsible mobile menu.
- **Custom 404 page** with quick links back into the site.
- **Metadata** for the site title and description via the Next.js App Router.
- **Optimized images** through `next/image` and locally hosted assets.

---

## Pages & Routes

The project uses the Next.js App Router (`src/app`).

| Route      | File                       | Description                                                              |
| ---------- | -------------------------- | ------------------------------------------------------------------------ |
| `/`        | `src/app/page.js`          | Home: hero, about, featured products, gallery, full catalogue, CTA.      |
| `/about`   | `src/app/about/page.jsx`   | Company story, mission, vision, values, and why BioCurex.                |
| `/products`| `src/app/products/page.jsx`| Full 34-product catalogue and 34-image product gallery.                  |
| `/quality` | `src/app/quality/page.jsx` | Quality principles, commitments, and the four-stage quality process.     |
| `/contact` | `src/app/contact/page.jsx` | Offices, phone, email, Instagram, and the WhatsApp enquiry form.          |
| `*`        | `src/app/not-found.jsx`    | Custom 404 page with links to Home, About, Products, Quality, Contact.    |

The header and footer are rendered globally from `src/app/layout.js`. There are no API routes or dynamic routes in this project.

---

## Technology Stack

| Category        | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org) (App Router, Turbopack)                   |
| UI library      | React 19                                                                    |
| Language        | JavaScript (JSX)                                                            |
| Styling         | Tailwind CSS v4 (`@tailwindcss/turbopack`, imported in `globals.css`)      |
| Icons           | [Lucide React](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons/) |
| Images          | `next/image` with locally served assets                                     |
| Fonts           | `next/font/google` — Geist and Geist Mono                                  |
| Compiler        | React Compiler (`reactCompiler: true` in `next.config.mjs`)                 |
| Linting         | ESLint with `eslint-config-next`                                            |
| Path aliases    | `@/*` → `src/*` (configured in `jsconfig.json`)                             |

**Dependencies from `package.json`:**

```json
{
  "framer-motion": "^14.12.0",
  "lucide-react": "^1.71.0",
  "next": "16.4.6",
  "react": "19.3.0",
  "react-dom": "19.3.0",
  "react-icons": "^5.7.0"
}
```

> `framer-motion` is currently installed but not imported by any component; all motion on the site is implemented with CSS transitions and Tailwind utilities.

There is **no** database, ORM, authentication, state manager, form backend, CMS, or API layer in this project.

---

## Project Structure

```text
biocurex-pharma/
├── public/
│   ├── bio-curex-logo.png          # Logo used in the footer
│   ├── staffarc-logo.avif          # StaffArc credit logo
│   ├── home/
│   │   └── hero-bg.png             # Home hero background
│   ├── logo/
│   │   └── logo.png                # Logo used in the navbar
│   └── images/
│       ├── all-products.jpg        # Full product range banner
│       ├── catlogs/                # 34 individual product pack images
│       ├── gallery/                # 34 product/gallery photos
│       ├── home/
│       │   └── about.png           # About section image
│       └── quality/
│           └── quality.png         # Quality page image
├── src/
│   ├── app/
│   │   ├── layout.js               # Root layout, metadata, navbar/footer/WhatsApp
│   │   ├── page.js                 # Home page
│   │   ├── globals.css             # Tailwind import and base styles
│   │   ├── icon.png                # Favicon
│   │   ├── not-found.jsx           # Custom 404 page
│   │   ├── about/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── products/page.jsx
│   │   └── quality/page.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── AllProducts.jsx
│   │   │   ├── CTA.jsx
│   │   │   ├── DevelopedByStaffArc.jsx
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   └── HomeLink.jsx
│   │   ├── home/
│   │   │   ├── About.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   └── Products.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   └── data/
│       ├── contact.js              # Phones, email, offices, maps, WhatsApp
│       └── products.js             # Product catalogue data
├── jsconfig.json                   # `@/*` path alias
├── next.config.mjs                 # React Compiler + Tailwind Turbopack rule
├── eslint.config.mjs
└── package.json
```

Note: the product image folder is spelled `catlogs` in the repository, and `src/data/products.js` references it with that exact path.

---

## Components

### Layout

| Component | Description |
| --------- | ----------- |
| `Navbar`  | Sticky, blurred header. Displays the logo and wordmark, desktop navigation (Home, About Us, Products, Quality, Contact Us), a primary phone CTA, and a collapsible mobile menu with the same links plus the phone number. Closes the menu on navigation. |
| `Footer`  | Four-column footer with logo and tagline, quick links, product category links, full contact details (both offices, phones, email, Instagram), a dynamic copyright year, the StaffArc credit, and a smooth scroll-to-top button. |

### Home

| Component | Description |
| --------- | ----------- |
| `Hero`     | Full-height hero with a background image and gradient overlays, the tagline, *Explore Products* / *Contact Us* buttons, a call link, and three trust points. |
| `About`    | Two-column introduction with the company story, four highlights, a link to `/about`, and an image with an "Established 2017" badge. |
| `Products` | Shows the first six products from the catalogue in a responsive card grid, each with category, name, description, and an *Enquire* link. Links to the full catalogue. |
| `ProductGallery` | Nine-image responsive gallery grid that links to `/products`. |

### Common

| Component | Description |
| --------- | ----------- |
| `AllProducts` | Displays the full product-range banner (`/images/all-products.jpg`) inside a rounded, bordered container. Used on the home page and the products page. |
| `CTA`      | Navy call-to-action panel with *Contact Us* and *Explore Products* buttons and a click-to-call link. |
| `FloatingWhatsApp` | Fixed WhatsApp button shown globally (from the root layout), linking to `wa.me` with an accessible label and tooltip. |
| `HomeLink` | Wraps `next/link` to smoothly scroll to the top when the home link is clicked while already on `/`, while preserving normal navigation and modifier-key behavior. |
| `DevelopedByStaffArc` | Footer credit with the StaffArc logo and external link. |

### Page-level sections

The About, Products, Quality, and Contact pages contain their own section markup rather than importing every block from `components`. Reusable data comes from `src/data/products.js` and `src/data/contact.js`.

---

## Product Catalogue

The website includes the **BioCurex Pharma product catalogue**, containing **34 products**. Each product has:

- a numeric `id`
- a `name`
- a therapeutic `category`
- a short `description` (composition / strength)
- an `image` path

Product data is stored in **`src/data/products.js`** and imported wherever a product grid is rendered. The home page shows the first six products; the products page renders all 34.

Product pack images are stored in **`public/images/catlogs/`** and referenced as `/images/catlogs/<file>.jpeg`. The catalogue spans categories such as antibiotics, cardiovascular care, neuropathic and neurological care, gastrointestinal care, nutraceuticals, pain and inflammation, bone and joint health, respiratory care, and antifungal products.

To add a product, append an object to the array in `src/data/products.js`, add its image to `public/images/catlogs/`, and reference the new image path. The product count on the products page is derived from `products.length`, so it updates automatically.

---

## Contact & Business Information

All of the following values live in **`src/data/contact.js`** and are used by the navbar, footer, contact page, hero, and CTA.

### Phone

| Label           | Number             |
| --------------- | ------------------ |
| Primary Phone   | +91 70757 67646    |
| Alternate Phone | +91 89772 67646    |

### Email

**Biocurex9@gmail.com**

### Head Office — Hyderabad

Rama Constructions
Plot No. 11, 3rd Floor
Gulmohar Park, Serilingampally
Hyderabad, Telangana
PIN: 500019

[Open in Google Maps](https://maps.app.goo.gl/iHvGHJLk3waBSJMF6)

### Local Office — Visakhapatnam

37-7-56
G/F, Sathya Nagar
Opp 5th Town Police Station
Industrial Estate
Visakhapatnam - 07

[Open in Google Maps](https://maps.app.goo.gl/bsdzWbF7SGSYrqkh6)

### WhatsApp

The floating button and the enquiry form both use **+91 70757 67646** (`917075767646` in `wa.me` format).

---

## Installation

### Prerequisites

- Node.js 20 or newer (required by current Next.js releases)
- npm (a `package-lock.json` is included)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/biocurex9/biocurex-pharma.git
cd biocurex-pharma

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Available scripts

```bash
npm run dev     # Start the development server (Turbopack)
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

---

## Environment Variables

This project does **not** use environment variables. There are:

- no `.env` files in the repository,
- no `process.env` reads in the source,
- no secrets, API keys, or tokens required.

All contact details and product data are stored in plain data files under `src/data/`. No `.env.example` is necessary for the current feature set.

> `.env*` is listed in `.gitignore`, so if environment variables are introduced later they will not be committed by default.

---

## Images & Assets

Static assets are served from the `public/` directory and referenced with root-relative paths.

| Path | Purpose |
| ---- | ------- |
| `public/logo/logo.png` | Navbar logo |
| `public/bio-curex-logo.png` | Footer logo |
| `public/home/hero-bg.png` | Home hero background (CSS `background-image`) |
| `public/images/home/about.png` | About sections |
| `public/images/quality/quality.png` | Quality page |
| `public/images/all-products.jpg` | Full product range banner |
| `public/images/catlogs/` | 34 individual product images |
| `public/images/gallery/` | 34 product/gallery photos |
| `public/staffarc-logo.avif` | Footer credit |

Images are rendered with `next/image` (`<Image />`) using `fill` with `sizes` for responsive grids, or explicit `width`/`height` for fixed assets. The hero background is the exception: it is applied through an inline `style` background image.

Because assets are local, no `remotePatterns` configuration is needed in `next.config.mjs`.

---

## Styling & Design

Styling is handled with **Tailwind CSS v4** utility classes. `src/app/globals.css` imports Tailwind and defines base colors, fonts, and cursor behavior.

### Brand palette

| Role | Color | Hex |
| ---- | ----- | --- |
| Navy (primary) | Deep navy | `#0B2F5B` |
| Navy (alt / dark sections) | Darker navy | `#062d57` (`#09264A` hover) |
| Green | Brand green | `#5FAE16` |
| Bright green | Accent / buttons | `#72C51B` (`#5CA817` hover) |
| Light green | Section backgrounds | `#F1F8E9` |
| Light green border | Card/divider border | `#D7E6C8` |
| WhatsApp | WhatsApp brand | `#25D366` |

### Visual style

- Navy and green as the core brand colors, with light-green section backgrounds for contrast.
- Large, bold headings with tight tracking and green highlight lines.
- Rounded cards (`rounded-2xl`, `rounded-3xl`), pill-shaped buttons (`rounded-full`), and soft shadows.
- Subtle hover states: lift, border color change, shadow, and image scale.
- Decorative blurred gradient circles and tinted overlays for depth.
- Professional pharmaceutical/healthcare look with generous whitespace and a max-width `7xl` content container.
- Custom 404 page using the same palette and card/button language.

Typography uses Geist (sans) and Geist Mono loaded via `next/font/google`. The `body` rule also declares an Arial/Helvetica fallback.

---

## Responsive Design

The layout is built mobile-first with Tailwind breakpoints and supports:

- **Mobile** — single-column sections, stacked CTAs, a hamburger menu, and full-width cards.
- **Tablet (`sm:`)** — two-column product and value grids, side-by-side buttons.
- **Desktop (`lg:`)** — desktop navigation, three/four-column grids, and two-column content sections.
- **Large / wide screens** — content is centered and capped at `max-w-7xl` for readable line lengths.

The navigation collapses into a mobile menu below `lg`, and image grids adjust their `sizes` attributes so the browser loads appropriately sized images.

---

## Contact / Enquiry Flow

There are four ways to reach BioCurex Pharma from the site:

1. **Phone** — the navbar, hero, CTA, contact page, and footer use `tel:` links for both numbers.
2. **Email** — `mailto:Biocurex9@gmail.com` links on the contact page and footer.
3. **Instagram** — links to the official profile from the contact page and footer.
4. **WhatsApp** — the floating button opens a chat directly; the contact form prepares a full enquiry message.

### Product enquiry flow

1. A visitor clicks **Enquire** on a product card (home or products page).
2. The link navigates to `/contact?product=<Product Name>`.
3. The contact page reads the `product` query parameter on mount and prefills the **Subject** field.
4. The visitor completes Name, Email, Phone, Subject, and Message.
5. On submit, the form validates required fields, builds a formatted message (name, email, phone, subject, message), and opens WhatsApp in a new tab with the message prefilled via `wa.me`.
6. A success notice confirms the enquiry is ready to send; if pop-ups are blocked, an error notice asks the visitor to allow pop-ups.

**No data is sent to or stored by this website.** The form is a client-side message composer that hands off to WhatsApp; the visitor still presses send inside WhatsApp.

---

## Social Media

The only social platform linked in the project is Instagram:

- **Instagram:** [https://www.instagram.com/biocurexpharma](https://www.instagram.com/biocurexpharma?cplk=ZjFmd2ZicDU1azR2&utm_source=qr)

It appears in the contact page's contact cards and in the footer. No other social profiles (Facebook, LinkedIn, X, YouTube, etc.) are implemented.

---

## Deployment

This is a standard Next.js App Router application and can be deployed to any platform that supports Next.js.

**Vercel** is the most direct option:

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the default build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output directory: `.next` (default)
   - Install command: `npm install`
4. Deploy.

No `vercel.json` or other deployment configuration exists in the repository, and no deployment is configured or recorded in this project. No environment variables need to be added.

**Other Node.js hosts** can run the production build directly:

```bash
npm run build
npm run start
```

The server listens on port `3000` by default; set `PORT` in the host environment if a different port is required.

---

## Git Commands

Basic workflow for local development and publishing changes:

```bash
# Install and run locally
npm install
npm run dev

# Production build and serve
npm run build
npm run start

# Stage and commit changes
git add .
git commit -m "Describe your change"

# Push to the remote repository
git push origin main
```

Useful extras:

```bash
git status          # See changed and untracked files
git diff            # Review unstaged changes
git pull origin main
```

---

## Future Improvements

The following are **ideas only** and are **not implemented** in the current project:

- Add a backend or email service so contact form submissions arrive by email instead of relying on WhatsApp.
- Add product detail pages (`/products/[slug]`) with composition, pack size, and documentation.
- Add category filtering and search to the product catalogue.
- Move repeated gallery image data into a shared data file (it is currently duplicated between the home gallery and products page).
- Add structured data (JSON-LD) for the organization and products to improve search visibility.
- Generate `sitemap.xml` and `robots.txt`.
- Add automated tests and a CI workflow for linting and builds.
- Add a privacy policy and terms page if enquiry data handling expands.
- Optimize the large image assets (several JPEGs/PNGs) and add modern formats such as WebP/AVIF.

---

© BioCurex Pharma. All rights reserved.

Made with ♥ by [StaffArc](https://www.staffarc.in)
