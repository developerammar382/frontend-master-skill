# Rules: TypeScript

## Config
- `"strict": true`. Also `"noUncheckedIndexedAccess": true` for new projects.
- Path alias `@/*` to `src/*`.

## Types
- No `any`. Use `unknown` and narrow, or define the type.
- No non-null assertions (`!`) unless you can explain why it's safe in a short comment.
- Prefer `type` for props and unions; `interface` is fine for extendable object shapes. Be consistent within the project.
- Extend native props: `type ButtonProps = ComponentProps<"button"> & { variant?: "primary" | "ghost" }` (import `ComponentProps` from `react`).
- Unions over enums: `type Status = "active" | "paused" | "archived"`.
- Validate external data (API responses, form input, search params) with Zod and infer types: `type User = z.infer<typeof userSchema>`.

## Keep it readable
- No clever type gymnastics in app code. If a type needs a comment to understand, simplify it.
- Max one level of generics in components. Most components need none.
- Name types plainly: `PricingPlan`, `NavItem`, `StatCardProps`.
- Co-locate types with their component. Shared domain types go in `lib/types.ts`.

## Don't
- Don't use `@ts-ignore`. If unavoidable, use `@ts-expect-error` with a reason.
- Don't cast with `as` to silence errors. Fix the type.
- Don't export types nobody imports.
