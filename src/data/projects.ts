export type Project = {
  id: string
  title: string
  subtitle: string
  category: 'software' | 'hardware'
  description: string[]
  sections?: WorkSection[]  // if present, uses editorial alternating layout
  image: string
  video?: string
  tags: string[]
  link?: string
  github?: string
}

export type WorkSection = {
  text: string | string[]
  image?: string
  imagePosition?: string
  video?: string
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
    id: 'gec-robot',
    title: 'GEC Competition Robot',
    subtitle: 'Hardware · Arduino · Embedded',
    category: 'hardware',
    description: [],
    sections: [
      {
        text: "Built for the Guelph Engineering Competition with my teammates Adam Alzahal, Stefan Popovic, and Khaled Jimoh, themed \"Full Circle: Rethinking Resources.\" The challenge was to build an autonomous vehicle — we called ours the ACU-3741-4W — that picks up recyclables while leaving trash behind in a simulated landfill grid. We took design inspiration from a lawnmower: low profile, wide sweep, built to cover ground efficiently.",
        image: '/projects/GECRobot-competition2.jpg',
      },
      {
        text: "Software — I wrote the Arduino logic driving the autonomous behaviour: reading sensors to detect and classify objects, making real-time decisions about what to collect and what to avoid, and controlling the motors to navigate the grid consistently across two randomized test runs.",
        image: '/projects/GECRobot-side.jpg',
      },
      {
        text: "Hardware — We built the collection mechanism from scratch: a front plow to corral objects and a bag-style collector to scoop them up. Getting everything physically reliable under competition conditions, with the clock running and judges watching, was its own challenge.",
        image: '/projects/GECRobot-plow.jpg',
      },
      {
        text: "Here's the robot running autonomously during competition testing.",
        video: '/projects/GEC2026.mp4',
      },
    ],
    image: '/projects/GECRobot-side.jpg',
    tags: ['Arduino', 'C++', 'Motor Control', 'Embedded Systems'],
  },
  {
    id: 'llm-summarizer',
    title: 'LLM Medical Paper Summarizer',
    subtitle: 'AI · FastAPI · Docker · 2025',
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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
    category: 'software',
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
    description: 'Indoor assistive robot for fall detection and autonomous navigation, Department of Electrical and Computer Engineering.',
    sections: [
      {
        text: "This past summer I joined a robotics research project at the University of Guelph under Dr. Sara, collaborating with Kavin Gunasekaran on his Master's thesis. The goal is an indoor assistive robot for elderly and cognitively impaired users — fall detection, autonomous navigation, the works. It's been one of the most hands-on and challenging experiences I've had, and honestly exactly the kind of work I want to be doing.",
        image: '/work/lab-setup.JPG',
      },
      {
        text: "My biggest challenge was building the fall detection pipeline from scratch. I had to figure out how to get the OAK-D camera running, fuse RGB and depth data, and get YOLO running on a specialized AI chip I'd never touched before. My first approach — a custom-trained model — completely fell apart due to dataset memorization. I pivoted to a pose-based approach using 17-keypoint estimation and a body angle state machine, and eventually got it working on the Hailo-10H NPU. As far as I can tell, it's the first deployment of YOLO26n-pose on that chip.",
        image: '/work/depth-camera.JPG',
      },
      {
        text: "A lot of the work was debugging things that had never been done before — figuring out why model confidence was collapsing to near zero, patching kernel incompatibilities, getting a full ROS2 navigation stack running with live obstacle detection. I also wired up the STM32 microcontroller and ToF sensors entirely from scratch. Each piece felt like its own mini-project, and stacking them together into something that actually works has been really satisfying.",
        image: '/work/raspberry-pi.JPG',
      },
      {
        text: "This is probably the most hands-on I've ever gotten with hardware. Soldering the sensor wiring, assembling the physical platform, getting everything to talk to each other — it's a different kind of problem solving than writing code, and I've enjoyed it a lot.",
        image: '/work/Soldering.JPG',
        imagePosition: '50% 70%',
      },
    ],
    tags: ['Python', 'C', 'ROS2', 'HailoRT', 'DepthAI', 'Raspberry Pi', 'STM32', 'YOLO', 'Docker'],
    link: 'https://www.uoguelph.ca',
  },
]

export const aboutData: AboutData = {
  bio: [
    "I'm a third-year Systems and Computing Engineering student at the University of Guelph.",
    'I aspire to support and improve lives through robotics, medical and healthcare-focused engineering.',
  ],
  education: {
    school: 'University of Guelph',
    degree: 'B.Eng. Systems and Computing Engineering',
    period: '2023 – 2029',
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
