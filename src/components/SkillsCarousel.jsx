import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import SkillCard from './SkillCard'
const SkillsCarousel = ({ skills }) => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const carouselRef = useRef(null)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4)
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3)
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)

    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, skills.length - cardsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 250 + 16
      const scrollAmount = currentIndex * cardWidth
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
            isLight 
              ? 'bg-white border-gray-200 text-gray-900 hover:border-custom-5 hover:shadow-custom-5/30 shadow-md shadow-gray-200/60' 
              : 'bg-custom-2 border-custom-3/30 text-white hover:bg-custom-3 hover:border-custom-5'
          } ${currentIndex === 0 ? 'opacity-30' : ''}`}
          aria-label="Anterior"
        >
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

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
            isLight 
              ? 'bg-white border-gray-200 text-gray-900 hover:border-custom-5 hover:shadow-custom-5/30 shadow-md shadow-gray-200/60' 
              : 'bg-custom-2 border-custom-3/30 text-white hover:bg-custom-3 hover:border-custom-5'
          } ${currentIndex >= maxIndex ? 'opacity-30' : ''}`}
          aria-label="Siguiente"
        >
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

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.min(skills.length, maxIndex + 1) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-custom-5 w-8'
                  : isLight 
                    ? 'bg-gray-400 w-2 hover:bg-gray-600' 
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

export default SkillsCarousel

