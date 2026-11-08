import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { enterDelay } from "@/lib/motion";

type Crumb = { label: string; href?: string };

/**
 * Header for inner pages: breadcrumb (a way back from every page, skill B10),
 * mono label, plain heading (the gradient is reserved for the homepage hero) and a lead.
 */
export function PageHeader({
  crumbs,
  heading,
  lead,
  children,
}: {
  crumbs: Crumb[];
  heading: string[];
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header>
      <Container className="pt-12 lg:pt-16">
        <nav aria-label="Breadcrumb" className="enter">
          <ol className="flex flex-wrap items-center gap-2 caption-1 text-fg-muted">
            <li>
              <Link href="/" className="rounded-sm transition-colors duration-300 ease-base hover:text-fg">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="rounded-sm transition-colors duration-300 ease-base hover:text-fg">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-fg">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className="enter mt-6 max-w-hero heading-3 text-fg sm:heading-2"
          style={enterDelay(60)}
        >
          {heading.map((line, i) => (
            <span key={line}>
              {line}
              {i < heading.length - 1 && <br className="hidden sm:inline" />}
              {i < heading.length - 1 && " "}
            </span>
          ))}
        </h1>
        {lead && (
          <div
            className="enter mt-6 max-w-hero body-7 text-fg-muted"
            style={enterDelay(120)}
          >
            {lead}
          </div>
        )}
        {children && (
          <div className="enter mt-8" style={enterDelay(180)}>
            {children}
          </div>
        )}
      </Container>
    </header>
  );
}
