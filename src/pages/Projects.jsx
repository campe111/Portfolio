import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import projectsData from '../data/projects.json'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <div className={`relative min-h-screen py-12 text-[var(--text-primary)] transition-all duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-[#E5F2D0] via-[#FFFFFF] to-[#E5F2D0]'
        : 'bg-gradient-to-br from-custom-1 via-custom-2 to-custom-1'
    }`}>
      {/* Patrón de fondo sutil */}
      <div className={`absolute inset-0 opacity-60 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#808C65]/5 via-[#B4BF60]/5 to-[#808C65]/5'
          : 'bg-pattern'
      }`}></div>
      {/* Gradientes decorativos */}
      <div className={`absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#B4BF60]/20 to-transparent'
          : 'bg-gradient-to-br from-custom-4/10 to-transparent'
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl ${
        theme === 'light'
          ? 'bg-gradient-to-tl from-[#808C65]/25 to-transparent'
          : 'bg-gradient-to-tl from-custom-3/15 to-transparent'
      }`}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold font-['Space_Grotesk']">
              <span 
                className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                  theme === 'light' 
                    ? 'from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D]' 
                    : 'from-custom-5 via-custom-4 to-custom-5'
                }`}
              >
                Mis Proyectos
              </span>
            </h1>
            <p className={`text-lg font-['Inter'] font-medium ${
              theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
            }`}>
              Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo.
            </p>
          </div>
        </AnimatedSection>

        {projects.length === 0 ? (
          <AnimatedSection>
            <div className="py-12 text-center">
              <p className="text-lg font-['Inter'] text-[var(--text-tertiary)]">
                No hay proyectos disponibles en este momento.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

