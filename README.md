# Nordic Garden & Property Care (Vite + React + Tailwind)

Modern, responsive website for a Sweden-based gardening and property maintenance company.

## Tech stack

- React (Vite)
- JavaScript (no TypeScript)
- Tailwind CSS
- React Router
- EmailJS (contact form email sending)

## Getting started

Install dependencies:

```bash
cd gardencare-sweden
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Contact form email sending (EmailJS)

This project uses `@emailjs/browser` to send the Contact form to your email.

1. Create an EmailJS account and add an Email Service + Email Template.
2. Copy `.env.example` to `.env` and fill in your keys.
3. In your EmailJS template, include variables like:
   - `from_name`
   - `from_email`
   - `phone`
   - `address`
   - `service_requested`
   - `message`

Then restart the dev server.

## Project structure

```
src
  components
  pages
  assets
  layout
  hooks
```

## Customize for your business

- **Company name / phone / email**: update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- **Service areas**: update in `src/pages/About.jsx` and `src/components/Footer.jsx`
- **Services list**: update in `src/pages/servicesData.js`

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
