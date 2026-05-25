import { links, techSwamy } from "../content";
import { ArrowUpRight, ButtonLink, Reveal, SectionHeading } from "./ui";

export default function AboutTechSwamySection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="The partner" title={techSwamy.title} />
            <div className="mt-6">
              <ButtonLink href={links.techSwamy} variant="primary" external>
                {techSwamy.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {techSwamy.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
