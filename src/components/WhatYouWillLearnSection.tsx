import { learn } from "../content";
import { Reveal, SectionHeading } from "./ui";

export default function WhatYouWillLearnSection() {
  return (
    <section id="curriculum" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Curriculum" title={learn.title} />
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {learn.items.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 50}>
              <li className="group flex items-baseline gap-4 border-b border-line py-5">
                <span className="font-mono text-sm tabular-nums text-ink-faint transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty text-ink-soft transition-colors group-hover:text-ink">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
