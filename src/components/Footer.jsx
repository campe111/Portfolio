// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'

/**
 * Componente Footer - Pie de página del sitio
 * Muestra información de copyright y enlaces a redes sociales
 */
const Footer = () => {
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  return (
    // Pie de página con estilos dinámicos según el tema
    <footer className={`mt-auto border-t transition-colors duration-300 ${
      isLight ? 'bg-custom-3 border-gray-500 shadow-lg shadow-gray-600/30' : 'bg-custom-1 border-custom-2'
    }`}>
      {/* Contenedor principal con ancho máximo y padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contenedor flex que se adapta a dispositivos móviles y desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Sección de copyright */}
          <div className="mb-4 md:mb-0">
            <p className={`font-['Inter'] font-medium ${
              isLight ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {/* Muestra el año actual dinámicamente */}
              © {new Date().getFullYear()} Brian. Todos los derechos reservados.
            </p>
          </div>
          {/* Contenedor de enlaces a redes sociales */}
          <div className="flex space-x-6">
            {/* Enlace a GitHub */}
            <a
              href="https://github.com/brian"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-custom-5 transition font-['Inter'] font-semibold ${
                isLight ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              GitHub
            </a>
            {/* Enlace a LinkedIn */}
            <a
              href="https://linkedin.com/in/brian"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-custom-5 transition font-['Inter'] font-semibold ${
                isLight ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              LinkedIn
            </a>
            {/* Enlace de correo electrónico */}
            <a
              href="mailto:brian@example.com"
              className={`hover:text-custom-5 transition font-['Inter'] font-semibold ${
                isLight ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Exportación del componente Footer como exportación por defecto
export default Footer

