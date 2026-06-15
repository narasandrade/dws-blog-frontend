# DWS Blog Frontend

This project was built as part of a technical assessment.

## Tech Stack
- React
- TypeScript
- TanStack React Query
- SCSS
- Vite

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

## Architecture decisions

- Vite chosen for fast dev environment
- Component-driven architecture
- Create base components to avoid repeating code and customize on top of them when needed
- Services layer to isolate API logic
- Rely on CSS media queries and useIsMobile hook to change UI to Mobile and Desktop views. Having separate layouts would cause a lot of re-renders and duplicated code
