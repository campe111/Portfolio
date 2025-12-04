import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ProjectCard = ({ project, index = 0 }) => {
  const { theme } = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // Obtener todas las imágenes disponibles
  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || '/placeholder-project.jpg']

  // Carrusel automático en la card
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 2000) // Cambia cada 2 segundos

    return () => clearInterval(interval)
  }, [images.length])

  // Navegación con teclado en el modal
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, modalImageIndex, images.length])

  const handleNext = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (imageIndex) => {
    setModalImageIndex(imageIndex)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group rounded-xl overflow-hidden transition-all duration-300 border bg-gradient-to-br from-[var(--bg-secondary)]/90 to-[var(--bg-tertiary)]/90 shadow-xl shadow-[var(--shadow-color)] hover:shadow-2xl hover:shadow-custom-4/20 border-[var(--border-color)] backdrop-blur-sm"
      >
        <div className="relative h-48 bg-[var(--bg-primary)] overflow-hidden cursor-pointer" onClick={() => openModal(currentImageIndex)}>
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231c1c1c" width="400" height="300"/%3E%3Ctext fill="%23d84f4f" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProyecto%3C/text%3E%3C/svg%3E'
              }}
            />
          </AnimatePresence>
          
          {/* Indicadores de múltiples imágenes */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'w-6 bg-custom-4'
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Overlay con icono de zoom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="bg-custom-4/80 rounded-full p-3 backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-custom-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className={`p-6 transition-all duration-300 ${
          theme === 'light'
            ? 'bg-[#C4D89A]'
            : 'bg-gradient-to-br from-custom-2/95 to-custom-3/95'
        }`}>
          <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-custom-4 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-3 text-[var(--text-tertiary)] leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-[#E5F2D0] to-[#B4BF60] text-[#0D0D0D] border border-[#808C65]/40 hover:border-[#808C65] hover:bg-gradient-to-r hover:from-[#B4BF60] hover:to-[#808C65]'
                    : 'bg-gradient-to-r from-custom-5/20 to-custom-4/20 text-custom-5 border border-custom-5/40 hover:border-custom-5 hover:bg-custom-5/30'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-center py-2.5 rounded-lg border border-custom-4/30 font-medium transition-all duration-300 hover:bg-custom-4 hover:border-custom-4 hover:text-custom-1 hover:shadow-lg hover:shadow-custom-4/30"
              >
                GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-custom-4 text-custom-1 text-center py-2.5 rounded-lg font-medium shadow-lg shadow-custom-4/40 transition-all duration-300 hover:shadow-xl hover:shadow-custom-4/50 hover:bg-custom-4/90"
              >
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-custom-4 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contenedor de imagen */}
            <div className="relative max-w-7xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={modalImageIndex}
                  src={images[modalImageIndex]}
                  alt={`${project.title} - Imagen ${modalImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </AnimatePresence>

              {/* Flecha izquierda */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Flecha derecha */}
              {images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Contador de imágenes */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                  {modalImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Indicadores en la parte inferior */}
              {images.length > 1 && (
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        setModalImageIndex(idx)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === modalImageIndex
                          ? 'w-8 bg-custom-4'
                          : 'w-2 bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
