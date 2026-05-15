# 🚀 NexoraStudio - AI-Powered Digital Agency Platform

A modern, **AI-enhanced** digital agency website built with cutting-edge technologies. NexoraStudio showcases creative services while providing intelligent tools powered by **Groq AI** to help clients grow their businesses digitally.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.2-38B2AC?style=flat-square&logo=tailwind-css)
![Groq AI](https://img.shields.io/badge/Groq%20AI-llama--3.1-FF6B00?style=flat-square)

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🤖 AI Integration](#-ai-integration)
- [⚙️ Installation](#-installation)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔑 Environment Variables](#-environment-variables)
- [📦 Available Scripts](#-available-scripts)
- [🌐 Pages & Routes](#-pages--routes)
- [📱 Responsive Design](#-responsive-design)
- [🚢 Deployment](#-deployment)
- [📚 Learn More](#-learn-more)

---

## 🎯 Project Overview

**NexoraStudio** is a comprehensive digital agency platform designed to:
- Showcase professional services (Social Media, Video Creation, Web Development, Design, Branding)
- Provide **AI-powered tools** to clients for content generation and queries
- Generate qualified leads through strategic CTAs and contact forms
- Maintain a professional online presence with SEO-optimized pages
- Deliver static, ultra-fast website performance

**Target Audience:** Small to medium businesses looking for digital marketing and web development services.

---

## ✨ Key Features

### 🎨 Core Features
- **Hero Section** - Engaging landing page with clear value proposition
- **Services Showcase** - Detailed service offerings with benefits
- **Portfolio Gallery** - Showcase of previous client work
- **Pricing Plans** - Transparent pricing for different service tiers
- **About Us** - Company mission, vision, and team information
- **Contact Form** - Lead generation with email notifications
- **Responsive Design** - Mobile-first, works on all devices
- **Legal Pages** - Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, Refund Policy

### 🤖 AI-Powered Tools

#### 1. **AI Caption Generator**
- Generates **3 unique, optimized social media captions** for any business
- Customizable by:
  - Business name & product/service description
  - Social media platform (Instagram, Facebook, LinkedIn, Twitter/X, YouTube)
  - Tone (Professional, Funny & Casual, Inspirational, Bold & Direct, Storytelling)
- Each caption includes:
  - Engaging copy with relevant emojis
  - Optimized hashtags for reach
  - Best posting time recommendations
- Perfect for busy entrepreneurs and social media managers

#### 2. **AI Chatbot (Nexo)**
- **Intelligent 24/7 customer support assistant**
- Context-aware responses about services, pricing, and capabilities
- Guided quick replies for common questions
- Conversation history for better context understanding
- Smooth chat interface with message scrolling
- Handles inquiries like: "What services do you offer?", "How much does it cost?", "I need a website"

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 16.2.1](https://nextjs.org) - React framework for production
- **UI Library:** [React 19.2.4](https://react.dev) - UI component building
- **Styling:** [Tailwind CSS 4.2.2](https://tailwindcss.com) - Utility-first CSS framework
- **Icons:** [React Icons 5.6.0](https://react-icons.github.io/react-icons) - Icon library
- **Notifications:** [React Hot Toast 2.6.0](https://react-hot-toast.com) - Toast notifications

### Backend
- **API Routes:** Next.js API Routes for backend logic
- **Email Service:** [Nodemailer 8.0.5](https://nodemailer.com) with Zoho SMTP
- **AI API:** [Groq AI](https://groq.com) - Ultra-fast inference API

### Database & Storage
- Static site generation (no database required)
- Environment variables for sensitive data

### DevTools
- **Linter:** ESLint 9 with Next.js config
- **Build Tool:** Next.js built-in build system
- **Package Manager:** npm

---

## 🤖 AI Integration

### **Groq AI - Why & How**

**Why Groq?**
- ⚡ **Ultra-Fast Inference** - 10-100x faster than competitors
- 💰 **Free Tier** - No initial cost, pay-as-you-go pricing
- 🔓 **Open Source Models** - llama-3.1-8b-instant for maximum speed
- 🛡️ **Production Ready** - Used by enterprises globally
- 📊 **High Throughput** - Handles high concurrent requests

**Models Used:**
```
Model: llama-3.1-8b-instant
Context: 8,000 tokens
Speed: ~500-1000 tokens/second
Cost: Free tier available
```

### **API Endpoints**

#### Caption Generator Endpoint
```javascript
POST /api/caption
Content-Type: application/json

{
  "business": "Coffee Shop",
  "product": "Specialty Lattes",
  "platform": "Instagram",
  "tone": "Funny & Casual"
}
```

**Response Example:**
```json
{
  "captions": [
    {
      "caption": "☕ Wake up and smell the magic! Our specialty lattes are basically liquid motivation. Who else is a coffee addict? 😎",
      "hashtags": "#CoffeeShop #LatteArt #CoffeeLover #SpecialtyCoffee #CoffeeAddict",
      "bestTime": "7-9 AM"
    },
    // ... 2 more captions
  ]
}
```

#### Chat/Chatbot Endpoint
```javascript
POST /api/chat
Content-Type: application/json

{
  "message": "What services do you offer?",
  "history": [] // Previous conversation messages
}
```

**System Instructions for Nexo Chatbot:**
- Acts as brand assistant for NexoraStudio
- Friendly and concise responses (max 80 words)
- Directs pricing inquiries to pricing page
- Directs caption requests to Caption Generator tool
- Only answers digital marketing/agency-related questions

---

## ⚙️ Installation

### Prerequisites
- Node.js 18+ and npm
- Groq API Key (free at [groq.com](https://groq.com))
- Zoho email credentials (for contact form notifications)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nexora-agency.git
cd nexora-agency
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create a `.env.local` file in the root directory:
```env
# Groq AI Configuration
GROQ_API_KEY=your_groq_api_key_here

# Email Configuration (Zoho)
EMAIL_USER=your_zoho_email@zoho.in
EMAIL_PASS=your_zoho_app_password_here
```

4. **Get Groq API Key:**
   - Visit [console.groq.com](https://console.groq.com)
   - Create a free account
   - Generate API key from dashboard
   - No credit card required for free tier

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the result.

The app will auto-reload as you edit files.

### Build for Production
```bash
npm run build
npm start
```

### Export as Static Site
```bash
npm run export
```

Creates a fully static site in the `out/` directory.

---

## 📁 Project Structure

```
nexora-agency/
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout
│   │   ├── page.jsx                # Home page
│   │   ├── global.css              # Global styles
│   │   ├── api/
│   │   │   ├── caption/route.js    # AI Caption Generator API
│   │   │   ├── chat/route.js       # AI Chatbot API
│   │   │   └── contact/route.js    # Contact Form Email API
│   │   ├── about/page.jsx
│   │   ├── services/page.jsx
│   │   ├── portfolio/page.jsx
│   │   ├── pricing/page.jsx
│   │   ├── contact/page.jsx
│   │   └── [legal pages]/
│   ├── Components/
│   │   ├── Home/
│   │   │   ├── CaptionGenComp.jsx  # Caption Generator UI
│   │   │   ├── ChatbotComp.jsx     # Chatbot UI
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesComp.jsx
│   │   │   ├── PortfolioComp.jsx
│   │   │   └── ...
│   │   ├── Layout/
│   │   │   ├── HeaderComp.jsx
│   │   │   ├── FooterComp.jsx
│   │   │   └── FloatingComp.jsx
│   │   └── ...
│   └── Data/
│       ├── Constant.js             # Configuration & constants
│       └── pricing.json            # Pricing data
├── public/
│   ├── js/
│   └── portfolio/
├── package.json
├── next.config.js
├── postcss.config.mjs
├── tailwind.config.js
├── eslint.config.mjs
├── .env.local                      # Environment variables
└── README.md
```

---

## 🔑 Environment Variables

**Required for full functionality:**

```env
# Groq API Key (Required for AI features)
GROQ_API_KEY=gsk_your_key_here

# Email Configuration (Required for contact form)
EMAIL_USER=your_email@zoho.in
EMAIL_PASS=your_app_specific_password

# Optional: For analytics, monitoring, etc.
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**How to get Groq API Key:**
1. Go to [groq.com](https://groq.com)
2. Click "Sign Up" (free account)
3. Navigate to API keys section
4. Create new API key
5. Copy and paste into `.env.local`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run export` | Export as static site to `out/` |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌐 Pages & Routes

### Public Pages
- `/` - Home page
- `/about` - About us
- `/services` - Services offered
- `/portfolio` - Portfolio & case studies
- `/pricing` - Pricing plans
- `/contact` - Contact form
- `/cookie-policy` - Cookie policy
- `/privacy-policy` - Privacy policy
- `/terms-and-conditions` - Terms of service
- `/disclaimer` - Disclaimer
- `/refund-policy` - Refund policy

### API Routes
- `POST /api/caption` - Generate social media captions
- `POST /api/chat` - Chat with AI assistant
- `POST /api/contact` - Submit contact form

---

## 📱 Responsive Design

- **Mobile-First Approach** - Optimized for all screen sizes
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Tailwind CSS** - Responsive utilities for rapid design
- **Touch-Friendly** - Large buttons and spacing for mobile users
- **Performance Optimized** - Static export for fast loading

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

Easiest way to deploy:

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `GROQ_API_KEY`
   - `EMAIL_USER`
   - `EMAIL_PASS`
4. Deploy with one click

### Deploy on Other Platforms

**Netlify:**
```bash
npm run export
# Deploy the 'out' folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Performance Metrics

- **Page Load Time:** <2 seconds
- **Lighthouse Score:** 90+
- **API Response Time:** <500ms (with Groq AI)
- **Mobile Friendly:** Yes
- **SEO Optimized:** Yes

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [Vercel Examples](https://github.com/vercel/next.js/tree/canary/examples)

### Groq AI
- [Groq Console](https://console.groq.com)
- [Groq API Docs](https://console.groq.com/docs)
- [llama Models](https://huggingface.co/collections/meta-llama)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com)

### React
- [React Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📞 Contact & Support

**NexoraStudio Contact Information:**
- 📧 Email: info@nexora.in
- 📱 Phone: +91 9000000000 / +91 9123456789
- 💬 WhatsApp: +91 9123456789
- 📍 Location: India
- 🔗 Instagram: [@nexora.agency](https://instagram.com/nexora.agency)
- 🔗 LinkedIn: [NexoraStudio](https://linkedin.com/company/nexora-agency)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Groq](https://groq.com) for ultra-fast AI inference
- [Tailwind CSS](https://tailwindcss.com) for styling utilities
- [React](https://react.dev) for component architecture
- All contributors and supporters

---

**Made with ❤️ by Riya**

*Last Updated: May 2026*
