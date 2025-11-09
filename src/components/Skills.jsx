import { motion } from 'framer-motion'
import { FiCode } from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiOpenai,
  SiPostman,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'Flask', icon: SiFlask, color: 'text-red-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Git', icon: SiGit, color: 'text-red-600' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'OpenAI API', icon: SiOpenai, color: 'text-green-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-4">
            <FiCode size={32} className="text-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <IconComponent size={48} className={`${skill.color} mb-3 group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

