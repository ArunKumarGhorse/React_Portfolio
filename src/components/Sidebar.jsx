import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { profile } from '../data'

const sections = [
  { id: 'profile', label: 'Profile' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ active }) {
  return (
    <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[280px] lg:border-r lg:border-border lg:flex lg:flex-col lg:justify-between lg:py-12 lg:px-10">
      <div>
        <motion.a
          href="#profile"
          className="block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-head font-semibold text-lg leading-tight">{profile.name}</h1>
          <p className="text-sm text-soft mt-1">{profile.role}</p>
        </motion.a>

        <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-pine animate-pulse" />
          {profile.status}
        </div>

        <nav className="mt-10 hidden lg:block">
          <ul className="space-y-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`text-sm transition-colors ${
                    active === s.id ? 'text-pine font-medium' : 'text-soft hover:text-ink'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex items-center gap-4 mt-10">
        <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-soft hover:text-ink transition-colors">
          <Github size={18} />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-soft hover:text-ink transition-colors">
          <Linkedin size={18} />
        </a>
        <a href={profile.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-soft hover:text-ink transition-colors">
          <Twitter size={18} />
        </a>
        <a href={profile.social.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-soft hover:text-ink transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
    </aside>
  )
}
