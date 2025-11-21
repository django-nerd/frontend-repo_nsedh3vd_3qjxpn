import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500 dark:text-gray-400 mb-4">AI Automation Agency</p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black dark:text-white">
            Scale with intelligent automations
          </h1>
          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg">
            We design, build and operate AI workflows that replace repetitive work, integrate your stack, and unlock compounding leverage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={() => scrollTo('contact')} className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
              Book a discovery call
            </button>
            <button onClick={() => scrollTo('saas')} className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md border border-black/10 text-black hover:bg-black hover:text-white dark:text-white dark:border-white/20 transition-colors">
              Explore our SaaS suite
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
