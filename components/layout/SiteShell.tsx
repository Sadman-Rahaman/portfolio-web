import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { RevealObserver } from "./RevealObserver";

/** Everything inside <body>: skip link, floating nav, main landmark, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-fg px-3 py-2 button-sm text-on-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
