# DevFest Bandung 2024 🚀

The official website for DevFest Bandung 2024 - A Google Developer Groups event bringing together developers, designers, and tech enthusiasts.

🌐 **Live Site**: [https://devfest.gdgbandung.com/](https://devfest.gdgbandung.com/)

## ✨ Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with interactive mobile menu
- ⚡ Built with Astro and SolidJS for optimal performance
- 🌟 Smooth animations and transitions
- 🎯 Optimized for performance with selective client-side hydration

## 🚀 Project Structure

Inside of the DevFest project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.webp
│   └── icons/
├── src/
│   ├── components/
│   │   ├── landing-page/
│   │   │   ├── about.astro
│   │   │   ├── community.astro
│   │   │   ├── countdown.tsx
│   │   │   ├── hero.astro
│   │   │   ├── skills.astro
│   │   │   └── sponsor.astro
│   │   └── layout/
│   │       ├── BaseHead.astro
│   │       ├── Footer.astro
│   │       ├── Navbar.tsx
│   │       └── MobileMenuToggle.tsx
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── consts.ts
├── package.json
└── README.md
```

### Component Architecture

- **Landing Page Components**: Modular sections for the main page (hero, about, sponsors, etc.)
- **Layout Components**: Reusable layout elements like navbar and footer
- **Mobile Menu**: Optimized with client-side hydration for interactive features

## 📱 Mobile Menu Implementation

The mobile menu is implemented with performance in mind:

### Components

- **`Navbar.tsx`**: Static navbar component (server-rendered)
- **`MobileMenuToggle.tsx`**: Interactive mobile menu with client-side state management

### Key Features

- **Smooth animations**: CSS transitions for slide-in/out effects
- **Hamburger animation**: Animated hamburger to X transformation
- **Overlay handling**: Semi-transparent overlay with click-to-close
- **Responsive design**: Only loads on mobile devices
- **Performance optimized**: Uses `client:load` directive for hydration only when needed

### Usage

```astro
---
import Navbar from "../components/layout/Navbar.tsx";
---

<!-- The mobile menu is automatically included in the Navbar component -->
<Navbar client:load />
```

The mobile menu state is self-contained within the `MobileMenuToggle` component, keeping the main navbar lightweight and server-rendered.

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with partial hydration
- **[SolidJS](https://www.solidjs.com/)** - Reactive JavaScript library for interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager
- **TypeScript** - Type-safe JavaScript development

## 💻 Development

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js 18+ (for compatibility)

### Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd devfest
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
bun build
```

The built site will be in the `dist/` directory.

## 🤝 Contributing

We welcome contributions to make DevFest Bandung 2024 even better!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Keep components modular and reusable
- Optimize for performance (prefer static generation over client-side rendering)

## 🧙 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
