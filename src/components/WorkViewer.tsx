'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { WorkItem } from '@/data/projects'
import { GRADIENTS } from '@/data/projects'

interface Props {
  item: WorkItem
  itemIndex: number
  direction: number
  onPrev: () => void
  onNext: () => void
}

const mediaVariants = {
  enter: (dir: number) => ({ x: dir * 24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -24, opacity: 0 }),
}

export default function WorkViewer({ item, itemIndex, direction, onPrev, onNext }: Props) {
  const [bgFrom, bgTo] = GRADIENTS[(itemIndex + 2) % GRADIENTS.length]

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">

      {/* Media — top on mobile, right on desktop */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={item.id + '-media'}
          custom={direction}
          variants={mediaVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 lg:flex-1 flex items-center justify-center
                     p-4 md:p-6 lg:p-10 bg-gray-50/50 lg:bg-transparent
                     min-h-[40vw] lg:min-h-0 lg:h-full"
        >
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.company}
              className="max-h-[40vw] lg:max-h-[85vh] w-auto max-w-full object-contain"
            />
          ) : (
            <div
              className="w-full max-w-2xl flex flex-col items-center justify-center"
              style={{
                aspectRatio: '16 / 10',
                background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
              }}
            >
              <span className="font-mono text-white/50 text-xs uppercase tracking-widest px-8 text-center">
                {item.company}
              </span>
              <span className="font-mono text-white/30 text-[10px] uppercase tracking-widest mt-2">
                {item.role}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Info — bottom on mobile, left on desktop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id + '-info'}
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
            {item.period}
          </p>
          <h2 className="font-mono text-[16px] font-bold uppercase tracking-wide text-black leading-snug">
            {item.company}
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 mt-1">
            {item.role}
          </p>

          <p className="text-[14px] text-gray-600 leading-relaxed mt-5">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-2.5 py-1 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline"
            >
              Website
            </a>
          )}

          <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-gray-400">
            <button onClick={onPrev} className="hover:text-black transition-colors py-2 pr-2">Prev</button>
            <span>/</span>
            <button onClick={onNext} className="hover:text-black transition-colors py-2 px-2">Next</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
