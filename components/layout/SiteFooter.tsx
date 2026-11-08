import { mailto, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ThemeSwitch } from "./ThemeSwitch";

const footerLink =
  "rounded-sm body-6 text-fg-muted underline decoration-line underline-offset-4 " +
  "transition-colors duration-300 ease-base hover:text-fg hover:decoration-fg";

/** Reference footer: one line of credit, a row of links, and the theme switch. */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <p className="body-6 text-fg-muted">
          © {year} {site.name}. Computer science, BRAC University.
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <a href={mailto()} className={footerLink}>
                  Email
                </a>
              </li>
              <li>
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={footerLink}>
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={site.cv.href} download={site.cv.fileName} className={footerLink}>
                  CV<span className="sr-only"> ({site.cv.meta})</span>
                </a>
              </li>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </Container>
    </footer>
  );
}
