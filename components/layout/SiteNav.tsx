"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { mailto, site, type NavItem } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { UtilityLinks } from "@/components/ui/UtilityLinks";
import { cn } from "@/lib/cn";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function NavEntry({
  item,
  pathname,
  className,
  currentClassName,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  className: string;
  currentClassName: string;
  onNavigate?: () => void;
}) {
  const current = isCurrent(pathname, item.href);
  return (
    <Link
      href={item.href}
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
      className={cn(className, current && currentClassName)}
    >
      {item.label}
    </Link>
  );
}

/**
 * Reference navigation: name on the left in the serif, page links and a Download CV
 * button on the right, the current page underlined. It stays at the top on scroll over a
 * translucent, blurred paper surface. Phones get a full height menu (skill B7).
 */
export function SiteNav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel?.querySelector<HTMLElement>(FOCUSABLE);
    const raf = requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panel || !toggleRef.current) return;
      const focusables = [toggleRef.current, ...panel.querySelectorAll<HTMLElement>(FOCUSABLE)];
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // Only the current page is underlined (reference); no competing decoration classes.
  const desktopLink = "rounded-sm body-5 text-fg-muted transition-colors duration-300 ease-base hover:text-fg";
  const desktopCurrent = "text-fg underline decoration-fg underline-offset-8";

  const mobileLink = "heading-4 text-fg-muted transition-colors duration-300 ease-base hover:text-fg";
  const mobileCurrent = "text-fg";

  const stagger = (index: number): CSSProperties => ({
    transitionDelay: open ? `${Math.min(index * 60, 400)}ms` : "0ms",
  });
  const itemMotion = cn(
    "transition-[opacity,transform] duration-500 ease-base motion-reduce:translate-y-0",
    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-6 px-4 lg:px-8">
          <Link href="/" className="rounded-sm heading-6 text-fg">
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-6">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <NavEntry item={item} pathname={pathname} className={desktopLink} currentClassName={desktopCurrent} />
                </li>
              ))}
            </ul>
            <ButtonLink href={site.cv.href} download={site.cv.fileName} variant="secondary" size="sm">
              Download CV
            </ButtonLink>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? close(false) : setOpen(true))}
            className="relative inline-flex size-10 items-center justify-center rounded-full transition-colors duration-300 ease-base hover:bg-surface-raised md:hidden"
          >
            <span
              aria-hidden
              className={cn(
                "absolute h-px w-4 bg-fg transition-transform duration-500 ease-base",
                open ? "rotate-45" : "-translate-y-1",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "absolute h-px w-4 bg-fg transition-transform duration-500 ease-base",
                open ? "-rotate-45" : "translate-y-1",
              )}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl transition-opacity duration-500 ease-base md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-4 pt-24 pb-8">
          <ul className="flex flex-col gap-4">
            {site.nav.map((item, index) => (
              <li key={item.href} className={itemMotion} style={stagger(index)}>
                <NavEntry
                  item={item}
                  pathname={pathname}
                  className={mobileLink}
                  currentClassName={mobileCurrent}
                  onNavigate={() => close(false)}
                />
              </li>
            ))}
          </ul>
          <div className={cn("mt-12 flex flex-col items-start gap-6", itemMotion)} style={stagger(site.nav.length)}>
            <ButtonLink href={mailto()}>Email me</ButtonLink>
            <UtilityLinks />
          </div>
        </nav>
      </div>
    </>
  );
}
