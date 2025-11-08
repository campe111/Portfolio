// Importaciones de React hooks para manejar estado, referencias y efectos
import { useState, useRef, useEffect } from 'react'
// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'
// Importación del componente SkillCard para mostrar cada habilidad
import SkillCard from './SkillCard'

/**
 * Componente SkillsCarousel - Carrusel de habilidades con navegación y arrastre
 * Permite navegar entre las skills usando botones o arrastrando con el mouse/touch
 * Se adapta responsivamente mostrando diferente cantidad de cards según el tamaño de pantalla
 * 
 * @param {Array} skills - Array de strings con los nombres de las habilidades
 */
const SkillsCarousel = ({ skills }) => {
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'
  // Estado para el índice actual del carrusel
  const [currentIndex, setCurrentIndex] = useState(0)
  // Estado que indica si el usuario está arrastrando el carrusel
  const [isDragging, setIsDragging] = useState(false)
  // Posición X inicial cuando comienza el arrastre
  const [startX, setStartX] = useState(0)
  // Posición de scroll inicial cuando comienza el arrastre
  const [scrollLeft, setScrollLeft] = useState(0)
  // Estado para la cantidad de cards visibles según el tamaño de pantalla
  const [cardsPerView, setCardsPerView] = useState(3)
  // Referencia al elemento del carrusel para manipulación directa del DOM
  const carouselRef = useRef(null)

  // Efecto para actualizar la cantidad de cards visibles según el tamaño de pantalla
  useEffect(() => {
    // Función que calcula cuántas cards mostrar según el ancho de la ventana
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        // Pantallas grandes (lg): 4 cards
        setCardsPerView(4)
      } else if (window.innerWidth >= 768) {
        // Tablets (md): 3 cards
        setCardsPerView(3)
      } else if (window.innerWidth >= 640) {
        // Tablets pequeñas (sm): 2 cards
        setCardsPerView(2)
      } else {
        // Móviles: 1 card
        setCardsPerView(1)
      }
    }

    // Actualiza inmediatamente al montar el componente
    updateCardsPerView()
    // Agrega listener para redimensionar la ventana
    window.addEventListener('resize', updateCardsPerView)

    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Calcula el índice máximo permitido para evitar scroll infinito
  const maxIndex = Math.max(0, skills.length - cardsPerView)

  // Función para navegar a la tarjeta anterior
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  // Función para navegar a la tarjeta siguiente
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // Funcionalidad de arrastre con el mouse para desplazar el carrusel
  // Maneja el evento cuando se presiona el botón del mouse
  const handleMouseDown = (e) => {
    setIsDragging(true)
    // Calcula la posición X inicial relativa al elemento del carrusel
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    // Guarda la posición de scroll actual
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  // Maneja el movimiento del mouse mientras se arrastra
  const handleMouseMove = (e) => {
    // Si no se está arrastrando, no hace nada
    if (!isDragging) return
    e.preventDefault()
    // Calcula la nueva posición X
    const x = e.pageX - carouselRef.current.offsetLeft
    // Calcula la distancia recorrida (multiplicado por 2 para mayor sensibilidad)
    const walk = (x - startX) * 2
    // Actualiza la posición de scroll del carrusel
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Maneja el evento cuando se suelta el botón del mouse
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Maneja el evento cuando el mouse sale del área del carrusel
  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Eventos táctiles para dispositivos móviles
  // Maneja el inicio del toque en dispositivos táctiles
  const handleTouchStart = (e) => {
    setIsDragging(true)
    // Calcula la posición X inicial del toque relativa al elemento
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    // Guarda la posición de scroll actual
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  // Maneja el movimiento del toque mientras se arrastra
  const handleTouchMove = (e) => {
    // Si no se está arrastrando, no hace nada
    if (!isDragging) return
    // Calcula la nueva posición X del toque
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    // Calcula la distancia recorrida (multiplicado por 2 para mayor sensibilidad)
    const walk = (x - startX) * 2
    // Actualiza la posición de scroll del carrusel
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Maneja el evento cuando se termina el toque
  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Efecto para hacer scroll suave al índice actual cuando cambia
  useEffect(() => {
    if (carouselRef.current) {
      // Ancho de cada card (250px) + espacio entre cards (16px)
      const cardWidth = 250 + 16
      // Calcula la cantidad de scroll necesaria
      const scrollAmount = currentIndex * cardWidth
      // Hace scroll suave al índice actual
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  return (
    // Contenedor principal del carrusel
    <div className="relative">
      {/* Contenedor con botones de navegación y carrusel */}
      <div className="flex items-center gap-4">
        {/* Botón para navegar a la tarjeta anterior */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
            isLight 
              ? 'bg-custom-3 border-gray-500 text-gray-900 hover:bg-custom-4 hover:border-custom-5 shadow-lg shadow-gray-600/40' 
              : 'bg-custom-2 border-custom-3/30 text-white hover:bg-custom-3 hover:border-custom-5'
          } ${currentIndex === 0 ? 'opacity-30' : ''}`}
          aria-label="Anterior"
        >
          {/* Ícono de flecha izquierda */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Contenedor del carrusel con scroll horizontal */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            // Cambia el cursor según si se está arrastrando o no
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          // Eventos de mouse para arrastrar en desktop
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          // Eventos táctiles para arrastrar en móviles
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Mapea cada skill y la muestra como una SkillCard */}
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Botón para navegar a la tarjeta siguiente */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
            isLight 
              ? 'bg-custom-3 border-gray-500 text-gray-900 hover:bg-custom-4 hover:border-custom-5 shadow-lg shadow-gray-600/40' 
              : 'bg-custom-2 border-custom-3/30 text-white hover:bg-custom-3 hover:border-custom-5'
          } ${currentIndex >= maxIndex ? 'opacity-30' : ''}`}
          aria-label="Siguiente"
        >
          {/* Ícono de flecha derecha */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores de puntos que muestran la posición actual en el carrusel */}
      <div className="flex justify-center gap-2 mt-6">
        {/* Crea un punto por cada grupo de cards visibles */}
        {Array.from({ length: Math.min(skills.length, maxIndex + 1) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                // El punto activo es más ancho y de color destacado
                index === currentIndex
                  ? 'bg-custom-5 w-8'
                  : isLight 
                    ? 'bg-gray-600 w-2 hover:bg-gray-700' 
                    : 'bg-custom-3 w-2 hover:bg-custom-4'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  )
}

// Exportación del componente SkillsCarousel como exportación por defecto
export default SkillsCarousel

