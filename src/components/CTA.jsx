import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-white"
        >
          Ready to automate the busywork?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600 dark:text-gray-300"
        >
          Tell us about your stack and goals. We’ll come back with a calm, pragmatic plan.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hello@aperture.ai?subject=Project%20Inquiry%20—%20Aperture%20Automations" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
            Email us
          </a>
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/10 text-black hover:bg-black hover:text-white dark:text-white dark:border-white/20 transition-colors">
            Book a call
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
