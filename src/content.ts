/**
 * All page copy + configuration lives here so it can be edited without touching
 * component markup.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  TURNING ON REGISTRATION (when the event page is ready)
 * ─────────────────────────────────────────────────────────────────────────────
 *  Set `cta.registrationUrl` below to the live Luma or LinkedIn event URL.
 *  Every CTA automatically switches from a disabled "coming soon" state to a
 *  live "Register Now" link, and the "Coming Soon" badges read as live.
 *  Nothing else needs to change.
 */

export const links = {
  techSwamy: "https://techswamy.com",
  linkedin: "https://linkedin.com/in/ranganvijay",
} as const;

export const cta = {
  /** Paste the live Luma or LinkedIn event URL here when ready. Empty = coming soon. */
  registrationUrl: "",
  registerLabel: "Register Now",
  comingSoonLabel: "Registration Page Coming Soon",
} as const;

export const hero = {
  eyebrow: "Online workshop",
  title: ["From Vibe Coding", "to Founder AgentOps"],
  subtitle:
    "A practical online workshop for non-technical founders who want to use AI coding agents to turn ideas into clearer specs, better prototypes, and more organised product execution.",
  body: "Most founders are already experimenting with tools like Claude Code, Codex, Gemini, Cursor, and Lovable. But the output often feels inconsistent because the workflow around the agent is unclear. This workshop shows you how to bring simple engineering-style structure to AI-assisted product building — without needing to become a developer.",
  trustLine: "Hosted by Vijay Rangan, founder of Tech Swamy Consulting.",
  tools: ["Claude Code", "Codex", "Gemini", "Cursor", "Lovable", "Linear"],
  pipeline: ["Idea", "PRD", "Issues", "Agent Task", "Review"],
} as const;

export const problem = {
  title:
    "AI agents are powerful. The workflow around them is usually the problem.",
  body: "AI coding agents can write code, inspect repositories, generate tests, explain errors, and help you move faster. But they perform best when the work is clear, scoped, and reviewable.",
  lead: "Most founders run into the same problems:",
  items: [
    "The agent starts strong, then loses track of the goal",
    "Prompts become long, messy, and expensive",
    "The same context is repeated across multiple chats",
    "Features are built without clear acceptance criteria",
    "Code changes are hard to verify",
    "Product ideas do not translate cleanly into implementation tasks",
    "The founder cannot tell whether the output is actually good",
  ],
  closing:
    "The solution is not just “better prompting.” It is a better product execution workflow.",
} as const;

export const promise = {
  title: "What this workshop will help you do",
  body: "You will learn a practical workflow for working with AI agents more deliberately — from rough idea to PRD, from PRD to issues, from issues to focused agent tasks, and from implementation to review.",
  cards: [
    {
      title: "Turn rough ideas into useful specs",
      body: "Learn how to convert founder intent into simple PRDs with scope, non-goals, user stories, edge cases, and acceptance criteria.",
    },
    {
      title: "Break work into agent-friendly tasks",
      body: "Learn how to split product work into smaller issues that tools like Claude Code, Codex, and Gemini can handle more reliably.",
    },
    {
      title: "Manage context without wasting tokens",
      body: "Learn how to decide what context to provide, what to leave out, when to restart, and how to keep project memory outside the chat.",
    },
    {
      title: "Use Linear as a project notepad",
      body: "Learn how tools like Linear can become a simple execution layer for tracking issues, decisions, handoffs, and progress.",
    },
    {
      title: "Create reusable prompts and skills",
      body: "Learn how to turn repeated workflows into reusable instructions for PRDs, code reviews, test plans, handoffs, and issue creation.",
    },
    {
      title: "Review work with more confidence",
      body: "Learn simple ways to ask for tests, manual verification steps, risk summaries, and implementation notes.",
    },
  ],
} as const;

export const audience = {
  title: "Who this is for",
  forLead: "This workshop is for you if:",
  forItems: [
    "You are a non-technical or semi-technical founder",
    "You are building or planning a software product",
    "You already use AI tools but feel the results are inconsistent",
    "You want to use Claude Code, Codex, Gemini, Cursor, Lovable, or similar tools more effectively",
    "You want to turn ideas into clearer execution plans",
    "You want to collaborate better with developers, freelancers, or AI agents",
    "You want to reduce rework, confusion, and wasted context",
  ],
  notLead: "This is not for you if:",
  notItems: [
    "You want a generic AI hype session",
    "You want a deep coding bootcamp",
    "You expect AI to magically build a production product from a vague idea",
    "You are looking for a tool comparison debate",
  ],
} as const;

