# 🚀 Quick Start Guide - IBM3ENG Website

## Get Your Website Running in 5 Minutes!

### Step 1: Extract the Files
Extract the `ibm3eng-website` folder to your desired location on your computer.

### Step 2: Open Terminal/Command Prompt
Navigate to the project folder:
```bash
cd path/to/ibm3eng-website
```

### Step 3: Install Dependencies
Run this command (takes 2-3 minutes):
```bash
npm install
```

### Step 4: Start the Development Server
```bash
npm run dev
```

### Step 5: Open Your Browser
Go to: **http://localhost:3000**

🎉 **Your website is now running!**

---

## 🎨 Customization Checklist

### Immediate Changes (Do These First!)

1. **Update Contact Information**
   - Open `src/components/Footer.tsx`
   - Replace placeholder email, phone, and address
   - Update working hours

2. **Update Contact Page**
   - Open `src/app/contact/page.tsx`
   - Update contact information in the `contactInfo` array
   - Replace `+91 XXX XXX XXXX` with real phone number

3. **Add Your Logo**
   - Place your logo in `public/images/logo.png`
   - Update logo references in Header and Footer components

### Content Updates

4. **Home Page**
   - Open `src/app/page.tsx`
   - Update statistics (500+ Projects, 100+ Clients, etc.)
   - Modify service descriptions if needed

5. **Services Page**
   - Open `src/app/services/page.tsx`
   - Update service details and benefits
   - Add more services if needed

6. **Privacy Policy & Terms**
   - Review `src/app/privacy-policy/page.tsx`
   - Review `src/app/terms-and-conditions/page.tsx`
   - Update with your specific policies

### Advanced Customization

7. **Colors** (Optional)
   - Open `tailwind.config.js`
   - Modify the color scheme in the `colors` section

8. **Fonts** (Optional)
   - Open `src/app/layout.tsx`
   - Change Google Fonts URL to your preferred fonts
   - Update CSS variables in `src/app/globals.css`

---

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: EmailJS (Free & Easy)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update `src/app/contact/page.tsx` with EmailJS code
4. Add your service ID, template ID, and public key

### Option 2: Backend API
1. Create a backend API (Node.js, Python, PHP, etc.)
2. Update the `handleSubmit` function to POST to your API
3. Handle email sending on the backend

### Option 3: Third-Party Service
Use services like:
- Formspree
- SendGrid
- Mailgun
- AWS SES

---

## 🗺️ Add Google Maps

1. Get Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Install package: `npm install @react-google-maps/api`
3. Replace map placeholder in `src/app/contact/page.tsx`
4. Add your coordinates

Example code:
```tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const position = { lat: YOUR_LAT, lng: YOUR_LNG };
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap center={position} zoom={15}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free!)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site is live! 🚀

### Other Deployment Options
- **Netlify**: Similar to Vercel, drag & drop folder
- **DigitalOcean**: App Platform
- **AWS**: Amplify
- **Traditional Hosting**: Build with `npm run build`, upload `/out` folder

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page content |
| `src/app/services/page.tsx` | Services page |
| `src/app/contact/page.tsx` | Contact form & info |
| `src/components/Header.tsx` | Navigation menu |
| `src/components/Footer.tsx` | Footer with links |
| `tailwind.config.js` | Colors & styling |
| `src/app/globals.css` | Custom styles |

---

## 🆘 Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### Port 3000 already in use
- Use different port: `npm run dev -- -p 3001`
- Or kill process using port 3000

### Styles not loading
- Delete `.next` folder
- Run `npm run dev` again

### Images not showing
- Make sure images are in `public/images/`
- Reference as `/images/yourimage.png` in code

---

## 📚 Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Docs**: [react.dev](https://react.dev)

---

## 🎯 Production Checklist

Before going live, make sure to:

- [ ] Update all placeholder content
- [ ] Add real contact information
- [ ] Upload company images and logo
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend
- [ ] Add Google Maps
- [ ] Review privacy policy
- [ ] Review terms & conditions
- [ ] Test all links
- [ ] Check website on different browsers
- [ ] Add favicon (place `favicon.ico` in `public/`)
- [ ] Set up custom domain

---

## 💡 Tips

1. **Start Simple**: Get the basic site running first, then customize
2. **Test Often**: Check your changes frequently by viewing in browser
3. **Use Git**: Commit your changes regularly to track progress
4. **Mobile First**: Always test on mobile devices
5. **Performance**: Optimize images before uploading (use tools like TinyPNG)

---

Need help? Check the README.md or FOLDER_STRUCTURE.md for more details!

**Happy Building! 🎉**
