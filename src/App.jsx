import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import SaaS from './components/SaaS'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SaaS />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aperture Automations</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#saas" className="hover:underline">SaaS</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
