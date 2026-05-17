'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { GRADIENTS } from '@/data/projects'

interface Props {
  projects: Project[]
  activeIndex: number
  onSelect: (index: number) => void
}

export default function ThumbnailGrid({ projects, activeIndex, onSelect }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, i) => {
          const [bgFrom, bgTo] = GRADIENTS[i % GRADIENTS.length]
          const isActive = i === activeIndex
          return (
            <motion.button
              key={project.id}
              onClick={() => onSelect(i)}
              className={`text-left transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <div
                className="w-full flex items-center justify-center mb-2"
                style={{
                  aspectRatio: '16 / 10',
                  background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
                }}
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="font-mono text-white/50 text-[9px] uppercase tracking-widest px-4 text-center">
                    {project.title}
                  </span>
                )}
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-wide text-black">{project.title}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{project.subtitle}</p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
