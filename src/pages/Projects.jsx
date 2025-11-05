import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mis Proyectos</h1>
          <p className="text-gray-600 text-lg">
            Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No hay proyectos disponibles en este momento.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

