import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  morfitHome,
  threejs,
  morfit,
  penguin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Morfit",
    icon: morfit,
    iconBg: "#383E56",
    date: "Jan 2019 - December 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Morfit",
    icon: morfit,
    iconBg: "#383E56",
    date: "Jan 2019 - December 2020",
    points: [
      "Led the entire mobile development to build a personalized nutrition mobile app from scratch.",
      "Managed the product development lifecycle from planning to deployment.",
      "Integrated unit and end-to-end testing reaching 100% code coverage.",
      "Implemented CI/CD pipelines to automate the build and deployment process.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Morfit",
    icon: morfit,
    iconBg: "#383E56",
    date: "Jan 2020 - June 2023",
    points: [
      "Single-handedly developed and published to the Play Store and App Store five mobile applications for personalized nutritional coaching, achieving global user adoption",
      "Created and implemented a custom application architecture to support a large-scale mobile application",
      "Integrated product and attribution analytics with custom dashboards to track user engagement and retention",
      "Configured in app purchases and subscriptions to monetize the mobile applications",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Penguin Academy",
    icon: penguin,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Present",
    points: [
      "Developed and supported server side infrastructure for enterprise-grade clients.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Led the construction of the company’s server infrastructure, encompassing databases, authentication, and cloud infrastructure using NodeJS, Express, Typescript, GCP, AWS, Docker",
    ],
  },
];

const projects = [
  {
    name: "Morfit",
    description:
      "Mobile application for personalized nutrition coaching. Users can track their daily food intake, receive personalized feedback, and chat with their coach.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgress",
        color: "pink-text-gradient",
      },
    ],
    image: morfitHome,
    isMobile: true,
  },
];

export { services, technologies, experiences, projects };
