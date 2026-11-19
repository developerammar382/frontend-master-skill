# 02: Redesign a Generic Page

**Workflow:** redesign-existing-ui

## Setup
Put this code in `app/page.tsx` of a fresh Next.js + Tailwind project.

```tsx
export default function Home() {
  return (
    <main>
      <nav className="flex justify-between p-4 bg-blue-600 text-white">
        <span className="font-bold">GreenLeaf Accounting</span>
        <div className="flex gap-4"><a href="#">Home</a><a href="#">Services</a><a href="#">About</a><a href="#">Contact</a></div>
      </nav>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to GreenLeaf Accounting</h1>
        <p className="mt-4 text-gray-600">We help small businesses with taxes, bookkeeping, and payroll.</p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded" onClick={() => alert("Booked!")}>Book a call</button>
      </section>
      <section className="grid grid-cols-3 gap-4 p-8">
        <div className="p-4 border">📊 Bookkeeping</div>
        <div className="p-4 border">💰 Taxes</div>
        <div className="p-4 border">👥 Payroll</div>
      </section>
    </main>
  );
}
```

## Prompt
> Enhance this page.

## Pass criteria
- [ ] Brand name and all services kept; the "Book a call" action still works
- [ ] Brand evolves (green fits "GreenLeaf" better than default blue) and the change is explained
- [ ] Emojis replaced with Lucide icons
- [ ] Nav upgraded: Services dropdown with descriptions, CTA button, designed mobile menu
- [ ] Hero gains a visual anchor and trust proof (e.g. clients served, ratings)
- [ ] Grid collapses on mobile (original `grid-cols-3` breaks at 375px)
- [ ] Code split into components
- [ ] Before/after summary in the report
- [ ] Rubric score 80+; result is obviously, dramatically better
