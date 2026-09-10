import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Github } from 'lucide-react'
import { projects } from '../data'

const filters = ['Major', 'Minor', 'Other']

export default function Projects() {
  const [filter, setFilter] = useState('Major')

  const visible = useMemo(() => projects.filter((p) => p.category === filter), [filter])

  return (
    <section id="projects" className="py-16 border-t border-border scroll-mt-20">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="font-head text-xl font-semibold">Projects</h3>
        <div className="flex gap-1 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-sm transition-colors ${
                filter === f ? 'bg-ink text-paper' : 'text-soft hover:text-ink border border-border'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 divide-y divide-border">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-6 first:pt-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-head font-semibold text-lg">{p.title}</h4>
                  <span className="text-xs text-faint font-mono">{p.category}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    title="Live demo"
                    className="text-soft hover:text-ink transition-colors"
                  >
                    <Activity size={18} />
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} repository`}
                    title="Source code"
                    className="text-soft hover:text-ink transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-soft max-w-prose leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-xs text-soft">
                    {s}
                    {s !== p.stack[p.stack.length - 1] ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
