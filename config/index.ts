import { ExperienceEntryType } from "@/types";

type Project = {
  title: string;
  description: string;
  href: string;
  github?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];

export const PROJECTS: Project[] = [
  {
    title: "Survey question generator tool with AI",
    description:
      "Generate survey questions with AI. You can create a survey and share it with your friends.",
    href: "https://survey-generator-ai.vercel.app/",
    github: "https://github.com/emexnord/survey_generator_ai",
    image: "/projects/survey-generator.png",
    tags: [
      "Next.js 15",
      "Tailwind CSS",
      "Prisma",
      "Gemini AI",
      "Server actions",
      "shadcn/ui",
      "NextAuth",
      "Socket.io",
    ],
    featured: true,
  },
  {
    title: "QR code generator",
    description: "QR code generator without registration. Fast and simple.",
    href: "https://emex-qrcode-generator.vercel.app",
    github: "https://github.com/emexnord/qrcode-generator",
    image: "/projects/mujqrkod-project.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "devtopia",
    description:
      "A discord place for Ethiopian developers to show their projects and help each other.",
    href: "https://devtopia-orcin.vercel.app/",
    github: "https://github.com/emexnord/devtopia-discord-community",
    image: "/projects/devtopia-project.png",
    tags: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Abduselam Arabian Mejlis",
    description:
      "E-commerce website for a company selling furniture and home decor.",
    href: "https://www.abduselam-arabianmejlis.com",
    github: "https://github.com/emexnord/abduselam-arabian_mejlis-web",
    image: "/projects/abd-mejlis2.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Golang", "MongoDB"],
    featured: true,
  },
  {
    title: "Near Coffee Website",
    description: "A promotion Website to a new Ethiopian coffee brand.",
    href: "/projects/near-coffee",
    github: "https://github.com/emexnord/Near-coffee-website",
    image: "/projects/near_coffee.png",
    tags: ["React", "HTML", "CSS"],
  },
  {
    title: "Automated class timetable generator",
    description:
      "A backend service for generating class timetables, for schools and universities.",
    href: "/projects/class_scheduling",
    github: "https://github.com/emexnord/class-scheduling-app",
    image: "/projects/class_scheduling.png",
    tags: ["Django", "DRF", "PostgresQL", "Algorithms"],
  },
  // {
  //   title: "uzx-elektro",
  //   description: "A website for an company using Loxone technology",
  //   href: "https://uzx-elektro.cz",
  //   image: "/projects/uzxelektro-project.png",
  //   tags: ["Next.js", "Tailwind CSS"],
  // },
  // {
  //   title: "uzx-security",
  //   description: "A website for a security company.",
  //   href: "https://uzx-security.cz",
  //   image: "/projects/uzxsecurity-project.png",
  //   tags: ["Next.js", "Tailwind CSS"],
  // },
  // {
  //   title: "Shortner Tool",
  //   description: "Fast and simple URL shortner tool.",
  //   href: "https://short.drie.cz",
  //   image: "/projects/short-project.png",
  //   tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  // },
  // {
  //   title: "my-story",
  //   description: "Share your stories with the world.",
  //   href: "https://story-sharing-app-nu.vercel.app/",
  //   github: "https://github.com/swajp/my-story",
  //   image: "/projects/mystory-project.png",
  //   tags: ["Next.js", "Tailwind CSS", "Framer motion", "Convex"],
  // },
  // {
  //   title: "LoRa",
  //   description: "LoRa network offered in Boskovice.",
  //   href: "https://lora.drie.cz",
  //   image: "/projects/lora-project.png",
  //   tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  // },
  // {
  //   title: "betterUML",
  //   description: "Create effectively and easy class diagrams.",
  //   href: "https://better-uml.vercel.app",
  //   image: "/projects/betteruml-project.png",
  //   tags: ["Next.js", "Tailwind CSS", "Framer motion"],
  // },
];

export const FOOTER_PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/emexnord",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/emran-kamil/",
  },
  {
    title: "X",
    href: "https://twitter.com/emexnord",
  },
  {
    title: "Telegram",
    href: "https://t.me/emex_nord",
  },
];

