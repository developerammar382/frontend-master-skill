# Rules: React

Strict. Violations must be fixed before the task is done.

## Components
- Function components only. Named exports: `export function PricingCard()`.
- One component per file. File name = component name in PascalCase.
- Props typed with a `type` alias right above the component.
- Destructure props in the signature.
- Keep components under ~150 lines. Split when longer.
- Pass `children` for composition instead of many layout props.

## Hooks
- Follow the Rules of Hooks. No hooks in conditions or loops.
- Don't use `useEffect` to compute derived values. Compute during render.
- Don't use `useEffect` to sync props to state. Use the prop directly or a `key` to reset.
- `useEffect` is for syncing with external systems (subscriptions, DOM APIs, timers). Always clean up.
- Custom hooks start with `use` and live in `hooks/`.
- Reach for `useMemo`/`useCallback` only when there's a measured problem or a stable reference is required. (React Compiler handles most cases where enabled.)

## Rendering
- Every `.map()` has a stable `key` from data, never the array index for dynamic lists.
- Conditional rendering: `{isOpen && <Menu />}` or early return. No nested ternaries.
- Watch for `{count && <X />}` rendering `0`; use `{count > 0 && <X />}`.
- Lists over ~100 items: virtualize.

## Events and forms
- Handlers named `handleX`, props named `onX`.
- Forms: React Hook Form + Zod for anything beyond one field.
- Always `type="button"` on buttons inside forms that don't submit.

## Don't
- Don't mutate state. Spread or use updater functions.
- Don't store server data in `useState`; use TanStack Query or server components.
- Don't use `dangerouslySetInnerHTML` with unsanitized input.
- Don't create components inside other components' render.
- Don't use class components or `React.FC`.
