'use client'

import { useState } from 'react'
import { projects, workItems, utilLinks } from '@/data/projects'

export type View = 'projects' | 'work' | 'about'

interface Props {
  view: View
  projectIndex: number
  workIndex: number
  onSelectProject: (index: number) => void
  onSelectWork: (index: number) => void
  onSelectAbout: () => void
  onClose?: () => void
}

export default function Sidebar({
  view,
  projectIndex,
  workIndex,
  onSelectProject,
  onSelectWork,
  onSelectAbout,
  onClose,
}: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <aside className="w-full lg:w-[240px] h-full flex flex-col px-8 py-10 border-r border-gray-100">
      {/* Mobile close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="self-end mb-4 p-1 text-gray-400 hover:text-black transition-colors lg:hidden"
          aria-label="Close navigation"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* Profile picture */}
      <div className="mb-5">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
          {!imgError ? (
            <img
              src="/profile.jpg"
              alt="Ali Meski"
              className="w-full h-full object-cover scale-150"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-mono text-[12px] font-bold text-gray-400 tracking-widest">AM</span>
          )}
        </div>
      </div>

      {/* Name + tagline */}
      <div className="mb-8">
        <h1 className="font-mono text-[13px] font-bold uppercase tracking-widest text-black">
          Ali Meski
        </h1>
        <p className="text-[12px] text-gray-400 mt-1.5 leading-snug">
          Systems & Computing Eng.
          <br />
          University of Guelph
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-6 overflow-y-auto">

        {/* Projects */}
        <div>
          <div className="font-mono text-[10px] text-gray-300 uppercase tracking-widest mb-2.5">
            Projects
          </div>
          <ul className="space-y-2">
            {projects.map((p, i) => (
              <li key={p.id}>
                <button
                  onClick={() => onSelectProject(i)}
                  className={`text-[14px] text-left transition-colors ${
                    view === 'projects' && projectIndex === i
                      ? 'font-semibold text-black'
                      : 'font-normal text-gray-400 hover:text-black'
                  }`}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Work */}
        <div>
          <div className="font-mono text-[10px] text-gray-300 uppercase tracking-widest mb-2.5">
            Work
          </div>
          <ul className="space-y-2">
            {workItems.map((w, i) => (
              <li key={w.id}>
                <button
                  onClick={() => onSelectWork(i)}
                  className={`text-[14px] text-left transition-colors ${
                    view === 'work' && workIndex === i
                      ? 'font-semibold text-black'
                      : 'font-normal text-gray-400 hover:text-black'
                  }`}
                >
                  {w.company}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <button
            onClick={onSelectAbout}
            className={`text-[14px] transition-colors ${
              view === 'about'
                ? 'font-semibold text-black'
                : 'font-normal text-gray-400 hover:text-black'
            }`}
          >
            About
          </button>
        </div>
      </nav>

      {/* Utility links */}
      <div className="mt-6 space-y-2">
        {utilLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-[14px] text-gray-500 hover:text-black transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  )
}
