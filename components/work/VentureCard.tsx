import Image from "next/image";
import type { Venture } from "@/content/work";
import { FacebookLogo, InstagramLogo } from "@/components/ui/icons";

const networks = {
  facebook: { Icon: FacebookLogo, label: "Facebook" },
  instagram: { Icon: InstagramLogo, label: "Instagram" },
} as const;

const iconLink =
  "grid size-10 place-items-center rounded-full border border-line text-fg " +
  "transition-[background-color,border-color,transform] duration-300 ease-base " +
  "hover:border-fg-muted/40 hover:bg-bg active:scale-98 motion-reduce:active:scale-100";

/**
 * A smaller venture (Prizm, eShodor): name, role, period, "What I do" in Sadman's words,
 * and, when supplied, an image and links to the venture's social pages.
 */
export function VentureCard({ venture }: { venture: Venture }) {
  const titleId = `${venture.id}-title`;
  return (
    <article
      id={venture.id}
      aria-labelledby={titleId}
      className="scroll-mt-24 rounded-xl border border-line bg-surface p-6 sm:p-12"
    >
      <div className="flex flex-col gap-8">
        {venture.image && (
          <figure>
            <Image
              src={venture.image.src}
              alt={venture.image.alt}
              width={venture.image.width}
              height={venture.image.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-video h-auto w-full rounded-lg object-cover"
            />
          </figure>
        )}

        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 id={titleId} className="heading-5 text-fg">
              {venture.name}
            </h3>
            <p className="caption-2 text-fg-muted">{venture.period}</p>
          </div>
          <p className="mt-1 body-5 text-fg">{venture.role}</p>

          <h4 className="mt-6 title-3 text-fg">What I do</h4>
          <ul className="mt-3 flex flex-col gap-3">
            {venture.whatIDo.map((item) => (
              <li key={item} className="flex gap-3 body-6 text-fg-muted">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {venture.social && (
            <ul className="mt-6 flex gap-2" aria-label={`${venture.name} on social media`}>
              {venture.social.map((s) => {
                const { Icon, label } = networks[s.network];
                return (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={iconLink}>
                      <Icon size={20} aria-hidden />
                      <span className="sr-only">
                        {venture.name} on {label} (opens in a new tab)
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
