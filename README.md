# My Portafolio

## Overview

My portfolio showcases my public GitHub repositories, professional resume, and a detailed profile, complemented by visual representations of my hobbies using custom SVG icons. Explore my work, experience, and interests all in one place.

## Technology Stack & Versions

- Next.js 16.2.12
- React 19.2.8
- TypeScript 6.0.3
- SASS (CSS preprocessor)
- TailwindCSS 3.4.19

## Project Structure

```text
my-portafolio/
├── components/
│   ├── common/        # Reusable UI building blocks and shared components
│   └── features/      # Feature-specific sections such as About, Resume, and Portfolio
│   └── layouts/       # Shared layout, navigation, and page shell components
├── pages/             # Next.js route pages for the site
├── hooks/             # Custom React hooks used across the app
│   └── useGithub      # Custom Hook to interact with Github's API 
├── lib/               # Utility modules, helpers, and shared data
├── public/            # Static assets served directly by Next.js
├── styles/            # Global styles and shared SCSS variables
├── img/               # Images, icons, and other visual assets
├── __tests__/         # Jest test files
└── types/             # TypeScript global type declarations
```

## Production Environment

You can visit my [My Portafolio](https://my-portafolio-rho.vercel.app/)