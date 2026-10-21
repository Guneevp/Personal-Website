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
      name: "Temporary RAG",
      description:
        "An ephemeral RAG app for temporary research paper workspaces: users upload PDFs, chat against their corpus with page-level citations, while workspaces auto delete via TTL cleanup on AWS. Hybrid search with pgvector and BM25 matches both semantic meaning and keywords for more accurate chunk retrieval. Files are stored in AWS S3, responses are generated through Haiku from AWS Bedrock, and documents are chunked on markdown boundaries and indexed with metadata to maintain semantic structure.",
      skills: ["Python", "PostgreSQL", "AWS Bedrock"],
    },
    {
      name: "AMD Schola Godot Port",
      description:
        "A C++ RL environment framework and plugin for Godot using GDExtension. Implements lifecycle state machines, reset logic, action routing, and auto-reset modes, and connects Godot environments to Python training tools through a gRPC interface for live episode execution.",
      skills: ["Godot", "C++", "GDExtension", "gRPC"],
    },
    {
      name: "In Class Live QA Tool",
      description:
        "A real-time UofT Q&A platform in Next.js, securing a Fall rollout targeting 500+ students. Quality of life features like notifications and automatic question context, built with React Hooks, make it easier to monitor chat during lecture. Room events such as question posts, question upvotes, slide changes, and population count are streamed with WebSockets to minimize delay, averaging 40ms latency in 50+ student rooms during load testing.",
      skills: ["Next.js", "Typescript", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/gdgutm/ask_easy",
      video: "https://github.com/user-attachments/assets/00b9afc0-10c0-4039-a3a9-907df75e1eed",
    },
    {
      name: "Custom Unix Shell",
      description:
        "A custom Unix shell in C that replicates core Bash behavior — process creation, piping, and command parsing. I also implemented inter-process communication and a socket-based client–server chat system over local networks. Memory issues were tracked down with GDB and Valgrind until the project ran with zero reported leaks.",
      skills: ["C", "Make", "Git"],
      image: "/projects/mysh.png",
    },
  ],
  experience: [
    {
      company: "University of Toronto",
      title: "Teaching Assistant",
      dateRange: "Sept 2026 – Dec 2026",
      bullets: [
        "Leading weekly tutorials for 40+ students, Python fundamentals (control flow, functions, lists) for CSC108",
        "Authored weekly lab materials and slide decks in LaTeX to deepen understanding of 500+ students for CSC108",
      ],
      image: "/uoft.png",
    },
    {
      company: "UofT Machine Learning Club",
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
      title: "Web Developer",
      dateRange: "May 2026 – Aug 2026",
      bullets: [
        "Built a live queuing and logging system using Next.js, React, Docker, and PostgreSQL to improve structure in office hours by reducing crowding, and by keeping attendance logs in case of cheating in 500+ student class",
        "Worked in a team of 4, meeting weekly with supervising professor to discuss progress and decide next steps",
        "Wrote GitHub Action to automatically publish updates via self hosted runner to save time during development",
        "Integrated UofT SAML authentication for 15K+ students, eliminating all manual account creation",
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
