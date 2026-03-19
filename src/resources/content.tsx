import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";

const person: Person = {
  firstName: "James Gabriele",
  lastName: "Torzar",
  name: "James Gabriele T.",
  role: "Information Technology Student | Aspiring Cloud and AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "james@4regab.dev",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&rsquo;s Newsletter</>,
  description: <>Updates on AI, cloud, and open-source projects</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/4regab",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/4regab/",
    essential: true,
  },
  {
    name: "Devto",
    icon: "devto",
    link: "https://dev.to/4regab",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, an Information Technology student building cloud, AI, automation, and full-stack web projects with Next.js, TypeScript, Python, AWS, and Google Cloud.`,
  headline: <></>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: <></>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Learn more about ${person.name}, an Information Technology student focused on cloud engineering, AI, automation, and modern web development.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        James is an Information Technology student with hands-on experience in
        cloud computing, AI, automation, and full-stack web development. He
        builds practical projects with Next.js, TypeScript, Python, AWS, and
        Google Cloud, with a focus on scalable applications, developer tools,
        and real-world problem solving.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Google Developer Groups on Campus PUP",
        timeframe: "Sep 2025 - Present",
        role: "Cloud Solutions Co-Lead",
        achievements: [
          <>
            Delivered workshops on Google Cloud Platform services, cloud
            architecture fundamentals, and deployment workflows for student
            developers.
          </>,
          <>
            Created technical learning materials and supported members in
            building and deploying cloud-based applications on Google Cloud.
          </>,
        ],
        images: [],
      },
      {
        company: "AWS Cloud Club PUP",
        timeframe: "Nov 2025 - Present",
        role: "Department of AI Associate",
        achievements: [
          <>
            Participated in AWS workshops and collaborative projects covering
            cloud infrastructure, serverless architecture, and AI/ML services.
          </>,
          <>
            Strengthened hands-on knowledge of AWS core services, deployment
            workflows, and cloud engineering best practices.
          </>,
        ],
        images: [],
      },
      {
        company: "Cisco NetConnect PUP - Manila",
        timeframe: "Nov 2025 - Present",
        role: "AI & Data Science Cadet",
        achievements: [
          <>
            Completed practical training in Python, data analysis, and data
            visualization for AI and data science use cases.
          </>,
          <>
            Applied analytical thinking to interpret datasets, communicate
            findings, and solve technical problems.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Polytechnic University of the Philippines",
        description: (
          <>
            Bachelor of Science in Information Technology, 2024 - 2028. Serves
            as Block President, coordinating class operations, representing
            student concerns, and supporting communication between students and
            faculty.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "",
        tags: [
          { name: "Python", icon: "python" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Node.js", icon: "nodejs" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "AWS", icon: "aws" },
          { name: "Google Cloud", icon: "gcp" },
          { name: "Supabase", icon: "supabase" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "Vercel", icon: "vercel" },
        ],
        images: [],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications & Achievements",
    items: [
      {
        name: "AWS Cloud Quest: Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        issued: "Feb 2026",
        link: "https://www.credly.com/badges/c9795c41-c541-4547-ad50-54adeb7982e6/linked_in_profile",
      },
      {
        name: "AI Engineer for Developers Associate",
        issuer: "DataCamp",
        issued: "Jan 2026",
        expires: "Jan 2028",
        credentialId: "AIEDA0018001634705",
        link: "https://www.datacamp.com/certificate/AIEDA0018001634705",
      },
      {
        name: "AI Fundamentals",
        issuer: "DataCamp",
        issued: "Jan 2026",
        credentialId: "AIF0025236341447",
        link: "https://www.datacamp.com/skill-verification/AIF0025236341447",
      },
      {
        name: "Python Essentials",
        issuer: "Cisco",
        issued: "Nov 2025",
        link: "https://www.credly.com/badges/01327980-b187-408a-ab11-0e8c1271aa95/public_url",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, cloud, and software development",
  description: `Articles and notes by ${person.name} on AI, cloud computing, and engineering projects`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: "Projects",
  description: `Portfolio projects in AI, cloud computing, automation, and full-stack web development by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/projects
  // All projects will be listed on the /home and /projects routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
