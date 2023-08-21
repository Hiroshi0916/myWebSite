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
  progummy,
  jfe,
  docomo,
  USC,
  tokyo,
  keio,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    link: "./resume/Resume_Hiroshi_Obata.pdf"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Software Engineer",
    company_name: "Progummy Inc./ Tokyo, Japan",
    icon: progummy,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
      "This company is an innovative startup specializing in providing a programming education platform. Customized from Scratch, a visual programming language specifically tailored for beginners.",
      "Developing and maintaining web product using React, TypeScript, JavaScript and other related technologies.",
      "Collaborating with CEO, and other developers to create high-quality products.",
      "Oversaw continuous platform enhancements through rigorous bug fixes.",
      "Prioritized and executed refactoring based on valuable user feedback and requests."
    ],
  },
  {
    title: "Network and Cloud Engineer/ Manager",
    company_name: "JFE Engineering/ Tokyo, Japan",
    icon: jfe,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Aug 2022",
    points: [
      "This company is an engineering firm based in Japan with 9,000 employees/ Revenue of ¥485.7 billion/ 20 overseas affiliates",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Network and Cloud Engineer/ Leader",
    company_name: "JFE Engineering/ Tokyo, Japan",
    icon: jfe,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "NTT DoCoMo, Inc./ Tokyo, Japan",
    icon: docomo,
    iconBg: "#383E56",
    date: "Apr 2009 - Mar 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];



const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const educations = [
  {
    title: "University of Southern California",
    major_name: "Master of Computer Science / Los Angeles, CA",
    icon: USC,
    iconBg: "#383E56",
    date: "Aug 2022 - Present(Expected Graduate: Dec 2024)",
    points: [
      "Grad School.",
    ],
  },

  {
    title: "The University of Tokyo",
    major_name: "Progummy Inc./ Tokyo, Japan",
    icon: tokyo,
    iconBg: "#383E56",
    date: "Apr 2007 - Mar 2009",
    points: [
      "Grad School.",
    ],
  },
  {
    title: "Keio University",
    major_name: "Progummy Inc./ Tokyo, Japan",
    icon: keio,
    iconBg: "#383E56",
    date: "Apr 2007 - Mar 2009",
    points: [
      "Grad School.",
    ],
  },
]

export { services, technologies, experiences, projects,educations };
