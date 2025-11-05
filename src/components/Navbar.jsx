import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const location = useLocation()
  const { theme } = useTheme()

  const isActive = (path) => location.pathname === path
  const isLight = theme === 'light'

  return (
    <nav className={`shadow-lg sticky top-0 z-50 border-b transition-colors duration-300 ${
      isLight 
        ? 'bg-custom-3 shadow-gray-600/60 border-gray-500 backdrop-blur-sm' 
        : 'bg-custom-1 shadow-black/50 border-custom-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className={`text-2xl font-bold hover:text-custom-5 transition font-['Space_Grotesk'] ${
            isLight ? 'text-custom-5' : 'text-white'
          }`}>
            Brian
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex space-x-4">
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

export default Navbar

