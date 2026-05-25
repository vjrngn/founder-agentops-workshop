import { agenda } from "../content";
import { Reveal, SectionHeading } from "./ui";

export default function AgendaSection() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Agenda" title={agenda.title} />
        </Reveal>

        <ol className="mt-14 max-w-3xl">
          {agenda.items.map((item, i) => {
            const last = i === agenda.items.length - 1;
            return (
              <Reveal key={item} delay={i * 50}>
                <li className="relative flex gap-5 pb-8 last:pb-0">
                  {/* connector */}
                  {!last ? (
                    <span
                      className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-line-strong"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line-strong bg-paper font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-pretty text-lg font-medium tracking-tight text-ink">
                    {item}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
