import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import ThemeToggle from './components/ThemeToggle'
import Profile from './components/Profile'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sectionIds = ['profile', 'experience', 'skills', 'projects', 'timeline', 'achievements', 'contact']

export default function App() {
  const [active, setActive] = useState('profile')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="lg:pl-[280px]">
      <div className="fixed top-5 right-5 z-30 hidden lg:block">
        <ThemeToggle />
      </div>
      <MobileNav />
      <Sidebar active={active} />
      <main className="px-5 md:px-10 lg:px-16 max-w-[880px]">
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
