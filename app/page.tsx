
import { ContactForm } from '@components/contact-form'
import { About } from '@templates/about'
import { ContactShell } from '@templates/contact-shell'
import { Hero } from '@templates/hero'
import { Projects } from '@templates/projects'
import AnimFooter from '@components/AnimFooter'
import Lenis from '@studio-freight/lenis'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <ContactShell>
        <ContactForm />
      </ContactShell>
      {/* <AnimFooter /> */}
    </main>
  )
}
