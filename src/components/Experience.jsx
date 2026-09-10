import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-border scroll-mt-20">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="font-head text-xl font-semibold">Experience</h3>
        <span className="font-mono text-xs text-faint">Internship</span>
      </div>

      <div className="mt-8 space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative p-5 md:p-6 rounded-sm border border-border bg-surface/40 hover:border-ink/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h4 className="font-head font-semibold text-lg text-ink">
                    {exp.role}
                  </h4>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-pine/10 text-pine border border-pine/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-pine animate-pulse" />
                      Present
                    </span>
                  )}
                </div>

                <div className="mt-1.5 flex items-center gap-3 text-sm text-soft flex-wrap">
                  <span className="font-medium text-ink">{exp.company}</span>
                  <span className="text-faint">·</span>
                  <span className="inline-flex items-center gap-1 text-soft">
                    <MapPin size={13} className="text-faint" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
                  <Calendar size={13} />
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-soft leading-relaxed max-w-prose">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-pine mt-1 text-xs select-none leading-none">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-faint mr-1">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 border border-border rounded-sm text-ink bg-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
