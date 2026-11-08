import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusPill, quietLink } from "@/components/work/ProjectRows";
import { WithPlaceholders, hasVisibleText } from "@/components/ui/Placeholder";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/** Use `text` for copy that may contain {{placeholders}}; the row hides in production if nothing is left. */
export type MetaItem = { label: string; value?: ReactNode; text?: string };
export type SourceLink = { label: string; href: string };

/** Case study header: breadcrumb, title, lead, status and a ruled metadata grid. */
export function CaseHeader({
  title,
  heading,
  lead,
  status,
  meta,
}: {
  title: string;
  heading: string[];
  lead: ReactNode;
  status?: string;
  meta: MetaItem[];
}) {
  return (
    <PageHeader crumbs={[{ label: "Work", href: "/work" }, { label: title }]} heading={heading} lead={lead}>
      {status && <StatusPill>{status}</StatusPill>}
      <dl className="mt-12 grid gap-x-8 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {meta.filter((item) => item.text === undefined || hasVisibleText(item.text)).map((item) => (
          <div key={item.label} className="border-b border-line py-4">
            <dt className="caption-4 text-fg-muted">{item.label}</dt>
            <dd className="mt-1 body-5 text-fg">
              {item.text !== undefined ? <WithPlaceholders text={item.text} /> : item.value}
            </dd>
          </div>
        ))}
      </dl>
    </PageHeader>
  );
}

/** One case study section: label in the left margin, content in columns 4 to 12. */
export function CaseSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 py-12 lg:py-16">
      <Container>
        <div data-reveal className="grid gap-4 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <h2 id={`${id}-heading`} className="heading-5 text-fg lg:sticky lg:top-24">
              {label}
            </h2>
          </div>
          <div className="min-w-0 lg:col-span-9">
            {title && <p className="max-w-hero heading-5 text-fg">{title}</p>}
            <div className={cn(title && "mt-6", "flex flex-col gap-6")}>{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="max-w-prose body-3 text-fg-muted">{children}</p>;
}

export function Points({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex max-w-prose flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 body-3 text-fg-muted">
          <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-fg-muted" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered findings: a real ordered list, each with a bold claim and its evidence. */
export function Findings({ items }: { items: { claim: string; evidence: ReactNode }[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={item.claim} className="grid gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-9 sm:gap-6">
          <span className="heading-6 text-fg tabular-nums sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
          <div className="sm:col-span-8">
            <p className="title-2 text-fg">{item.claim}</p>
            <p className="mt-2 max-w-prose body-3 text-fg-muted">{item.evidence}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SourceList({ links }: { links: SourceLink[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className={quietLink}>
            {link.label}
            <ArrowUpRight size={16} aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Bottom of every case study: next project and a way back (skill B10). */
export function CaseNext({ next }: { next: { title: string; href: string } }) {
  return (
    <nav aria-label="More case studies" className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Link href="/work" className={quietLink}>
              <ArrowLeft size={16} aria-hidden />
              All work
            </Link>
          </div>
          <div className="lg:col-span-9">
            <p className="caption-4 text-fg-muted">Next case study</p>
            <Link
              href={next.href}
              className="group mt-2 inline-flex items-center gap-3 rounded-sm heading-4 text-fg transition-colors duration-300 ease-base hover:text-fg-muted"
            >
              {next.title}
              <ArrowRight
                size={24}
                aria-hidden
                className="transition-transform duration-500 ease-base group-hover:translate-x-2 motion-reduce:group-hover:translate-x-0"
              />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
