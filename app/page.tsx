import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Education } from '@/components/sections/education'
import { Leadership } from '@/components/sections/leadership'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
