import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { cta as ctaConfig } from "../content";

/* ------------------------------------------------------------------ */
/*  Icons (inline, no dependency)                                      */
/* ------------------------------------------------------------------ */
type IconProps = { className?: string };

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MinusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 10h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10h12m0 0l-5-5m5 5l-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 14L14 6m0 0H7m7 0v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reveal — fades children up when they scroll into view              */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Layout + typography primitives                                     */
/* ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent ${className}`}
    >
      <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div
      className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
  hover = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-2xl border border-line bg-paper/70 backdrop-blur-sm ${
        hover
          ? "transition duration-300 will-change-transform hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_22px_48px_-28px_rgba(22,19,13,0.45)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line-strong bg-paper px-3.5 py-1.5 font-mono text-xs text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}

export function ComingSoonBadge({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const live = isLive();
  const tone = onDark
    ? "border-paper/20 bg-paper/5 text-paper/80"
    : "border-accent/25 bg-accent-soft/70 text-accent-ink";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] ${tone} ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent" />
      </span>
      {live ? "Registration open" : "Registration coming soon"}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA — single source of truth for the "coming soon" behaviour       */
/* ------------------------------------------------------------------ */
export function isLive(): boolean {
  return ctaConfig.linkedInEventUrl.trim().length > 0;
}

function notifyHref(): string {
  const subject = encodeURIComponent(ctaConfig.notifySubject);
  const body = encodeURIComponent(ctaConfig.notifyBody);
  return `mailto:${ctaConfig.notifyEmail}?subject=${subject}&body=${body}`;
}

type CtaVariant = "primary" | "secondary";

/**
 * Renders the primary registration call to action.
 * - Until `cta.linkedInEventUrl` is set, links to a pre-filled "notify me" email.
 * - Once set, links straight to the LinkedIn event page (new tab).
 */
export function RegisterCta({
  variant = "primary",
  className = "",
  label,
  onDark = false,
}: {
  variant?: CtaVariant;
  className?: string;
  label?: string;
  onDark?: boolean;
}) {
  const live = isLive();
  const href = live ? ctaConfig.linkedInEventUrl : notifyHref();
  const text =
    label ?? (live ? "Register on LinkedIn" : "Notify Me When Registration Opens");

  return (
    <ButtonLink
      href={href}
      variant={variant}
      external={live}
      onDark={onDark}
      className={className}
    >
      {text}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </ButtonLink>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  onDark = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  external?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const offset = onDark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-paper";
  const styles: Record<"light" | "dark", Record<CtaVariant, string>> = {
    light: {
      primary:
        "bg-ink text-paper hover:bg-accent shadow-[0_10px_28px_-12px_rgba(22,19,13,0.6)]",
      secondary:
        "border border-line-strong bg-paper text-ink hover:border-ink/30 hover:bg-paper-2",
    },
    dark: {
      primary: "bg-paper text-ink hover:bg-accent hover:text-paper",
      secondary:
        "border border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/5",
    },
  };
  const tone = onDark ? "dark" : "light";
  return (
    <a
      href={href}
      className={`${base} ${offset} ${styles[tone][variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Pull quote                                                         */
/* ------------------------------------------------------------------ */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="relative mx-auto max-w-3xl text-center">
      <span
        className="select-none font-mono text-5xl leading-none text-accent/30"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 text-balance text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[28px]">
        {children}
      </blockquote>
    </figure>
  );
}
