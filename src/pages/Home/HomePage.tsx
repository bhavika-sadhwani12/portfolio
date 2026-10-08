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

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

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
