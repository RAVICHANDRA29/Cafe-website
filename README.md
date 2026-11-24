# ☕ Cafe Website

A minimal, aesthetic single-page website for any café — powered entirely by **Google Maps** data via the [Places API (New)](https://developers.google.com/maps/documentation/places/web-service).

No business details are hardcoded. Just drop in your Google Place ID and API key.

## Features

- **Dynamic content** — name, photos, hours, reviews, address, phone, map all from Google Places API
- **24-hour server-side cache** — API data is fetched once and cached, keeping costs low
- **Dark mode** — toggle between warm cream and deep coffee-brown themes
- **Responsive** — mobile-first layout with sticky nav
- **Accessible** — semantic HTML, WCAG AA contrast, keyboard focus states, reduced-motion support
- **Lightbox gallery** — click to enlarge photos with keyboard navigation
- **Live status** — "Open now / Closed" indicator with today's hours highlighted

## Setup

### 1. Get your Place ID

Find your café on [Google Maps](https://maps.google.com), then use the
[Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
to get the ID (starts with `ChIJ...`).

### 2. Get a Google Maps API key

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a project and enable the **Places API (New)**
3. Create an API key and restrict it to the Places API

### 3. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:

```
PLACE_ID=ChIJ...your_place_id
GOOGLE_MAPS_API_KEY=AIza...your_api_key
```

### 4. Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy

```bash
npm run build
npm start
```

Works on Vercel, Railway, Render, or any Node.js host. Set `PLACE_ID` and
`GOOGLE_MAPS_API_KEY` as environment variables in your hosting dashboard.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Places API (New)](https://developers.google.com/maps/documentation/places/web-service)

## Project Structure

```
cafe-website/
├── src/
│   ├── app/
│   │   ├── api/place/route.ts    # Server-side API proxy + 24h cache
│   │   ├── components/
│   │   │   ├── ErrorMessage.tsx   # Graceful error fallback
│   │   │   ├── FadeUp.tsx         # Scroll-triggered fade animation
│   │   │   ├── Footer.tsx         # Footer with Google attribution
│   │   │   ├── Gallery.tsx        # Photo grid with lightbox
│   │   │   ├── Hero.tsx           # Full-bleed hero section
│   │   │   ├── Hours.tsx          # Opening hours table
│   │   │   ├── Navbar.tsx         # Sticky responsive nav
│   │   │   ├── Reviews.tsx        # Top 3 review cards
│   │   │   ├── SkeletonLoader.tsx # Loading skeleton
│   │   │   ├── StarRating.tsx     # Star rating component
│   │   │   ├── ThemeProvider.tsx  # Dark mode context
│   │   │   └── Visit.tsx          # Map + contact info
│   │   ├── globals.css            # Tailwind + fonts
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   └── lib/
│       └── types.ts               # TypeScript interfaces
├── .env.example
├── next.config.js
├── tailwind.config.js
└── package.json
```

## License

MIT
