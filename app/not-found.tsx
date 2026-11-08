import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

/** Branded 404 (skill B10): says what happened and offers the two most useful ways forward. */
export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading">
      <Container className="pt-12 pb-24 lg:pt-16">
        <p className="enter caption-4 text-fg-muted">
          <span className="text-accent">404</span> / Not found
        </p>
        <h1 id="not-found-heading" className="enter mt-6 max-w-hero heading-3 text-fg sm:heading-2">
          This page is not in the notebook.
        </h1>
        <p className="enter mt-6 max-w-hero body-7 text-fg-muted">
          The link may be old, or the address may have a typo. The work and the CV are one click away.
        </p>
        <div className="enter mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-3 py-2 button-md text-on-fg transition-[background-color,transform] duration-300 ease-base hover:bg-fg/85 active:scale-98 motion-reduce:active:scale-100"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 button-md text-fg transition-[background-color,transform] duration-300 ease-base hover:bg-surface-raised active:scale-98 motion-reduce:active:scale-100"
          >
            See the work
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
