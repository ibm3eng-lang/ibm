# IBM3ENG Website

A professional, modern website for IBM3ENG - Engineering Solutions Company specializing in Machinery Repairs, Manpower Services, and Accounting & Bookkeeping.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type-Safe**: Written in TypeScript for better code quality

## 📁 Project Structure

```
ibm3eng-website/
├── public/
│   └── images/          # Place your images here
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact Us page
│   │   ├── privacy-policy/
│   │   │   └── page.tsx           # Privacy Policy page
│   │   ├── services/
│   │   │   └── page.tsx           # Services page
│   │   ├── terms-and-conditions/
│   │   │   └── page.tsx           # Terms & Conditions page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   ├── components/
│   │   ├── Footer.tsx             # Footer component
│   │   └── Header.tsx             # Header/Navigation component
│   └── data/              # Place data files here (if needed)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   # or
   yarn build
   yarn start
   ```

## 📄 Pages

### Home Page (/)
- Hero section with company tagline
- Statistics section
- Services overview cards
- Why Choose Us section
- Call-to-action section

### Services Page (/services)
- Detailed service descriptions
- Service benefits
- Process workflow
- Call-to-action

### Contact Page (/contact)
- Contact information cards
- Contact form
- Map placeholder (integrate Google Maps)

### Privacy Policy (/privacy-policy)
- Complete privacy policy
- Data collection and usage information
- User rights

### Terms & Conditions (/terms-and-conditions)
- Comprehensive terms and conditions
- Service terms
- Legal information

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  accent: { ... },
  dark: { ... }
}
```

### Fonts
The website uses:
- **Display Font**: Bebas Neue (for headings)
- **Body Font**: Work Sans (for content)

To change fonts, update the Google Fonts link in `src/app/layout.tsx` and the CSS variables in `src/app/globals.css`.

### Content
- Update company information in the components
- Replace placeholder contact details
- Add your actual contact information
- Update service descriptions as needed

### Images
- Add your logo to `public/images/`
- Update image references in components
- Add service images as needed

## 🔧 Configuration

### Contact Form
The contact form currently logs to console. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `src/app/contact/page.tsx`
3. Or integrate with services like:
   - SendGrid
   - Mailgun
   - EmailJS
   - Formspree

### Google Maps
To add Google Maps to the contact page:

1. Get a Google Maps API key
2. Install the Google Maps package:
   ```bash
   npm install @react-google-maps/api
   ```
3. Replace the map placeholder in `src/app/contact/page.tsx`

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

```env
# Example variables
NEXT_PUBLIC_SITE_URL=https://ibm3eng.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 🤝 Support

For support and questions:
- Email: info@ibm3eng.com
- Website: ibm3eng.com

## 📄 License

Copyright © 2026 IBM3ENG. All rights reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
