import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Profile() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="profile" className="pt-16 lg:pt-20 pb-16 scroll-mt-20 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="font-head text-3xl md:text-4xl font-semibold leading-[1.15] max-w-prose"
        >
          {profile.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-5 text-soft max-w-prose leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-sm hover:opacity-80 transition-opacity"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-border text-sm font-medium rounded-sm hover:border-ink transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="shrink-0 self-center md:self-start"
      >
        {!imgError ? (
          <img
            src={profile.avatar}
            onError={() => setImgError(true)}
            alt={profile.name}
            className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border border-border"
          />
        ) : (
          <span className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-border bg-surface flex items-center justify-center font-head text-3xl">
            {profile.initials}
          </span>
        )}
      </motion.div>
    </section>
  )
}