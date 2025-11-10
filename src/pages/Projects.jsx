import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <div 
      className="relative overflow-hidden min-h-screen bg-white py-12 text-gray-900 transition-colors duration-300 dark:bg-custom-1 dark:text-white"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className="absolute inset-0 bg-custom-1 transition-colors duration-300"
        style={{ opacity: isLight ? 0 : 0.1 }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold font-['Space_Grotesk'] text-gray-900 transition-colors duration-300 dark:text-white">Mis Proyectos</h1>
            <p className="text-lg font-['Inter'] font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300">
              Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo.
            </p>
          </div>
        </AnimatedSection>

        {projects.length === 0 ? (
          <AnimatedSection>
            <div className="py-12 text-center">
              <p className="text-lg font-['Inter'] text-gray-600 transition-colors duration-300 dark:text-gray-400">
                No hay proyectos disponibles en este momento.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

