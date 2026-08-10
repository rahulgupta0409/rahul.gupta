// export const profile = {
//   name: 'Rahul Gupta',
//   initial: 'R',
//   role: 'Software Engineer',
//   greeting: "Hi, I'm",
//   bio: "I build scalable, efficient, and user-friendly applications that solve real-world problems and deliver great user experiences.",
//   location: 'Bengaluru, India',
//   email: 'hello@rahulgupta.dev',
//   availability: 'Available for work',
//   resumeUrl: '#',
// };

// export const socials = [
//   { id: 'github', label: 'GitHub', href: 'https://github.com/', icon: 'github' },
//   { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
//   { id: 'mail', label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
// ];

// export const navLinks = [
//   { id: 'home', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'contact', label: 'Contact' },
// ];

// export const stats = [
//   { id: 'years', value: 3, suffix: '+', label: 'Years Experience' },
//   { id: 'projects', value: 15, suffix: '+', label: 'Projects Completed' },
//   { id: 'tech', value: 5, suffix: '+', label: 'Technologies' },
// ];

// export const aboutCopy =
//   "I'm a passionate software engineer with a strong foundation in building robust web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.";

// export const projects = [
//   {
//     id: 'taskflow',
//     title: 'TaskFlow',
//     description: 'A productivity app to manage tasks, teams, and deadlines efficiently.',
//     tags: ['React', 'Node.js', 'MongoDB'],
//     href: '#',
//     repo: '#',
//   },
//   {
//     id: 'devconnect',
//     title: 'DevConnect',
//     description: 'A platform for developers to connect, share, and grow together.',
//     tags: ['Next.js', 'TailwindCSS', 'Prisma'],
//     href: '#',
//     repo: '#',
//   },
//   {
//     id: 'codehub',
//     title: 'CodeHub',
//     description: 'A code snippet manager with syntax highlighting and cloud sync.',
//     tags: ['TypeScript', 'Express', 'PostgreSQL'],
//     href: '#',
//     repo: '#',
//   },
// ];

// export const skillGroups = [
//   {
//     id: 'frontend',
//     title: 'Frontend',
//     blurb: 'Interfaces that feel fast, accessible, and considered.',
//     icon: 'layout',
//     skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES2023)', 'HTML5 & CSS3'],
//   },
//   {
//     id: 'backend',
//     title: 'Backend',
//     blurb: 'APIs and services built to scale without drama.',
//     icon: 'server',
//     skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
//   },
//   {
//     id: 'data',
//     title: 'Data & Infra',
//     blurb: 'Schema design, persistence, and deployment pipelines.',
//     icon: 'database',
//     skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Docker'],
//   },
//   {
//     id: 'workflow',
//     title: 'Workflow',
//     blurb: 'Practices that keep teams shipping in sync.',
//     icon: 'git-branch',
//     skills: ['Git', 'CI/CD', 'Agile / Scrum', 'Figma'],
//   },
// ];

// export const experience = [
//   {
//     id: 'technova',
//     role: 'Senior Software Engineer',
//     company: 'TechNova Inc.',
//     period: '2023 — Present',
//     summary:
//       'Leading the core platform team, architecting the services that power TechNova’s customer dashboard.',
//     points: [
//       'Led migration to a micro-frontend architecture, cutting deploy time by 60%',
//       'Mentored a team of 4 engineers and drove the frontend code-review standard',
//       'Partnered with design to ship a component library adopted across 6 products',
//     ],
//   },
//   {
//     id: 'pixelforge',
//     role: 'Software Engineer',
//     company: 'PixelForge Labs',
//     period: '2022 — 2023',
//     summary: 'Built and shipped full-stack features for a fast-growing SaaS analytics product.',
//     points: [
//       'Built real-time analytics dashboards used by 10k+ weekly active users',
//       'Reduced API response times by 40% through query and caching improvements',
//       'Introduced automated end-to-end testing, reducing regression bugs by 30%',
//     ],
//   },
//   {
//     id: 'brightstack',
//     role: 'Frontend Developer Intern',
//     company: 'BrightStack Solutions',
//     period: '2021 — 2022',
//     summary: 'Started my career building marketing sites and internal tools in React.',
//     points: [
//       'Rebuilt the marketing site in React, improving Lighthouse performance by 35%',
//       'Collaborated with a small team to ship internal tooling used company-wide',
//     ],
//   },
// ];

