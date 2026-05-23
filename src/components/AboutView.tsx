'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '@/data/projects'

export default function AboutView() {
  const [imgError, setImgError] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(aboutData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex-1 overflow-y-auto flex items-start lg:items-center justify-center px-8 py-10 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-xl">
        {/* Profile picture */}
        <div className="mb-7">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Ali Meski"
                className="w-full h-full object-cover scale-150"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="font-mono text-[14px] font-bold text-gray-400 tracking-widest">AM</span>
            )}
          </div>
        </div>

        {/* Name */}
        <h1 className="font-mono text-[17px] font-bold uppercase tracking-widest text-black">
          Ali Meski
        </h1>
        <p className="font-mono text-[12px] text-gray-400 mt-1.5 tracking-wide">
          {aboutData.education.degree}
        </p>
        <p className="font-mono text-[12px] text-gray-400 mt-0.5 tracking-wide">
          {aboutData.education.school} · {aboutData.education.period}
        </p>

        {/* Bio */}
        <div className="mt-7 space-y-3">
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-[15px] text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Interests */}
        <div className="mt-6 flex flex-wrap gap-2">
          {aboutData.interests.map((interest) => (
            <span
              key={interest}
              className="font-mono text-[10px] uppercase tracking-widest border border-gray-200 px-2.5 py-1 text-gray-500"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume-software.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono text-[11px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1.5 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Software Résumé
          </a>

          <a
            href="/resume-hardware.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono text-[11px] uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v7M3.5 5.5l3 3 3-3M1.5 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Hardware Résumé
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 font-mono text-[11px] uppercase tracking-widest text-gray-600 hover:text-black hover:border-gray-400 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="3.5" width="8.5" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <path d="M3.5 3.5V2a1 1 0 011-1h6.5a1 1 0 011 1v6.5a1 1 0 01-1 1H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
