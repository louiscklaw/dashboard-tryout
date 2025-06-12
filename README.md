# Uptime Kuma Dashboard

A React-based dashboard for monitoring service status using Uptime Kuma.

## Features

- Real-time service status monitoring
- Modular component architecture
- Responsive design
- Easy deployment to GitHub Pages

## Tech Stack

- React 19.1.0
- TypeScript 4.9.5
- SCSS modules
- GitHub Pages deployment

## Project Structure

```
project/
├── src/
│   ├── CellX_Y/          # Modular components (e.g. Cell1_1, Cell2_3)
│   │   ├── index.tsx     # Component logic
│   │   └── style.module.scss # Component styles
│   ├── ShowUptimeKumaBadge.tsx # Reusable badge component
│   └── App.tsx           # Main application
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```

## Modular Design

Components follow `CellX_Y` naming convention where:

- `X` represents the row number
- `Y` represents the column number

Each component is self-contained with:

- Logic in `index.tsx`
- Styles in `style.module.scss`

## Uptime Kuma Integration

The dashboard displays status badges from Uptime Kuma. Each badge shows:

- Service name
- Current status (up/down)
- Response time
- Uptime percentage

To add a new service:

1. Get the status ID from your Uptime Kuma instance
2. Create a new Cell component
3. Add the badge using `ShowUptimeKumaBadge` component
