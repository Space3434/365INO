import {
  Activity,
  BadgeCheck,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  Network,
  Rocket,
  Scale,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrainFront,
  Users
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "AI & Intelligent Automation",
    description:
      "Design responsible AI use cases, automate manual workflows, and create measurable operational lift.",
    icon: Bot
  },
  {
    title: "Enterprise Project & Program Management",
    description:
      "Lead complex technology portfolios with disciplined governance, transparency, and outcome focus.",
    icon: BriefcaseBusiness
  },
  {
    title: "Cloud Modernization",
    description:
      "Modernize platforms, data environments, and application delivery across secure cloud ecosystems.",
    icon: Cloud
  },
  {
    title: "Business Process Optimization",
    description:
      "Redesign operating models and workflows to reduce friction, waste, cycle time, and risk.",
    icon: Settings2
  },
  {
    title: "Data Analytics",
    description:
      "Turn enterprise data into dashboards, performance insight, and decision intelligence.",
    icon: BarChart3
  },
  {
    title: "Technology Strategy",
    description:
      "Align technology investment with mission, customer experience, security, and business value.",
    icon: Target
  },
  {
    title: "Digital Transformation",
    description:
      "Plan and deliver modernization programs that improve how people, systems, and data work together.",
    icon: Rocket
  },
  {
    title: "PMO Services",
    description:
      "Create right-sized governance, reporting, controls, and executive visibility for critical initiatives.",
    icon: Layers3
  },
  {
    title: "Agile Coaching",
    description:
      "Improve delivery habits, product thinking, planning rhythm, and continuous learning.",
    icon: Activity
  },
  {
    title: "Low-Code Platforms",
    description:
      "Accelerate business applications with Power Platform, workflow tools, and scalable guardrails.",
    icon: Blocks
  }
];

export const industries = [
  { title: "Government", icon: Landmark },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Veterans Affairs", icon: ShieldCheck },
  { title: "Financial Services", icon: Scale },
  { title: "Retail", icon: ShoppingBag },
  { title: "Manufacturing", icon: Building2 },
  { title: "Transportation", icon: TrainFront },
  { title: "Education", icon: GraduationCap },
  { title: "Non-Profit", icon: Users }
];

export const technologies = [
  "Artificial Intelligence",
  "Microsoft Copilot",
  "GitHub Copilot",
  "Azure",
  "AWS",
  "Power Platform",
  "SharePoint",
  "Pega",
  "ServiceNow",
  "SQL Server",
  "REST APIs",
  "DevSecOps",
  "GitHub",
  "Jira",
  "Confluence",
  "CI/CD"
];

export const why365 = [
  "Business First",
  "AI Ready",
  "Enterprise Experience",
  "Government Expertise",
  "Vendor Neutral",
  "Trusted Advisors",
  "Agile Delivery",
  "Innovation Focused"
];

export const stats = [
  { value: 20, suffix: "+", label: "Years Enterprise Leadership" },
  { value: 100, suffix: "+", label: "Technology Initiatives" },
  { value: 2, suffix: "x", label: "Government & Commercial Focus" },
  { value: 365, suffix: "", label: "AI Ready Transformation Focus" }
];

export const caseStudies = [
  {
    title: "AI Readiness Roadmap",
    challenge:
      "A public-sector organization needed a pragmatic path to evaluate AI opportunities without increasing operational risk.",
    solution:
      "365INO structured discovery workshops, prioritized automation candidates, and defined governance for responsible adoption.",
    outcome:
      "Leadership gained a sequenced roadmap for pilots, controls, workforce enablement, and investment decisions.",
    metrics: ["Illustrative: 30% faster intake triage", "Illustrative: 5 pilot use cases prioritized", "Illustrative: 90-day execution plan"]
  },
  {
    title: "Enterprise Portfolio Visibility",
    challenge:
      "Executives lacked consistent insight into program health, blockers, dependencies, and delivery tradeoffs.",
    solution:
      "365INO designed a right-sized PMO operating model, reporting cadence, and executive dashboard framework.",
    outcome:
      "Decision makers could spot risk earlier, coordinate cross-team work, and focus meetings on outcomes.",
    metrics: ["Illustrative: 40% reduction in status prep time", "Illustrative: 12 portfolio indicators", "Illustrative: weekly leadership rhythm"]
  },
  {
    title: "Cloud Workflow Modernization",
    challenge:
      "Manual request routing and legacy collaboration patterns were slowing service delivery.",
    solution:
      "365INO mapped the process, redesigned handoffs, and recommended low-code automation with secure data practices.",
    outcome:
      "Teams received a practical modernization blueprint for workflow automation and scalable reporting.",
    metrics: ["Illustrative: 25% fewer manual handoffs", "Illustrative: 3 priority workflows", "Illustrative: role-based dashboard concept"]
  }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Clarify mission needs, stakeholder priorities, existing systems, and measurable outcomes."
  },
  {
    title: "Design",
    description: "Shape the roadmap, architecture, operating model, and delivery governance."
  },
  {
    title: "Deliver",
    description: "Execute in focused increments with transparent decisions, risk management, and adoption support."
  },
  {
    title: "Improve",
    description: "Measure value, refine workflows, strengthen controls, and expand what works."
  }
];

export const platformIcons = [Sparkles, Cloud, Database, GitBranch, Code2, Network, LineChart, BadgeCheck];
