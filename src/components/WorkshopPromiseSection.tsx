import { promise } from "../content";
import { Card, Reveal, SectionHeading } from "./ui";

export default function WorkshopPromiseSection() {
  return (
    <section id="workshop" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The promise"
            title={promise.title}
            intro={promise.body}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promise.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 70}>
              <Card hover className="flex h-full flex-col p-7">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
