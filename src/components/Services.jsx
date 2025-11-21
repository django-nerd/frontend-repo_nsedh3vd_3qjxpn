import { motion } from 'framer-motion'
import { Brain, Workflow, Layers, Zap } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Assistants',
    desc: 'Custom GPTs that reason over your data and execute actions across tools.'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    desc: 'Automate repetitive workflows with robust, observable pipelines.'
  },
  {
    icon: Layers,
    title: 'Systems Integration',
    desc: 'Connect CRMs, ERPs, docs and comms into a single cohesive brain.'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    desc: 'From idea to internal tool in days, not months.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(60%_40%_at_50%_0%,#000,transparent)] dark:bg-[radial-gradient(60%_40%_at_50%_0%,#fff,transparent)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-white">What we build</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Outcome-focused systems that compound over time.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group rounded-xl border border-black/10 dark:border-white/10 p-5 hover:-translate-y-0.5 transition-all bg-white/70 dark:bg-white/5 backdrop-blur"
            >
              <s.icon className="text-black dark:text-white" />
              <h3 className="mt-4 font-semibold text-black dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              <button className="mt-4 text-sm text-black/70 dark:text-white/80 hover:underline">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
