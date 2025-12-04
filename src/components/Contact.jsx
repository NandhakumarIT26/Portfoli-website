import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 mb-4">
            <FiMail size={32} className="text-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out through any of my socials or email.
          </p>
        </motion.div>

        {/* Contact Information Only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <FiMail className="text-primary-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a
                    href="mailto:nandhakumaredu.it@outlook.com"
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors"
                  >
                    nandhakumaredu.it@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <FiGithub className="text-primary-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/NandhakumarIT26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors"
                  >
                    github.com/NandhakumarIT26
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <FiLinkedin className="text-primary-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a
                    href="www.linkedin.com/in/nandha-kumar-770356259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors"
                  >
                    linkedin.com/in/nandhakumar-ap
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Resume Download */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 w-full px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 bg-white dark:bg-gray-900"
          >
            <FiDownload size={20} />
            Download Resume (PDF)
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
