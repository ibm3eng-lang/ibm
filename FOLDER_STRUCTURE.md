# IBM3ENG Website - Complete Folder Structure

## 📁 Root Directory Structure

```
ibm3eng-website/
│
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 next.config.js               # Next.js configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Project documentation
│
├── 📁 public/                      # Static assets
│   └── 📁 images/                  # Image files (logos, photos, etc.)
│       └── (Add your images here)
│
└── 📁 src/                         # Source code
    ├── 📁 app/                     # Next.js App Router pages
    │   ├── 📄 layout.tsx           # Root layout (Header + Footer wrapper)
    │   ├── 📄 page.tsx             # Home page (/)
    │   ├── 📄 globals.css          # Global styles & animations
    │   │
    │   ├── 📁 services/
    │   │   └── 📄 page.tsx         # Services page (/services)
    │   │
    │   ├── 📁 contact/
    │   │   └── 📄 page.tsx         # Contact page (/contact)
    │   │
    │   ├── 📁 privacy-policy/
    │   │   └── 📄 page.tsx         # Privacy Policy (/privacy-policy)
    │   │
    │   └── 📁 terms-and-conditions/
    │       └── 📄 page.tsx         # Terms & Conditions (/terms-and-conditions)
    │
    ├── 📁 components/              # Reusable components
    │   ├── 📄 Header.tsx           # Navigation header
    │   └── 📄 Footer.tsx           # Footer with links
    │
    └── 📁 data/                    # Data files (optional)
        └── (Add JSON/data files here if needed)
```

## 📄 File Descriptions

### Configuration Files

**package.json**
- Lists all project dependencies (Next.js, React, Tailwind CSS, TypeScript)
- Contains npm scripts for development and production builds

**next.config.js**
- Next.js framework configuration
- Enables React strict mode

**tsconfig.json**
- TypeScript compiler configuration
- Sets up path aliases (@/* for src/*)

**tailwind.config.js**
- Tailwind CSS customization
- Defines custom colors, fonts, and theme extensions
- Primary color scheme: Blue tones
- Accent colors: Orange tones

**postcss.config.js**
- PostCSS configuration for Tailwind CSS processing

**.gitignore**
- Specifies which files Git should ignore
- Excludes node_modules, build files, and environment variables

**README.md**
- Complete project documentation
- Installation instructions
- Customization guide
- Deployment information

### Source Files (src/)

#### App Directory (src/app/)

**layout.tsx**
- Root layout component
- Wraps all pages with Header and Footer
- Loads Google Fonts (Bebas Neue & Work Sans)
- Sets up metadata (title, description, keywords)

**page.tsx** (Home Page)
- Hero section with gradient background
- Company statistics display
- Three service cards overview
- "Why Choose Us" section with features
- Call-to-action section
- Smooth animations and transitions

**globals.css**
- Tailwind CSS imports
- Custom CSS variables for fonts
- Reusable component classes (buttons, cards)
- Animation definitions (fade-in, fade-in-up)
- Custom scrollbar styling

#### Page Routes

**services/page.tsx**
- Detailed service descriptions for:
  - Machinery Repairs & Maintenance
  - Manpower Services
  - Accounting & Bookkeeping
- Service benefits and features
- Process workflow visualization
- Call-to-action sections

**contact/page.tsx**
- Four contact information cards:
  - Email
  - Phone
  - Address
  - Working Hours
- Contact form with validation
- Form fields: Name, Email, Phone, Service Interest, Message
- Map placeholder (ready for Google Maps integration)
- Success message on form submission

**privacy-policy/page.tsx**
- Comprehensive privacy policy
- Information collection practices
- Data usage policies
- User rights and protection
- Contact information

**terms-and-conditions/page.tsx**
- Complete terms and conditions
- Service terms and payment policies
- Disclaimers and limitations
- Intellectual property rights
- Governing law information

#### Components (src/components/)

**Header.tsx**
- Fixed navigation bar with backdrop blur
- Logo with hover animation
- Desktop navigation menu
- Mobile hamburger menu
- "Get Quote" call-to-action button
- Smooth scroll and hover effects

**Footer.tsx**
- Company information and logo
- Quick links (Home, Services, Contact)
- Legal links (Privacy Policy, Terms & Conditions)
- Social media placeholders
- Copyright notice with dynamic year

#### Data Directory (src/data/)
- Reserved for future data files
- Can store JSON files for services, testimonials, etc.
- Currently empty (optional use)

### Public Directory (public/)

**images/**
- Store all website images here
- Recommended images to add:
  - Company logo (logo.png)
  - Service images
  - Team photos
  - Client logos
  - Background images

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#0284c7, #0369a1, #075985)
- **Accent**: Orange tones (#f97316, #ea580c)
- **Dark**: Navy/Slate tones (#0f172a, #1e293b, #334155)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bebas Neue (bold, uppercase style)
- **Body**: Work Sans (clean, professional)
- **Font Weights**: 300, 400, 500, 600, 700

### Components
- Rounded corners (rounded-lg, rounded-2xl, rounded-full)
- Shadows (shadow-lg, shadow-xl, shadow-2xl)
- Hover effects with transitions
- Gradient backgrounds
- Card-based layout

## 🚀 Routes/URLs

- `/` - Home page
- `/services` - Services page
- `/contact` - Contact page
- `/privacy-policy` - Privacy Policy
- `/terms-and-conditions` - Terms & Conditions

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: 1280px+

## 🔧 Next Steps

1. **Install Dependencies**: Run `npm install`
2. **Start Development**: Run `npm run dev`
3. **Add Images**: Place company images in `public/images/`
4. **Update Content**: Replace placeholder text with actual content
5. **Configure Contact Form**: Set up backend or email service
6. **Add Google Maps**: Integrate Maps API in contact page
7. **Deploy**: Push to GitHub and deploy on Vercel

## 📝 Customization Checklist

- [ ] Update company information in Footer
- [ ] Add real contact details (email, phone, address)
- [ ] Upload company logo and images
- [ ] Customize color scheme if needed
- [ ] Add Google Maps API key
- [ ] Set up contact form backend
- [ ] Update meta tags and SEO information
- [ ] Add analytics tracking (Google Analytics, etc.)
- [ ] Test on all devices
- [ ] Deploy to production

---

This structure provides a solid foundation for a professional company website with all essential pages and functionality!
