import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <div className="relative min-h-screen py-12 text-[var(--text-primary)] transition-all duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold font-['Space_Grotesk'] text-white">
              Mis Proyectos
            </h1>
            <p className="text-lg font-['Inter'] font-medium text-white/90">
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

