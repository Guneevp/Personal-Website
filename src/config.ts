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
      image: "/projects/springboot.png",
    },
    {
      name: "Paint Program",
      description:
        "A JavaFX paint application where users draw shapes and lines on a resizable canvas. The codebase follows MVC so features could be added quickly and the team could work in parallel under a one-week sprint. I built save and load for canvas state using regex and finite-state machines, and collaborated through many pull requests and bug fixes to get a stable release on time.",
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
    {
      name: "Python Syntax Checker",
      description:
        "A PyTorch model trained to flag simple Python syntax errors, reaching 92.5% accuracy on the test set. I created and labeled a 5,000-sample dataset using Python's ast module and tokenizer, then iterated on the model and evaluation pipeline in a Git-managed workflow.",
      skills: ["PyTorch", "Python", "Git"],
      image: "/projects/syntax.png",
    },
  ],
  experience: [
    {
      company: "University of Toronto",
      title: "Course Software Developer",
      dateRange: "May 2026 – Present",
      bullets: [
        "Architected a live queuing and logging system for office hours, securing a Fall rollout with 500+ students",
        "Automated student enrollment, saving 2+ hrs of manual entry for professors by building a CSV pipeline",
        "Developed a Cron based email reminder service for interested students, increasing office hour attendance by 15%",
        "Integrated UofT SAML authentication for up to 15K+ students, eliminating manual account creation",
        "Engineered a scheduling dashboard to automate the creation of 50+ sessions/semester with recurring rules",
      ],
      image: "/uoft.png",
    },
    {
      company: "University of Toronto",
      title: "Computer Science Education Research Assistant",
      dateRange: "May 2026 – Present",
      bullets: [
        "Authored weekly lab materials to deepen understanding of 500+ students for CSC108 Intro to Programming course",
        "Prepared weekly practice problems, removed 33% of existing redundant ones and replaced with self written",
        "Created MarkUs test cases to eliminate 100% of code correctness review for coding assignments.",
      ],
      image: "/uoft.png",
    },
    {
      company: "UofT Machine Learning Club",
      title: "Frontend Developer",
      dateRange: "September 2025 – May 2026",
      bullets: [
        "Shipped 11 web pages to publicize the talent of 400+ club members in Next.js",
        "Built flexible components that fetched content from database, reducing manual updates by 60%",
        "Developed a content management system through custom forms to allow the editing of pages by non-tech people",
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
        "HBSc — Computer Science & Statistics (Major), Mathematics (Minor)",
      dateRange: "2028",
      /** School logo / campus photo in `public/`. */
      image: "/uoft.png",
      description:
        "3.96 cGPA; Volunteer note-taker; took some pretty cool courses.",
    },
  ],
};
