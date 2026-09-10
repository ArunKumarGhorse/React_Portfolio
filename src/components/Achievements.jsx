import { motion } from 'framer-motion'
import { Trophy, FileBadge } from 'lucide-react'
import { achievements, profile } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 border-t border-border scroll-mt-20">
      <h3 className="font-head text-xl font-semibold">Achievements</h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        <div>
          <p className="text-sm text-faint font-medium mb-4">Achievements</p>
          <ul className="space-y-3">
            {achievements.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <Trophy size={15} className="text-faint mt-0.5 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-faint font-medium mb-4">Certificates</p>
          <ul className="space-y-3">
            {achievements.certificates.map((cert, i) => (
              <motion.li
                key={cert.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <FileBadge size={15} className="text-faint mt-0.5 shrink-0" />
                <span>
                  {cert.name}
                  <span className="text-faint"> — {cert.issuer}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={profile.social.leetcode}
        target="_blank"
        rel="noreferrer"
        className="leetcode-shine mt-8 inline-block text-sm font-medium text-ink hover:text-pine transition-colors"
      >
        View LeetCode profile
      </a>
    </section>
  )
}
