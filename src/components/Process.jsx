import { motion } from 'framer-motion'

const steps = [
  { k: '01', t: 'Discovery', d: 'Map opportunities, systems and constraints to identify high-leverage wins.' },
  { k: '02', t: 'Design', d: 'Blueprint the agents, prompts, tools and data contracts with evals in mind.' },
  { k: '03', t: 'Build', d: 'Implement rapidly with modular components and clear observability.' },
  { k: '04', t: 'Operate', d: 'Iterate with metrics, alerts and human-in-the-loop feedback.' },
]

function Process() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-white">How we work</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A calm, methodical path from idea to operating system.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur"
            >
              <p className="text-xs text-gray-500">{s.k}</p>
              <h3 className="mt-1 font-semibold text-black dark:text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
