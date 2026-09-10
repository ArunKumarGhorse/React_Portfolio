import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data'
import ThemeToggle from './ThemeToggle'

const sections = [
  { id: 'profile', label: 'Profile' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden sticky top-0 z-20 bg-paper backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-5 py-4">
        <a href="#profile" className="font-head font-semibold text-base">
          {profile.name}
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="p-1 text-ink">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="px-5 pb-5">
          <ul className="space-y-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className="text-sm text-soft">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
