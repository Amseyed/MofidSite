// Self-contained SVG portrait placeholders — no external network, no load errors.
// Each portrait is a warm-neutral gradient with a stylized head-and-shoulders
// silhouette, tinted differently per index so the demo grid reads as distinct
// people. Swap these for real studio portraits in production.

const PALETTES = [
  ['#E9ECF2', '#D2D8E4'],
  ['#EDE7DF', '#D8CFC2'],
  ['#E4EAEF', '#C9D4DF'],
  ['#F0E9E3', '#DCCFC4'],
  ['#E8E4EE', '#D2CADE'],
  ['#E6ECE7', '#CBD7CD'],
  ['#F2EBE3', '#E0D3C4']
]

function silhouette(tint) {
  return `
    <g fill="${tint}" opacity="0.55">
      <circle cx="200" cy="170" r="78"/>
      <path d="M70 400 C70 290 130 250 200 250 C270 250 330 290 330 400 Z"/>
    </g>
  `
}

export function makePortrait(index = 0) {
  const [c1, c2] = PALETTES[index % PALETTES.length]
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg${index}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg${index})"/>
  ${silhouette('#1A2B4C')}
</svg>`.trim()
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
