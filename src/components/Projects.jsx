import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FiFolder } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'UrbanPicks',
      description: 'A curated affiliate product showcase platform where users can browse and discover trending lifestyle and utility products. The platform aggregates product details, organizes them into clean category-based collections, and redirects users to affiliate purchase links. Designed with a minimal UI to highlight product visuals and improve user discovery experience.',
      tech: ['Flask', 'Python', 'HTML', 'CSS', 'Affiliate Marketing', 'Product Showcase UI'],
      github: 'https://github.com/NandhakumarIT26/UrbanPicks',
      demo: 'https://urbanpicks1.netlify.app/',
      color: 'from-pink-500 to-rose-600',
    },
    
    {
      title: 'Intelligent Crop Rotation Decision Support System',
      description: 'A data-driven agricultural DSS that recommends optimal crop rotation sequences by analyzing real-time soil characteristics, weather patterns, and market price trends. The system uses a hybrid AI architecture (Random Forest, Prophet, and LSTM) to predict crop suitability, yield, and price fluctuations. A rule-based reasoning layer ensures agronomic feasibility across Kharif, Rabi, and Zaid seasons, while an interactive web interface provides explainable visualizations using SHAP.',
      tech: ['Python', 'Random Forest', 'Prophet', 'LSTM', 'Rule-Based AI', 'SHAP', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/NandhakumarIT26/Farmers_DSS',
      demo: '#',
      color: 'from-lime-500 to-green-600',
    },
    
    {
      title: 'Summify AI',
      description: 'A Flask-based web application that summarizes long text using Groq LLM APIs.Designed for students, researchers, and content learners who want to understand long videos quickly.',
      tech: ['Flask', 'Python', 'Groq API', 'HTML', 'CSS'],
      github: 'https://github.com/NandhakumarIT26/summify_ai',
      demo: 'https://summify-ai.onrender.com/',
      color: 'from-blue-500 to-indigo-500',
    },

    {
      title: 'Multi-Agent System',
      description: 'A coordinated multi-agent framework where multiple autonomous agents work together to solve tasks. Each agent operates independently with its own logic and decision-making capability, and the system manages communication and synchronization between them. Demonstrates concepts such as distributed task allocation, agent coordination, and cooperative problem-solving.',
      tech: ['Python', 'Flask', 'Agent Coordination','Groq API', 'HTML', 'CSS'],
      github: 'https://github.com/NandhakumarIT26/MultiAgentSystem',
      demo: '#',
      color: 'from-orange-500 to-amber-500',
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-4">
            <FiFolder size={32} className="text-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

