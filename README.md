# Fleet Forward Conference 2025 - Chinese EV Insights

A mobile-first, static website for the Fleet Forward Conference 2025 panel discussion on Chinese EV manufacturers and their impact on the global fleet industry.

## Features

- ✅ Mobile-first responsive design
- ✅ No backend required - pure static site
- ✅ Expandable sections for detailed insights
- ✅ Key statistics and takeaways
- ✅ Panel information and speaker bios
- ✅ Easy to deploy to any static host

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (zero configuration needed)

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Netlify

1. Push to GitHub
2. Import project in Netlify
3. Build command: `pnpm build`
4. Publish directory: `dist`

Or drag and drop the `dist` folder to Netlify.

### GitHub Pages

```bash
# Build the project
pnpm build

# Deploy to GitHub Pages
# (requires gh-pages package)
pnpm add -D gh-pages
npx gh-pages -d dist
```

### Other Static Hosts

Build the project and upload the `dist` folder to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- Any web server

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool

## Content

### Panel Topics
1. **Global Rise** - What's fueling Chinese automakers' expansion
2. **Innovation Strategies** - How Chinese EV strategies differ from Western models
3. **U.S. Market** - What North American fleets should watch for

### Key Statistics
- 70% global EV production (China)
- 18 months development time (vs. 5-7 years Western)
- 100% U.S. tariff rate
- 85% Thailand market share (Chinese EVs)

### Panelists
- **Dr. Leo Cai** - Former CEO, eHi Car Services, China
- **Ryan Pritchard** - SHAED.ai and Pritchard Companies
- **Moderator:** Charlie Vogelheim, Auction Academy

## License

© 2025 Fleet Forward Conference. All rights reserved.

