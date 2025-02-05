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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  artsmiley,
  zapilio,
  stethup,
  photoPoint
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    company_name: "Jireh Software Solutions",
    icon: "https://jirehsol.b-cdn.net/images/brand/logo-black.png", // Add the appropriate icon
    iconBg: "#383E56",
    date: "May 2023 - January 2025",
    location: "Bengaluru, India",
    points: [
      "Worked on the successful development of web applications called Stethup.ai and Artsmiley, collaborating with a developer team for timely project delivery.",
      "Conducted regular code reviews to ensure high-quality, bug-free code in production and improved overall code quality by 40% through systematic code reviews and strategic refactoring.",
      "Collaborated in all phases of front-end development, including requirement analysis, visual and functional specification, overall design, and implementation.",
      "Collaborated with clients to understand their requirements and deliver customized solutions.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Zapilio",
    icon: "https://www.zapilio.com/wp-content/uploads/2022/05/zapilio-logo.svg", // Add the appropriate icon
    iconBg: "#E6DEDD",
    date: "August 2022 - April 2023",
    location: "Bengaluru, India",
    points: [
      "Created a responsive web application called Zapilio from scratch, ensuring it worked well and looked good on all devices.",
      "Collaborated with team members using GIT version control to organize modifications and assign tasks.",
      "Resolved state management challenges, optimizing application efficiency for a smooth user experience.",
      "Designed and constructed 30+ reusable components for application use, making valuable contributions to development.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ipangram Digital Services LLP",
    icon: "https://static.wixstatic.com/media/050e90_458e0e1517b24f82b9775d724e684fe9~mv2.png/v1/fill/w_95,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp_Image_2024-11-30_at_4_28_34_PM-removebg-preview.png", // Add the appropriate icon
    iconBg: "#383E56",
    date: "December 2021 - May 2022",
    location: "Surat, Gujarat",
    points: [
      "Created a web application called Bakekick with third-party API services using React, Node, Express, and MongoDB.",
      "Participated in Agile and Scrum processes, including sprint planning, daily standups, and backlog grooming.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "My UI and login and registration, including the API, were done perfectly by Rick, and I couldn't be happier with the end result!",
    name: "Itszargon",
    designation: "From",
    company: "Slovenia",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Tejas is a fantastic React.js developer! He built a seamless UI for our project, and his expertise in frontend development is remarkable.",
    name: "John Doe",
    designation: "CTO",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "The UI and functionality Tejas delivered exceeded our expectations. His React and Tailwind expertise helped us create a high-performing app.",
    name: "Sarah Lee",
    designation: "Product Manager",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    testimonial:
      "Tejas's ability to integrate APIs and build smooth authentication flows is commendable. Highly recommended for React projects!",
    name: "Michael Brown",
    designation: "Lead Engineer",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];




const projects = [
  {
    name: "Artsmiley",
    description:
      "A multi-role art marketplace supporting Superadmin, Artist, Gallery, Curator, Buyer, and Affiliate roles, offering tailored dashboards and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "material-ui",
        color: "purple-text-gradient",
      },
    ],
    image: artsmiley, // Replace with the actual image variable or URL
    source_code_link: "https://demo.artsmiley.com/",
  },
  {
    name: "Stethup",
    description:
      "A role-based platform with job postings for doctors, course management for medical students, and a networking module for healthcare professionals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-thunk",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
    ],
    image: stethup, // Replace with the actual image variable or URL
    source_code_link: "https://www.stethup.ai/",
  },
  {
    name: "Dheeraj Photo Point",
    description:
      "A photography portfolio website for a local photo studio, featuring an admin panel for managing photos and a client gallery.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
    ],
    image: photoPoint, // Replace with the actual image variable or URL
    source_code_link: "https://photo-point-six.vercel.app/",
  },
  {
    name: "Zapilio",
    description:
      "A portfolio website with an admin panel for uploading and managing images, along with a client gallery for a seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
    ],
    image: zapilio, // Replace with the actual image variable or URL
    source_code_link: "https://www.zapilio.com", // Update if Zapilio has a separate link
  },
];


export { services, technologies, experiences, testimonials, projects };
