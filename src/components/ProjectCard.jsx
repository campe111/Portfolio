// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'

/**
 * Componente ProjectCard - Tarjeta que muestra información de un proyecto
 * Muestra imagen, título, descripción, tecnologías utilizadas y enlaces a GitHub y demo
 * 
 * @param {Object} project - Objeto que contiene la información del proyecto
 * @param {string} project.title - Título del proyecto
 * @param {string} project.description - Descripción del proyecto
 * @param {string} project.image - URL de la imagen del proyecto
 * @param {Array} project.technologies - Array de tecnologías utilizadas
 * @param {string} project.github - URL del repositorio de GitHub (opcional)
 * @param {string} project.demo - URL de la demostración en vivo (opcional)
 */
const ProjectCard = ({ project }) => {
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  return (
    // Tarjeta de proyecto con sombra y efectos hover
    <div className="bg-custom-2 rounded-lg shadow-lg shadow-black/50 overflow-hidden hover:shadow-xl hover:shadow-black/70 transition-shadow duration-300 border border-custom-3/30">
      {/* Contenedor de la imagen del proyecto */}
      <div className="h-48 bg-custom-1 overflow-hidden">
        <img
          src={project.image || '/placeholder-project.jpg'}
          alt={project.title}
          className="w-full h-full object-cover"
          // Manejo de error: si la imagen no carga, muestra una imagen placeholder SVG
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ffffff" width="400" height="300"/%3E%3Ctext fill="%23d84f4f" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProyecto%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>
      {/* Contenedor del contenido de la tarjeta */}
      <div className="p-6">
        {/* Título del proyecto */}
        <h3 className={`text-xl font-bold mb-2 ${
          isLight ? 'text-custom-5' : 'text-white'
        }`}>{project.title}</h3>
        {/* Descripción del proyecto (limitada a 3 líneas con line-clamp) */}
        <p className={`mb-4 line-clamp-3 ${
          isLight ? 'text-custom-2' : 'text-gray-300'
        }`}>{project.description}</p>
        {/* Contenedor de badges de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Mapea cada tecnología y la muestra como un badge */}
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-custom-5/20 text-custom-5 text-xs rounded-full border border-custom-5/40"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Contenedor de botones de acción */}
        <div className="flex space-x-4">
          {/* Botón de GitHub (solo se muestra si existe la URL) */}
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
          {/* Botón de Demo (solo se muestra si existe la URL) */}
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

// Exportación del componente ProjectCard como exportación por defecto
export default ProjectCard

