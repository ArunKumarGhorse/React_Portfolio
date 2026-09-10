import { motion } from 'framer-motion'
import { profile, timeline } from '../data'

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 border-t border-border scroll-mt-20">
      <h3 className="font-head text-xl font-semibold">Timeline</h3>

      <div className="mt-4 max-w-prose space-y-4 text-soft leading-relaxed">
        {profile.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <ol className="mt-10 relative border-l border-border ml-1.5">
        {timeline.map((t, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="pl-8 pb-10 last:pb-0 relative"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-pine" />
            <p className="font-mono text-xs text-faint">{t.period}</p>
            <h4 className="font-head font-semibold mt-1">{t.title}</h4>
            {t.place && <p className="text-sm text-soft mt-0.5">{t.place}</p>}
            <p className="text-sm text-soft mt-1">{t.detail}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
