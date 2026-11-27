// ============================================================
// portfolioData.js — Single source of truth for all content
// This one file controls ALL the text and links on the website.
// ============================================================

// ── Personal identity ──────────────────────────────────────
export const personalInfo = {
  name: "Kommindala Ramoji",
  firstName: "Kommindala Ramoji",
  brandName: "Kommindala Ramoji",
  title: "Python Full Stack Developer",
  location: "Puttur, India",
  phone: "+917013466435",
  emails: {
    primary: "ramojikommindala20@gmail.com",
    secondary: "",
  },
  summary:
    "BTech graduate and aspiring software developer with a strong interest in Java, Python, Full Stack Development, and AI.",
  resumeUrl: "/Ramoji_Resume.pdf", // put the PDF inside /public
};

// ── TAP Academy — footer credit ────────────────────────────
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ── Social links ───────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/Kommindala-Ramoji",
  linkedin: "https://www.linkedin.com/in/ramoji-kommindala",
  instagram: "https://www.instagram.com/ramojikommindala",
};

// ── Hero section ───────────────────────────────────────────
export const heroContent = {
  greeting: "Hi, I'm Kommindala Ramoji",
  titleHighlight: "Python Full Stack Developer",
  subtitle:
    "Building robust web applications with Python, Java, and React — eager to solve real-world problems with clean code.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:ramojikommindala20@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ramoji_Resume.pdf" },
};

// ── About section ──────────────────────────────────────────
export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Kommindala Ramoji</span>, a BTech graduate and aspiring Python Full Stack Developer based in Puttur, India. I have hands-on experience with Java, Python, C++, React, and databases, and I am passionate about building clean, efficient web applications. Currently, I am sharpening my skills through the placement training program at TAP Academy, while actively seeking opportunities to contribute as a software developer.`,
  techStack: ["Java", "Python", "React", "AI"],
};

// ── Process / how I work ───────────────────────────────────
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach combining research, design, development, and deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I study the problem, gather requirements, and research the best tools and technologies to build the solution.",
    },
    {
      number: "02",
      title: "Design",
      text: "I plan the architecture, design the database schema, and create wireframes for a clean user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I write clean, modular code using Python, Java, and React, following best practices and version control.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test thoroughly, fix bugs, optimise performance, and deploy the application for real-world use.",
    },
  ],
  endText: "Ready to ship!",
};

// ── Technical skills ───────────────────────────────────────
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "C++" },
        { name: "JavaScript" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML & CSS" },
        { name: "React.js" },
        { name: "Tailwind CSS" },
        { name: "Spring Boot" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "Oracle SQL" }],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub" },
        { name: "Maven" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
      ],
    },
  ],
};

// ── Leadership & activities ────────────────────────────────
export const leadershipList = [
  {
    title: "National Cadet Corps (NCC)",
    description:
      "Served as NCC Corporal, leading cadets in marching drills, parade commands, and event coordination. Earned NCC 'A' Certificate.",
    role: "NCC Corporal",
    badge: "Leadership",
  },
  {
    title: "Department Coding Competition",
    description:
      "Participated in department-level coding competitions and secured first place, demonstrating strong problem-solving skills.",
    role: "Participant & Winner",
    badge: "Achievement",
  },
  {
    title: "College Project Expo",
    description:
      "Presented a team project at the college project expo and secured third place among competing teams.",
    role: "Team Member",
    badge: "Innovation",
  },
];

// ── Internships / experience ───────────────────────────────
export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Python Full Stack Intern",
    duration: "2026 – Present",
    skills: [
      "Python Development",
      "Web Development",
      "Database Management",
      "AI Fundamentals",
    ],
    tech: ["Python", "React", "MySQL", "AI"],
  },
  {
    organization: "SkillDzire",
    role: "Java Full Stack Developer Intern",
    duration: "Dec 2025 – Mar 2026",
    skills: [
      "Full Stack Development",
      "Java Programming",
      "OOP",
      "Database Management",
      "Problem-Solving",
      "Team Collaboration",
    ],
    tech: ["Java", "JDBC", "MySQL", "HTML", "CSS", "JavaScript", "Spring Boot"],
  },
];

// ── Soft skills ────────────────────────────────────────────
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Led and coordinated cadets in NCC, building strong teamwork across diverse groups.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Won first place in a department coding competition by breaking down complex algorithmic challenges.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Transitioned from Java Full Stack to Python Full Stack, quickly adapting to new frameworks and tools.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balanced internship responsibilities, competitive programming, and NCC duties effectively.",
  },
];

// ── Projects ───────────────────────────────────────────────
export const projects = [
  {
    id: "federated-learning",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Federated Learning Security with Blockchain",
    description:
      "Developed a secure federated learning system that detects and mitigates model poisoning attacks using blockchain-based verification and reputation mechanisms, improving the reliability of collaborative machine learning.",
    techTags: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Blockchain",
    ],
    links: {
      github: "https://github.com/Kommindala-Ramoji/Academic_Project",
      demo: "",
    },
    isFlagship: true,
  },
];

// ── Certificates (optional bonus section) ──────────────────
export const certificates = {
  featured: [
    { name: "NCC 'A' Certificate", issuer: "National Cadet Corps", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/ramoji-kommindala",
};

// ── Education ──────────────────────────────────────────────
export const education = {
  degree: "B.Tech",
  institution: "Siddharth Institute of Engineering and Technology",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

// ── Footer ─────────────────────────────────────────────────
export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Java · Python · React · AI",
    "Building scalable web applications",
  ],
  credential: "B.Tech",
  copyright: `© ${new Date().getFullYear()} Kommindala Ramoji | Built with React`,
};

// ── EmailJS config (read from .env.local) ──────────────────
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
