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
  starbucks,
  tesla,
  shopify,
  indocument,
  kundli,
  ltclinic,
  dailyhoroscope,
  walk,
  inthebrain,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Kotlin", icon: mobile },
  { title: "Java", icon: backend },
  { title: "Dart", icon: creator },
  { title: "Flutter", icon: backend },
  { title: "Android SDK", icon: web },
  { title: "iOS Development", icon: mobile },
  { title: "Kotlin Multiplatform Mobile", icon: creator },
  { title: "Jetpack Compose", icon: web },
  { title: "Firebase", icon: backend },
  { title: "REST APIs + BLE", icon: mobile },
  { title: "Xcode", icon: creator },
  { title: "Git + GitHub", icon: backend },
];

const technologies = [
  { name: "Kotlin", icon: typescript },
  { name: "Java", icon: javascript },
  { name: "Dart", icon: reactjs },
  { name: "Flutter", icon: redux },
  { name: "Android SDK", icon: html },
  { name: "iOS", icon: css },
  { name: "KMM", icon: threejs },
  { name: "Firebase", icon: nodejs },
  { name: "REST APIs", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Release Tools", icon: docker },
];

const experiences = [
  {
    title: "Software Development Engineer II",
    company_name: "Lifespark Technologies Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2024 - Jun 2026, IIT Bombay",
    points: [
      "Led end-to-end development of LT-Physio, a clinic app that enabled 100+ physiotherapy sessions through interactive rehab games, BLE-enabled medical device connectivity, and automated report generation.",
      "Built WALK and WALK_MINI, Flutter/KMM-based mobility and exercise-tracking apps using Kable BLE for real-time proprietary-device feedback, improving patient engagement by 35% across Android and iOS workflows.",
      "Designed responsive Jetpack Compose interfaces for clinical workflows, reducing UI defects by 25% during testing and improving usability for therapists and patients.",
      "Integrated Firebase for real-time data storage, analytics, user tracking, and secure synchronization; implemented Ktor Client to improve API response handling by 30%.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Spraxa Solutions Pvt. Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Aug 2024, Noida",
    points: [
      "Developed the Kundli astrology app, supporting 100K+ downloads with matchmaking, daily horoscopes, DOB-based birth charts, Kundli analysis, and compatibility scoring.",
      "Built prediction and planetary-analysis modules that increased user retention by 20% through personalized astrological insights and improved content relevance.",
      "Implemented Jetpack Compose screens and optimized UI rendering performance by 30%, contributing to stronger Play Store ratings and smoother user flows.",
      "Integrated Ktor Client for backend communication, reducing API call failures by 40% and improving reliability across horoscope and matchmaking features.",
      "Configured Firebase authentication, real-time sync, and push notifications, increasing daily active users by 15%.",
    ],
  },
  {
    title: "Junior Mobile Developer",
    company_name: "Great Future Technologies",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Apr 2023, Remote",
    points: [
      "Built and maintained Flutter mobile app screens, reusable widgets, and feature modules using Dart, Provider/BLoC patterns, RESTful APIs, Firebase services, and iOS development workflows.",
      "Collaborated remotely with product and backend teams to implement mobile features, resolve UI issues, and improve app stability across Android devices.",
      "Supported Git-based development workflows, code reviews, debugging, and release preparation while strengthening hands-on experience with mobile architecture and Agile delivery.",
    ],
  },
];

const educations = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "Guru Gobind Singh Indraprastha University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Delhi • 2019 - 2023 • GPA 9.0/10",
  },
];

const testimonials = [];

const projects = [
  {
    name: "LT-Clinic",
    description:
      "Physiotherapy clinic app for doctors and therapists with BLE medical-device connectivity, interactive rehab games, test modules, and automated reports.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Jetpack Compose", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: ltclinic,
    source_code_link: "https://play.google.com/store/apps/details?id=com.lifesparktech.clinic&hl=en",
  },
  {
    name: "WALK",
    description:
      "Mobility-tracking and exercise-guidance app for the WALK medical device, with real-time feedback, session tracking, and goal monitoring.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "KMM", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: walk,
    source_code_link: "https://play.google.com/store/apps/details?id=org.lifesparktech.walk_kt&pcampaignid=web_share",
  },
  {
    name: "Kundli",
    description:
      "Astrology app providing matchmaking, birth charts, personalized horoscopes, and DOB/location-based insights.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Provider", color: "pink-text-gradient" },
    ],
    image: kundli,
    source_code_link: "https://play.google.com/store/apps/details?id=com.durlabh.kundli&pcampaignid=web_share",
  },
  {
    name: "InTheBrain",
    description:
      "AI flashcards and quiz learning app with smart card generation, adaptive quizzes, spaced repetition, analytics, cloud sync, and in-app coin purchases.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Firebase Auth", color: "green-text-gradient" },
      { name: "AI Learning", color: "pink-text-gradient" },
    ],
    image: inthebrain,
    source_code_link: "https://play.google.com/store/apps/details?id=com.mkl.inthebrain.inthebrain&pcampaignid=web_share",
  },
  {
    name: "DailyHoroscope",
    description:
      "Lightweight horoscope app focused on fast content delivery, minimal UI, and reliable Firebase-backed updates.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Jetpack Compose", color: "green-text-gradient" },
      { name: "MVVM", color: "pink-text-gradient" },
    ],
    image: dailyhoroscope,
    source_code_link: "https://play.google.com/store/apps/details?id=com.mkl.dailyhoroscope&pcampaignid=web_share",
  },
  {
    name: "Indocument",
    description:
      "Utility app that converts images to PNG, JPG, JPEG, and PDF formats with optimized multi-file export support.",
    tags: [
      { name: "Kotlin", color: "blue-text-gradient" },
      { name: "Jetpack Compose", color: "green-text-gradient" },
      { name: "Material 3", color: "pink-text-gradient" },
    ],
    image: indocument,
    source_code_link: "https://play.google.com/store/apps/details?id=com.mkl.onehemlk&pcampaignid=web_share",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
