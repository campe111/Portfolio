import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NotFound = () => {
  const [backgroundAttachment, setBackgroundAttachment] = useState('scroll')

  useEffect(() => {
    const updateAttachment = () => {
      setBackgroundAttachment(window.innerWidth >= 768 ? 'fixed' : 'scroll')
    }
    updateAttachment()
    window.addEventListener('resize', updateAttachment)
    return () => window.removeEventListener('resize', updateAttachment)
  }, [])

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center py-12 text-[var(--text-primary)] transition-all duration-300"
      style={{ 
        backgroundImage: 'url(/fondo-hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: backgroundAttachment
      }}
    >
      {/* Overlay oscuro sobre la imagen */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-gradient-to-br from-custom-2 to-custom-3 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:border-custom-4/30 transition-all duration-300 md:p-12"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl md:text-[12rem] font-bold font-['Space_Grotesk'] text-white mb-4"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white mb-4"
          >
            Página No Encontrada
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl font-['Inter'] text-white/90 mb-8"
          >
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="rounded-lg border border-custom-4 bg-custom-4 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-custom-4/50 transition-all duration-300 hover:bg-custom-4/90 hover:scale-105"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/projects"
              className="rounded-lg border border-custom-4/60 bg-custom-3 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-custom-4 hover:border-custom-4 hover:text-custom-1 hover:scale-105"
            >
              Ver Proyectos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

