export const profile = {
  name: 'Arun Kumar Ghorse',
  role: 'Aspiring Software Engineer',
  headline: 'Software Engineer, in progress.',
  status: 'Open to SDE-1, SE roles · India.',
  avatar: '/profile.jpeg',
  initials: 'AG',
  tagline:
    'I build with problem solving, web development, and data analysis — clean, working software over polish for its own sake.',
  bio: [
    "I'm a final-track B.Tech student in Computer Science (AI & Data Science), and most of what I know I've learned by shipping — small tools, contest problems, and a couple of full-stack builds that forced me to actually understand the systems underneath the frameworks.",
    "Day to day that means DSA practice, reading other people's code, and slowly getting comfortable with the MERN stack and basic system design. I'd rather have five projects I can explain in depth than fifteen I can't.",
  ],
  location: '303, B/A, Airport Rd, Indra Vihar Colony, Lalghati, Bhopal, MP 462030',
  phone: '+91 9399767780',
  email: 'ghorsearun8@gmail.com',
  social: {
    github: 'https://github.com/ArunKumarGhorse',
    linkedin: 'https://www.linkedin.com/in/arun-ghorse-165b27315/',
    twitter: 'https://x.com/ArunGhorse',
    leetcode: 'https://leetcode.com/u/arun_ghorse09/',
  },
}

export const timeline = [
  {
    period: '2024 – 2028',
    title: 'B.Tech, CSE (AI & Data Science)',
    place: 'Sagar Institute of Science and Technology (SISTec), Bhopal',
    detail: 'CGPA 8.03, ongoing.',
  },
  {
    period: '2022 – 2023',
    title: 'Class 12 (PCMB)',
    place: 'MP Board',
    detail: '80.8%',
  },
  {
    period: '2021 – 2022',
    title: 'Class 10',
    place: 'MP Board',
    detail: '79%',
  },
]

export const skillGroups = [
  {
    label: 'Core & DSA',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
    ],
  },
  {
    label: 'Web',
    items: ['HTML-5', 'CSS-3', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'MERN Stack'],
  },
  {
    label: 'Data',
    items: ['NumPy', 'Pandas', 'SQL', 'MS Excel'],
  },
  {
    label: 'DataBase',
    items: ['SQL', 'MongoDB'],
  },
  {
    label: 'Tools & Infra',
    items: ['Git', 'GitHub', 'VS Code', 'Antigravity', 'Cloud Computing (basics)'],
  },
]

// Fill liveUrl / repoUrl with real links. Left as '#' placeholders for now —
// the icon buttons render regardless, so update these before publishing.
export const projects = [
  {
    title: 'AI Resume Analyzer',
    category: 'Major',
    stack: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    description:
      'A full-stack resume analysis platform: Google OAuth login, resume upload with section-wise AI feedback, a results dashboard with a score gauge and strengths/improvements breakdown, an AI-generated improved resume, and job recommendations from parsed resume data.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
  title: 'InternSarthi',
  category: 'Minor',
  stack: ['React', 'Node.js', 'Firebase', 'Gemini AI', 'Sentiment Analysis'],
  description:
    'An AI-powered interview platform that conducts mock interviews, evaluates candidate responses using Gemini AI and sentiment analysis, and provides personalized feedback to improve interview performance.',
  liveUrl: '#',
  repoUrl: 'https://github.com/ArunKumarGhorse',
},
  {
    title: 'AI Website Builder',
    category: 'Other',
    stack: ['React', 'Node.js', 'MongoDB'],
    description:
      'A prompt-driven builder that turns a plain-language requirement into a working, responsive frontend — the interesting part was designing the generation workflow, not just the UI around it.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
    title: 'Microsoft Excel Clone',
    category: 'Other',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A spreadsheet interface built to understand table logic properly — sorting, searching, and cell-level interaction, with no framework to lean on.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
title: 'AI Task Manager',
category: 'Minor',
stack: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
description:
'An AI-powered task management application where users can create tasks using natural-language prompts through Gemini AI, with tasks stored and retrieved from MongoDB for persistent task management.',
liveUrl: '#',
repoUrl: 'https://github.com/ArunKumarGhorse',
},

  {
    title: 'Calculator',
    category: 'Other',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A small, deliberately clean arithmetic tool — a rebuild whenever fundamentals need a refresh.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
    title: 'Counter App',
    category: 'Other',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A minimal increment/decrement counter — the standard first stop for state and event-handling practice.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
    title: 'Tic Tac Toe',
    category: 'Other',
    stack: ['HTML', 'CSS', 'JavaScript'],
    description: 'A two-player game with win detection and reset — built to practice game-state logic.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
  {
    title: 'Art Gallery',
    category: 'Other',
    stack: ['HTML', 'CSS', 'Animation'],
    description: 'A gallery layout used to practice motion and visual composition outside of functional UI work.',
    liveUrl: '#',
    repoUrl: 'https://github.com/ArunKumarGhorse',
  },
]

export const achievements = {
  items: [
    'Top 50 Coders club member at college',
    '87th percentile — JEE Main 2024',
    'Department topper — 8.57 CGPA',
    'LeetCode contest rating: 1590',
    '200+ problems solved across LeetCode & GfG',
    '100-day and 50-day LeetCode consistency badges',
  ],
  certificates: [
    { name: 'Cloud Computing and Distributed Systems', issuer: 'NPTEL' },
    { name: 'Data Analytics Essentials', issuer: 'Cisco' },
    { name: 'C Essentials 1 & 2', issuer: 'Cisco' },
  ],
}