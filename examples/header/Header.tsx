"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { navGroups, navLinks, type NavGroup } from "./nav-data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        isScrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Tracebit
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navGroups.map((group) => (
              <NavigationMenuItem key={group.title}>
                <NavigationMenuTrigger>{group.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenuPanel group={group} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href} className="px-4 py-2 text-sm text-muted hover:text-ink">
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden lg:inline-flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/signup">Start free</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MegaMenuPanel({ group }: { group: NavGroup }) {
  return (
    <div className="grid w-160 grid-cols-[1fr_14rem] gap-2 p-3">
      <ul className="grid grid-cols-2 gap-1">
        {group.items.map(({ title, href, description, icon: Icon }) => (
          <li key={href}>
            <NavigationMenuLink asChild>
              <Link href={href} className="flex gap-3 rounded-md p-3 hover:bg-ink/5 focus-visible:bg-ink/5">
                {Icon && <Icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />}
                <span>
                  <span className="block text-sm font-medium text-ink">{title}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{description}</span>
                </span>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>

      {group.featured && (
        <NavigationMenuLink asChild>
          <Link href={group.featured.href} className="flex flex-col justify-end rounded-md bg-accent/10 p-4 hover:bg-accent/15">
            <span className="text-sm font-medium text-ink">{group.featured.title}</span>
            <span className="mt-1 text-xs leading-snug text-muted">{group.featured.description}</span>
          </Link>
        </NavigationMenuLink>
      )}
    </div>
  );
}
