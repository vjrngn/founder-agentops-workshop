import { footer, links } from "../content";
import { isLive } from "./ui";

export default function Footer() {
  const live = isLive();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-3/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-base font-semibold tracking-tight text-ink">
              {footer.title}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              {footer.hostedBy} · {footer.org}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            <a
              href={links.techSwamy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              Tech Swamy
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            {live ? (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-ink"
              >
                LinkedIn Event
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-ink-faint">
                LinkedIn Event
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  Coming soon
                </span>
              </span>
            )}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {footer.org}. All rights reserved.
          </p>
          <p className="font-mono">From Vibe Coding to Founder AgentOps</p>
        </div>
      </div>
    </footer>
  );
}
