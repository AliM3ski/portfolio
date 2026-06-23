export type Project = {
  id: string
  title: string
  subtitle: string
  description: string[]
  image: string
  video?: string
  tags: string[]
  link?: string
  github?: string
}

export type WorkSection = {
  text: string
  image?: string // path under /public — add photos of you working here
}

export type WorkItem = {
  id: string
  company: string
  role: string
  period: string
  description: string
  sections: WorkSection[]
  tags: string[]
  link?: string
}

export type AboutData = {
  bio: string[]
  education: { school: string; degree: string; period: string }
  interests: string[]
  email: string
}

export type UtilLink = {
  label: string
  href: string
}

export const projects: Project[] = [
  {
    id: 'llm-summarizer',
    title: 'LLM Medical Paper Summarizer',
    subtitle: 'AI · FastAPI · Docker · 2025',
    description: [
      'I wanted a project focused on AI and LLM implementation so this is what I came up with :D.',
      'The app tackles a common research challenge: making lengthy papers accessible through automated summarization. PDFs are extracted, cleaned, and split into token-aware sections that retain logical flow. A map-reduce approach with Anthropic Claude (OpenAI GPT as fallback) summarizes each section independently before consolidating into a final overview. Handles dense 20+ page papers in minutes.',
    ],
    image: '/projects/Summarizer.webp',
    video: '/projects/Summarizer.mp4',
    tags: ['FastAPI', 'Claude API', 'OpenAI', 'Docker', 'Python'],
  },
  {
    id: 'gameboy-emulator',
    title: 'Game Boy Emulator',
    subtitle: 'Systems · C · SDL2 · 2025',
    description: [
      'This is one of the coolest projects I\'ve created. Using C, I\'ve engineered a fully working Game Boy emulator, replicating CPU, memory, graphics (PPU), audio (APU), and input subsystems to create accurate hardware-level performance.',
      'The emulator fetches and decodes ROM instructions cycle by cycle, executing them in the same timing sequence as the original Game Boy. CPU execution is synchronized with the PPU and APU to correctly render tiles, sprites, audio output, and user input in real time. SDL2 handles graphics rendering and input events.',
      'If you\'re interested in low-level programming, I highly recommend building an emulator. This project taught me a ton about hardware-level behaviour and system design, and exposed many subtle details that are easy to overlook until you work closely with them.',
    ],
    image: '/projects/GameboyEmu.webp',
    video: '/projects/GameboyEmu.mp4',
    tags: ['C', 'SDL2', 'Emulation', 'Systems'],
  },
  {
    id: 'sock-sensei',
    title: 'Sock Sensei',
    subtitle: 'Android · Kotlin · 2025',
    description: [
      'This project started as a joke with my friend Areeb while we were learning how to develop Android applications, but it turned into a really fun and rewarding experience.',
      'Built in Kotlin, the app lets users share their thoughts and receive delightfully random sock recommendations. Features smooth multi-activity navigation, a custom-designed UI, and a locally managed recommendation engine.',
    ],
    image: '/projects/SockSensei.webp',
    video: '/projects/SockSensei.mp4',
    tags: ['Kotlin', 'Android', 'Mobile'],
  },
  {
    id: 'endangered-species',
    title: 'Endangered Species Visualizer',
    subtitle: 'Web · Mapbox · 2025',
    description: [
      'This project was done with a couple friends of mine — Areeb, Haziq, Wasif, and Tayyab. There were lots of challenges along the way but we had a great time overall.',
      'Interactive web app mapping endangered species density across Ontario using a weighted Mapbox heatmap. Filters by conservation status — endangered, threatened, and special concern — with priority zones highlighted by heat intensity.',
    ],
    image: '/projects/EndangeredSpecies.webp',
    video: '/projects/EndangeredSpecies.mp4',
    tags: ['Mapbox', 'JavaScript', 'GIS', 'Data Viz'],
  },
]

// Replace with your real work experience
export const workItems: WorkItem[] = [
  {
    id: 'work-1',
    company: 'Robotics Research Assistant',
    role: 'Research Assistant · University of Guelph',
    period: 'May 2026 – Present',
    description: 'Predictive cognitive assistance research at the Department of Electrical and Computer Engineering.',
    sections: [
      {
        text: "I am working as a research assistant under the Department of Electrical and Computer Engineering, contributing to a Master's thesis on predictive cognitive assistance. The project is led by a Master's student, and my role is to support the research and development work that underpins his thesis — building systems that can anticipate when individuals with cognitive or visual impairments need help, before a problem actually occurs.",
        image: '/work/depth-camera.jpg',
      },
      {
        text: "My primary contribution so far has been conducting a comprehensive literature review. I worked through a large number of academic articles on assistive systems, motion pattern analysis, and context-aware intelligence, and compiled the key findings, methodologies, and research gaps into a structured reference document to guide the direction of the project.",
        image: '/work/lab-setup.jpg',
      },
      {
        text: "The broader system we are building focuses on learning patterns of normal human activity from public motion sensor datasets and identifying deviations that may signal confusion, missed actions, or a need for assistance. The goal is a predictive, context-aware model that can run on a Raspberry Pi and trigger assistive cues in real time.",
        image: '/work/raspberry-pi.jpg',
      },
      {
        text: "The validated logic will eventually be mounted on a mobile robot platform for controlled indoor testing. This work is expected to contribute to the growing field of anticipatory assistive technologies and support future wearable and mobile implementations.",
      },
    ],
    tags: ['Python', 'Machine Learning', 'Raspberry Pi', 'Robotics', 'Data Analysis'],
    link: 'https://www.uoguelph.ca',
  },
]

export const aboutData: AboutData = {
  bio: [
    "I'm a second-year Systems and Computing Engineering student at the University of Guelph.",
    'I aspire to support and improve lives through robotics, medical and healthcare-focused engineering.',
  ],
  education: {
    school: 'University of Guelph',
    degree: 'B.Eng. Systems and Computing Engineering',
    period: '2023 – 2027',
  },
  interests: ['Robotics', 'Healthcare Engineering', 'AI & Machine Learning', 'Embedded Systems'],
  email: 'alimeski.work@gmail.com',
}

export const utilLinks: UtilLink[] = [
  { label: 'GitHub', href: 'https://github.com/AliM3ski' },
  { label: 'Software Résumé', href: '/resume-software.pdf' },
  { label: 'Hardware Résumé', href: '/resume-hardware.pdf' },
  { label: 'Contact', href: 'mailto:alimeski.work@gmail.com' },
]

export const GRADIENTS: [string, string][] = [
  ['#fef9ef', '#d4a017'],
  ['#eff6ff', '#3b82f6'],
  ['#f0fdf4', '#22c55e'],
  ['#fdf4ff', '#a855f7'],
  ['#fff1f2', '#e11d48'],
  ['#eef2ff', '#6366f1'],
]
