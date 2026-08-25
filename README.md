# 3D Motion Digital Marketing Website

An innovative, creative 3D motion website built with Next.js, Three.js, and Framer Motion for ITS ME DEZINO digital marketing agency.

## 🚀 Features

- **3D Graphics**: Interactive 3D elements using Three.js and @react-three/fiber
- **Smooth Animations**: Engaging motion effects with Framer Motion
- **Responsive Design**: Beautiful experience across all devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Structured for search engine optimization

## 📋 Sections

1. **Hero Section** - Stunning landing with animated 3D sphere
2. **Services** - Showcase of digital services with hover effects
3. **Portfolio** - Project gallery with filtering capabilities
4. **About** - Company information with 3D cube animation
5. **Contact** - Professional contact form
6. **Footer** - Social links and company information

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **UI Components**: React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/itsmedezinostaff-pixel/3d-motion-digital-marketing.git

# Navigate to project directory
cd 3d-motion-digital-marketing

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with 3D
│   ├── Services.tsx        # Services showcase
│   ├── Portfolio.tsx       # Project portfolio
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#0F172A',
  secondary: '#1E293B',
  accent: '#06B6D4',
}
```

### Content
Modify component files to update:
- Text content and messaging
- Service descriptions
- Portfolio projects
- Contact information
- Social media links

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 💡 Tips

- Customize the 3D models and animations for your specific needs
- Add more sections and components as needed
- Integrate with CMS for dynamic content management
- Add analytics tracking for performance monitoring
- Optimize images and assets for faster loading

## 📞 Support

For questions or issues, please create an issue on GitHub or contact us through the website.

---

**Made with ✨ by ITS ME DEZINO**
