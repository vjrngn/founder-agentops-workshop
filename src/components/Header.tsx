import { useEffect, useState } from "react";
import { RegisterCta } from "./ui";

const NAV = [
  { href: "#workshop", label: "Workshop" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#loop", label: "The loop" },
  { href: "#host", label: "Host" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink"
            aria-hidden="true"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
              <path
                d="M5 6l3 4-3 4"
                stroke="#be4a24"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="10"
                y1="14"
                x2="15"
                y2="14"
                stroke="#fbfaf7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-mono text-sm font-medium tracking-tight text-ink">
            Tech Swamy
          </span>
          <span className="hidden font-mono text-xs text-ink-faint sm:inline">
            / AgentOps Workshop
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <RegisterCta
          variant="primary"
          label="Register"
          comingSoonLabel="Coming soon"
          className="!px-4 !py-2 text-[13px]"
        />
      </div>
    </header>
  );
}
