import mohammadAkibPhoto from '../assets/images/Mohammad_Akib.jpeg';
import dheerajKumarPhoto from '../assets/images/Dheeraj_Kumar.jpeg';
import jatinTutejaPhoto from '../assets/images/Jatin_Kumar_Tuteja.jpeg';
import jkubeLogo from '../assets/images/Jkube-logo.png';
import notificationPlatformLogo from '../assets/images/notification-platform.png';
import tpLimsLogo from '../assets/images/TP-lims.jpg';

export const profile = {
  name: 'Rahul Gupta',
  initial: 'R',
  role: 'Senior Software Engineer',
  greeting: "Hi, I'm",
  bio: "I build scalable backend systems in Java, Spring Boot, and Go — microservices, REST and GraphQL APIs, and the AWS infrastructure that keeps them running.",
  location: 'Brussels, Belgium',
  email: 'rahulgupta250220@gmail.com',
  phone: '+32 467 88 48 09',
  phoneHref: 'tel:+32467884809',
  availability: 'Open to opportunities', // TODO: confirm — you're currently at Infosys
  resumeUrl: '#', // TODO: link your PDF résumé
  // Custom domain (rahul-gupta.dev) isn't pointed at the worker yet — swap
  // websiteHref to the apex domain once DNS is set up; websiteLabel can stay.
  websiteLabel: 'www.rahul-gupta.dev',
  websiteHref: 'https://rahul-gupta.rahulguptaharsh081218.workers.dev',
};

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/rahulgupta0409', icon: 'github' }, // TODO: your GitHub URL
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rahul-gupta-694a60194/',
    icon: 'linkedin',
  },
  { id: 'mail', label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { id: 'website', label: 'Website', href: profile.websiteHref, icon: 'website' },
  { id: 'medium', label: 'Medium', href: 'https://medium.com/@rahulguptaharsh081218', icon: 'medium' },
  {
    id: 'substack',
    label: 'Substack',
    href: 'https://substack.com/@rahulgupta0409?r=1524yo&utm_medium=ios&utm_source=stories&shareImageVariant=blur',
    icon: 'substack',
  },
  { id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/rahul0409/', icon: 'leetcode' },
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
  { id: 'years', value: 5, suffix: '+', label: 'Years Experience' },
  { id: 'tech', value: 20, suffix: '+', label: 'Technologies' },
  { id: 'certs', value: 1725, suffix: '', label: 'Leetcode Rating' },
];

export const aboutCopy =
  "I'm a backend engineer with 5+ years building production systems in Java, Spring Boot, and Go — most recently architecting the Digital Key platform for Toyota Motors Europe, where I improved reliability by ~40% and cut infrastructure costs by ~60%. I work end-to-end across PostgreSQL, MongoDB, and AWS, with enough React to bridge into the frontend when a project needs it. Currently based in Brussels, Belgium.";

// Shape: { id, title, description, tags: [], logo, links: [{ label, href }] }
export const projects = [
  {
    id: 'eclipse-jkube',
    title: 'JKube (Eclipse) — Open Source Contribution',
    description:
      'Contributed to a cloud-native open-source project that simplifies containerization and deployment of Java applications to Kubernetes and OpenShift using Maven and Gradle.',
    tags: ['Kubernetes', 'OpenShift', 'Java', 'Maven', 'Gradle', 'Open Source'],
    logo: jkubeLogo,
    links: [{ label: 'GitHub', href: 'https://github.com/eclipse-jkube/jkube' }],
  },
  {
    id: 'notification-platform',
    title: 'Notification Platform',
    description:
      'Building an open-source, scalable messaging platform supporting notifications, Pub/Sub, and topic-based queues with end-to-end encrypted messaging.',
    tags: ['Pub/Sub', 'Notifications', 'End-to-End Encryption', 'Messaging Queues', 'Open Source'],
    logo: notificationPlatformLogo,
    links: [
      { label: 'GitHub', href: 'https://github.com/rahulgupta0409/notification-platform' },
    ],
  },
  {
    id: 'pathology-management-system',
    title: 'TP-LIMS - Pathology Management System',
    description:
      'Built an open-source Pathology Management System to streamline laboratory operations, including patient management, test processing, report generation, and efficient management of pathology workflows.',
    tags: ['GraphQL', 'React', 'Healthcare', 'Open Source'],
    logo: tpLimsLogo,
    links: [
      { label: 'Github', href: 'https://github.com/rahulgupta0409/tk-project-graphql-kickstart' },
      { label: 'UI', href: 'https://github.com/rahulgupta0409/tp-lims-ui' },
    ],
  },
];

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    // blurb: 'Services designed to stay predictable under load.',
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
    // blurb: 'Schema design and persistence across SQL and document stores.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Azure Cosmos DB', 'JDBC', 'Liquibase'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    // blurb: 'Deployment, observability, and on-call tooling.',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Datadog', 'PagerDuty', 'CI/CD', 'Git'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    // blurb: 'Enough of the other side to bridge the gap.',
    icon: 'layout',
    skills: ['React', 'JavaScript', 'HTML5 & CSS3'],
  },
];

