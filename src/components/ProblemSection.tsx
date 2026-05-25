import { problem } from "../content";
import { Card, Reveal, SectionHeading } from "./ui";

export default function ProblemSection() {
  return (
    <section className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The real problem"
            title={problem.title}
            intro={problem.body}
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-12 font-mono text-sm text-ink-soft">{problem.lead}</p>
        </Reveal>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {problem.items.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 60 + 40}>
              <Card hover className="flex h-full items-start gap-4 p-5">
                <span className="mt-0.5 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-soft">{item}</span>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl border border-line-strong bg-paper p-6 sm:p-8">
            <p className="border-l-2 border-accent pl-5 text-lg font-medium leading-relaxed text-ink sm:text-xl">
              {problem.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
