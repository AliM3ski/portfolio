'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { GRADIENTS } from '@/data/projects'

interface Props {
  project: Project
  projectIndex: number
  direction: number
  onPrev: () => void
  onNext: () => void
  showThumbnails: boolean
  onToggleThumbnails: () => void
}

const mediaVariants = {
  enter: (dir: number) => ({ x: dir * 24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -24, opacity: 0 }),
}

export default function ProjectViewer({
  project,
  projectIndex,
  direction,
  onPrev,
  onNext,
  showThumbnails,
  onToggleThumbnails,
}: Props) {
  const [bgFrom, bgTo] = GRADIENTS[projectIndex % GRADIENTS.length]

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">

      {/* Media — top on mobile, right on desktop */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={project.id + '-media'}
          custom={direction}
          variants={mediaVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 lg:flex-1 flex items-center justify-center
                     p-4 md:p-6 lg:p-8 bg-gray-50/50 lg:bg-transparent
                     min-h-[44vw] lg:min-h-0 lg:h-full"
        >
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="max-h-[44vw] lg:max-h-[88vh] w-auto max-w-full object-contain"
            />
          ) : project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[44vw] lg:max-h-[88vh] w-auto max-w-full object-contain"
            />
          ) : (
            <div
              className="w-full max-w-3xl flex flex-col items-center justify-center"
              style={{
                aspectRatio: '16 / 10',
                background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
              }}
            >
              <span className="font-mono text-white/50 text-sm uppercase tracking-widest px-8 text-center">
                {project.title}
              </span>
              <div className="mt-4 flex flex-wrap gap-2 justify-center px-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-white/40 border border-white/20 px-2 py-0.5 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Info — bottom on mobile, left on desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id + '-info'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="order-2 lg:order-1 lg:w-[360px] lg:flex-shrink-0
                     flex flex-col justify-start lg:justify-center
                     px-6 py-6 md:px-8 md:py-8 lg:px-12 lg:py-14
                     lg:border-r border-gray-100"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-2">
            {project.subtitle}
          </p>
          <h2 className="font-mono text-[16px] font-bold uppercase tracking-wide text-black leading-snug">
            {project.title}
          </h2>

          <div className="mt-5 space-y-3">
            {project.description.map((para, i) => (
              <p key={i} className="text-[14px] text-gray-600 leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-2.5 py-1 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.link) && (
            <div className="mt-5 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline"
                >
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline"
                >
                  Live
                </a>
              )}
            </div>
          )}

          <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-gray-400">
            <button onClick={onPrev} className="hover:text-black transition-colors py-2 pr-2">Prev</button>
            <span>/</span>
            <button onClick={onNext} className="hover:text-black transition-colors py-2 px-2">Next</button>
          </div>
          <button
            onClick={onToggleThumbnails}
            className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors text-left py-1"
          >
            {showThumbnails ? 'Hide Thumbnails' : 'Show Thumbnails'}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
