import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  return (
    <button
      onClick={() => setLight((v) => !v)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      title={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-soft hover:text-ink transition-colors bg-paper"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
