import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-4">
            <FiUser size={32} className="text-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate <span className="text-primary-500 font-semibold">Full-Stack Developer</span> and{' '}
              <span className="text-accent-500 font-semibold">AI Enthusiast</span> with expertise in building
              scalable web applications and intelligent systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My primary focus is on the <span className="text-primary-500 font-semibold">MERN stack</span> (MongoDB,
              Express, React, Node.js), which allows me to create end-to-end solutions from database design to
              frontend interfaces. I also specialize in <span className="text-accent-500 font-semibold">Python</span> and{' '}
              <span className="text-accent-500 font-semibold">Flask</span> for building robust backend APIs and
              microservices.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              What sets me apart is my expertise in <span className="text-primary-500 font-semibold">AI integrations</span>,
              particularly with Large Language Models (LLMs) like OpenAI and Groq. I've built several SaaS applications
              and automation tools that leverage AI to solve real-world problems, from intelligent chatbots to
              automated content generation systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: 'MERN Stack', desc: 'Full-stack development with MongoDB, Express, React, and Node.js' },
              { title: 'Python & Flask', desc: 'Backend development with Python and Flask framework' },
              { title: 'AI Integration', desc: 'LLM API integration with OpenAI, Groq, and other AI services' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary-500">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

