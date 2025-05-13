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
  indocument,
  kundli,
  ltclinic,
  dailyhoroscope,
  walk
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
//Languages: , ,  ‬
//          ‭ Frameworks/Libraries: , , , ,‬
//          ‭ , , Flutter ‬
//          ‭ , , Flutter ‬
//          ‭ Architecture: , , OOP, Functional‬
//          ‭ Programming‬
//          ‭ Tools: ,  Actions, ,
const services = [
  {
    title: "Kotlin",
    icon: mobile,
  },
  {
    title: "Java",
    icon: backend,
  },
  {
    title: "Dart",
    icon: creator,
  },
  {
      title: "Flutter",
      icon: backend,
  },
  {
    title: "Android SDK",
    icon: web,
  },
  {
    title: "Jetpack",
    icon: web,
  },
  {
    title: "RxJava",
    icon: mobile,
  },
  {
    title: "Firebase",
    icon: backend,
  },
  {
    title: "MVVM, Clean Architecture",
    icon: creator,
  },
  {
    title: "Git, GitHub",
    icon: backend,
  },
  {
    title: "ADB, Proguard",
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
    title: "SDE -> SDE-II",
    company_name: "Lifespark Technologies Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2024- Present, IIT Bombay",
    points: [
      "Led development of LT-Physio, a clinic app from scratch, enabling over 100+ physiotherapy sessions with interactive rehab games, BLE-based medical device integration, and automated report generation.",
      "Built WALK and WALK_MINI, mobility and exercise tracking apps that improved patient engagement by 35%, using Kable (BLE) for real-time feedback from proprietary devices.",
      "Created PDI, an internal QA app that reduced device testing time by 40% through automated test flows and Bluetooth firmware validation.",
      "Designed responsive UIs with Jetpack Compose, improving user satisfaction and reducing UI bugs by 25% in clinical testing.",
      "Utilized Firebase for secure real-time data storage, user tracking, and analytics; integrated Ktor Client for 30% faster API response handling."
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Spraxa Solutions Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Aug 2024, Noida",
    points: [
      "Developed the Kundli astrology app, reaching over 100K downloads, with features like matchmaking, daily horoscopes, and DOB-based birth charts.",
      "Built core modules for Kundli analysis, compatibility scoring, and planetary predictions that increased user retention by 20%.",
      "Implemented Jetpack Compose for modern UI, improving rendering performance by 30% and user satisfaction ratings on the Play Store.",
      "Integrated Ktor Client for reliable and efficient backend communication, reducing API call failures by 40%.",
      "Used Firebase for real-time syncing, authentication, and push notifications, increasing daily active users by 15%.",
    ],
  }
];

const educations = [
  {
    title: "B.Tech-CSE",
    company_name: "GGSIPU",
    icon: starbucks,
    iconBg: "#383E56",
    date: "• Delhi • 2023 • 9.0",
  },
  {
      title: "Diploma",
      company_name: "Pusa",
      icon: starbucks,
      iconBg: "#383E56",
      date: "• Delhi • 2020 • 7.5",
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
    name: "LT-Clinic",
    description:
      "A clinic-focused physiotherapy app designed for doctors and therapists with features such as Bluetooth-enabled medical device connectivity, interactive rehab games, test modules, and automatic report generation.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Jetpack, Material3",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: ltclinic,
    source_code_link: "https://play.google.com/store/apps/details?id=com.lifesparktech.clinic&hl=en",
  },
  {
    name: "WALK",
    description:
      "Mobility tracking and exercise guidance apps designed to work with custom medical devices, providing real-time feedback, session tracking, and goal monitoring.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: walk,
    source_code_link: "https://play.google.com/store/apps/details?id=com.lifesparktech.walk&hl=en",
  },
  {
    name: "Kundli",
    description:
      "An astrology app offering detailed matchmaking, birth charts, and personalized horoscopes based on user DOB and location.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: kundli,
    source_code_link: "https://play.google.com/store/apps/details?id=com.durlabh.kundli&hl=en",
  },
  {
      name: "Dailyhoroscope",
      description:
        "A lightweight app delivering daily horoscopes to users, focused on minimal design and fast content delivery.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Material 3",
          color: "pink-text-gradient",
        },
      ],
      image: dailyhoroscope,
      source_code_link: "https://play.google.com/store/apps/details?id=com.mkl.dailyhoroscope&hl=en",
    },
    {
       name: "Indocument",
       description: "Utility app to convert images into PNG, JPG, JPEG, and PDF formats, supporting image optimization and multi-file export.",
          tags: [
            {
              name: "Kotlin",
              color: "blue-text-gradient",
            },
            {
              name: "Jetpack",
              color: "green-text-gradient",
            },
            {
              name: "Material 3",
              color: "pink-text-gradient",
            },
          ],
          image: indocument,
          source_code_link: "https://play.google.com/store/apps/details?id=com.mkl.onehemlk&hl=en",
       },
];

export { services, technologies, experiences, educations, testimonials, projects };
