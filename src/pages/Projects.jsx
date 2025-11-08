// Importaciones de React hooks para manejar estado y efectos
import { useState, useEffect } from 'react'
// Importación de motion de Framer Motion para animaciones
import { motion } from 'framer-motion'
// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'
// Importación del componente tarjeta de proyecto
import ProjectCard from '../components/ProjectCard'
// Importación del componente de sección animada
import AnimatedSection from '../components/AnimatedSection'
// Importación de los datos de proyectos desde JSON
import projectsData from '../data/projects.json'

/**
 * Componente Projects - Página de proyectos
 * Muestra una grilla de tarjetas con todos los proyectos del portfolio
 */
const Projects = () => {
  // Estado para almacenar la lista de proyectos
  const [projects, setProjects] = useState([])
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  // Efecto que se ejecuta al montar el componente para cargar los proyectos
  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    // Contenedor principal con imagen de fondo
    <div 
      className="min-h-screen bg-custom-1 py-12 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay con opacidad para mejorar la legibilidad del texto sobre la imagen */}
      <div 
        className="absolute inset-0 bg-custom-1 transition-colors duration-300"
        style={{ opacity: isLight ? 0.5 : 0.1 }}
      ></div>
      {/* Contenedor del contenido con ancho máximo y padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de la página */}
        <AnimatedSection>
          <div className="text-center mb-12">
            {/* Título principal */}
            <h1 className={`text-4xl font-bold mb-4 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>Mis Proyectos</h1>
            {/* Descripción */}
            <p className={`text-lg font-['Inter'] ${
              isLight ? 'text-gray-800 font-medium' : 'text-gray-300'
            }`}>
              Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo.
            </p>
          </div>
        </AnimatedSection>

        {/* Renderizado condicional: muestra mensaje si no hay proyectos, o grilla si hay */}
        {projects.length === 0 ? (
          // Mensaje cuando no hay proyectos disponibles
          <AnimatedSection>
            <div className="text-center py-12">
              <p className={`text-lg font-['Inter'] ${
                isLight ? 'text-custom-3' : 'text-gray-400'
              }`}>
                No hay proyectos disponibles en este momento.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          // Grilla responsiva de proyectos (1 columna en móvil, 2 en tablet, 3 en desktop)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mapea cada proyecto y lo muestra como una tarjeta animada */}
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

// Exportación del componente Projects como exportación por defecto
export default Projects

