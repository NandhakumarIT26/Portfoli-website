import { motion } from 'framer-motion'
import { FiLayers, FiCpu, FiSettings } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: FiLayers,
      title: 'Web App Development',
      description: 'Full-stack web applications using MERN stack, Python, and Flask. From concept to deployment, I build scalable and maintainable solutions.',
      features: ['React Frontend', 'Node.js/Express Backend', 'MongoDB Database', 'RESTful APIs'],
    },
    {
      icon: FiCpu,
      title: 'AI Integration',
      description: 'Integrating Large Language Models (LLMs) like OpenAI and Groq into applications. Building intelligent chatbots, content generators, and AI-powered features.',
      features: ['OpenAI API', 'Groq API', 'LLM Integration', 'AI Chatbots'],
    },
    {
      icon: FiSettings,
      title: 'Automation Tools',
      description: 'Building SaaS platforms and automation tools that streamline workflows and increase productivity. Custom solutions tailored to your business needs.',
      features: ['SaaS Development', 'Workflow Automation', 'Custom Tools', 'API Development'],
    },
  ]

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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all p-8 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

