import { host, links } from "../content";
import { ArrowUpRight, ButtonLink, Pill, Reveal, SectionHeading } from "./ui";

export default function AboutHostSection() {
  return (
    <section id="host" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="The host" title={host.title} />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          {/* Profile card */}
          <Reveal>
            <div className="rounded-2xl border border-line-strong bg-paper p-7">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink font-mono text-xl font-semibold text-accent"
                aria-hidden="true"
              >
                VR
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                {host.name}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{host.role}</p>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                  Previously
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {host.companies.map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <ButtonLink href={links.linkedin} variant="primary" external>
                  {host.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={links.techSwamy} variant="secondary" external>
                  Visit Tech Swamy
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                {host.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
