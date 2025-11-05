import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ project }) => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className="bg-custom-2 rounded-lg shadow-lg shadow-black/50 overflow-hidden hover:shadow-xl hover:shadow-black/70 transition-shadow duration-300 border border-custom-3/30">
      <div className="h-48 bg-custom-1 overflow-hidden">
        <img
          src={project.image || '/placeholder-project.jpg'}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ffffff" width="400" height="300"/%3E%3Ctext fill="%23d84f4f" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProyecto%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          isLight ? 'text-custom-5' : 'text-white'
        }`}>{project.title}</h3>
        <p className={`mb-4 line-clamp-3 ${
          isLight ? 'text-custom-2' : 'text-gray-300'
        }`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-custom-5/20 text-custom-5 text-xs rounded-full border border-custom-5/40"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-custom-3 text-white text-center py-2 rounded hover:bg-custom-4 transition"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-custom-5 text-white text-center py-2 rounded hover:bg-custom-4 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