// export const contactChannels = [
//   {
//     id: 'email',
//     label: 'Email',
//     value: profile.email,
//     href: `mailto:${profile.email}`,
//     icon: 'mail',
//     action: 'copy',
//   },
//   {
//     id: 'github',
//     label: 'GitHub',
//     value: '@rahulgupta',
//     href: 'https://github.com/',
//     icon: 'github',
//     action: 'link',
//   },
//   {
//     id: 'linkedin',
//     label: 'LinkedIn',
//     value: 'in/rahulgupta',
//     href: 'https://linkedin.com/',
//     icon: 'linkedin',
//     action: 'link',
//   },
// ];



export const profile = {
  name: 'Rahul Gupta',
  initial: 'R',
  role: 'Backend Developer',
  greeting: "Hi, I'm",
  bio: "I build scalable backend systems in Java, Spring Boot, and Go — microservices, REST and GraphQL APIs, and the AWS infrastructure that keeps them running.",
  location: 'Brussels, Belgium',
  email: 'rahulguptaharsh081218@gmail.com',
  availability: 'Open to opportunities', // TODO: confirm — you're currently at Infosys
  resumeUrl: '#', // TODO: link your PDF résumé
};

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/', icon: 'github' }, // TODO: your GitHub URL
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahul-gupta-694a60194/',
    icon: 'linkedin',
  },
  { id: 'mail', label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { id: 'years', value: 4, suffix: '+', label: 'Years Experience' },
  { id: 'tech', value: 20, suffix: '+', label: 'Technologies' },
  { id: 'certs', value: 6, suffix: '', label: 'Certifications' },
];

export const aboutCopy =
  "I'm a software engineer with over four years of professional experience, currently building backend services out of Brussels. Most of my work lives in Spring Boot and Go — designing microservices, modelling data across PostgreSQL, MongoDB, and Cosmos DB, and shipping to AWS with Docker and Liquibase in the pipeline. I've worked on the frontend side too, which helps when a problem sits in the seam between the two.";

// TODO: replace with real work. Shape:
// { id, title, description, tags: [], href, repo }
export const projects = [];

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Services designed to stay predictable under load.',
    icon: 'server',
    skills: [
      'Java 8+',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data',
      'Golang',
      'Gin',
      'Microservices',
      'REST APIs',
      'GraphQL',
      'JUnit',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    blurb: 'Schema design and persistence across SQL and document stores.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Azure Cosmos DB', 'JDBC', 'Liquibase'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    blurb: 'Deployment, observability, and on-call tooling.',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Datadog', 'PagerDuty', 'CI/CD', 'Git'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Enough of the other side to bridge the gap.',
    icon: 'layout',
    skills: ['React', 'JavaScript', 'HTML5 & CSS3'],
  },
];

