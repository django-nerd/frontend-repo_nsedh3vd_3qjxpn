import { motion } from 'framer-motion'

const products = [
  {
    name: 'FlowKit',
    tag: 'Workflow Orchestrator',
    desc: 'Design, schedule and monitor multi-agent workflows with guardrails.',
    cta: 'Open App',
    href: '#'
  },
  {
    name: 'DataRoom',
    tag: 'Unified Knowledge',
    desc: 'Ingest docs, emails and tickets to power RAG and assistants with memory.',
    cta: 'View Docs',
    href: '#'
  },
  {
    name: 'Inbox AI',
    tag: 'Autonomous Support',
    desc: 'AI that triages, answers and escalates with human-in-the-loop controls.',
    cta: 'Try Demo',
    href: '#'
  }
]

function SaaS() {
  return (
    <section id="saas" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-white">Our SaaS suite</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Use our products standalone or as part of your automation stack.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">{p.tag}</p>
                  <h3 className="mt-1 text-xl font-semibold text-black dark:text-white">{p.name}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700" />
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-black dark:text-white group-hover:underline">{p.cta} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SaaS
