import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "Work and Publications",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];



 const workSamples = [
  {
  title: "SharkNinja – Mobile App Developer Internship",
  ppt: "https://www.canva.com/design/DAGry1TcFb4/9Jmiy95yEVCMAbfNLZejLA/view?embed",
  github: "https://github.com/priyankbagad/", // Add if you host any public sample repo
  desc: "Interning at SharkNinja as a Mobile App Developer, working on the SharkClean app with React Native, integrating Bluetooth-based robot controls, writing test automation, and collaborating in agile teams to enhance IoT-based home cleaning products.",
},
{
  title: "Tata Consultancy Services – Flutter Developer",
  ppt: "https://www.canva.com/design/DAGry4qcln4/JxkKZ0ieyyOIRD6bDsLIZg/view?embed",
  github: "https://github.com/priyankbagad/", // Add if you have code hosted
  desc: "Worked at TCS as a Flutter Developer on mobile banking applications for nationalized banks in India. Developed reusable UI components, improved app performance, and contributed to customer-centric banking solutions in fast-paced agile sprints.",
},

  {
  title: "Eventopia – A Utopia for Events",
  ppt: "https://www.canva.com/design/DAGdt0sSt6A/2BOEwRhSPSBHsZjVzB9-RQ/view?embed",
  github: "https://github.com/priyankbagad/eventopia",
  desc: "Eventopia is an event discovery and management platform featuring seamless Stripe payment integration and a user-friendly interface for both organizers and attendees."
  },

  {
  title: "QuickMed – A Medication Management System",
  ppt: "https://www.canva.com/design/DAGuGG2y0HA/WS9WzLocZchDwI6u1oeI0Q/view?embed",
  github: "https://github.com/priyankbagad/QuickMed",
  desc: "QuickMed is a smart medication reminder app that helps users manage their medication schedules by sending timely push notifications, improving adherence and promoting better health management."
  },

  {
  title: "HuskyTracks – Northeastern Lost & Found Portal",
  ppt: "https://www.canva.com/design/DAGmmZtdThY/CNLtPdvH4caEQz0_oUGOfg/view?embed",
  github: "https://github.com/priyankbagad/huskytracks",
  desc: "HuskyTracks is an all-in-one lost & found portal for Northeastern students, enabling item reporting, supervisor-based verification, role-based access, and real-time status updates for streamlined recovery."
  },
  {
  title: "HealthBridge – Smart Healthcare Appointment & ML Support System",
  ppt: "https://www.canva.com/design/DAGrHrQ32bE/4JK7j5uZe7bJX2KousIKYA/view?embed",
  github: "https://github.com/priyankbagad/healthbridge",
  desc: "HealthBridge is an intelligent healthcare appointment system with Skype-based doctor-patient consultations, ML-powered disease detection, mental health support, and genetic medicine recommendations."
  },
  {
  title: "Room & Mates – Roommate and Accommodation Management System",
  ppt: "https://www.canva.com/design/DAGrHkgJVbc/pvF2AHOjX49FxYoza1O8NQ/view?embed",
  github: "https://github.com/priyankbagad/room-and-mates",
  desc: "Room & Mates is a streamlined roommate and housing management platform with roommate matching, rent sharing, and scheduling features to simplify student and young professional housing needs."
  },
  {
    title: "MyBostonHood – Neighborhood Comparison Tool",
    ppt: "https://www.canva.com/design/DAGkEkq-yrg/uL4V4PJ_Gewp_zIq6koNLQ/view?embed",
    github: "https://github.com/esha112000/myBostonHood",
    desc: "Desktop Java app helping users compare Boston neighborhoods by rent, crime, schools, and green space. Uses custom HashMap for data storage, BST for sorting, and Stack for navigation. Empowers data-driven decisions.",
  },
  {
  title: "Modernizing the MBTA – A New Approach to Operations & Commuter Management",
  ppt: "https://www.canva.com/design/DAGrH9HTeyk/zF4DjbB8xW64w0j43pK8XQ/view?embed",
  github: "https://github.com/priyankbagad/", // Add if available
  desc: "Designed a Java Swing-based desktop application to modernize Boston’s MBTA operations by simulating commuter behavior, optimizing train scheduling, and reducing wait times. The tool models peak-hour congestion, integrates admin controls for data input, and visualizes operational metrics to support data-driven transit planning."  
  },
  {
    title: "SmartAssist – Neurodivergent Learner Support Tool",
    ppt: "https://www.canva.com/design/DAGWfXWbJHk/OlK-PX3Ar904W-LmXriwPA/view?embed",
    github: "https://github.com/esha112000/Coursera-SmartAssist",
    desc: "Designed to improve learning outcomes for neurodivergent students facing ADHD, autism, or dyslexia. Tackles cognitive overload and focus issues through personalized smart suggestions and interface improvements. Built for the Coursera Learning Platform Hackathon.",
  },
  {
  title: "Decoding Mental Health – ML-based Social Media Analysis",
  ppt: "https://www.canva.com/design/DAGrHo1hFLk/GMZuOttfzfAECDMTstvWOg/view?embed",
  github: "https://github.com/esha112000/MentalHealth-ML-SocialMedia",
  desc: "A machine learning-powered research project analyzing social media behavior to assess mental health. Calculates a mental health score based on content, offers personalized recommendations, and provides ethical insights. Future scope includes admin dashboards and enhanced indicators.",
  },
  {
  title: "Depression Detection using CNN & LSTM",
  ppt: "https://www.canva.com/design/DAGrHivWvg8/2GHA4fI7PBETcZ6i2oDEXg/view?embed",
  github: "https://github.com/priyankbagad/", // You can update this if you have code hosted
  desc: "A hybrid deep learning model combining CNN and LSTM to analyze social media posts for signs of depression. Achieved 93.41% accuracy in detection. Designed to assist mental health professionals in early identification and intervention.",
  },
  {
  title: "PAWnnect – IoT & ML Driven Pet Monitoring",
  ppt: "https://www.canva.com/design/DAGrHon6kRo/kuSfkkuTc_XRsmqzUpTMXg/view?embed",
  github: "https://github.com/priyankbagad/", // Add if hosted
  desc: "Developed a smart dog monitoring system using GPS-enabled collars and health sensors to track activity, vitals, and location via a mobile app. Integrated ML algorithms for skin disease detection through image analysis, providing early diagnosis and care recommendations for pet owners.",
  },
];



