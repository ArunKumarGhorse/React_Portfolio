import { motion } from 'framer-motion'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-border scroll-mt-20">
      <h3 className="font-head text-xl font-semibold">Skills</h3>
      <p className="mt-2 text-soft max-w-prose">
        Strongest in DSA and core web development; MERN and system design are current focus areas.
      </p>

      <div className="mt-8 space-y-6">
        {skillGroups.map((group, gi) => (
          <div key={group.label} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-2 items-baseline">
            <p className="text-sm text-faint font-medium">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.35, delay: gi * 0.05 + ii * 0.02 }}
                  className="font-mono text-xs px-2.5 py-1 border border-border rounded-sm text-ink bg-surface"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
