const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-900 bg-black text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="font-['Inter'] font-medium text-gray-200 transition-colors duration-300">
              © {new Date().getFullYear()} Brian. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 gap-4 md:gap-0">
            <div className="flex space-x-6 justify-center">
              <a
                href="https://github.com/brian"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter'] font-semibold text-gray-200 transition-colors duration-300 hover:text-custom-5"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/brian"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter'] font-semibold text-gray-200 transition-colors duration-300 hover:text-custom-5"
              >
                LinkedIn
              </a>
              <a
                href="mailto:brian@example.com"
                className="font-['Inter'] font-semibold text-gray-200 transition-colors duration-300 hover:text-custom-5"
              >
                Email
              </a>
            </div>
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-100 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            >
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