export const learn = {
  title:
    "You will learn how to move from random prompting to a repeatable workflow",
  items: [
    "How to describe product ideas so agents can work with them",
    "How to create lightweight PRDs",
    "How to define scope and non-goals",
    "How to break features into small implementation issues",
    "How to use Linear as a structured project memory layer",
    "How to write better task prompts for Claude Code, Codex, and Gemini",
    "How to use context compaction and handoffs more effectively",
    "How to create reusable skills or workflow prompts",
    "How to ask for tests, edge cases, and verification steps",
    "How to review AI-generated work without needing to be a full-time engineer",
  ],
} as const;

export const agenda = {
  title: "Workshop flow",
  items: [
    "The problem: AI agents are powerful, but founders use them like chatbots",
    "Talk vs workflow: why prompting alone is not enough",
    "The Founder AgentOps workflow",
    "Context management: the hidden skill",
    "Skills: reusable workflows instead of repeated prompting",
    "Tool-specific techniques for Claude Code, Codex, and Gemini",
    "Live demo: from product idea to PRD, issues, and agent-ready tasks",
  ],
} as const;

export const framework = {
  title: "The Founder AgentOps loop",
  intro:
    "A simple mental model you can reuse for any feature. The first letters spell FOUNDER — run the loop, then run it again.",
  steps: [
    {
      letter: "F",
      title: "Frame the outcome",
      body: "What business or user result are we trying to create?",
    },
    {
      letter: "O",
      title: "Outline the PRD",
      body: "What exactly should be built, and what should be left out?",
    },
    {
      letter: "U",
      title: "Unpack into issues",
      body: "What are the smallest useful tasks that can be tracked and reviewed?",
    },
    {
      letter: "N",
      title: "Narrow the context",
      body: "What does the agent need to know for this task, and what should it ignore?",
    },
    {
      letter: "D",
      title: "Define done",
      body: "What acceptance criteria, tests, or manual checks prove the task is complete?",
    },
    {
      letter: "E",
      title: "Execute with the agent",
      body: "Let the agent work on one focused task at a time with clear constraints.",
    },
    {
      letter: "R",
      title: "Review and record",
      body: "Summarize what changed, what decisions were made, what risks remain, and what comes next.",
    },
  ],
} as const;

export const host = {
  title: "About the host",
  name: "Vijay Rangan",
  role: "Founder, Tech Swamy Consulting",
  paragraphs: [
    "Vijay Rangan is the founder of Tech Swamy Consulting. He has spent over 11 years building software products and leading engineering work across startups, scale-ups, and high-growth technology companies.",
    "He has worked at ThoughtWorks, Postman, GoJek / GoPay, and Nubank, with experience across product engineering, distributed systems, APIs, microservices, platform architecture, and engineering leadership.",
    "Through Tech Swamy, Vijay helps startups bring stronger engineering thinking into product execution — from architecture and technical strategy to hands-on software delivery.",
  ],
  companies: ["ThoughtWorks", "Postman", "GoJek / GoPay", "Nubank"],
  ctaLabel: "Connect with Vijay on LinkedIn",
} as const;

export const techSwamy = {
  title: "About Tech Swamy",
  paragraphs: [
    "Tech Swamy Consulting helps startups and scale-ups build software with the kind of engineering discipline usually found inside mature product companies.",
    "The focus is not just writing code. It is helping teams turn business goals into reliable software systems through better architecture, clearer technical decisions, pragmatic implementation, and long-term product thinking.",
    "Tech Swamy works with founders and teams who want to build fast, but not carelessly.",
  ],
  ctaLabel: "Visit Tech Swamy",
} as const;

export const finalCta = {
  title: "Want to work better with AI agents?",
  body: "Join the upcoming online workshop and learn a practical workflow for turning ideas into specs, specs into issues, and issues into focused AI-assisted product work.",
  note: "Registration opens soon on Luma / LinkedIn — follow Vijay for the announcement.",
  secondaryLabel: "Follow Vijay on LinkedIn for updates",
} as const;

export const quotes = {
  goal: "The goal is not to become a developer. The goal is to give AI agents better work.",
  workbench: "Use the chat window as a workbench, not your source of truth.",
} as const;

export const footer = {
  title: "From Vibe Coding to Founder AgentOps",
  hostedBy: "Hosted by Vijay Rangan",
  org: "Tech Swamy Consulting",
} as const;
