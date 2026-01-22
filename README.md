# Bookflix

Small React + TypeScript project (Vite) for browsing books and simple Firebase authentication.

## Overview

Bookflix is a front-end app that fetches book lists from the Open Library API and provides user authentication via Firebase. UI is built with Tailwind CSS and components are designed for a horizontal scroll book list.

## Implemented features

- Firebase authentication (signup / login) integration (utils/firebaseConfig.ts, utils/userContext.tsx)
- Login / Register page (Pages/LoginPage.tsx) with name/email/password inputs
- Dashboard / main routes (Pages/Dashboard.tsx, Pages/MainRoutes.tsx)
- Book list fetched from Open Library API per genre (Components/BookList.tsx)
- Book card component to render cover/title/author with placeholder image (Components/BookCard.tsx)
- Reusable small components: Header, Avatar, Shimmer
- Tailwind CSS for styling
- Project assets under src/assets (backgrounds, placeholder images)

## Project structure (src)

- src/
  - assets/ — images used by the app
  - Components/
    - BookList.tsx — fetches `https://openlibrary.org/subjects/{genre}.json`, manages horizontal scroll arrows
    - BookCard.tsx — card UI for a book
    - Header.tsx, Avatar.tsx, Shimmer.tsx
  - Pages/
    - LoginPage.tsx — auth UI and handlers (createUserWithEmailAndPassword, signInWithEmailAndPassword)
    - Dashboard.tsx, MainRoutes.tsx
  - utils/
    - firebaseConfig.ts — initializeApp, getAuth (ensure auth exported as getAuth(app))
    - userContext.tsx — user context provider/consumer
    - debounce.tsx

## Tech stack

- React + TypeScript (Vite)
- Tailwind CSS
- Firebase (Auth, Analytics)
- Open Library API for book data

## Dev / Run

Prerequisites:

- Node.js (recommended >= 20). Use nvm to manage Node versions if needed.

Install and run:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Firebase / Environment

- Place sensitive keys in a `.env` file at project root (Vite requires variables prefixed with `VITE_`):

```
VITE_APP_FIREBASE_KEY=your_api_key_here
```

- firebaseConfig.ts uses `import.meta.env.VITE_APP_FIREBASE_KEY`. Restart dev server after editing `.env`.

Deploy to Firebase Hosting:

- Ensure `firebase.json` points to the correct public/build folder.
- Run:

```bash
npm run build
firebase deploy
```

## Notes / Tips

- The Login form prevents default form submission; ensure interactive buttons use `type="button"` to avoid query params appearing in URL.
- If you see `No Firebase App '[DEFAULT]' has been created` confirm initializeApp is called and `getAuth(app)` (not `getAuth()` without app) is used where appropriate.
- If build errors reference missing packages like `@firebase/logger`, install them or reinstall dependencies:

```bash
npm install @firebase/logger
rm -rf node_modules package-lock.json
npm install
```

## Known issues

- Horizontal scroll arrow logic and unique keys in BookList/BookCard should be reviewed for edge cases.
- Ensure Open Library response shape matches your BookInterface (works array). Add defensive checks before calling `.map`.
