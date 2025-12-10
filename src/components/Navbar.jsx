import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Cerrar menú móvil al cambiar de ruta
    setIsMobileMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/about', label: 'Sobre Mí' },
    { path: '/contact', label: 'Contacto' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)] shadow-lg border-[var(--border-color)]'
          : 'bg-[var(--bg-primary)]/40 backdrop-blur-md border-[var(--border-color)]'
      }`}
      style={{ 
        color: 'var(--text-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            to="/"
            className="text-2xl font-bold font-['Space_Grotesk'] text-[var(--text-primary)] transition-all duration-300 hover:text-custom-4 hover:scale-105"
          >
            Brian Matias Ocampos
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-semibold text-[var(--text-primary)]/90 transition-all duration-300 hover:text-custom-4 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Efecto de subrayado animado */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-custom-4 to-custom-5 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                {/* Efecto de resaltado de fondo en hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-custom-4/10 opacity-0 group-hover:opacity-100 -z-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Indicador activo con glow */}
                {isActive(link.path) && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-custom-4/20 -z-0"
                    layoutId="activeNavBg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/20 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-6 flex flex-col justify-center space-y-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-full h-0.5 bg-[var(--text-primary)] rounded"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-0.5 bg-[var(--text-primary)] rounded"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-full h-0.5 bg-[var(--text-primary)] rounded"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-[var(--border-color)] mt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`relative block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-custom-4'
                          : 'text-[var(--text-primary)]/90 hover:text-custom-4'
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Efecto de subrayado para móvil */}
                      {isActive(link.path) && (
                        <motion.div
                          className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-custom-4 to-custom-5"
                          layoutId="activeNavMobile"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      {/* Efecto de fondo en hover móvil */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-custom-4/10 opacity-0 hover:opacity-100"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

