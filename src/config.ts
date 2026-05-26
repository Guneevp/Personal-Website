export const siteConfig = {
  name: "Guneev Pannu",
  title: "Aspiring Software Engineer",
  description: "Portfolio website for Guneev Pannu",
  accentColor: "#1d4ed8",
  /** Page background in light mode (header, hero, body). */
  lightBackground: "#faf9f7",
  /** Max width for content below the hero (CSS length, e.g. "42rem"). */
  contentMaxWidth: "42rem",
  /** Public URL for your headshot (e.g. `/profile.jpg` in `public/`). Leave empty to hide the hero photo. */
  heroPhoto: "/Headshot.jpg",
  /** Public URL to your PDF (e.g. put `resume.pdf` in `public/`). Remove or leave empty to hide the resume link in the hero bar. */
  resumePdf: "/Guneev Pannu Resume.pdf",
  /** Email, LinkedIn, GitHub, etc. icon size in pixels (Hero & Footer). */
  socialIconSize: 40,
  social: {
    email: "guneev.pannu@mail.utoronto.ca",
    linkedin: "https://www.linkedin.com/in/guneev-pannu-b00197311/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/GuneevP",
  },
  aboutMe:
    "A student at UofT. Always curious, always improving, and in love with Java, and the NextJS stacks but who also knows much more.",
  skills: ["Java", "Typescript", "Python", "C"],
  skillicons: ["java", "ts", "py", "c"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      github: "https://github.com/yourusername/aidevroundup",
      link: "https://aidevroundup.com/?ref=devportfolio",
      image: "/Headshot.jpg",
      // video: "/projects/aidevroundup.mp4",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      github: "https://github.com/yourusername/fullstackextensions",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      // image: "/projects/fullstackextensions.png",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      github: "https://github.com/yourusername/extensionkit",
      link: "https://extensionkit.io/?ref=devportfolio",
      // image: "/projects/extensionkit.png",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
