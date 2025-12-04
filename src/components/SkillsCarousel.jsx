import { useState, useRef, useEffect } from 'react'
import SkillCard from './SkillCard'

const SkillsCarousel = ({ skills }) => {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [cardWidth, setCardWidth] = useState(216) // 200px (ancho) + 16px (gap)
  const carouselRef = useRef(null)
  const cardRef = useRef(null)
  const animationRef = useRef(null)
  const speedRef = useRef(0.5) // Velocidad del scroll (píxeles por frame) - más lento para suavidad

  // Crear array infinito con más copias para el efecto de rueda continua
  const infiniteSkills = [...skills, ...skills, ...skills, ...skills, ...skills]

  // Calcular el ancho real de las cards al cambiar el tamaño de la ventana
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        const card = cardRef.current
        const computedStyle = window.getComputedStyle(card)
        const width = card.offsetWidth
        const marginRight = parseInt(computedStyle.marginRight) || 16
        setCardWidth(width + marginRight)
      }
    }

    // Esperar un poco para que el DOM se renderice
    const timer = setTimeout(() => {
      updateCardWidth()
    }, 100)

    window.addEventListener('resize', updateCardWidth)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateCardWidth)
    }
  }, [skills.length])

  // Inicializar el scroll en la posición del medio
  useEffect(() => {
    if (carouselRef.current && cardWidth > 0) {
      const initialPosition = (skills.length * 2) * cardWidth // Comenzar en el segundo set
      carouselRef.current.scrollLeft = initialPosition
    }
  }, [skills.length, cardWidth])

  // Animación continua tipo rueda
  useEffect(() => {
    if (cardWidth === 0) return // No iniciar animación hasta que cardWidth esté calculado
    
    const animate = () => {
      if (!carouselRef.current || isPaused || isDragging) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const carousel = carouselRef.current
      const singleSetWidth = skills.length * cardWidth
      const middleStart = singleSetWidth * 2 // Posición inicial del set medio
      const middleEnd = singleSetWidth * 3 // Fin del set medio

      // Mover el scroll continuamente hacia la derecha
      carousel.scrollLeft += speedRef.current

      const currentScroll = carousel.scrollLeft

      // Resetear cuando se sale del rango del set medio hacia el final
      if (currentScroll >= middleEnd) {
        // Volver al inicio del set medio manteniendo la posición relativa
        const offset = currentScroll - middleEnd
        carousel.scrollLeft = middleStart + offset
      }
      // Resetear cuando se sale del rango del set medio hacia el inicio
      else if (currentScroll < middleStart) {
        // Volver al final del set medio manteniendo la posición relativa
        const offset = middleStart - currentScroll
        carousel.scrollLeft = middleEnd - offset
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [skills.length, cardWidth, isPaused, isDragging])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Reanudar después de un breve delay
    setTimeout(() => setIsPaused(false), 1000)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Reanudar después de un breve delay
    setTimeout(() => setIsPaused(false), 1000)
  }

  // Calcular el índice visual para los indicadores
  const getVisualIndex = () => {
    if (!carouselRef.current || cardWidth === 0) return 0
    const scrollPosition = carouselRef.current.scrollLeft
    const singleSetWidth = skills.length * cardWidth
    const relativePosition = scrollPosition % singleSetWidth
    return Math.round(relativePosition / cardWidth) % skills.length
  }

  return (
    <div className="relative" style={{ paddingTop: '8px', paddingBottom: '8px', overflow: 'visible' }}>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ overflowX: 'hidden', overflowY: 'visible', paddingTop: '5px', paddingBottom: '5px' }}
      >
        <div
          ref={carouselRef}
          className="flex gap-4 scrollbar-hide items-center"
          style={{
            overflowX: 'hidden',
            overflowY: 'visible',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {infiniteSkills.map((skill, index) => {
            // Usar callback ref para capturar el ancho del primer card
            const cardRefCallback = (node) => {
              if (node && index === skills.length * 2) {
                if (!cardRef.current) {
                  cardRef.current = node
                }
                const computedStyle = window.getComputedStyle(node)
                const width = node.offsetWidth
                const marginRight = parseInt(computedStyle.marginRight) || 16
                const gap = 16 // gap-4 = 16px
                const newCardWidth = width + gap
                if (newCardWidth > 0 && newCardWidth !== cardWidth) {
                  setCardWidth(newCardWidth)
                }
              }
            }
            return (
              <div
                key={`${skill}-${index}`}
                ref={cardRefCallback}
                className="flex-shrink-0"
              >
                <SkillCard skill={skill} index={index % skills.length} />
              </div>
            )
          })}
        </div>
        
        {/* Overlay para indicar que se puede interactuar */}
        <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-custom-2/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-custom-2/50 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {skills.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === getVisualIndex()
                ? 'bg-custom-4 w-8 shadow-lg shadow-custom-4/40'
                : 'bg-custom-3/60 w-2'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsCarousel

