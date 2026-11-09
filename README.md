# Dazzle Nail Salon — Static Marketing Website

A production-ready, high-performance static website for **Dazzle Nail Salon** in Seeduwa, Colombo, built with **React 18, Vite, React Router v6, Tailwind CSS, and Framer Motion**.

Designed with a soft, feminine palette (**light pink, white, beige**) and editorial typography (**Playfair Display + Plus Jakarta Sans**), featuring fluid scroll reveals, animated statistics, an interactive photo gallery with accessible lightbox, and a seamless client-side booking system integrating directly with **WhatsApp** and **Email**.

---

## 💅 Tech Stack

- **Framework**: React 18 + JavaScript (ES2022) — No TypeScript
- **Bundler & Build Tool**: Vite 5
- **Routing**: React Router v6 (`HashRouter` + SPA redirects for 100% zero-config hosting on Vercel, Netlify, and GitHub Pages)
- **Styling**: Tailwind CSS + Custom CSS Variables (`src/theme.css`)
- **Animation & Transitions**: Framer Motion (slideshow crossfade, scroll reveals, modal transitions, count-up stats)
- **Icons**: Lucide React
- **SEO & Meta**: `react-helmet-async` with Open Graph tags and Schema.org `LocalBusiness` / `NailSalon` JSON-LD
- **Forms**: 100% Static / Serverless (deep links to WhatsApp `https://wa.me/94710540530` and `mailto:`)

---

## 📁 Project Structure

```
nail_salon/
├── public/
│   ├── favicon.svg            # Custom SVG logo & brand icon
│   ├── robots.txt             # SEO crawler directives
│   ├── sitemap.xml            # Search engine sitemap
│   └── _redirects             # Netlify / Cloudflare SPA rewrite
├── src/
│   ├── assets/                # Local graphic assets & logos
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky frosted-glass navbar with mobile drawer
│   │   ├── Footer.jsx         # Beige-100 footer with hours, social & map links
│   │   ├── Hero.jsx           # Full-viewport slideshow with Ken Burns zoom & badge
│   │   ├── SectionHeading.jsx # Editorial title component with italic emphasis
│   │   ├── ServiceCard.jsx    # Hover-lift service cards with price & inclusions
│   │   ├── GalleryGrid.jsx    # Animated masonry portfolio with filter tabs
│   │   ├── StatCounter.jsx    # In-view count-up numbers (5.0, 207+, 4, 100%)
│   │   ├── ReviewCard.jsx     # Sample client testimonials with review chips
│   │   ├── CTA.jsx            # "Ready for your fresh set?" banner with floating tags
│   │   ├── Lightbox.jsx       # Modal preview with keyboard (← → Esc) & touch support
│   │   └── WhatsAppButton.jsx # Floating round WhatsApp chat button with pulse ring
│   ├── data/
│   │   ├── site.js            # Core business info, address, phone, hours, ratings
│   │   ├── services.js        # Services catalog, step inclusions, pricing menu, FAQs
│   │   ├── gallery.js         # Curated nail art portfolio & categories
│   │   └── reviews.js         # Customer praise themes & sample review quotes
│   ├── hooks/
│   │   ├── useCountUp.js      # Eased numerical counter animation hook
│   │   └── useScrollTop.js    # Automatic scroll-to-top on route changes
│   ├── pages/
│   │   ├── Home.jsx           # 10 editorial sections mirroring reference rhythm
│   │   ├── About.jsx          # Studio philosophy, 4 core values & team cards
│   │   ├── Services.jsx       # Anchor sections, desktop sticky nav & FAQ accordion
│   │   ├── Gallery.jsx        # Full gallery with category filters & lightbox
│   │   ├── Book.jsx           # Client-side booking request (WhatsApp + Email)
│   │   ├── Contact.jsx        # Contact cards, quick message form & Google Map
│   │   ├── Privacy.jsx        # Transparent privacy policy
│   │   ├── Terms.jsx          # Salon service guidelines & policies
│   │   └── NotFound.jsx       # "This page chipped" friendly 404 page
│   ├── App.jsx                # Code-split router, Helmet provider, route transitions
│   ├── main.jsx               # Application root
│   └── theme.css              # CSS variables, typography & custom utility classes
├── .env.example               # Optional environment variables
├── index.html                 # HTML template with Google Fonts & meta tags
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind palette & typography extensions
├── vercel.json                # Vercel SPA rewrite configuration
├── vite.config.js             # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v20/v24)
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Edit Content & Customise

All business data and site copy are centralized in `src/data/` so you can update them without touching React components:

### 1. Edit Salon Information (`src/data/site.js`)
- **Phone Number**: Change `phone.display` and `phone.tel` (e.g. `+94710540530`).
- **WhatsApp**: Change `whatsapp.number` and `whatsapp.url`.
- **Opening Hours**: Change `hours.openTime` (default: `9:00 AM`) and `hours.closeTime` (default: `7:00 PM`).
- **Salon Address**: Update `address.full`, `address.plusCode` (`4VHG+WM Seeduwa`), and Google Maps embed URL.
- **Key Statistics**: Update numbers in `stats` array (e.g., rating, total reviews).

### 2. Edit Services & Prices (`src/data/services.js`)
- Each service has `title`, `startingPrice`, `duration`, `description`, `image`, and `included` list.
- Look for comments marked `// UPDATE PRICES` to enter the salon's current rate sheet.
- Modify the preview price list under `menuHighlights`.
- Add or edit FAQ entries under `serviceFaqs`.

### 3. Edit Gallery Photos (`src/data/gallery.js`)
- Look for items marked `// REPLACE WITH REAL SALON PHOTOS`.
- Replace image URLs with real salon photography or assets from `src/assets/`.
- Add custom tags and categories (`french`, `gel`, `acrylic`, `art`, `seasonal`).

### 4. Edit Reviews (`src/data/reviews.js`)
- Replace the sample review placeholders with real quotes from verified Google reviewers when an export is available.

---

## 🌐 Deployment to Vercel, Netlify & GitHub Pages

### Deploy to Vercel
1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and select the repository.
3. Framework Preset will automatically detect **Vite**.
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. The included `vercel.json` ensures all route refreshes resolve properly.

### Deploy to Netlify
1. Connect repository in [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `public/_redirects` file handles client-side route redirects automatically.

### Deploy to GitHub Pages
Because the application uses `HashRouter` by default, URLs like `https://username.github.io/nail_salon/#/services` work out of the box with zero 404 server issues.

---

## 🎨 Color Tokens Reference

```css
:root {
  --pink-50:  #FFF7F8;   /* Page background tint */
  --pink-100: #FDECEF;   /* Soft section backgrounds */
  --pink-200: #F9D5DC;   /* Card borders, chips */
  --pink-300: #F3B8C4;   /* Primary accent */
  --pink-400: #E996A8;   /* Buttons & hover state */
  --beige-50: #FBF7F2;   /* Editorial warm background */
  --beige-100:#F4EBDF;   /* Footer & alternating blocks */
  --beige-200:#E8D9C6;   /* Dividers */
  --beige-400:#C9AE8E;   /* Muted gold-beige accent */
  --white:    #FFFFFF;   /* Cards & pure contrast */
  --ink:      #3B2F2F;   /* Main text (warm dark brown) */
  --ink-soft: #7A6A6A;   /* Secondary descriptive text */
}
```

---

## 📋 Compliance & Standards
- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, one `h1` per page).
- High-contrast WCAG AA accessible color pairings.
- Respects `prefers-reduced-motion` media queries.
- Schema.org structured data for Google local search ranking.
- Keyboard navigation (Tab, Arrow keys, Esc) on Lightbox and menus.

#   n a i l s a l o n  
 