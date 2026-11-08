import { awards, type Award } from "@/content/recognition";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { ArrowUpRight, Certificate, Coins, Medal, Trophy } from "@/components/ui/icons";
import { quietLink } from "@/components/work/ProjectRows";
import { bandLink } from "@/components/ui/linkStyles";
import { cn } from "@/lib/cn";

const icons = { trophy: Trophy, medal: Medal, coins: Coins, certificate: Certificate };

/**
 * Awards as accomplishment cards (Sadman, 8 Nov 2026): the top award on a wide dark card,
 * the rest as cards with an icon, a large figure, the event and who awarded it.
 */
export function Recognition() {
  const featured = awards.find((a) => a.featured);
  const rest = awards.filter((a) => a !== featured);

  return (
    <SectionFrame id="recognition" title="Recognition" subtitle="Awards, funding and fellowships" stickyTitle>
      <ul className="grid gap-4 sm:grid-cols-2">
        {featured && (
          <li className="sm:col-span-2">
            <AwardCard award={featured} featured />
          </li>
        )}
        {rest.map((award) => (
          <li key={award.title}>
            <AwardCard award={award} />
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}

function AwardCard({ award, featured = false }: { award: Award; featured?: boolean }) {
  const Icon = icons[award.icon];
  const isPdf = award.href?.endsWith(".pdf");

  return (
    <article
      data-tone={featured ? "band" : undefined}
      className={cn(
        "flex h-full flex-col rounded-xl p-6",
        featured ? "bg-band text-on-band sm:p-12" : "border border-line bg-surface",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden
          className={cn(
            "grid size-12 place-items-center rounded-full",
            featured ? "bg-on-band/10 text-on-band" : "bg-accent/10 text-accent",
          )}
        >
          <Icon size={24} />
        </span>
        <p className={cn("caption-2", featured ? "text-on-band-muted" : "text-fg-muted")}>{award.date}</p>
      </div>

      <p className={cn("mt-6 tabular-nums", featured ? "heading-3 sm:heading-2" : "heading-4 text-fg")}>
        {award.highlight}
      </p>
      <h3 className={cn("mt-2", featured ? "title-1" : "title-3 text-fg")}>{award.event}</h3>
      {award.detail && (
        <p className={cn("mt-2 body-6", featured ? "max-w-prose text-on-band-muted" : "text-fg-muted")}>
          {award.detail}.
        </p>
      )}
      <p className={cn("mt-1 caption-2", featured ? "text-on-band-muted" : "text-fg-muted")}>{award.by}</p>

      {award.href && (
        <a
          href={award.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(featured ? bandLink : quietLink, "mt-6")}
        >
          {award.linkLabel ?? "View"}
          <ArrowUpRight size={16} aria-hidden />
          <span className="sr-only">{isPdf ? "(PDF, opens in a new tab)" : "(opens in a new tab)"}</span>
        </a>
      )}
    </article>
  );
}
