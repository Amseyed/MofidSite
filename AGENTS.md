# Mofid School Website

Persian (Farsi) RTL website for «دبیرستان دوره اول مفید یادگار امام» (Mofid Yadegar-e-Imam Middle School).

## Tech Stack
- Vite + React 18
- Tailwind CSS 3 (RTL via `dir="rtl"` on `<html>`)
- Vazirmatn Persian font (CDN)

## Development
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App runs on port 3000 (mapped to Vite dev server at 5173).

## Structure
- `src/components/` — all UI sections (Header, Hero, QuickAccess, etc.)
- `src/data.js` — centralized content data (structured for future CMS integration)
- `src/components/Icons.jsx` — Mofid-style line icon set
- `src/components/MofidLogo.jsx` — SVG logo recreation

## Key Notes
- All content is in `src/data.js` for easy CMS/database wiring later.
- Icons are custom SVG line icons matching Mofid's visual language.
- Color palette: teal `#008ea6`, orange `#fca311`, navy `#1e293b`.
