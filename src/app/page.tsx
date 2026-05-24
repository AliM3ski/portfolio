'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar, { type View } from '@/components/Sidebar'
import ProjectViewer from '@/components/ProjectViewer'
import WorkViewer from '@/components/WorkViewer'
import AboutView from '@/components/AboutView'
import ThumbnailGrid from '@/components/ThumbnailGrid'
import { projects, workItems } from '@/data/projects'

export default function Home() {
  const [view, setView] = useState<View>('about')
  const [projectIndex, setProjectIndex] = useState(0)
  const [workIndex, setWorkIndex] = useState(0)
  const [direction, setDirection] = useState<number>(1)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const goNext = useCallback(() => {
    setDirection(1)
    if (view === 'projects') setProjectIndex((i) => (i + 1) % projects.length)
    if (view === 'work') setWorkIndex((i) => (i + 1) % workItems.length)
  }, [view])

  const goPrev = useCallback(() => {
    setDirection(-1)
    if (view === 'projects') setProjectIndex((i) => (i - 1 + projects.length) % projects.length)
    if (view === 'work') setWorkIndex((i) => (i - 1 + workItems.length) % workItems.length)
  }, [view])

  const handleSelectProject = useCallback((index: number) => {
    setDirection(index >= projectIndex ? 1 : -1)
    setView('projects')
    setProjectIndex(index)
    setShowThumbnails(false)
  }, [projectIndex])

  const handleSelectWork = useCallback((index: number) => {
    setDirection(index >= workIndex ? 1 : -1)
    setView('work')
    setWorkIndex(index)
    setShowThumbnails(false)
  }, [workIndex])

  const handleSelectAbout = useCallback(() => {
    setView('about')
    setShowThumbnails(false)
  }, [])

  // Arrow key navigation for projects and work
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (view === 'about') return
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [view, goNext, goPrev])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [navOpen])

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          view={view}
          projectIndex={projectIndex}
          workIndex={workIndex}
          onSelectProject={handleSelectProject}
          onSelectWork={handleSelectWork}
          onSelectAbout={handleSelectAbout}
        />
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <Sidebar
                view={view}
                projectIndex={projectIndex}
                workIndex={workIndex}
                onSelectProject={(i) => { handleSelectProject(i); setNavOpen(false) }}
                onSelectWork={(i) => { handleSelectWork(i); setNavOpen(false) }}
                onSelectAbout={() => { handleSelectAbout(); setNavOpen(false) }}
                onClose={() => setNavOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content column */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between px-6 h-14 flex-shrink-0 border-b border-gray-100">
          <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-black">
            Ali Meski
          </span>
          <button
            onClick={() => setNavOpen(true)}
            className="p-1 text-gray-500 hover:text-black transition-colors"
            aria-label="Open navigation"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-hidden flex">
          <AnimatePresence mode="wait">
            {view === 'about' ? (
              <motion.div key="about" className="flex-1 flex overflow-hidden"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <AboutView />
              </motion.div>
            ) : view === 'work' ? (
              <motion.div key="work" className="flex-1 flex overflow-hidden"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <WorkViewer
                  item={workItems[workIndex]}
                  itemIndex={workIndex}
                  direction={direction}
                  onPrev={goPrev}
                  onNext={goNext}
                />
              </motion.div>
            ) : showThumbnails ? (
              <motion.div key="thumbnails" className="flex-1 flex overflow-hidden"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <ThumbnailGrid
                  projects={projects}
                  activeIndex={projectIndex}
                  onSelect={(i) => { handleSelectProject(i); setShowThumbnails(false) }}
                />
              </motion.div>
            ) : (
              <motion.div key="projects" className="flex-1 flex overflow-hidden"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                <ProjectViewer
                  project={projects[projectIndex]}
                  projectIndex={projectIndex}
                  direction={direction}
                  onPrev={goPrev}
                  onNext={goNext}
                  showThumbnails={showThumbnails}
                  onToggleThumbnails={() => setShowThumbnails((t) => !t)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
