"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { navGroups, navLinks } from "./nav-data";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Close the menu when a link is tapped
  const close = () => setIsOpen(false);

  // Stagger top-level rows unless the user prefers reduced motion
  const rowMotion = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 + index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Sheet handles aria-expanded, focus trap, Escape, and scroll lock */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="size-11 p-0 lg:hidden" aria-label="Open menu">
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-full flex-col bg-bg p-0 sm:max-w-sm">
        <SheetTitle className="sr-only">Main menu</SheetTitle>

        <nav className="flex-1 overflow-y-auto px-6 pt-16">
          <Accordion type="single" collapsible>
            {navGroups.map((group, index) => (
              <motion.div key={group.title} {...rowMotion(index)}>
                <AccordionItem value={group.title} className="border-line">
                  <AccordionTrigger className="py-4 font-display text-2xl font-medium hover:no-underline">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-1 pb-2">
                      {group.items.map(({ title, href, icon: Icon }) => (
                        <li key={href}>
                          <Link href={href} onClick={close} className="flex min-h-12 items-center gap-3 rounded-md px-2 text-base text-muted hover:bg-ink/5 hover:text-ink">
                            {Icon && <Icon className="size-5 text-accent" strokeWidth={1.75} aria-hidden="true" />}
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {navLinks.map((link, index) => (
            <motion.div key={link.href} {...rowMotion(navGroups.length + index)}>
              <Link href={link.href} onClick={close} className="flex min-h-14 items-center border-b border-line font-display text-2xl font-medium">
                {link.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA stays pinned at the bottom, above the iOS home bar */}
        <div className="grid gap-2 border-t border-line p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <Button asChild size="lg">
            <Link href="/signup" onClick={close}>Start free</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/login" onClick={close}>Sign in</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
