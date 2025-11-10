import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ project }) => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className={`rounded-lg overflow-hidden transition-shadow duration-300 border ${
      isLight
        ? 'bg-white shadow-lg shadow-gray-200/80 hover:shadow-xl hover:shadow-gray-300/80 border-gray-200'
        : 'bg-custom-2 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70 border-custom-3/30'
    }`}>
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
          isLight ? 'text-gray-900' : 'text-white'
        }`}>{project.title}</h3>
        <p className={`mb-4 line-clamp-3 ${
          isLight ? 'text-gray-700' : 'text-gray-300'
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
              className={`flex-1 text-center py-2 rounded transition border ${
                isLight
                  ? 'bg-custom-3 text-gray-900 border-custom-3 hover:bg-custom-4 hover:text-white'
                  : 'bg-custom-3 text-white border-transparent hover:bg-custom-4'
              }`}
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

