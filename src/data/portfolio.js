import mohammadAkibPhoto from '../assets/images/Mohammad_Akib.jpeg';
import dheerajKumarPhoto from '../assets/images/Dheeraj_Kumar.jpeg';
import jatinTutejaPhoto from '../assets/images/Jatin_Kumar_Tuteja.jpeg';

export const profile = {
  name: 'Rahul Gupta',
  initial: 'R',
  role: 'Backend Developer',
  greeting: "Hi, I'm",
  bio: "I build scalable backend systems in Java, Spring Boot, and Go — microservices, REST and GraphQL APIs, and the AWS infrastructure that keeps them running.",
  location: 'Brussels, Belgium',
  email: 'rahulgupta250220@gmail.com',
  availability: 'Open to opportunities', // TODO: confirm — you're currently at Infosys
  resumeUrl: '#', // TODO: link your PDF résumé
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
  { id: 'years', value: 4.5, suffix: '+', label: 'Years Experience' },
  { id: 'tech', value: 20, suffix: '+', label: 'Technologies' },
  { id: 'certs', value: 6, suffix: '', label: 'Certifications' },
];

export const aboutCopy =
  "I'm a backend engineer with 4.5+ years building production systems in Java, Spring Boot, and Go — most recently architecting the Digital Key platform for Toyota Motors Europe, where I improved reliability by ~40% and cut infrastructure costs by ~60%. I work end-to-end across PostgreSQL, MongoDB, and AWS, with enough React to bridge into the frontend when a project needs it. Currently based in Brussels, Belgium.";

// TODO: replace with real work. Shape:
// { id, title, description, tags: [], href, repo }
export const projects = [
  // { id:"jkube", title:"Jkube", description:"", tags: [], href:"", repo:"" }
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
    period: 'Apr 2025 — Present',
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
    period: 'Apr 2024 — Apr 2025',
    location: 'Bengaluru, India',
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
];