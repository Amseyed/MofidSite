# Mofid School Site — Base44 Dev Notes

## Stack
- Frontend-only Vite + React 18 app (Persian / RTL). No backend, no database.
- Entry point served on host port 3000 via `docker-compose.base44.yml`.

## Run
```
docker compose -f docker-compose.base44.yml up -d
```
- The compose service installs deps on startup (`npm install`) then runs `vite` dev server with file-watch polling (bind mount needs it).
- Live reload applies frontend edits in place; no rebuild needed.

## Key component
- `src/components/ProfileCard.jsx` — reusable member card. Props: `image`, `name`, `role`, `alt?`.
  Frozen `min-height` + 2-line `-webkit-line-clamp` on the name keeps grid alignment for long Persian names.
  Includes an initials fallback when a portrait URL fails to load.
- `src/App.jsx` — demo registry grid (teachers + PTA members).

## Sandbox quirks
- Vite 5.4.x ships the host-check security patch; the preview proxy's external Host is rejected (403) unless allowed.
  `vite.config.js` extends `server.allowedHosts` with `.${BASE44_SANDBOX_HOST_DOMAIN}` **only when `BASE44_PREVIEW_MODE === "1"`**; with the flag unset the original (no allowlist) behavior is preserved.
- `:hover` is a real pointer state and cannot be triggered by synthetic JS events in the preview browser; the hover CSS is verified present in the live stylesheet instead.

## Design tokens (Mofid palette)
- Navy `#1A2B4C`, Knowledge Blue `#3A7BD5`, Linen White `#FAFAFA`, Ink Grey `#2D2D2D` — defined as CSS vars in `src/index.css`.
