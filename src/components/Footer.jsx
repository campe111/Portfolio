const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white text-gray-900 shadow-inner shadow-gray-200/60 transition-colors duration-300 dark:border-custom-2 dark:bg-custom-1 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-['Inter'] font-medium text-gray-900 transition-colors duration-300 dark:text-gray-400">
              © {new Date().getFullYear()} Brian. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/brian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] font-semibold text-gray-900 transition-colors duration-300 hover:text-custom-5 dark:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/brian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter'] font-semibold text-gray-900 transition-colors duration-300 hover:text-custom-5 dark:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:brian@example.com"
              className="font-['Inter'] font-semibold text-gray-900 transition-colors duration-300 hover:text-custom-5 dark:text-gray-400"
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