export const experience = [
  {
    id: 'infosys-analyst',
    role: 'Technology Analyst',
    company: 'Toyota Motors Europe',
    period: 'Aug 2023 — Present',
    location: 'Brussels, Belgium',
    summary:
      'Building and running backend services for a client engagement in Belgium.',
    points: [
      // TODO: 2–3 bullets — what you own, what you shipped, any numbers
      'Architected and developed the Digital Key platform for Toyota Motors Europe, designing scalable microservices and driving key architectural decisions for a critical automotive capability.',
      'Improved platform reliability by ~40% by identifying architectural bottlenecks and implementing targeted improvements across services, infrastructure, and failure-handling mechanisms.',
      'Led capacity planning for the end-to-end infrastructure, analyzing traffic patterns, resource utilization, and scalability requirements to optimize infrastructure sizing and reduce operational costs by ~60%.',
      'Improved system performance and stability by investigating and resolving critical memory leaks across multiple microservices, reducing resource exhaustion and improving overall application efficiency.',
      'Performed production-level troubleshooting and RCA for high-impact performance and reliability issues, translating findings into long-term architectural and engineering improvements.',
      'Collaborated across development, infrastructure, and production-support teams to ensure scalability, reliability, observability, and operational readiness of the Digital Key ecosystem.',
    ],
  },
  {
    id: 'infosys-sse',
    role: 'Senior Software Engineer',
    company: 'First Group America',
    period: 'Apr 2022 — Aug 2023',
    location: 'Bengaluru, India (Remote)',
    summary:
      'Designed and delivered Spring Boot and Go microservices, with ownership of data modelling and deployment.',
    points: [
      // TODO
      'Developed and maintained Java/Spring Boot microservices, implementing scalable backend services and REST APIs for business-critical applications.',
      'Contributed to the React.js frontend, developing and integrating user-facing features with backend microservices to deliver end-to-end functionality.',
      'Collaborated with the DevOps team to provision and configure STG and Production environments, supporting deployment, environment setup, and release readiness.',
      'Improved application performance and scalability by identifying bottlenecks and optimizing service-level implementations and resource utilization.',
      'Enhanced service reliability and production stability through proactive monitoring, troubleshooting, root-cause analysis, and resolution of critical issues.',
      'Worked across development, frontend, and infrastructure teams to deliver reliable, scalable, and production-ready solutions.',
    ],
  },
  // {
  //   id: 'infosys-swe',
  //   role: 'Software Engineer',
  //   company: 'Infosys',
  //   period: 'Mar 2022 — Apr 2024',
  //   location: 'Bengaluru, India',
  //   summary:
  //     'Started in backend development, working across REST APIs, relational and document databases, and CI/CD.',
  //   points: [
  //     // TODO
  //   ],
  // },
  // {
  //   id: 'bluebells',
  //   role: 'Summer Trainee',
  //   company: 'Bluebells Telesolutions Pvt. Ltd.',
  //   period: 'Apr 2021 — Jun 2021',
  //   location: 'New Delhi, India',
  //   summary: 'Three-month training placement during my final year of engineering.',
  //   points: [],
  // },
  {
    id: 'aerial-telecom',
    role: 'Intern Software Engineer',
    company: 'Aerial Telecom Solutions Pvt. Ltd.',
    period: 'Jun 2019 — Oct 2019',
    location: 'New Delhi, India',
    summary: 'Early internship in telecom systems while studying electronics engineering.',
    points: [
      "Developed an automated invoice generation service using Java and Spring Boot, streamlining the generation of customer invoices. Designed dynamic invoice templates using Thymeleaf, integrating application data to generate structured and customized invoices.",
      "Implemented backend components and business logic with a focus on maintainability reliability and extensibility.",
      "Collaborated with the team to understand business requirements and translate them into functional software solutions.",
    ],
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
  {
    id: 'aws-dva',
    name: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    credentialUrl: 'https://www.credly.com/badges/b804438b-982e-452e-8327-2e05f0085de3/linked_in?t=s6j3kr',
  },
  { id: 'java-se8', name: 'Infosys Certified Java SE8 Developer', issuer: 'Infosys' },
  { id: 'spring-depth', name: 'Spring: Framework in Depth', issuer: '' },
  { id: 'cpp-advanced', name: 'C++: Advanced Topics', issuer: '' },
  { id: 'networking', name: 'The Bits and Bytes of Computer Networking', issuer: 'Google' },
  // { id: 'gtsf', name: 'Google Technical Support Fundamentals', issuer: 'Google' },
];

// TODO: swap every bracketed field for the real person's name/quote before
// this goes live — get their OK first. `photo` is optional (path to an
// image, e.g. from src/assets/images); leave it null/undefined and the card
// falls back to a generic avatar. Kept to 4 across the categories you asked
// for (manager/colleague from past roles, a client, a friend) — trim, keep,
// or reorder freely.
export const testimonials = [
  // {
  //   id: 'manager-brussels',
  //   relationship: 'Manager',
  //   quote:
  //     '[Add a short quote from your manager or lead on the Brussels engagement — what have you owned, what made you reliable to hand things to?]',
  //   name: '[Name Surname]',
  //   role: '[Their role], Infosys — Brussels engagement',
  //   photo: null,
  // },
  {
    id: 'colleague-bengaluru',
    relationship: "Lead",
    quote:
      "I worked with Rahul at Infosys and found him to be a quick learner and a dedicated teammate. He’s always eager to take on new challenges, puts in consistent effort, and brings a positive attitude to the team.",
    name: "Mohammad Akib",
    role: "Principal Software Engineer at Deltek | Ex-JAVA Developer at Compunnel Digital  | Ex-Specialist Programmer at Infosys",
    photo: mohammadAkibPhoto,
  },
  {
    id: 'client',
    relationship: 'Senior',
    quote:
      "Rahul is a talented full-stack developer and a great friend, with deep knowledge of Spring Boot, AWS, and various front-end and back-end technologies. Beyond his technical prowess, he is an excellent team player, always willing to support colleagues and collaborate effectively to achieve project goals. Got an Opportunity to work alongside him at Infosys. His hardworking nature and problem-solving abilities set him apart. He consistently goes the extra mile to deliver high-quality solutions and is always eager to learn and adapt to new challenges.",
    name: 'Dheeraj Kumar Daksh',
    role: 'Ex-MT (CS) at HAL (Ministry of Defence) | Ex-Specialist Programmer at Infosys',
    photo: dheerajKumarPhoto,
  },
  {
    id: 'friend',
    relationship: 'Senior',
    quote:
      "I worked with Rahul at Infosys. He is always ready to take new challenges and doesn’t give up easily. One thing I liked about him is that he is highly professional and takes work seriously. He has a friendly nature with his colleagues which is very appreciative in working environment.",
    name: "Jatin Kumar Tuteja",
    role: "AI/ML Engineer | Master of AI (Monash) | Python · PyTorch · LangChain · AWS | Building Production ML & GenAI Systems | Melbourne · Full Working Rights",
    photo: jatinTutejaPhoto,
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
    id: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: 'phone',
    action: 'copy',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@rahulgupta0409', // TODO: your actual handle
    href: 'https://github.com/rahulgupta0409',
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
  {
    id: 'website',
    label: 'Website',
    value: profile.websiteLabel,
    href: profile.websiteHref,
    icon: 'website',
    action: 'link',
  },
  {
    id: 'medium',
    label: 'Medium',
    value: '@rahulguptaharsh081218',
    href: 'https://medium.com/@rahulguptaharsh081218',
    icon: 'medium',
    action: 'link',
  },
  {
    id: 'substack',
    label: 'Substack',
    value: '@rahulgupta0409',
    href: 'https://substack.com/@rahulgupta0409?r=1524yo&utm_medium=ios&utm_source=stories&shareImageVariant=blur',
    icon: 'substack',
    action: 'link',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    value: 'u/rahul0409',
    href: 'https://leetcode.com/u/rahul0409/',
    icon: 'leetcode',
    action: 'link',
  },
];