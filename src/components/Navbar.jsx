import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-black/50 border-b border-black/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-black to-gray-700" />
            <span className="font-semibold tracking-tight text-gray-900 dark:text-gray-100">Aperture Automations</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('services')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollTo('saas')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">SaaS</button>
            <button onClick={() => scrollTo('process')} className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Process</button>
            <a href="/test" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">Live API</a>
            <a href="mailto:hello@aperture.ai?subject=Project%20Inquiry%20—%20Aperture%20Automations" className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">Get Proposal</a>
          </div>
          <button className="md:hidden p-2 rounded-md border border-black/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 dark:bg-black/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            <button onClick={() => scrollTo('services')} className="py-2 text-left">Services</button>
            <button onClick={() => scrollTo('saas')} className="py-2 text-left">SaaS</button>
            <button onClick={() => scrollTo('process')} className="py-2 text-left">Process</button>
            <a href="/test" className="py-2">Live API</a>
            <a href="mailto:hello@aperture.ai?subject=Project%20Inquiry%20—%20Aperture%20Automations" className="py-2">Get Proposal</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