const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 9, suffix: "+", label: "Team Collaborations & Hackathons" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Positive Peer Reviews & Feedback" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/logo-1.png",
  },
  {
    imgPath: "/images/logos/logo-2.png",
  },
  {
    imgPath: "/images/logos/logo-3.png",
  },
  {
    imgPath: "/images/logos/logo-4.png",
  },
  {
    imgPath: "/images/logos/logo-5.png",
  },
  {
    imgPath: "/images/logos/logo-6.png",
  },
  {
    imgPath: "/images/logos/logo-7.png",
  },
  {
    imgPath: "/images/logos/logo-8.png",
  },
  {
    imgPath: "/images/logos/logo-9.png",
  },
  {
    imgPath: "/images/logos/logo-10.png",
  },
  {
    imgPath: "/images/logos/logo-11.png",
  },
  {
    imgPath: "/images/logos/logo-12.png",
  },
  {
    imgPath: "/images/logos/logo-13.png",
  },
  {
    imgPath: "/images/logos/logo-14.png",
  },
  {
    imgPath: "/images/logos/logo-15.png",
  },
  {
    imgPath: "/images/logos/logo-16.png",
  },
  {
    imgPath: "/images/logos/logo-17.png",
  },
  {
    imgPath: "/images/logos/logo-18.png",
  },
  {
    imgPath: "/images/logos/sql.png",
  },
  {
    imgPath: "/images/logos/logo-20.png",
  },
  {
    imgPath: "/images/logos/logo-21.png",
  },
  {
    imgPath: "/images/logos/github.png",
  },
  {
    imgPath: "/images/logos/logo-23.png",
  },
  {
    imgPath: "/images/logos/logo-24.png",
  },
  {
    imgPath: "/images/logos/logo-25.png",
  },
  {
    imgPath: "/images/logos/logo-26.png",
  },
  {
    imgPath: "/images/logos/logo-27.png",
  },
];
export const journeyCards = [
  {
    title: "Childhood Curiosity",
    date: "2005–2010",
    imgPath: "/images/childhood.jpg", // Replace with actual image path
    logoPath: "/images/child.jpg", // Replace with icon if you want or remove from JSX
    responsibilities: [
      "Even at 2, I chose screens over blocks",
      "Before words, I explored Windows"
      
    ],
  },
  {
    title: "Undergraduate Growth – B.Tech CSE",
    date: "2017–2021",
    imgPath: "/images/undergraduate.png",
    logoPath: "/images/vitnew.jpg",
    responsibilities: [
      "Built Room & Mates, HealthBridge, PAWnnect apps",
      "Published 2 research papers in ML and IoT",
      "Excelled in data structures and algorithms coursework",
    ],
  },
  {
    title: "Professional Foundations – TCS",
    date: "2021–2023",
    imgPath: "/images/tcsoffice.png",
    logoPath: "/images/tcs1.png",
    responsibilities: [
      "Worked as Flutter Developer on mobile banking apps",
      "Developed reusable UI components, improved velocity",
      "Mentored junior developers in frontend best practices",
    ],
  },
  {
    title: "Graduate School – Northeastern University",
    date: "2023–2026",
    imgPath: "/images/northeastern.png",
    logoPath: "/images/neu.png",
    responsibilities: [
      "MS in Information Systems with a product focus",
      "Built HuskyTracks, UniCircle, Eventopia platforms",
      "Strengthened skills in React Native, MERN stack, AI",
    ],
  },
  {
    title: "Industry Impact – SharkNinja Internship",
    date: "2025–Present",
    imgPath: "/images/profile.jpg",
    logoPath: "/images/shark.jpg",
    responsibilities: [
      "Interning as Mobile App Developer",
      "Developing SharkClean IoT app features and tests",
      "Working on Bluetooth integrations and robot controls",
      "Improved app performance through rendering optimizations",
      "Collaborated with QA teams to debug connectivity issues",

    ],
  },
  {
    title: "The Road Ahead",
    date: "Future Vision",
    imgPath: "/images/road.png",
    logoPath: "/images/future.png",
    responsibilities: [
      "Expand expertise in cross-platform mobile development",
      "Dream to create impactful global consumer solutions",
      "Enhance full-stack proficiency",
      "Contribute to projects demanding technical",
      "Explore AI and ML integration within apps",
      "Grow into a versatile software engineer",
    ],
  },
];



