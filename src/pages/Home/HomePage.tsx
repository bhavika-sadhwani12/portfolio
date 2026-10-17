import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/sections/About'
import { Challenges } from '@/sections/Challenges'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[60] -translate-y-16 rounded-xl bg-accent px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Challenges />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
