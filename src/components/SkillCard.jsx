import { motion } from 'framer-motion'

const SkillCard = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="min-w-[160px] max-w-[200px] rounded-xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-tertiary)]/90 to-custom-4/20 p-5 backdrop-blur-lg transition-all duration-300 hover:border-custom-4/60 group skill-card-3d my-4"
    >
      <div className="text-center">
        <motion.div
          className="mb-4"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-custom-4 bg-gradient-to-br from-custom-4/30 to-custom-4/20 backdrop-blur-sm group-hover:from-custom-4/40 group-hover:to-custom-4/30 transition-all duration-300 shadow-lg shadow-custom-4/20">
            <span className="text-xl font-bold text-custom-4 transition-transform duration-300">
              {skill.charAt(0)}
            </span>
          </div>
        </motion.div>
        <h3 className="text-base font-semibold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-custom-4 group-hover:via-custom-4 group-hover:to-custom-4 transition-all duration-300">
          {skill}
        </h3>
      </div>
    </motion.div>
  )
}

export default SkillCard

