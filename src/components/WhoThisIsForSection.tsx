import { audience } from "../content";
import { CheckIcon, MinusIcon, Reveal, SectionHeading } from "./ui";

export default function WhoThisIsForSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Fit check" title={audience.title} />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {/* For you */}
          <Reveal>
            <div className="h-full rounded-2xl border border-line-strong bg-paper p-7 shadow-[0_22px_48px_-30px_rgba(22,19,13,0.4)] sm:p-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-accent-ink">
                {audience.forLead}
              </h3>
              <ul className="mt-6 space-y-4">
                {audience.forItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Not for you */}
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-line bg-paper-3/60 p-7 sm:p-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-ink-faint">
                {audience.notLead}
              </h3>
              <ul className="mt-6 space-y-4">
                {audience.notItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-line-strong text-ink-faint">
                      <MinusIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-faint">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
