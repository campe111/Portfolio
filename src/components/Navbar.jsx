import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path
  return (
    <nav className={`sticky top-0 z-50 border-b border-white/10 text-white transition-colors duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-lg shadow-lg shadow-black/40' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold font-['Space_Grotesk'] text-white transition-colors duration-300 hover:text-custom-5"
          >
            Brian
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/')
                  ? 'bg-custom-5 text-white shadow shadow-custom-5/60'
                  : 'font-semibold text-white hover:bg-white/25 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/projects')
                  ? 'bg-custom-5 text-white shadow shadow-custom-5/60'
                  : 'font-semibold text-white hover:bg-white/25 hover:text-white'
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/about')
                  ? 'bg-custom-5 text-white shadow shadow-custom-5/60'
                  : 'font-semibold text-white hover:bg-white/25 hover:text-white'
              }`}
            >
              Sobre Mí
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive('/contact')
                  ? 'bg-custom-5 text-white shadow shadow-custom-5/60'
                  : 'font-semibold text-white hover:bg-white/25 hover:text-white'
              }`}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

