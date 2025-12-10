import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project, index = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(new Set([0]))

  // Obtener todas las imágenes disponibles
  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image || '/placeholder-project.jpg']

  // Pre-cargar la siguiente imagen antes de que se necesite
  useEffect(() => {
    if (images.length <= 1) return

    const preloadImage = (src) => {
      const img = new Image()
      img.src = src
    }

    // Pre-cargar la siguiente imagen cuando cambia currentImageIndex
    const nextIndex = (currentImageIndex + 1) % images.length
    if (!imagesLoaded.has(nextIndex)) {
      preloadImage(images[nextIndex])
      setImagesLoaded(prev => new Set([...prev, nextIndex]))
    }
  }, [currentImageIndex, images, imagesLoaded])

  // Carrusel automático en la card con delay único por card
  useEffect(() => {
    if (images.length <= 1) return

    // Delay inicial diferente para cada card basado en su índice
    // Cada card tendrá un offset de 800ms adicionales (ajustado para mejor efecto)
    const initialDelay = index * 800 // 0ms, 800ms, 1600ms, 2400ms, etc.

    let interval
    
    const timeoutId = setTimeout(() => {
      // Después del delay inicial, comenzar el intervalo
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 3500) // Cambia cada 3.5 segundos (ajustado para dar tiempo a la animación)
    }, initialDelay)

    return () => {
      clearTimeout(timeoutId)
      if (interval) clearInterval(interval)
    }
  }, [images.length, index])

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
        <div className="relative h-48 md:h-56 lg:h-64 bg-[var(--bg-primary)] overflow-hidden cursor-pointer" onClick={() => openModal(currentImageIndex)} style={{ contain: 'layout style paint' }}>
          <AnimatePresence initial={false} custom={currentImageIndex}>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
              custom={currentImageIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ willChange: 'transform, opacity' }}
              loading={currentImageIndex === 0 && index < 3 ? 'eager' : 'lazy'}
              fetchPriority={currentImageIndex === 0 && index < 3 ? 'high' : 'auto'}
              decoding="async"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231c1c1c" width="400" height="300"/%3E%3Ctext fill="%23d84f4f" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProyecto%3C/text%3E%3C/svg%3E'
              }}
            />
          </AnimatePresence>
          
          {/* Pre-cargar la siguiente imagen ocultamente */}
          {images.length > 1 && (
            <img
              src={images[(currentImageIndex + 1) % images.length]}
              alt=""
              className="hidden"
              loading="eager"
              aria-hidden="true"
            />
          )}
          
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
        <div 
          className="p-4 md:p-6 transition-all duration-300 relative"
          style={{
            backgroundImage: 'url(/fondo-hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay oscuro sobre la imagen */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-custom-4 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mb-3 md:mb-4 line-clamp-3 text-sm md:text-base text-white/90 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full backdrop-blur-sm transition-all duration-300 bg-gradient-to-r from-custom-2/20 to-custom-4/20 text-white border border-custom-2/40 hover:border-custom-2 hover:bg-custom-2/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 sm:space-x-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-center py-2 md:py-2.5 rounded-lg border border-custom-4/30 text-sm md:text-base font-medium transition-all duration-300 hover:bg-custom-4 hover:border-custom-4 hover:text-custom-1 hover:shadow-lg hover:shadow-custom-4/30"
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
                className="flex-1 bg-custom-4 text-white text-center py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium shadow-lg shadow-custom-4/40 transition-all duration-300 hover:shadow-xl hover:shadow-custom-4/50 hover:bg-custom-4/90"
              >
                Demo
              </motion.a>
            )}
          </div>
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
