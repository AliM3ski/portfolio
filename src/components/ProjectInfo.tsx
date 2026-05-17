'use client'

import type { Project } from '@/data/projects'

interface Props {
  project: Project
  onPrev: () => void
  onNext: () => void
  showThumbnails: boolean
  onToggleThumbnails: () => void
}

export default function ProjectInfo({
  project,
  onPrev,
  onNext,
  showThumbnails,
  onToggleThumbnails,
}: Props) {
  return (
    <div className="space-y-3 max-w-[190px]">
      <div>
        <p className="text-[13px] font-semibold text-black leading-tight">{project.title}</p>
        <p className="text-[11px] text-gray-400 mt-0.5">{project.subtitle}</p>
      </div>

      <p className="text-[11px] text-gray-500 leading-relaxed">{project.description}</p>

      {(project.github || project.link) && (
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-gray-400 hover:text-black transition-colors underline"
            >
              GitHub
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-gray-400 hover:text-black transition-colors underline"
            >
              Live
            </a>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 text-[11px] text-gray-400">
        <button onClick={onPrev} className="hover:text-black transition-colors tracking-widest">
          PREV
        </button>
        <span>/</span>
        <button onClick={onNext} className="hover:text-black transition-colors tracking-widest">
          NEXT
        </button>
      </div>

      <button
        onClick={onToggleThumbnails}
        className="block text-[11px] text-gray-400 hover:text-black transition-colors tracking-widest"
      >
        {showThumbnails ? 'HIDE THUMBNAILS' : 'SHOW THUMBNAILS'}
      </button>
    </div>
  )
}
