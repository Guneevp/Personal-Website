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
    linkedin: "https://www.linkedin.com/in/guneev-pannu/",
    github: "https://github.com/Guneevp",
  },
  aboutMe:
    "Some of the technologies I've learned are:",
  skills: [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "C",
    "React",
    "Next.js",
    "Spring Boot",
    "Docker",
    "Git",
    "PostgreSQL",
    "PyTorch",
  ],
  skillicons: [
    "java",
    "ts",
    "js",
    "py",
    "c",
    "react",
    "nextjs",
    "spring",
    "docker",
    "git",
    "postgresql",
    "pytorch",
  ],
  projects: [
    {
      name: "Blog Website Backend",
      description:
        "A week-long build of a Tumblr-style blog backend in Spring Boot and Java. I designed a relational PostgreSQL schema and wired it up with Spring Data JPA for efficient queries, then implemented REST APIs with full CRUD coverage verified in Postman. Authentication uses JWT with role-based authorization through Spring Security. The app is containerized with Docker for consistent local and production environments, and Lombok plus MapStruct cut boilerplate so the team could move faster.",
      skills: [
        "Spring Boot",
        "Java",
        "Maven",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
    },
    {
      name: "Paint Program",
      description:
        "A JavaFX paint application where users draw shapes and lines on a resizable canvas. The codebase follows MVC so features could be added quickly and the team could work in parallel under a one-week sprint. I built save and load for canvas state using regex and finite-state machines, and collaborated through many pull requests and bug fixes to get a stable release on time.",
      skills: ["Java", "JavaFX", "Maven", "Git"],
    },
    {
      name: "Custom Unix Shell",
      description:
        "A custom Unix shell in C that replicates core Bash behavior — process creation, piping, and command parsing. I also implemented inter-process communication and a socket-based client–server chat system over local networks. Memory issues were tracked down with GDB and Valgrind until the project ran with zero reported leaks.",
      skills: ["C", "Make", "Git"],
    },
    {
      name: "Python Syntax Checker",
      description:
        "A PyTorch model trained to flag simple Python syntax errors, reaching 92.5% accuracy on the test set. I created and labeled a 5,000-sample dataset using Python's ast module and tokenizer, then iterated on the model and evaluation pipeline in a Git-managed workflow.",
      skills: ["PyTorch", "Python", "Git"],
    },
  ],
  experience: [
    {
      company: "UofT Machine Learning Club",
      title: "Full-Stack Developer",
      dateRange: "September 2025 – Present",
      bullets: [
        "Developed and launched 11 web pages to showcase the talent of 400+ club members using Next.js and React.",
        "Integrated a Supabase backend so team rosters and content update automatically, cutting manual updates by about 80%.",
        "Revamped the site with Figma designs implemented in Shadcn and Tailwind CSS for a cohesive, modern look.",
        "Built flexible, reusable React components that reduced time to ship new pages by roughly 30%.",
      ],
    },
    {
      company: "UofT Robert Gillespie Academic Skills Centre",
      title: "Facilitated Study Group Leader",
      dateRange: "January 2025 – April 2025",
      bullets: [
        "Planned, advertised, and hosted facilitated study sessions for students in CSC148: Introduction to Computer Science.",
        "Used structured lesson plans and supplemental teaching techniques to guide groups of 20+ students at once.",
        "Incorporated feedback from coordinators and peers to refine sessions and teaching approach throughout the term.",
      ],
    },
  ],
  education: [
    {
      school: "University of Toronto",
      degree:
        "HBSc — Computer Science & Statistics (Major), Mathematics (Minor)",
      dateRange: "2024 – 2028",
      achievements: [
        "3.96 GPA; Dean's List Year 1, Year 2",
        "Volunteer note-taker",
        // "Relevant coursework: object-oriented development, data structures & algorithms, computer organization, software design, computer theory, Unix and systems programming, databases, parallel computing, statistics and probability",
      ],
    },
  ],
};
