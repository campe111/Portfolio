// Importaciones de React Router para navegación y detección de ruta actual
import { Link, useLocation } from 'react-router-dom'
// Importación del contexto de tema para acceder al tema actual
import { useTheme } from '../context/ThemeContext'
// Componente para cambiar entre tema claro y oscuro
import ThemeToggle from './ThemeToggle'

/**
 * Componente Navbar - Barra de navegación principal del sitio
 * Incluye el logo, enlaces de navegación y el toggle de tema
 */
const Navbar = () => {
  // Obtiene la ruta actual de la aplicación
  const location = useLocation()
  // Obtiene el tema actual del contexto (light o dark)
  const { theme } = useTheme()

  // Función para verificar si una ruta está activa (si coincide con la ruta actual)
  const isActive = (path) => location.pathname === path
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  return (
    // Barra de navegación con estilos dinámicos según el tema
    <nav className={`shadow-lg sticky top-0 z-50 border-b transition-colors duration-300 ${
      isLight 
        ? 'bg-custom-3 shadow-gray-600/60 border-gray-500 backdrop-blur-sm' 
        : 'bg-custom-1 shadow-black/50 border-custom-2'
    }`}>
      {/* Contenedor principal con ancho máximo y padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor flex para organizar el logo y los elementos de navegación */}
        <div className="flex justify-between items-center h-16">
          {/* Enlace del logo/nombre que lleva a la página principal */}
          <Link to="/" className={`text-2xl font-bold hover:text-custom-5 transition font-['Space_Grotesk'] ${
            isLight ? 'text-custom-5' : 'text-white'
          }`}>
            Brian
          </Link>
          {/* Contenedor para el toggle de tema y los enlaces de navegación */}
          <div className="flex items-center space-x-4">
            {/* Componente para cambiar entre tema claro y oscuro */}
            <ThemeToggle />
            {/* Contenedor de los enlaces de navegación */}
            <div className="flex space-x-4">
            {/* Enlace a la página de inicio */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/')
                  ? 'bg-custom-5 text-white'
                  : isLight 
                    ? 'text-gray-900 hover:bg-gray-600 hover:text-white font-semibold' 
                    : 'text-gray-300 hover:bg-custom-2 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            {/* Enlace a la página de proyectos */}
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/projects')
                  ? 'bg-custom-5 text-white'
                  : isLight 
                    ? 'text-gray-900 hover:bg-gray-600 hover:text-white font-semibold' 
                    : 'text-gray-300 hover:bg-custom-2 hover:text-white'
              }`}
            >
              Proyectos
            </Link>
            {/* Enlace a la página sobre mí */}
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/about')
                  ? 'bg-custom-5 text-white'
                  : isLight 
                    ? 'text-gray-900 hover:bg-gray-600 hover:text-white font-semibold' 
                    : 'text-gray-300 hover:bg-custom-2 hover:text-white'
              }`}
            >
              Sobre Mí
            </Link>
            {/* Enlace a la página de contacto */}
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive('/contact')
                  ? 'bg-custom-5 text-white'
                  : isLight 
                    ? 'text-gray-900 hover:bg-gray-600 hover:text-white font-semibold' 
                    : 'text-gray-300 hover:bg-custom-2 hover:text-white'
              }`}
            >
              Contacto
            </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Exportación del componente Navbar como exportación por defecto
export default Navbar

