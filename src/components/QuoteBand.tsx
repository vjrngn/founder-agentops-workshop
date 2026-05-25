import { PullQuote, Reveal } from "./ui";

export default function QuoteBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <PullQuote>{children}</PullQuote>
        </Reveal>
      </div>
    </section>
  );
}
