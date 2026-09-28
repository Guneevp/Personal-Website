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
    "Java",
    "Python",
    "C",
    "Typescript",
    "React",
    "Node.js",
    "Junit",
    "Springboot",
    "Agile",
    "Next.js",
    "Git",
    "Docker",
    "PostgrsSQL",
    "Postman",
    "Linux",
    "Cursor",
    "pytest",
    "Prisma",
    "PyTorch",
    "JavaFX",
  ],
  skillicons: [
    "java",
    "py",
    "c",
    "ts",
    "react",
    "nodejs",
    "java",
    "spring",
    "github",
    "nextjs",
    "git",
    "docker",
    "postgresql",
    "postman",
    "linux",
    "vscode",
    "py",
    "prisma",
    "pytorch",
    "java",
  ],
  projects: [
    {
      name: "In Class Live QA Tool",
      description:
        "A real-time UofT Q&A platform in Next.js, securing a Fall rollout targeting 500+ students. Quality of life features like chat notifications and automatic question context, built with React Hooks, make it easier to monitor chat during lecture. Room events such as question posts, question upvotes, slide changes, and population count are streamed with WebSockets to minimize delay, averaging 40ms latency in 50+ student rooms during load testing.",
      skills: ["Next.js", "Typescript", "PostgreSQL", "Redis", "Docker"],
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
      name: "Custom Unix Shell",
      description:
        "A custom Unix shell in C that replicates core Bash behavior — process creation, piping, and command parsing. I also implemented inter-process communication and a socket-based client–server chat system over local networks. Memory issues were tracked down with GDB and Valgrind until the project ran with zero reported leaks.",
      skills: ["C", "Make", "Git"],
      image: "/projects/mysh.png",
    },
  ],
  experience: [
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
      company: "University of Toronto",
      title: "Software Engineer",
      dateRange: "May 2026 – Aug 2026",
      bullets: [
        "Built a live queuing and logging system using Next.js, React, Docker, and PostgreSQL to improve structure in office hours by reducing crowding, and by keeping attendance logs in case of cheating in 500+ student class",
        "Worked in a team of 4, meeting weekly with supervising professor to discuss progress and decide next steps",
        "Wrote GitHub Action to automatically publish updates via self hosted runner to save time during development",
        "Automated student enrollment, saving 2+ hrs of manual entry for professors by building a CSV pipeline",
        "Integrated UofT SAML authentication for 15K+ students, eliminating all manual account creation",
      ],
      image: "/uoft.png",
    },
    {
      company: "University of Toronto",
      title: "Teaching Assistant",
      dateRange: "Sept 2026 – Dec 2026",
      bullets: [
        "Will lead weekly tutorials for 40+ students, Python fundamentals (control flow, functions, lists) for CSC108",
        "Held 2 hours of office hours per week, walking students through their code so they could debug issues themselves",
      ],
      image: "/uoft.png",
    },
    {
      company: "University of Toronto",
      title: "Computer Science Research Assistant",
      dateRange: "May 2026 – June 2026",
      bullets: [
        "Authored course materials such as labs, slide decks, and practice questions in LaTeX under supervising professor",
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
