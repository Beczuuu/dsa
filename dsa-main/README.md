# DSA Management - Fleet Management Website


## 🏗️ Architecture

- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Type**: Static Single Page Application (SPA)
- **No Backend Required**: Fully static frontend

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/              # Company logo and assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer components
│   │   ├── pages/           # Main pages (Homepage, Privacy, Cookies)
│   │   └── sections/        # Homepage sections (Hero, About, Services, etc.)
│   ├── data/
│   │   └── content.js       # All website content and data
│   ├── App.jsx              # Main router
│   ├── index.js             # Entry point
│   └── *.css                # Styling files
└── Configuration files      # package.json, tailwind.config.js, etc.
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

```bash
cd frontend
yarn install
```

### Development

```bash
yarn start
```

### Build for Production

```bash
yarn build
```

Creates optimized production build in `build/` folder.


## 📄 Pages

- **Homepage** (`/`) - Company overview, services, statistics
- **Privacy Policy** (`/privacy-policy`) - GDPR compliant privacy policy
- **Cookies Policy** (`/cookies`) - Cookie usage information

## 🎨 Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth scroll navigation
- ✅ Professional content structure
- ✅ SEO-friendly structure
- ✅ Fast loading static site
- ✅ No backend dependencies

## 🔧 Customization

### Content Changes
Edit `src/data/content.js` to update:
- Company information
- Service descriptions
- Contact details
- Statistics

### Styling
- Tailwind CSS classes for styling
- Custom CSS in `src/App.css` and `src/index.css`

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to `src/components/pages/Homepage.jsx`
3. Update content in `src/data/content.js`

## 📱 Browser Support

- Chrome/Chromium (latest)
- Opera(latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

- Static site generation
- Optimized build with code splitting
- Compressed assets
- CDN-ready


## 📝 License

Page made by Krystian Beczek |beczek.praca@gmail.com| All rights reserved.

---
*This is a static frontend application requiring no backend infrastructure.*
