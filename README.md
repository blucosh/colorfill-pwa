# ColorFill – Color by Number PWA
### Adult Relaxation App · App Store Ready

---

## 🎨 Overview

ColorFill is a production-ready Progressive Web App (PWA) for adult color-by-number art. It runs natively on iOS Safari and Android Chrome and can be published to both the Apple App Store and Google Play Store using PWA wrappers.

**Features:**
- 6 detailed coloring images (Mandala, Botanical, Seascape, Architecture, Koi Pond, Enchanted Forest)
- 24-color palette with labeled swatches and recent color history
- Pinch-to-zoom (mobile) + scroll-to-zoom (desktop), pan support
- Toggle number labels on/off
- Auto-save progress to localStorage (persists across sessions)
- Save & Share finished artwork (Web Share API + SVG download fallback)
- Daily image rotation system (new image highlighted each day)
- Category filtering (Mandala, Botanical, Landscape, Nature, Architecture)
- Completion celebration screen with fireworks animation
- Progress tracking per image
- Offline support via Service Worker
- Dark luxury aesthetic with Playfair Display typography

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The build output will be in the `build/` folder, ready for deployment.

---

## 📱 Publishing to App Stores

### Option A: PWABuilder (Easiest – Recommended)
1. Deploy your build to a live HTTPS URL (Vercel, Netlify, etc.)
2. Go to **https://www.pwabuilder.com**
3. Enter your URL → it will analyze your PWA
4. Click **Package for Stores**
5. Download the iOS package (MSIX/IPA) and Android APK/AAB
6. Submit to App Store Connect and Google Play Console

### Option B: Capacitor (More Native Control)
```bash
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init "ColorFill" "com.yourname.colorfill"
npm run build
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios    # Opens Xcode
npx cap open android # Opens Android Studio
```

### Option C: Trusted Web Activity (Android Only – Free)
Use Bubblewrap CLI to wrap your PWA as a proper Android TWA:
```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://your-deployed-url.com/manifest.json
bubblewrap build
```

---

## 🌐 Deployment (Hosting)

### Vercel (Recommended – Free tier available)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag the `build/` folder to netlify.com/drop
```

### GitHub Pages
```bash
# Add to package.json: "homepage": "https://yourusername.github.io/colorfill"
npm install gh-pages
npm run build
npx gh-pages -d build
```

---

## 🤖 Adding AI-Generated Daily Images

To generate new coloring images daily using Claude AI, set up a backend endpoint:

### Backend API (Node.js / Express example)
```javascript
const Anthropic = require('@anthropic-ai/sdk');
const client = new Anthropic();

async function generateDailyImage(theme) {
  const response = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: `Generate a color-by-number SVG image data structure for the theme: "${theme}".
      
      Return a JSON object with:
      - id: unique string
      - title: string
      - category: one of [Mandala, Botanical, Landscape, Nature, Architecture, Abstract]
      - difficulty: Easy | Medium | Hard
      - estimatedMinutes: number
      - viewBox: "0 0 500 500"
      - regions: array of { id, colorId (1-24), label, d (SVG path string) }
      
      Create 30-60 regions with coherent paths that form the image. Use color IDs 1-24.
      Return ONLY valid JSON, no markdown.`
    }]
  });
  
  return JSON.parse(response.content[0].text);
}