const abilities = [
   {
    imgPath: "/images/logos/logical-thinking.png",
    title: "Systems-First Thinking",
    desc: "Delivering scalable, testable solutions across mobile and web apps by understanding systems from the ground up—ensuring future-ready code, not just features.",
  },
  {
    imgPath: "/images/logos/accountability.png",
    title: "Ownership & Accountability",
    desc: "Treating every feature like a product—taking full responsibility from planning to production, ensuring reliability, and sweating the details others skip.",
  },
  {
    imgPath: "/images/logos/versatile.png",
    title: "Versatility with Velocity",
    desc: "Adapting fast, learning faster and delivering impact without waiting to be an expert first.",
  },
];

const techStackImgs = [
  {
    name: "React & React Native",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Flutter",
    imgPath: "/images/logos/logo-6.png",
  },
  {
    name: "JAVA",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/logo-23.png",
  },
  {
    name: "Javascript",
    imgPath: "/images/logos/logo-26.png",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/logo-21.png",
  },
  {
    name: "Kotlin",
    imgPath: "/images/logos/logo-25.png",
  },
  {
    name: "Swift",
    imgPath: "/images/logos/logo-18.png",
  },
  {
    name: "Git & Github",
    imgPath: "/images/logos/github.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Priyank demonstrated strong technical depth and adaptability during his time with us. His ability to bridge React Native with Rust, debug Bluetooth connectivity, and write Kotlin-based robot test automation made a direct impact on our mobile development velocity.",
    imgPath: "/images/logos/sharkninjaimg.png",
    logoPath: "/images/logos/sharkninja.png",
    title: "Mobile App Developer Intern",
    date: "United States | May 2025 - Present",
    responsibilities: [
      "Built robot command test automation using Kotlin coroutines and JUnit, validating 12+ commands with 92% reliability gain.",
      "Integrated React Native UI with Rust FFI via custom bridges for real-time robot sync and Bluetooth control across 5 hardware models.",
      "Implemented deep linking with dynamic route injection and optimized AWS API usage, reducing redundant fetches by 35%.",
    ],
  },
  {
    review: "Priyank brought clarity and precision to our mobile frontend workflows. His focus on reusable architecture, testing, and performance led to a measurable boost in app quality and onboarding success.",
    imgPath: "/images/logos/tataimg.svg",
    logoPath: "/images/logos/tata.webp",
    title: "Mobile Application Developer",
    date: "India | August 2023 - August 2024",
    responsibilities: [
      "Developed secure and responsive onboarding flows in Flutter, improving user conversion by 40%.",
      "Built reusable UI components with MVVM architecture, reducing frontend defects by 65%.",
      "Implemented unit and integration tests across 18 modules, achieving 88% test coverage.",
    ],
  },
  {
    review: "Priyank helped bring our booking and payment flow to life with consistent work. He was dependable and quick to pick up new tasks during a fast-paced development sprint.",
    imgPath: "/images/logos/bookmyice.png",
    logoPath: "/images/logos/bookmyice.png",
    title: "Web Developer Intern",
    date: "India | February 2022 - September 2022",
    responsibilities: [
      "Developed responsive pages using HTML, CSS, and JavaScript, ensuring seamless layout across devices.",
      "Integrated payment and checkout workflows to support secure online facility bookings.",
      "Collaborated with designers to implement clean UI components from wireframes and prototypes.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Mitul Desai",
    mentions: "Senior App Developer - Tata Consultancy Services",
    review:
      "Priyank brought both technical skill and innovative thinking to every challenge. His contributions in mobile development, strong fundamentals, and collaborative mindset made him a go-to team member. He’s dependable, driven, and a true asset to any engineering team.",
    imgPath: "/images/logos/test3.jpeg",
  },
  {
    name: "Monil Shah",
    mentions: "Agile Program Manager - Tata Consultancy Services",
    review:
      "Priyank was a key contributor to the SBI Bank Project at TCS. His grasp of Flutter, problem-solving skills, and proactive mindset made him a standout team member. We were sad to see him go but fully support his decision to pursue higher studies—he’ll be an asset wherever he goes.",
    imgPath: "/images/logos/test2.jpeg",
  },
  {
    name: "Jamaal Rasheed",
    mentions: "Director, Application Software - Shark Ninja LLC",
    review:
      "Priyank quickly adapted to our mobile app architecture and began contributing to production-level code within weeks. His work on robot control testing, React Native–Rust integration, and deep linking showcased his technical maturity and reliability. He’s a fast learner and a dependable team player.",
    imgPath: "/images/logos/test1.jpeg",
  },
  {
    name: "Esha Thakur",
    mentions: "Product Manager - APMC",
    review:
      "Working with Priyank during the Coursera SmartAssist hackathon was genuinely inspiring. His ability to translate user pain points into smart, AI-driven product features helped our idea stand out. He’s not only technically strong, but also incredibly thoughtful when it comes to product thinking and user experience.",
    imgPath: "/images/logos/test5.jpeg",
  },
  {
    name: "Rehan Parvez Khan",
    mentions: "Mobile App Developer - Shark Ninja",
    review:
      "Working alongside Priyank at SharkNinja has been a great experience. He’s incredibly quick at understanding complex flows and always steps up to debug or refine features. Whether it’s writing test cases or integrating modules, Priyank approaches everything with focus and precision. A solid teammate with strong technical instincts.",
    imgPath: "/images/logos/test6.jpeg",
  },
  {
    name: "Tanuja Jasti",
    mentions: "Senior App Developer - Shark Ninja",
    review:
      "Priyank is quick to learn, reliable with delivery, and technically sound. His work on testing and native integrations made a real impact.",
    imgPath: "/images/logos/test4.jpeg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  workSamples
};
