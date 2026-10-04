'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  onPrev: () => void
  onNext: () => void
}

const EASING = [0.16, 1, 0.3, 1] as const

export default function ProjectEditorialViewer({ project, onPrev, onNext }: Props) {
  const sections = project.sections ?? []

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="px-10 lg:px-16 py-14 lg:py-20 border-b border-gray-100">
        <p className="font-mono text-[11px] text-gray-400 uppercase tracking-widest">
          {project.subtitle}
        </p>
        <h1 className="font-mono text-[26px] lg:text-[34px] font-bold uppercase tracking-wide text-black mt-3 leading-tight">
          {project.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-2.5 py-1 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Alternating sections */}
      {sections.map((section, i) => {
        const isEven = i % 2 === 0
        const hasMedia = !!(section.image || section.video)
        const textContent = Array.isArray(section.text) ? section.text : [section.text]

        if (!hasMedia) {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING, delay: i * 0.06 }}
              className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100"
            >
              <div className="flex items-center px-10 lg:px-16 py-12 lg:py-14">
                <div className="space-y-4">
                  {textContent.map((t, j) => (
                    <p key={j} className="text-[15px] text-gray-700 leading-relaxed">{t}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        }

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASING, delay: i * 0.06 }}
            className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100"
          >
            <div
              className={`flex items-center px-10 lg:px-16 py-12 lg:py-16
                ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <div className="space-y-4">
                {textContent.map((t, j) => (
                  <p key={j} className="text-[15px] text-gray-700 leading-relaxed">{t}</p>
                ))}
              </div>
            </div>

            <div
              className={`relative overflow-hidden bg-gray-50 min-h-[440px]
                ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            >
              {section.video ? (
                <video
                  src={section.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={section.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: section.imagePosition ?? 'center' }}
                />
              )}
            </div>
          </motion.div>
        )
      })}

      {/* Footer */}
      <div className="px-10 lg:px-16 py-10 flex justify-end">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-gray-400">
          <button onClick={onPrev} className="hover:text-black transition-colors py-2 pr-2">Prev</button>
          <span>/</span>
          <button onClick={onNext} className="hover:text-black transition-colors py-2 pl-2">Next</button>
        </div>
      </div>

      <div className="h-10" />
    </div>
  )
}
