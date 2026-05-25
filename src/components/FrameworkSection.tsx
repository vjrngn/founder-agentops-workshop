import { framework } from "../content";
import { Card, Reveal, SectionHeading } from "./ui";

export default function FrameworkSection() {
  return (
    <section id="loop" className="relative overflow-hidden border-t border-line bg-paper">
      <div
        className="grid-bg grid-fade pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The framework"
            title={framework.title}
            intro={framework.intro}
          />
        </Reveal>

        {/* FOUNDER legend */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {framework.steps.map((s) => (
              <span
                key={s.letter}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong bg-paper-2 font-mono text-sm font-medium text-accent"
              >
                {s.letter}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {framework.steps.map((step, i) => (
            <Reveal key={step.letter} delay={(i % 3) * 70}>
              <Card hover className="flex h-full flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ink font-mono text-xl font-semibold text-accent">
                    {step.letter}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-ink-soft">{step.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
