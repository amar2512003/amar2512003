# Portfolio 3D — minimal scaffold

React Three Fiber + Zustand + Vite. Fixed 3D canvas in the background, scrolling DOM sections on top; the 3D object's color reacts to whichever section is in view.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

## Structure

- `src/data/` — your CV content as plain typed objects (`profile.ts`, `education.ts`, `experience.ts`, `projects.ts`, `skills.ts`). Each currently holds **one** entry — edit in place or change the type to an array + `.map()` when you add more.
- `src/scenes/HeroScene.tsx` — the single `<Canvas>`, mounted once in `App.tsx`.
- `src/three/objects/` — reusable 3D pieces (currently just `RotatingKnot`).
- `src/components/sections/` — one DOM overlay component per CV section.
- `src/store/useSceneStore.ts` — Zustand store tracking which section is active.
- `src/hooks/useSectionObserver.ts` — IntersectionObserver that updates the store as you scroll.

## Next steps (when you're ready to expand)

1. Change each `data/*.ts` export from a single object to an array (e.g. `projects: Project[]`), then `.map()` over it in the matching overlay component.
2. Add more 3D objects per project/skill in `three/objects/`, positioned in `HeroScene` (or split into separate scenes per your original architecture plan).
3. Swap `OrbitControls` for a scroll-driven camera rig once you have multiple 3D focal points.
