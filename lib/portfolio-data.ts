// ---------------------------------------------------------------------------
// EDIT THIS FILE to swap in real links + photo. Everything else reads from here.
// Links are intentionally placeholders ("#") until real URLs are provided.
// ---------------------------------------------------------------------------

export const CONTACT = {
  name: 'Shravani Pawar',
  email: 'shravanipawar901@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shravani-pawar22',
  github: 'https://github.com/shravanipawar22',
  leetcode: 'https://leetcode.com/u/Shravani_pawar22',
}

// Passport-size professional photo used in the hero.
export const HERO_PHOTO = '/shravani-headshot.png'
// Portrait / full-body photo used in the About section.
export const ABOUT_PHOTO = '/shravani-portrait.jpg'

export const HERO_BADGES = ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'AWS']

export const EXPERIENCE = {
  company: 'PayU Payments',
  role: 'Software Engineering Intern',
  period: 'Jan 2026 – Jul 2026',
  location: 'Pune, Maharashtra',
  photos: [
    { src: '/payu-workstation.jpg', caption: 'Working on the PayU pricing-service codebase' },
    { src: '/payu-desk.jpg', caption: 'At my desk overlooking the city skyline' },
    { src: '/payu-team.jpg', caption: 'Team celebration at the office' },
  ],
  highlights: [
    'Developed scalable backend services and REST APIs using Java, Spring Boot and MySQL.',
    'Configured Grafana and Redash dashboards for production monitoring and observability.',
    'Contributed to Java 11 → Java 21 migration through compatibility fixes and regression testing.',
    'Migrated legacy validation logic to Apache JEXL.',
    'Developed Rule Sync Automation workflows to reduce manual operational effort.',
    'Performed API testing, debugging, regression validation and deployment verification using Postman.',
    'Collaborated with cross-functional teams in an Agile/Scrum environment.',
  ],
}

