import { hero, links } from "../content";
import {
  ArrowUpRight,
  ButtonLink,
  ComingSoonBadge,
  Pill,
  RegisterCta,
} from "./ui";

function Pipeline() {
  return (
    <div className="rounded-2xl border border-line bg-paper/60 p-5 backdrop-blur-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        the founder agentops loop
      </div>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {hero.pipeline.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-paper px-3 py-2">
              <span className="font-mono text-[11px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-ink">{step}</span>
            </span>
            {i < hero.pipeline.length - 1 ? (
              <span className="font-mono text-ink-faint" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span className="font-mono text-ink-faint" aria-hidden="true">
            ↻
          </span>
          <span className="font-mono text-[11px] text-ink-faint">repeat</span>
        </li>
      </ol>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* atmosphere */}
      <div
        className="grid-bg grid-fade pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        className="glow-accent pointer-events-none absolute -right-32 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40">
        <div className="max-w-3xl">
          <div className="rise flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
              {hero.eyebrow}
            </span>
            <ComingSoonBadge />
          </div>

          <h1
            className="rise mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            {hero.title[0]}
            <br />
            to <span className="text-accent">Founder AgentOps</span>
          </h1>

          <p
            className="rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            {hero.subtitle}
          </p>

          <p
            className="rise mt-5 max-w-2xl text-pretty leading-relaxed text-ink-faint"
            style={{ animationDelay: "0.22s" }}
          >
            {hero.body}
          </p>

          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.3s" }}
          >
            <RegisterCta variant="primary" />
            <ButtonLink href={links.techSwamy} variant="secondary" external>
              Visit Tech Swamy
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <p
            className="rise mt-5 text-sm text-ink-faint"
            style={{ animationDelay: "0.36s" }}
          >
            {hero.trustLine}
          </p>

          <div
            className="rise mt-9 flex flex-wrap gap-2"
            style={{ animationDelay: "0.42s" }}
          >
            {hero.tools.map((tool) => (
              <Pill key={tool}>{tool}</Pill>
            ))}
          </div>
        </div>

        <div className="rise mt-14" style={{ animationDelay: "0.5s" }}>
          <Pipeline />
        </div>
      </div>
    </section>
  );
}
