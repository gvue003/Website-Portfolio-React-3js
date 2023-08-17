import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  python,
  energy1,
  ai1,
  webdev1,
  security1,
  brain,
  threejswp,
  reactandthreewp,
  threejs2,
  vuejs,
  firebase,
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
    title: "Open Source Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / Machine Learning Developer",
    icon: brain,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs2",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "threejs2",
    icon: threejs2,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: webdev1,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Vue.js, and Javascript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an interactive product configurator using Three.js to allow users to customize and visualize products in real-time.",
    ],
  },
  {
    title: "AI / Machine Learning Developer",
    icon: ai1,
    iconBg: "#383E56",
    date: " Dec 2022 - Present",
    points: [
      "Utilized Deep Learning frameworks such as TensorFlow or PyTorch to design, train neural networks for image classification, and natural language processing tasks.",
      "Collaborating with AI / ML developers on developing systems using collaborative filtering and content-based approaches for user experiences",
      "Performed data cleaning, handling missing values, outliers, and noisy data to ensure high-quality input for machine learning models.",
    ],
  },
  {
    title: "QA Tester",
    company_name: "Express Energy",
    icon: energy1,
    iconBg: "#383E56",
    date: "Sept 2022 - Nov 2022",
    points: [
      "Identified, documented, and reported defects using issue tracking tools like Jira including clear and concise reproduction steps and screenshots.",
      "Collaborated with developers to verify defect fixes and enhancements, ensuring that issues were resolved according to specifications and user requirements.",
      "Designed and implemented automated test scripts using testing frameworks like Selenium and Appium.",
    ],
  },
  {
    title: "Supervisor Security Guard",
    company_name: "Securitas",
    icon: security1,
    iconBg: "#E6DEDD",
    date: "May 2020 - Sept 2022",
    points: [
      "Supervising the security staff, including new hires, and training.",
      "Monitoring building access and identified all customers and employees .",
      "Maintain daily logs of irregularities such as equipment, property damage, or theft.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ThreeJS",
    description:
      "Employing the versatility of JavaScript in conjunction with the robust capabilities of Three.js, my project demonstrates a sophisticated implementation of interactive 3D graphics.",
    tags: [
      {
        name: "javascript",
        color: "",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: threejswp,
    source_code_link: "https://github.com/gvue003/threejs_portfolio",
  },
  {
    name: "Web Developer Portfolio",
    description:
      "My project seamlessly integrates the dynamic user interface capabilities of React.js with the immersive 3D rendering functionalities of Three.js to create a captivating and interactive web experience.",
    tags: [
      {
        name: "javascript",
        color: "",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: reactandthreewp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
