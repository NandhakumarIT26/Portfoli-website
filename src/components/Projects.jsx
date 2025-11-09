import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { FiFolder } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Grocery Accounts App',
      description: 'A full-stack MERN application for managing grocery expenses and accounts. Features user authentication, expense tracking, and detailed analytics.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'YouTube Summarizer App',
      description: 'An intelligent application that uses Groq API to generate concise summaries of YouTube videos. Built with Node.js and modern web technologies.',
      tech: ['Node.js', 'Groq API', 'Express', 'React'],
      github: '#',
      demo: '#',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Volume Control using Hand Gestures',
      description: 'A Python application using OpenCV and MediaPipe to control system volume through hand gestures. Real-time gesture recognition and volume adjustment.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot built with Flask backend and OpenAI API integration. Features conversational AI, context awareness, and RESTful API design.',
      tech: ['Flask', 'Python', 'OpenAI API', 'REST API'],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
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

