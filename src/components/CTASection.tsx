import { finalCta, links } from "../content";
import { ButtonLink, ComingSoonBadge, RegisterCta } from "./ui";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="grid-bg pointer-events-none absolute inset-0 -z-0 opacity-[0.06]"
        aria-hidden="true"
      />
      <div
        className="glow-accent pointer-events-none absolute left-1/2 top-0 -z-0 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <ComingSoonBadge onDark className="mx-auto" />
        <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-paper/70">
          {finalCta.body}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <RegisterCta variant="primary" onDark />
          <ButtonLink href={links.linkedin} variant="secondary" onDark external>
            {finalCta.secondaryLabel}
          </ButtonLink>
        </div>

        <p className="mt-6 font-mono text-xs text-paper/45">{finalCta.note}</p>
      </div>
    </section>
  );
}
