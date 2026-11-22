// One place for timing, so every animation on the site feels related.
// Change the feel of the whole site here, not in individual components.

export const ease = {
  out: [0.16, 1, 0.3, 1], // entrances: fast start, soft landing
  inOut: [0.65, 0, 0.35, 1], // scene changes and pinned sections
  in: [0.7, 0, 0.84, 0], // exits, always shorter than entrances
} as const;

export const duration = {
  fast: 0.18, // hover, press, toggles
  base: 0.35, // menus, tooltips, small reveals
  slow: 0.7, // section entrances
  scene: 1.1, // hero sequence, showpiece moments
} as const;

export const stagger = {
  tight: 0.04, // long lists, letters
  base: 0.07, // words, cards
  loose: 0.12, // a few large blocks
} as const;

export const enter = { duration: duration.slow, ease: ease.out };