// Schedule with node-cron
const cron = require('node-cron');
cron.schedule('0 6 * * *', async () => {
  const themes = ['cherry blossom', 'mountain lake', 'art deco pattern', 'ocean coral reef'];
  const theme = themes[new Date().getDay() % themes.length];
  const image = await generateDailyImage(theme);
  // Save to database (MongoDB, Supabase, etc.)
  await db.collection('daily_images').insertOne({ ...image, date: new Date() });
});
```

### Frontend: Fetch Today's Image
Replace `getDailyImage()` in `src/data/images.js`:
```javascript
export async function getDailyImage() {
  const res = await fetch('/api/daily-image');
  return res.json();
}
```

---

## 💰 Monetization Strategies

### 1. Freemium Model
- **Free**: 3 images per month, basic 12-color palette
- **Premium ($2.99/mo)**: Unlimited images, full 24-color palette, no ads

Implement with Stripe Checkout:
```bash
npm install @stripe/stripe-js
```

### 2. One-Time Premium Unlock ($4.99)
Single purchase for lifetime access. Simple to implement with RevenueCat (works for both iOS and Android).

### 3. Image Packs ($0.99 – $1.99 each)
Themed packs: "Zen Garden", "Art Nouveau", "Holiday Collection".
Store purchase state in localStorage + backend.

### 4. Subscription via RevenueCat
```bash
npm install @revenuecat/purchases-js
```
RevenueCat handles receipts validation for both App Store and Google Play automatically.

---

## 🎨 Adding More Images

Add new images to `src/data/images.js` following the existing pattern:

```javascript
const myNewImage = {
  id: "unique_id",
  title: "My Image Title",
  category: "Mandala",           // Mandala | Botanical | Landscape | Nature | Architecture
  difficulty: "Medium",          // Easy | Medium | Hard
  estimatedMinutes: 30,
  description: "Brief description",
  addedDate: "2024-06-01",
  viewBox: "0 0 500 500",
  regions: [
    { id: "region1", colorId: 5, label: "5", d: "M100,100 ..." },
    // ... more regions
  ]
};
```

Then add it to `ALL_IMAGES` and `DAILY_IMAGES_POOL` arrays.

---

## 🔧 Customization

### Changing Colors
Edit the `COLOR_PALETTE` array in `src/data/images.js`:
```javascript
{ id: 1, hex: "#YOUR_HEX", name: "Your Color Name" }
```

### Changing Theme
The app uses CSS variables defined in `src/App.js` globalStyles.
Key colors:
- Background: `#12122a` (deep navy)
- Accent: `#D4AC0D` (antique gold)
- Text: `#f0ece3` (warm white)
- Canvas bg: `#0e0e24` (near-black)

### App Name / Branding
1. Update `public/manifest.json`: `"name"`, `"short_name"`
2. Update `public/index.html`: `<title>` and meta tags
3. Update the `appName` in `Gallery.jsx`
4. Replace logo assets in `public/`

---

## 📊 Analytics (Optional)

Add Google Analytics or Mixpanel to track:
- Images started / completed
- Average session length
- Most popular categories
- Conversion funnel (free → paid)

```javascript
// In App.js
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');
```

---

## 🐛 Known Considerations

- **iOS Safari**: PWA install requires "Add to Home Screen" prompt in Safari
- **Large images**: Images with 100+ regions may have slower initial render on low-end devices
- **SVG paths**: Complex paths require careful coordinate validation
- **Offline**: Service worker caches the app shell; dynamic daily images require connection

---

## 📁 File Structure

```
colorfill-pwa/
├── public/
│   ├── index.html          # PWA entry, meta tags, fonts
│   ├── manifest.json       # PWA manifest (name, icons, theme)
│   └── service-worker.js   # Offline caching
├── src/
│   ├── App.js              # Root component, routing, global styles
│   ├── index.js            # React entry point
│   ├── components/
│   │   ├── Gallery.jsx     # Image gallery / home screen
│   │   ├── GameScreen.jsx  # Main coloring game wrapper
│   │   ├── ColorCanvas.jsx # SVG canvas with zoom/pan
│   │   ├── PalettePanel.jsx # Color picker UI
│   │   └── CompleteScreen.jsx # Completion + share screen
│   ├── data/
│   │   └── images.js       # All SVG image data + color palette
│   └── hooks/
│       └── index.js        # useLocalStorage, usePinchZoom, useImageProgress
└── package.json
```

---

## 📄 License

MIT – Free to use and sell commercially.

---

*Built with React 18 · No external UI dependencies · ~50KB gzipped*
