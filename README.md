# MY CV

A modern interactive CV portfolio built with React, TypeScript, and Vite, featuring a live code editor interface and customizable styling.

## Table of Contents

- [Live website](#live)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Components & Pages](#components--pages)
- [Context & Hooks](#context--hooks)
- [Data & Styles](#data--styles)
- [Contributing](#contributing)
- [License](#license)

## Live website

[<img width="3460" height="2240" alt="joao-cv vercel app_" src="https://github.com/user-attachments/assets/a662fca9-b8f9-4a78-8446-f827311d5a77" />](https://joao-cv.vercel.app/)

## Features

- Simulated terminal interface with custom header and footer
- Live code editor page displaying CV content in HTML & CSS
- Responsive navigation menu and UI components
- Global state management using React Context
- Modular, type-safe codebase with TypeScript

## Tech Stack

- React 18
- TypeScript
- Vite
- ESLint & Prettier for code quality

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm v8 or higher

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/jaoliveira98/joao-cv.git
   cd joao-cv
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- `npm run dev` Start development server with HMR
- `npm run build` Build for production
- `npm run preview` Preview production build locally
- `npm run lint` Run ESLint checks

## Project Structure

```plaintext
joao-cv/
├── public/               # Static assets (images, icons)
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Terminal layout (Header, Footer)
│   │   ├── navigation/   # Navbar and menu
│   │   └── ui/           # Miscellaneous UI pieces
│   ├── pages/            # Page components (CodeEditorPage)
│   ├── context/          # React Context providers and types
│   ├── hooks/            # Custom React hooks
│   ├── data/             # Static CV data & styling definitions
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Components & Pages

- **Home.tsx**: Landing page
- **CodeEditorPage.tsx**: Interactive code editor with live preview
- **Terminal** components: Custom terminal simulation
- **NavbarMenu.tsx**: Responsive navigation

## Context & Hooks

- **EditorContext**: Manages editor state across pages
- **useEditorContext**: Hook for accessing and updating editor state

## Data & Styles

- CV content organized under `src/data/cv/index.ts`
- Styles and themes defined in `src/data/cv/styles.ts`