export const experience = [
  {
    id: 'infosys-analyst',
    role: 'Technology Analyst',
    company: 'Infosys',
    period: 'Apr 2025 — Present',
    location: 'Brussels, Belgium',
    summary:
      'Building and running backend services for a client engagement in Belgium.',
    points: [
      // TODO: 2–3 bullets — what you own, what you shipped, any numbers
    ],
  },
  {
    id: 'infosys-sse',
    role: 'Senior Software Engineer',
    company: 'Infosys',
    period: 'Apr 2024 — Apr 2025',
    location: 'Bengaluru, India',
    summary:
      'Designed and delivered Spring Boot and Go microservices, with ownership of data modelling and deployment.',
    points: [
      // TODO
    ],
  },
  {
    id: 'infosys-swe',
    role: 'Software Engineer',
    company: 'Infosys',
    period: 'Mar 2022 — Apr 2024',
    location: 'Bengaluru, India',
    summary:
      'Started in backend development, working across REST APIs, relational and document databases, and CI/CD.',
    points: [
      // TODO
    ],
  },
  {
    id: 'bluebells',
    role: 'Summer Trainee',
    company: 'Bluebells Telesolutions Pvt. Ltd.',
    period: 'Apr 2021 — Jun 2021',
    location: 'New Delhi, India',
    summary: 'Three-month training placement during my final year of engineering.',
    points: [],
  },
  {
    id: 'aerial-telecom',
    role: 'Summer Intern',
    company: 'Aerial Telecom Solutions Pvt. Ltd.',
    period: 'Jun 2019 — Jul 2019',
    location: 'New Delhi, India',
    summary: 'Early internship in telecom systems while studying electronics engineering.',
    points: [],
  },
];

export const education = [
  {
    id: 'ggsipu',
    degree: 'B.Tech, Electronics Engineering',
    school: 'Guru Gobind Singh Indraprastha University',
    period: '2017 — 2021',
  },
];

export const certifications = [
  { id: 'aws-dva', name: 'AWS Certified Developer — Associate', issuer: 'Amazon Web Services' },
  { id: 'java-se8', name: 'Infosys Certified Java SE8 Developer', issuer: 'Infosys' },
  { id: 'spring-depth', name: 'Spring: Framework in Depth', issuer: '' },
  { id: 'cpp-advanced', name: 'C++: Advanced Topics', issuer: '' },
  { id: 'networking', name: 'The Bits and Bytes of Computer Networking', issuer: 'Google' },
  { id: 'gtsf', name: 'Google Technical Support Fundamentals', issuer: 'Google' },
];

// TODO: swap every bracketed field for the real person's name/quote before
// this goes live — get their OK first. `photo` is optional (path to an
// image, e.g. from src/assets/images); leave it null/undefined and the card
// falls back to a generic avatar. Kept to 4 across the categories you asked
// for (manager/colleague from past roles, a client, a friend) — trim, keep,
// or reorder freely.
export const testimonials = [
  {
    id: 'manager-brussels',
    relationship: 'Manager',
    quote:
      '[Add a short quote from your manager or lead on the Brussels engagement — what have you owned, what made you reliable to hand things to?]',
    name: '[Name Surname]',
    role: '[Their role], Infosys — Brussels engagement',
    photo: null,
  },
  {
    id: 'colleague-bengaluru',
    relationship: 'Colleague',
    quote:
      '[Add a quote from a teammate or manager during your Senior Software Engineer stint in Bengaluru — a specific project or habit they noticed lands well.]',
    name: '[Name Surname]',
    role: '[Their role], Infosys — Bengaluru',
    photo: null,
  },
  {
    id: 'client',
    relationship: 'Client',
    quote:
      '[Add a quote from a client you supported — what problem did you solve for them, and how did working with you feel from their side?]',
    name: '[Client name]',
    role: '[Their role], [Client company]',
    photo: null,
  },
  {
    id: 'friend',
    relationship: 'Friend',
    quote:
      '[Add a personal recommendation from a friend — what are you like to know or work alongside, outside of a formal review?]',
    name: '[Name Surname]',
    role: 'Friend',
    photo: null,
  },
];

export const contactChannels = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    action: 'copy',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@rahulgupta', // TODO: your actual handle
    href: 'https://github.com/',
    icon: 'github',
    action: 'link',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'in/rahul-gupta-694a60194',
    href: 'https://www.linkedin.com/in/rahul-gupta-694a60194/',
    icon: 'linkedin',
    action: 'link',
  },
];