import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PageBackground } from './components/PageBackground'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TechMarquee } from './components/TechMarquee'

function App() {
  return (
    <>
      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
