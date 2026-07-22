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
  text: string | string[]
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
    description: 'Indoor assistive robot for fall detection and autonomous navigation, Department of Electrical and Computer Engineering.',
    sections: [
      {
        text: "I am contributing to an indoor assistive robot project targeting fall detection and autonomous navigation for elderly and cognitively impaired users, under the supervision of Dr. Sara at the University of Guelph Department of Electrical and Computer Engineering. I am collaborating with Kavin Gunasekaran, a Master's student whose thesis this work supports. The hardware platform is built around a Raspberry Pi 5 with a Hailo AI HAT 2+ (40 TOPS NPU), an OAK-D Lite stereo depth camera, an RPLIDAR A1M8, and an STM32G474RE Nucleo board with dual VL53L1X ToF sensors.",
        image: '/work/lab-setup.JPG',
      },
      {
        text: "My primary contribution has been building the full fall detection pipeline from scratch. Starting with OAK-D camera bring-up, I built a fusion pipeline combining RGB and stereo depth with YOLO object detection running on the Hailo NPU. After an initial custom-trained model failed due to dataset memorization, I pivoted to a pose-based approach using YOLO26n-pose compiled to Hailo's HEF format. The final system runs 17-keypoint pose estimation on the Hailo-10H and classifies falls using a body angle rate state machine — STANDING → FALLING → FALLEN. This is the first known deployment of YOLO26n-pose on the Hailo-10H.",
        image: '/work/depth-camera.JPG',
      },
      {
        text: [
          "Beyond fall detection, I compiled YOLO11n, YOLO26n, and YOLO26n-pose models to HEF format using the Hailo Dataflow Compiler. A key finding: random calibration data collapses class confidence to ~0.03, while real COCO val2017 images restore correct output distributions. I also resolved HailoRT version incompatibilities including a kernel patch required for the 5.1.1 → 5.3.0 upgrade. On the navigation side, I brought up the full ROS2 Jazzy stack — sllidar_ros2, slam_toolbox, and a modified A* pathfinder with 2 Hz continuous replanning, obstacle inflation, and a camera fusion hook that treats detected persons as dynamic obstacles.",
          "I also established bidirectional UART between the STM32G474RE and the Raspberry Pi 5, and integrated dual VL53L1X ToF sensors on I2C1 and I2C2 with XSHUT address switching via a custom HAL bridge. The full stack spans Python, C, ROS2 Jazzy, HailoRT, DepthAI V3, STM32CubeIDE, the Hailo Dataflow Compiler, Docker, and RViz2.",
        ],
        image: '/work/raspberry-pi.JPG',
      },
      {
        text: "A significant part of the hardware work has been hands-on — soldering connections for the ToF sensor wiring harness, fabricating custom cable assemblies for the sensor array, and assembling the physical robot platform.",
        image: '/work/soldering.JPG',
      },
    ],
    tags: ['Python', 'C', 'ROS2', 'HailoRT', 'DepthAI', 'Raspberry Pi', 'STM32', 'YOLO', 'Docker'],
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
