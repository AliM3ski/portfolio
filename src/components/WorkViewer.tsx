'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { WorkItem } from '@/data/projects'

interface Props {
  item: WorkItem
  itemIndex: number
  direction: number
  onPrev: () => void
  onNext: () => void
}

const EASING = [0.16, 1, 0.3, 1] as const

export default function WorkViewer({ item, direction, onPrev, onNext }: Props) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={item.id}
        custom={direction}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: EASING }}
        className="flex-1 overflow-y-auto"
      >
        <div className="max-w-2xl mx-auto px-8 py-12 lg:py-16">

          {/* Header */}
          <p className="font-mono text-[11px] text-gray-400 uppercase tracking-widest">
            {item.period}
          </p>
          <h1 className="font-mono text-[22px] lg:text-[26px] font-bold uppercase tracking-wide text-black mt-2 leading-tight">
            {item.company}
          </h1>
          <p className="font-mono text-[11px] text-gray-500 uppercase tracking-widest mt-2">
            {item.role}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-2.5 py-1 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100" />

          {/* Scrollable sections */}
          <div className="mt-8 space-y-12">
            {item.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASING, delay: i * 0.07 }}
              >
                <p className="text-[15px] text-gray-700 leading-relaxed">{section.text}</p>
                {section.image && (
                  <div className="mt-6 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer: link + prev/next */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline"
              >
                Website
              </a>
            ) : <span />}

            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-gray-400">
              <button onClick={onPrev} className="hover:text-black transition-colors py-2 pr-2">Prev</button>
              <span>/</span>
              <button onClick={onNext} className="hover:text-black transition-colors py-2 pl-2">Next</button>
            </div>
          </div>

          <div className="h-16" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
