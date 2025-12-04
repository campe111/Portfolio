import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ project, index = 0 }) => {
  const { theme } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-xl overflow-hidden transition-all duration-300 border bg-gradient-to-br from-[var(--bg-secondary)]/90 to-[var(--bg-tertiary)]/90 shadow-xl shadow-[var(--shadow-color)] hover:shadow-2xl hover:shadow-custom-4/20 border-[var(--border-color)] backdrop-blur-sm"
    >
      <div className="relative h-48 bg-[var(--bg-primary)] overflow-hidden">
        <img
          src={project.image || '/placeholder-project.jpg'}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231c1c1c" width="400" height="300"/%3E%3Ctext fill="%23d84f4f" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProyecto%3C/text%3E%3C/svg%3E'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className={`p-6 transition-all duration-300 ${
        theme === 'light'
          ? 'bg-[#C4D89A]'
          : 'bg-gradient-to-br from-custom-2/95 to-custom-3/95'
      }`}>
        <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-custom-4 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-[var(--text-tertiary)] leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.05 }}
              className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-[#E5F2D0] to-[#B4BF60] text-[#0D0D0D] border border-[#808C65]/40 hover:border-[#808C65] hover:bg-gradient-to-r hover:from-[#B4BF60] hover:to-[#808C65]'
                  : 'bg-gradient-to-r from-custom-5/20 to-custom-4/20 text-custom-5 border border-custom-5/40 hover:border-custom-5 hover:bg-custom-5/30'
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-center py-2.5 rounded-lg border border-custom-4/30 font-medium transition-all duration-300 hover:bg-custom-4 hover:border-custom-4 hover:text-custom-1 hover:shadow-lg hover:shadow-custom-4/30"
            >
              GitHub
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-custom-4 text-custom-1 text-center py-2.5 rounded-lg font-medium shadow-lg shadow-custom-4/40 transition-all duration-300 hover:shadow-xl hover:shadow-custom-4/50 hover:bg-custom-4/90"
            >
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

