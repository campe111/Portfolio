import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const location = useLocation()
  const { theme } = useTheme()

  const isActive = (path) => location.pathname === path
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-lg shadow-gray-300/40 backdrop-blur-sm transition-colors duration-300 dark:border-custom-2 dark:bg-custom-1 dark:shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold font-['Space_Grotesk'] text-gray-900 transition-colors duration-300 hover:text-custom-5 dark:text-white"
          >
            Brian
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'bg-custom-5 text-white'
                  : 'font-semibold text-gray-900 hover:bg-gray-100 hover:text-custom-5 dark:text-gray-300 dark:hover:bg-custom-2 dark:hover:text-white'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/projects')
                  ? 'bg-custom-5 text-white'
                  : 'font-semibold text-gray-900 hover:bg-gray-100 hover:text-custom-5 dark:text-gray-300 dark:hover:bg-custom-2 dark:hover:text-white'
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/about')
                  ? 'bg-custom-5 text-white'
                  : 'font-semibold text-gray-900 hover:bg-gray-100 hover:text-custom-5 dark:text-gray-300 dark:hover:bg-custom-2 dark:hover:text-white'
              }`}
            >
              Sobre Mí
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/contact')
                  ? 'bg-custom-5 text-white'
                  : 'font-semibold text-gray-900 hover:bg-gray-100 hover:text-custom-5 dark:text-gray-300 dark:hover:bg-custom-2 dark:hover:text-white'
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

