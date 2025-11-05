import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <footer className={`mt-auto border-t transition-colors duration-300 ${
      isLight ? 'bg-custom-3 border-gray-500 shadow-lg shadow-gray-600/30' : 'bg-custom-1 border-custom-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`font-['Inter'] font-medium ${
              isLight ? 'text-gray-900' : 'text-gray-400'
            }`}>
              © {new Date().getFullYear()} Brian. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
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

export default Footer

