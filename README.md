# DWS Blog Frontend

This project was built as part of a technical assessment.

## Tech Stack
- React
- TypeScript
- Vite
- SCSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

## Improvements

Due to time constraints, the following improvements were identified but not implemented:

- Implement Individual post view
- Implement Sort
- Implement Skeleton loading for all posts view
- Background gradient more similar to the mockup
- Replace png icons with svg icons
- Write more unit tests
- During development, a Lighthouse audit was executed using Chrome DevTools. Accessibility and Best Practices had a great score, SEO was good, but Performance was lower than 60. If I had more time, I would follow Lighthouse's insights to optimize the performance

## Architecture decisions

- Vite chosen for fast dev environment
- Component-driven architecture
- Create base components to avoid repeating code and customize on top of them when needed
- Services layer to isolate API logic
- Rely on CSS media queries and useIsMobile hook to change UI to Mobile and Desktop views. Having separate layouts would cause a lot of re-renders and duplicated code
