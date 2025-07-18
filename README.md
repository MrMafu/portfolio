# MrMafu's Portfolio Website
[![Next.js](https://img.shields.io/badge/Next.js-v15+-black?logo=next.js)](https://nextjs.org)
[![React.js](https://img.shields.io/badge/React-v19+-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4+-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

My personal portfolio website built with Next.js, featuring responsive design and dark/light themes.
<br>
🔴 Visit the live demo [here](https://mrmafu-portfolio.vercel.app).

## 🛠 Technologies
### Core Stack
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

### Packages
- [`@fortawesome`](https://fontawesome.com)
- [`typewriter-effect`](https://www.npmjs.com/package/typewriter-effect)
- [`formspree/react`](https://formspree.io)

## ✨ Features

- **Dynamic Theme Toggle**  
  Seamless ☀️ light / 🌙 dark mode switching with system preference detection.
- **Fully Responsive Design**  
  Mobile-first layout optimized for all screen sizes.
- **Interactive Elements**  
  Animated typewriter effects and smooth transitions.
- **Modern Development**  
  Built with Next.js App Router and powered by Turbopack for lightning-fast build times and efficient development.

## 🚀 Getting Started
### Prerequisites
- Node.js 22.x+
- npm 11.x+

### Installation
1. Clone the repository:
```bash
git clone https://github.com/MrMafu/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development
Start the development server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the result.

### Project Structure
You can start modifying this project within `src/` and `public/` (for image assets).
<br>
- `src/app/page.tsx`: The main page.
- `src/components` : Contains reusable components used for the main page.

### [Formspree](https://formspree.io) Configuration
This project's contact form utilizes [Formspree](https://formspree.io). To enable this feature for yourself, you'll need to:
1. Sign in a new account at [Formspree](https://formspree.io).

2. Create a new form and copy the form endpoint.

3. Update `/components/Contacts.tsx` in `line:11`:

```bash
const[state, handleSubmit, reset] = useForm("mrblznjd"); // Formspree form endpoint, change this to your own form endpoint.
```

```bash
# Replace the existing endpoint "mrblznjd" with your new one:
const[state, handleSubmit, reset] = useForm("your-new-form-endpoint-here");
```

A full in-depth guide can be found directly in their page [here](https://help.formspree.io).