export type Project = {
  title: string
  tagline: string
  description: string
  note?: string
  tech: string[]
  images?: { src: string; caption: string }[]
  projectUrl?: string
  githubUrl?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Fraudulent Detection on Ethereum Blockchain Using ML',
    tagline: 'Final Year Project · ML & Reinforcement Learning · Ethereum fraud detection',
    description:
      'Developed an AI/ML-based approach for detecting potentially fraudulent accounts and suspicious activities on the Ethereum blockchain by analyzing transaction patterns and account behavior. The project focused on applying machine learning techniques to classify transactions/accounts and identify potential fraudulent activity in blockchain environments. Explored and evaluated multiple classification algorithms, including Support Vector Machine (SVM), Random Forest, and XGBoost, along with Reinforcement Learning approaches to investigate intelligent fraud detection strategies.',
    note: 'Presented as a Final Year Project and participated in the Avishkar Project Competition 2025 at K.K. Wagh Institute of Engineering Education & Research, Nashik. I also participated in a related hackathon and received a Certificate of Participation. Key Focus: Blockchain Security · Fraud Detection · Transaction Analysis · Machine Learning · AI-driven Anomaly Detection.',
    tech: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'XGBoost',
      'Random Forest',
      'SVM',
      'Ethereum',
      'Blockchain',
      'Machine Learning',
    ],
    images: [
      { src: '/fraud-poster.jpg', caption: '"Block Guardian" project poster' },
      { src: '/fraud-team.jpg', caption: 'Team at the Avishkar exhibition' },
      { src: '/fraud-certificate.jpg', caption: 'Avishkar 2025 Certificate of Participation' },
      { src: '/fraud-report-cover.jpg', caption: 'Final Year Project report — "BlockGuardian", K.K. Wagh' },
      { src: '/fraud-team-department.jpg', caption: 'Project team at the Department of Computer Engineering' },
    ],
    githubUrl: 'https://github.com/shravanipawar22/Detection-of-Fraudulent-Accounts-on-Blockchain',
  },
  {
    title: 'SkillVerse — AI-Powered Learning & Skill Development Platform',
    tagline: 'AI-driven personalized learning platform',
    description:
      'SkillVerse is an AI-driven learning platform designed to help users discover, develop, and improve their skills through personalized and interactive learning experiences. The platform leverages Google AI to provide intelligent, AI-powered features while Clerk enables secure and seamless user authentication. Prisma is used for efficient database management, with Next.js powering the modern, scalable full-stack application.',
    note: 'Developed as part of the GDG on Campus Solution Challenge, powered by Hack2Skill & Google Developer Groups On Campus, where I participated in building an innovative technology-driven solution to address real-world challenges. I was honoured to receive a Certificate of Achievement for my contribution to the challenge.',
    tech: ['Next.js', 'Prisma', 'Google AI', 'Clerk'],
    images: [
      {
        src: '/skillverse-certificate.jpg',
        caption: 'GDG on Campus Solution Challenge — Certificate of Achievement',
      },
    ],
    projectUrl: 'https://skillverse-virid.vercel.app',
  },
  {
    title: 'Money Manager — Personal Finance Management Platform',
    tagline: 'Personal finance planning with the 50-30-20 rule',
    description:
      'Developed a professional personal finance management platform designed to help users plan and manage their finances using the 50-30-20 budgeting rule. The application provides personalized financial insights based on monthly income and is tailored to the needs of Indian users and professionals, helping them make informed budgeting and wealth-building decisions. The platform focuses on creating a simple, intuitive, and secure experience for users to understand their spending allocation, improve financial planning, and build healthier long-term money management habits.',
    note: 'Key Features: 50-30-20 Budgeting · Personalized Financial Insights · Income-Based Planning · Wealth Management Guidance · Indian Market Focus · Secure & User-Friendly Interface. Project Focus: Personal Finance · Financial Planning · Budget Management · Wealth Building · User-Centric Web Application.',
    tech: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    projectUrl: 'https://money-manager-self.vercel.app',
  },
  {
    title: 'Healthcare Hub — Healthcare Management Platform',
    tagline: 'Role-based patient & doctor management platform',
    description:
      'Developed Healthcare Hub, a web-based healthcare management platform designed to provide a streamlined interface for connecting and managing interactions between patients and doctors. The application includes secure authentication and role-based access, allowing users to sign in as either a patient or a doctor. The project focuses on creating a simple and accessible digital healthcare experience, with separate user roles and authentication workflows to support efficient healthcare service management.',
    note: 'Key Features: Patient & Doctor Roles · Secure Authentication · Role-Based Access · User Login System · Healthcare Management Interface. Project Focus: Healthcare Technology · Full-Stack Development · Authentication · Role-Based Access Control · User-Centric Web Application.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    projectUrl: 'https://healthcare-hub.onrender.com',
  },
  {
    title: 'Smart Food App — AI-Powered Food Discovery & Delivery Application',
    tagline: 'Cross-platform mobile app with AI meal recommendations',
    description:
      'Developed a cross-platform mobile application that provides users with a seamless food discovery and ordering experience. The application enables users to browse food options, track orders in real time using Google Maps, and receive personalized meal recommendations powered by Google Gemini AI. The project combines mobile application development with AI-driven personalization to help users discover meals based on their preferences while providing an intuitive and interactive ordering experience.',
    note: 'Key Features: Food Browsing · AI-Powered Meal Recommendations · Personalized Food Suggestions · Google Maps-Based Order Tracking · Cross-Platform Mobile Experience. Project Focus: Mobile App Development · Artificial Intelligence · Personalized Recommendations · Location-Based Services · Food Technology.',
    tech: ['React Native', 'Expo', 'JavaScript', 'Google Gemini API', 'Google Maps API'],
    githubUrl: 'https://github.com/shravanipawar22/SmartFoodOrderingApp',
  },
  {
    title: 'GreenHopeNetwork — Sustainability & Environmental Awareness Platform',
    tagline: 'Community-driven sustainability & awareness platform',
    description:
      'Developed GreenHopeNetwork, a community-driven web platform focused on promoting environmental awareness, sustainability, and eco-friendly practices. Founded in 2024, the initiative aims to bring people together to contribute toward a healthier and greener future through awareness campaigns, community initiatives, and sustainable practices. The platform serves as a central hub where users can explore environmental initiatives, discover upcoming events, access sustainability resources, and read informative articles and blogs on pressing environmental issues. It also encourages community participation through activities such as tree-planting campaigns and waste-management initiatives aimed at reducing environmental impact.',
    note: 'Developed collaboratively, with contributions across backend development, UI/UX design, and resource management. Key Features: Sustainability Awareness · Environmental Blogs & Articles · Community Initiatives · Event Participation · Tree-Planting Campaigns · Waste Management Awareness · Educational Resources. Project Focus: Environmental Sustainability · Community Engagement · Social Impact · Awareness & Education · Sustainable Development.',
    tech: ['Web Development', 'Backend Development', 'UI/UX Design', 'Database Management'],
    projectUrl: 'https://greenhope.netlify.app',
  },
]

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Programming', items: ['Java', 'Python', 'JavaScript'] },
  { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { category: 'Backend', items: ['Spring Boot', 'REST APIs', 'Apache JEXL'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
  {
    category: 'Tools',
    items: ['Git', 'GitLab', 'Docker', 'Postman', 'IntelliJ IDEA', 'Jira', 'Grafana', 'Redash', 'Sequel Ace'],
  },
  { category: 'Cloud', items: ['AWS', 'Google Cloud Platform'] },
  { category: 'CRM', items: ['Salesforce'] },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]

export const EDUCATION = [
  {
    degree: 'B.Tech – Computer Engineering',
    school: 'K.K. Wagh Institute of Engineering Education and Research',
    period: 'Jun 2023 – Jun 2026',
    score: 'CGPA: 8.51',
  },
  {
    degree: 'Diploma – Computer Engineering',
    school: 'Government Polytechnic Nashik',
    period: 'Jun 2020 – Jun 2023',
    score: 'Percentage: 86.63%',
  },
  {
    degree: 'SSC – High School',
    school: 'Bal Jesu Sevadan High School',
    period: 'Apr 2019 – Apr 2020',
    score: 'Percentage: 90%',
  },
]

export type Certification = {
  title: string
  issuer: string
  image: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    image: '/certificates/aws-academy.png',
  },
  {
    title: 'Deloitte Cyber Job Simulation',
    issuer: 'Deloitte · Forage',
    image: '/certificates/deloitte.png',
  },
  {
    title: 'Walmart Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech · Forage',
    image: '/certificates/walmart.png',
  },
  {
    title: 'Microsoft Power BI – AI Dashboards',
    issuer: 'Skill Nation',
    image: '/certificates/microsoft-powerbi.jpeg',
  },
  {
    title: 'Tata Data Visualisation: Empowering Business',
    issuer: 'Tata · Forage',
    image: '/certificates/tata.png',
  },
  {
    title: 'Google Developer Group Campus Solution Challenge',
    issuer: 'Google Developer Groups On Campus',
    image: '/certificates/google-solution-challenge.jpeg',
  },
  {
    title: 'AWS APAC Solutions Architecture Job Simulation',
    issuer: 'AWS · Forage',
    image: '/certificates/aws-apac.png',
  },
  {
    title: 'Udemy UI/UX Design Course 2025',
    issuer: 'Udemy',
    image: '/certificates/uiux-udemy.png',
  },
  {
    title: 'Accenture Data Analytics & Visualization Job Simulation',
    issuer: 'Accenture · Forage',
    image: '/certificates/accenture.png',
  },
  {
    title: 'Zensar Employability Skill Development Program (RPG Foundation)',
    issuer: 'Zensar · RPG Foundation',
    image: '/certificates/zensar.jpeg',
  },
]

export const LEADERSHIP = {
  role: 'Creative & Social Media Head',
  org: "Debuggers' Club – KKWIEER",
  year: '2025',
  description:
    "Served as the Creative & Social Media Head of Debuggers' Club, contributing to the club's creative direction, digital presence, and community engagement. Led the development of engaging visual content and social media campaigns while supporting the promotion and coordination of technical events and initiatives. This leadership experience strengthened my skills in creative strategy, content & brand management, event coordination, communication, teamwork, and leadership, while providing the opportunity to collaborate with a diverse committee and contribute to the legacy of one of the institute's oldest technical clubs.",
  contributions: [
    'Creative Direction & Visual Content',
    'Social Media & Digital Branding',
    'Content & Brand Strategy',
    'Event Promotion & Coordination',
    'Team Collaboration & Communication',
    'Community Engagement',
  ],
  images: [
    { src: '/debuggers-6.jpg' },
    { src: '/debuggers-4.jpg' },
    { src: '/debuggers-1.jpg' },
    { src: '/debuggers-5.jpg' },
    { src: '/debuggers-3.jpg' },
    { src: '/debuggers-2.jpg' },
  ],
  skills: [
    'Creative Direction',
    'Content & Brand Strategy',
    'Event Coordination',
    'Communication & Teamwork',
  ],
}

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]