export const OTHERS = [
  {
    title: "Let's Connect and Discuss",
    href: "https://calendly.com/d/cnzg-r5m-fnb/get-to-know-me",
  },
];

//

export const TECH_STACK = [
  {
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    title: "Nest.js",
    href: "https://nestjs.com",
  },
  {
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    title: "Golang",
    href: "https://golang.org",
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    title: "Convex",
    href: "https://convex.dev",
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
];

export const RESEARCH_SYNC = {
  title: "ResearchSync - The Ultimate Collaboration Tool for Research Teams",
  description:
    "This is a powerful platform designed to make research easier and more collaborative. It helps teams manage tasks, collect and analyze data, and store all their resources in one place. ",
  href: "/research_sync",
  image: "/projects/research_sync.png",
  tags: ["Next.js", "Nest.js", "Tailwind CSS", "shadcn/ui"],
};

export const GLOBAL_LINK = {
  title: "Global-Link tutor",
  description:
    "Me and my friends created an innovative project to give highschool students a chance to learn from top students from all universties in Ethiopia.We are creating a platform where students can learn from each other and share their knowledge.",
  href: "#",
  image: "/projects/global_link1.png",
  tags: ["React Native", "Supabase", "Next.js", "Motion"],
};

export const experienceData: ExperienceEntryType[] = [
  {
    date: "Aug 2024 - Feb 2025",
    role: "Lead Software Engineer",
    companyUrl: "https://beta.wavic.pro/",
    company: "Wavic",
    description: "",
    roles: [
      "Built and optimized client side and backend services, ensuring scalability and efficiency.",
      "I utilize Docker to ensure consistent environments.",
      "I participate in code reviews, offering feedback to maintain high code standards.",
      "Integrate Stripe for seamless and secure subscription payments.",
    ],
    skills: ["Nest.js", "TypeScript", "Next.js", "AWS", "Docker", "SEO"],
  },
  {
    date: "Sep 2022 - Nov 2024",
    role: "Fullstack Developer",
    companyUrl: "https://www.4klabs.tech/",
    company: "4K-Labs",
    description:
      "4K Labs is a Research and development laboratory, where there are teams of curious innovators from different disciplines of study, working together in the focus area of AI, Robotics, embedded systems, tiny ML, and software development.",
    roles: [
      "Built, deployed, secured and maintained multiple web apps",
      "Played an active leadership role as a team lead, guiding and supporting new developers and interns",
      "Improved development practices, introducing automated testing and debugging.",
    ],

    skills: ["Next.JS", "Django", "TypeScript", "NestJs", "Supabase", "AWS"],
  },
  {
    date: "Jul 2024 - Oct 2024",
    role: "Backend Developer",
    companyUrl: "https://a2sv.org",
    company: "A2SV",
    description:
      "A2SV | Africa to Silicon Valley, backed by Google, trains top-tier software engineering talent, equipping them with world-class skills and connecting them to global opportunities at leading tech companies like Google, Palantir, Databricks, Bloomberg, and Meta.",
    roles: [
      " Designed and developed a back-end service using Golang and MongoDB. ",
      "Optimized MongoDB search strategies, improving user experience and search accuracy by around 40%.",
      "Automated backup, logging, and maintenance for multiple projects. .",
      "Collaborated with developers to create and maintain technical documentation.",
    ],

    skills: ["Golang", "Prisma", "Next.JS", "Prompt engineering", "MongoDB"],
  },
  {
    date: "Nov 2023 - Nov 2024",
    role: "Software Engineer Trainee",
    companyUrl: "https://a2sv.org",
    company: "A2SV",
    description: "",
    roles: [
      "Completed 1,000+ hours of rigorous training in advanced Data Structures, Algorithms, and problem-solving through A2SV's Education Program.",
      "Sharpened my essential soft skills, including communication, time management, and collaboration. ",
      "Successfully passed A2SV’s demanding internal technical interviews, demonstrating readiness to contribute at the highest levels of the industry.",
    ],

    skills: ["Next.JS", "TailwindCSS", "TypeScript", "Restful API"],
  },
];
