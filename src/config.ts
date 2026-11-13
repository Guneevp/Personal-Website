export const siteConfig = {
  name: "Guneev Pannu",
  title: "Aspiring Software Engineer",
  description: "Portfolio website for Guneev Pannu",
  accentColor: "#F07167", // Vibrant Coral — highlights / clickable
  /** Page background (header, hero, body). */
  lightBackground: "#181115",
  /** Primary text color. */
  textColor: "#A2A8B9", // Cool Steel
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
    github: "https://github.com/Guneevp",
  },
  skills: [
    "Typescript",
    "C++",
    "Java",
    "Python",
    "Next.js",
    "React",
    "Node.js",
    "JUnit",
    "Spring Boot",
    "Agile",
    "Cursor",
    "Codex",
    "Git",
    "Docker",
    "PostgreSQL",
    "Postman",
    "Linux",
    "pytest",
    "Prisma",
    "PyTorch",
    "JavaFX",
  ],
  skillicons: [
    "ts",
    "cpp",
    "java",
    "py",
    "nextjs",
    "react",
    "nodejs",
    "java",
    "spring",
    "github",
    "vscode",
    "vscode",
    "git",
    "docker",
    "postgresql",
    "postman",
    "linux",
    "py",
    "prisma",
    "pytorch",
    "java",
  ],
  projects: [
    {
      name: "AskEasy - In Class Live QA Tool",
      description:
        "Architected a real-time UofT Q&A platform in Next.js securing a Fall rollout supporting 500+ students. Streamlined real time events using WebSockets to minimize delay in room events in 50+ student rooms, achieving average latency of 40ms during load test. Implemented notifications and automatic question context with React Hooks for monitoring chats during lecture.",
      skills: ["Next.js", "Typescript", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/gdgutm/ask_easy",
      video: "https://github.com/user-attachments/assets/00b9afc0-10c0-4039-a3a9-907df75e1eed",
    },
    {
      name: "SciContext – RAG Agent",
      description:
        "Built a RAG-powered query engine to help researchers parse scientific documents and research papers. Implemented hybrid search using pgvector and BM25, resulting in an 85% accuracy on a benchmark dataset. Used section aware chunking to preserve additional context between headers and chunks. Documents are chunked on markdown boundaries and indexed with meta data to better maintain semantic structure for better retrieval.",
      skills: ["Python", "PostgreSQL", "AWS Bedrock"],
    },
    {
      name: "Mysh – Linux Shell",
      description:
        "Built a C/POSIX Unix shell with pipelines, signal handling, and background-process management. Implemented seven built-ins: echo, ls, cd, cat, wc, ps, and kill, mirroring core Unix workflows. Added TCP client/server commands supporting 50+ concurrent clients across five milestones covering files, pipelines, signals, and networking.",
      skills: ["C", "Systems Programming", "POSIX"],
      image: "/projects/mysh.png",
    },
    {
      name: "AMD Schola Godot Port",
      description:
        "A C++ RL environment framework and plugin for Godot using GDExtension. Implements lifecycle state machines, reset logic, action routing, and auto-reset modes, and connects Godot environments to Python training tools through a gRPC interface for live episode execution.",
      skills: ["Godot", "C++", "GDExtension", "gRPC"],
    },
    {
      name: "Blog Website Backend",
      description:
        "A week-long build of a Tumblr-style blog backend in Spring Boot and Java. I designed a relational PostgreSQL schema and wired it up with Spring Data JPA for efficient queries, then implemented REST APIs with full CRUD coverage verified in Postman. Authentication uses JWT with role-based authorization through Spring Security. The app is containerized with Docker for consistent local and production environments, and Lombok plus MapStruct cut boilerplate so the team could move faster.",
      skills: [
        "Spring Boot",
        "Java",
        "Maven",
        "Git",
        "PostgreSQL",
        "Docker",
      ],
      image: "/projects/springboot.png",
    },
    {
      name: "Paint Program",
      description:
        "A JavaFX paint application where users draw shapes and lines on a resizable canvas. The codebase follows MVC so features could be added quickly and the team could work in parallel under a one-week sprint. I built save and load for canvas state using finite state machines to achieve load times under 100 ms, and collaborated through many pull requests and bug fixes to get a stable release on time.",
      skills: ["Java", "JavaFX", "Maven", "Git"],
      image: "/projects/paint.png",
    },
    {
      name: "Python Syntax Checker",
      description:
        "A PyTorch model trained to flag simple Python syntax errors, reaching 92.5% accuracy on the test set. I created and labeled a 5,000-sample dataset using Python's ast module and tokenizer, then iterated on the model and evaluation pipeline in a Git-managed workflow.",
      skills: ["PyTorch", "Git"],
      image: "/projects/syntax.png",
    },
  ],
  experience: [
    {
      company: "University of Toronto",
      title: "Teaching Assistant",
      dateRange: "Sept 2026 – Dec 2026",
      bullets: [
        "Leading weekly tutorials for 40+ students, Python fundamentals (control flow, functions, lists) for CSC108",
        "Authored weekly lab materials and slide decks in Latex to deepen understanding of 500+ students for CSC108",
      ],
      image: "/uoft.png",
    },
    {
      company: "UofT Machine Learning Club (UTMIST)",
      title: "Product Manager",
      dateRange: "Sept 2026 – Present",
      bullets: [
        "Leading club website's migration to Payload CMS, replacing Google Forms and Git-push content updates with a single self-serve platform for 11 execs and 100+ applicants per year",
        "Interviewed all club VPs across engineering, research, academics, etc, to gather requirements for the website redesign, and combined input into a prioritized roadmap for the year.",
      ],
      image: "/utmist.svg",
    },
    {
      company: "Professor - University of Toronto",
      title: "Software Developer",
      dateRange: "May 2026 – Aug 2026",
      bullets: [
        "Built a live queuing system using Next.js and SQL, reducing crowding during office hours for 500+ students",
        "Integrated UofT SAML authentication for 15K+ students, eliminating manual account creation",
        "Wrote GitHub Action to automatically publish updates via self hosted runner to save time during development",
        "Worked in a team of 4, meeting weekly with supervising professor to discuss progress and decide next steps",
      ],
      image: "/uoft.png",
    },
    {
      company: "UofT Machine Learning Club",
      title: "Web Developer",
      dateRange: "Sept 2025 – May 2026",
      bullets: [
        "Shipped 11 web pages to publicize the talent of 400+ club members in Next.js",
        "Developed a content management system through custom forms to allow editing of pages by non-tech people",
        "Developed an interview dashboard system to streamline recruitment for 40+ applicants",
      ],
      image: "/utmist.svg",
    },
    {
      company: "UofT Robert Gillespie Academic Skills Centre",
      title: "Facilitated Study Group Leader",
      dateRange: "January 2026 – April 2026",
      bullets: [
        "Planned, advertised, and hosted facilitated study sessions for students in CSC148: Introduction to Computer Science.",
        "Used structured lesson plans and supplemental teaching techniques to guide groups of 20+ students at once.",
        "Incorporated feedback from coordinators and peers to refine sessions and teaching approach throughout the term.",
      ],
      image: "/uoft.png",
    },
  ],
  education: [
    {
      school: "University of Toronto",
      degree:
        "HBSc Double Major in Computer Science and Statistics, Math Minor",
      dateRange: "Sept 2024 – May 2028",
      /** School logo / campus photo in `public/`. */
      image: "/uoft.png",
      description:
        "3.96 GPA. Relevant Courses: Data Structures & Algorithms, Operating Systems, Systems Programming, Databases, Security",
    },
  ],
};
