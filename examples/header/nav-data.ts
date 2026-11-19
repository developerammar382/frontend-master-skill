import { BarChart3, Bell, Blocks, BookOpen, FileText, Gauge, LifeBuoy, Newspaper, type LucideIcon } from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavGroup = {
  title: string;
  items: NavLink[];
  featured?: { title: string; description: string; href: string };
};

// Edit nav here; Header and MobileMenu both read from this file
export const navGroups: NavGroup[] = [
  {
    title: "Product",
    items: [
      { title: "Query Insights", href: "/product/insights", description: "See every slow query, ranked by impact", icon: Gauge },
      { title: "Index Advisor", href: "/product/advisor", description: "Suggested indexes with expected speedup", icon: BarChart3 },
      { title: "Alerts", href: "/product/alerts", description: "Get paged before users notice", icon: Bell },
      { title: "Integrations", href: "/integrations", description: "Postgres, MySQL, Slack, and more", icon: Blocks },
    ],
    featured: {
      title: "New: Auto-fix PRs",
      description: "Tracebit now opens a pull request with the fix.",
      href: "/changelog/auto-fix",
    },
  },
  {
    title: "Resources",
    items: [
      { title: "Docs", href: "/docs", description: "Setup guides and API reference", icon: BookOpen },
      { title: "Blog", href: "/blog", description: "Database performance deep dives", icon: Newspaper },
      { title: "Case studies", href: "/customers", description: "How teams cut p95 latency", icon: FileText },
      { title: "Support", href: "/support", description: "Talk to an engineer", icon: LifeBuoy },
    ],
  },
];

export const navLinks: NavLink[] = [{ title: "Pricing", href: "/pricing" }];
