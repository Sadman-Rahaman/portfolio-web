import Image from "next/image";
import Link from "next/link";
import { mailto, site } from "@/content/site";
import { drawnTo, field } from "@/content/home";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Camera, ChartLineUp, Code, UsersThree } from "@/components/ui/icons";
import { quietLink } from "@/components/work/ProjectRows";
import { bandLink } from "@/components/ui/linkStyles";

const card = "rounded-xl border border-line bg-surface";

/* ---------- What I'm drawn to ---------- */

const drawnIcons = { code: Code, chart: ChartLineUp, people: UsersThree, camera: Camera };

export function HomeDrawnTo() {
  return (
    <SectionFrame id="drawn-to" title="What I'm drawn to" band>
      <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-12">
        {drawnTo.map((item) => {
          const Icon = drawnIcons[item.icon];
          return (
            <li key={item.title} className="flex flex-col border-t border-on-band/20 pt-6">
              {/* Phones: icon in a circle beside the title. From sm up the circle box disappears. */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-on-band/10 sm:contents">
                  <Icon size={20} aria-hidden className="text-on-band" />
                </span>
                <h3 className="heading-6 text-on-band sm:mt-4">{item.title}</h3>
              </div>
              <p className="mt-2 body-6 text-on-band-muted">{item.text}</p>
              <Link href={item.link.href} className={`${bandLink} mt-auto pt-4`}>
                {item.link.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionFrame>
  );
}

/* ---------- In the field ---------- */

export function HomeField() {
  return (
    <SectionFrame id="field" title="In the field" subtitle="Pitches, workshops, visits and volunteering" tinted>
      <ul
        className={
          "-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 " +
          "sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0"
        }
      >
        {field.map((item) => (
          <li
            key={item.title}
            className={
              "flex w-72 shrink-0 snap-start flex-col rounded-xl border border-line bg-surface p-4 " +
              "sm:w-auto sm:shrink sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
            }
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
              className="aspect-4/3 h-auto w-full rounded-lg object-cover"
            />
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="heading-6 text-fg">{item.title}</h3>
              <p className="shrink-0 caption-2 text-fg-muted">{item.tag}</p>
            </div>
            <p className="mt-2 body-6 text-fg-muted">{item.text}</p>
            {item.href && (
              <Link href={item.href} className={`${quietLink} mt-auto pt-3`}>
                {item.linkLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-2 caption-2 text-fg-muted sm:hidden">Swipe sideways to see more.</p>
    </SectionFrame>
  );
}

/* ---------- Contact ---------- */

const contactCards = [
  { label: "Email", value: site.email, note: "For projects, collaborations and questions", href: mailto("Hello from your portfolio"), external: false },
  { label: "LinkedIn", value: "sadmanrahaman", note: "Updates and milestones", href: site.links.linkedin, external: true },
  { label: "GitHub", value: "Sadman-Rahaman", note: "Code and projects", href: site.links.github, external: true },
];

export function HomeContact() {
  return (
    <SectionFrame id="contact" title="Contact">
      {/* Email takes a full row so the address always sits on one line. */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {contactCards.map((c, i) => (
          <li key={c.label} className={i === 0 ? "sm:col-span-2" : undefined}>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${card} flex h-full flex-col p-6 transition-[background-color,border-color] duration-300 ease-base hover:border-fg-muted/40 hover:bg-bg`}
            >
              <span className="caption-2 text-fg-muted">{c.label}</span>
              <span className="mt-4 break-words heading-6 text-fg">{c.value}</span>
              <span className="mt-2 caption-2 text-fg-muted">{c.note}</span>
              {c.external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
