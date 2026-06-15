# Mojito Showcase

A modern, interactive web application showcasing cocktails and mixology. Built with React, Vite, and enhanced with smooth animations and responsive design.

## 🎯 About

Mojito Showcase is a sleek web application dedicated to displaying cocktail recipes, information, and a beautiful user experience. The project features smooth scrolling, animated transitions, and a fully responsive design that works seamlessly across all devices.

## 🚀 Features

- **Interactive Animations**: Powered by GSAP (GreenSock Animation Platform) for smooth, performant animations
- **Smooth Scrolling**: Integrated with Lenis for buttery-smooth scroll experiences
- **Responsive Design**: Mobile-first approach using Tailwind CSS for all screen sizes
- **Modern React**: Built with React 19 and Vite for fast development and optimized production builds
- **Component-Based Architecture**: Well-organized component structure for maintainability

## 📦 Tech Stack

### Core
- **React** (v19.2.0) - JavaScript library for building user interfaces
- **Vite** (v7.2.4) - Next-generation frontend build tool
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework

### Animation & Interaction
- **GSAP** (v3.14.2) - Professional animation library
- **GSAP React Plugin** (v2.1.2) - React integration for GSAP
- **Lenis** (v1.0.42) - Smooth scrolling library

### Utilities
- **React Responsive** (v10.0.1) - Media query component library for responsive design

### Development Tools
- **ESLint** - Code quality and consistency
- **Vite React Plugin** - React support for Vite
- **TypeScript Types** - Type definitions for React and React DOM

## 📁 Project Structure

```
mojito-showcase/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Art.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── fonts/
│   ├── images/
│   ├── videos/
│   └── readme/
├── constants/
│   └── index.js
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
└── README.md
```

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build.

### Preview
```bash
npm run preview
```
Locally preview the production build.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and consistency.

## 📋 Components

- **Navbar** - Navigation header
- **Hero** - Hero/landing section
- **About** - About section
- **Cocktails** - Cocktails display
- **Menu** - Menu section
- **Art** - Art/gallery section
- **Contact** - Contact section

## 🎨 Styling

This project uses **Tailwind CSS** for styling, providing a utility-first approach to CSS. Combined with GSAP animations, it creates smooth, polished user interactions.

## 📱 Responsive Design

The application is built with a mobile-first approach and uses `react-responsive` for advanced media query handling, ensuring optimal viewing on:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 📖 Development Workflow

1. Make changes to components in `src/components/`
2. Vite will automatically reload the page with your changes
3. Use `npm run lint` to maintain code quality
4. Create builds with `npm run build` when ready for production

## 🔍 Code Quality

This project uses ESLint to maintain consistent code quality. The configuration includes:
- React and React Hooks linting rules
- React Refresh support for fast refresh

## 📄 License

This project is private and for internal use only.

## 👨‍💻 Contributing

When contributing to this project:
1. Follow the existing code structure and conventions
2. Run `npm run lint` before committing
3. Ensure all animations are performant using GSAP best practices
4. Test responsive design across multiple devices

---

**Happy coding! 🍹**
