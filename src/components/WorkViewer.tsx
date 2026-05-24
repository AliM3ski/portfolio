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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASING }}
        className="flex-1 overflow-y-auto"
      >
        {/* Header — full width */}
        <div className="px-10 lg:px-16 py-14 lg:py-20 border-b border-gray-100">
          <p className="font-mono text-[11px] text-gray-400 uppercase tracking-widest">
            {item.period}
          </p>
          <h1 className="font-mono text-[26px] lg:text-[34px] font-bold uppercase tracking-wide text-black mt-3 leading-tight">
            {item.company}
          </h1>
          <p className="font-mono text-[11px] text-gray-500 uppercase tracking-widest mt-2">
            {item.role}
          </p>
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
        </div>

        {/* Alternating sections */}
        {item.sections.map((section, i) => {
          const isEven = i % 2 === 0
          const hasImage = !!section.image

          if (!hasImage) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASING, delay: i * 0.06 }}
                className="px-10 lg:px-16 py-12 lg:py-14 border-b border-gray-100"
              >
                <p className="text-[15px] text-gray-700 leading-relaxed max-w-2xl">
                  {section.text}
                </p>
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
              {/* Text */}
              <div
                className={`flex items-center px-10 lg:px-16 py-12 lg:py-16
                  ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <p className="text-[15px] text-gray-700 leading-relaxed">{section.text}</p>
              </div>

              {/* Image */}
              <div
                className={`relative overflow-hidden bg-gray-50 min-h-[260px]
                  ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )
        })}

        {/* Footer */}
        <div className="px-10 lg:px-16 py-10 flex items-center justify-between">
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

        <div className="h-10" />
      </motion.div>
    </AnimatePresence>
  )
}
