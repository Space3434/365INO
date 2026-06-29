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

export const performanceStats = [
  { value: "15+", label: "Years Supporting Clients" },
  { value: "4+", label: "Prime Contracts" },
  { value: "Multiple", label: "Government Projects" },
  { value: "10+", label: "Commercial Clients" },
  { value: "$60M+", label: "Annual Project Portfolio Supported" },
  { value: "98%+", label: "Customer Satisfaction" },
  { value: "96%", label: "On-Time Delivery" },
  { value: "85%", label: "Repeat Clients" }
];

export const clientPortfolio = [
  {
    name: "Department of Veterans Affairs (VA)",
    sector: "Federal Government",
    role: "Subcontractor",
    location: "Bay Pines, FL",
    value: "$30M / Yr.",
    period: "FY 2015 - 2016 (2 Yrs.)",
    services: [
      "Program Management",
      "Business Analysis",
      "Scrum Master Support",
      "Requirements Development",
      "Agile Transformation",
      "IV&V",
      "Cloud Migration Support",
      "Database Support",
      "Test Management",
      "Team Leadership"
    ],
    outcomes: [
      "Supported migration from Waterfall to Agile",
      "Assisted with establishment of OBPI",
      "Improved claims processing efficiency",
      "Supported enterprise modernization initiatives"
    ],
    summary: "Mission-critical federal systems support with modernization and delivery leadership."
  },
  {
    name: "Systems Made Simple (Leidos)",
    sector: "Federal Healthcare IT",
    role: "Subcontractor",
    location: "Clearwater, FL",
    value: "$30M / Yr.",
    period: "FY 2011 - 2016 (4 Yrs.)",
    services: [
      "Agile Coaching",
      "Cloud Technologies",
      "Business Process Improvement",
      "Requirements Engineering",
      "Software Development",
      "IV&V",
      "Quality Assurance",
      "Release Management",
      "Enterprise Testing",
      "Technical Documentation"
    ],
    outcomes: [
      "Supported multiple enterprise releases",
      "Improved software quality",
      "Reduced implementation risk",
      "Increased stakeholder collaboration"
    ],
    summary: "Long-term engagement supporting enterprise releases and stakeholder confidence."
  },
  {
    name: "Woman I Am",
    sector: "Non-Profit Organization",
    role: "Prime Contractor",
    location: "Aurora, IL",
    value: "$250K / Yr.",
    period: "2017 - Present (Ongoing)",
    services: [
      "Website Development",
      "Technology Consulting",
      "Donation Platform",
      "Newsletter Distribution",
      "Business Analysis",
      "Technical Writing",
      "Requirements Development",
      "Testing",
      "Project Management",
      "IT Support"
    ],
    outcomes: [
      "Increased online donor engagement",
      "Improved digital communications",
      "Enhanced organizational branding",
      "Streamlined donation process"
    ],
    summary: "Long-term client relationship built on trust and continuous improvement."
  },
  {
    name: "Aubrey Organics",
    sector: "For Profit Company",
    role: "Prime Contractor",
    location: "Tampa, FL",
    value: "$500K / Yr.",
    period: "2015 - Present (Ongoing)",
    services: [
      "Cloud Migration",
      "Shopping Cart Modernization",
      "Purchase Order Automation",
      "Website Modernization",
      "Business Process Analysis",
      "Mobile Application Development",
      "Product Delivery",
      "Software Testing",
      "Technical Documentation",
      "Project Management"
    ],
    outcomes: [
      "Improved online customer experience",
      "Modernized order management",
      "Reduced manual processing",
      "Increased operational efficiency"
    ],
    summary: "Modern solutions that improved business operations and customer satisfaction."
  },
  {
    name: "Nichexl",
    sector: "For Profit Company",
    role: "Prime Contractor",
    location: "Orlando, FL",
    value: "$2M Total",
    period: "2018 - Present (Ongoing)",
    services: [
      "Shopify Integration",
      "Social Media Integration",
      "Website Development",
      "Mobile Optimization",
      "Business Analysis",
      "Technical Consulting",
      "Marketing Technology",
      "Requirements Engineering",
      "Software Testing",
      "Project Management"
    ],
    outcomes: [
      "Modernized ecommerce platform",
      "Increased digital presence",
      "Simplified online purchasing",
      "Improved customer engagement"
    ],
    summary: "Communication, delivery, and measurable business growth across commerce work."
  },
  {
    name: "Rover Wireless",
    sector: "For Profit Company",
    role: "Prime Contractor",
    location: "Riverview, FL",
    value: "$2M Total",
    period: "2015 - 2020 (5 Yrs.)",
    services: [
      "Secure Web Portal",
      "Remote Camera Management",
      "GPS Tracking Integration",
      "Web Development",
      "Mobile Applications",
      "Theft Prevention Platform",
      "Testing",
      "Technical Writing",
      "Project Management",
      "IT Support"
    ],
    outcomes: [
      "Expanded remote monitoring capability",
      "Improved asset security",
      "Enhanced customer usability",
      "Supported reliable field operations"
    ],
    summary: "Delivered a mission-critical solution that met operational requirements."
  }
];

export const demonstratedCapabilities = [
  "Business Analysis",
  "Requirements Engineering",
  "Enterprise Development",
  "Mobile Applications",
  "Cloud Migration",
  "Testing & QA",
  "IV&V & Compliance",
  "Project & Program Management",
  "Agile / Scrum Delivery",
  "Technical Documentation"
];

export const clientConfidenceReasons = [
  "Proven Government Experience",
  "Commercial Innovation",
  "Enterprise Architecture Expertise",
  "AI-Ready Solutions",
  "Agile Delivery",
  "Cloud Modernization",
  "End-to-End Project Delivery",
  "Business Process Optimization"
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
