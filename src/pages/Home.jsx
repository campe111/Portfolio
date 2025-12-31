import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SkillsCarousel from '../components/SkillsCarousel'
import AnimatedSection from '../components/AnimatedSection'
import skillsData from '../data/skills.json'

const motivationalQuotes = [
  "El código es poesía escrita en lógica.",
  "Construir el futuro, un commit a la vez.",
  "La mejor manera de predecir el futuro es creándolo.",
  "Cada línea de código es un paso hacia la innovación.",
  "La pasión por la tecnología impulsa el cambio.",
]

const Home = () => {
  const [quote, setQuote] = useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isChangingQuote, setIsChangingQuote] = useState(false)
  const [flashPosition, setFlashPosition] = useState(-30)
  const [nextQuote, setNextQuote] = useState('')
  const [backgroundAttachment, setBackgroundAttachment] = useState('scroll')
  const fullText = "Hola, soy Brian"

  useEffect(() => {
    const updateAttachment = () => {
      setBackgroundAttachment(window.innerWidth >= 768 ? 'fixed' : 'scroll')
    }
    updateAttachment()
    window.addEventListener('resize', updateAttachment)
    return () => window.removeEventListener('resize', updateAttachment)
  }, [])

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  // Efecto de cambio de frase con destello
  useEffect(() => {
    const interval = setInterval(() => {
      // Seleccionar nueva frase
      let newQuote
      do {
        newQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
      } while (newQuote === quote)
      
      setNextQuote(newQuote)
      setIsChangingQuote(true)
      setFlashPosition(-30)
      
      // Animar el destello de izquierda a derecha
      const flashInterval = setInterval(() => {
        setFlashPosition((prev) => {
          if (prev >= 130) {
            clearInterval(flashInterval)
            // Cambiar la frase cuando el destello llega al final
            setQuote(newQuote)
            setIsChangingQuote(false)
            setFlashPosition(-30)
            return -30
          }
          return prev + 3
        })
      }, 16)
    }, 8000) // Cambiar cada 8 segundos

    return () => {
      clearInterval(interval)
    }
  }, [quote])

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Ocultar cursor después de un tiempo
        setTimeout(() => {
          setShowCursor(false)
        }, 1000)
      }
    }, 60) // Velocidad de escritura más rápida

    return () => clearInterval(typingInterval)
  }, [fullText])

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-20 transition-all duration-300"
          style={{ 
            zIndex: 1,
            backgroundImage: 'url(/fondo-hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay oscuro sobre la imagen */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-5xl font-bold font-['Space_Grotesk'] md:text-6xl text-[var(--text-primary)] min-h-[4rem] md:min-h-[5rem] flex items-center justify-center"
            >
              {displayedText || fullText}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-1 h-12 md:h-16 bg-custom-4 ml-2 align-middle"
                />
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-xl font-['Inter'] font-semibold text-white md:text-2xl"
            >
              Desarrollador Web Frontend
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative mx-auto mb-8 max-w-2xl rounded-xl border p-8 shadow-2xl backdrop-blur-md transition-all duration-300 overflow-hidden border-[var(--border-color)] bg-gradient-to-br from-[var(--bg-secondary)]/60 to-[var(--bg-tertiary)]/60 hover:border-custom-4/40"
            >
              {/* Contenedor de frases con máscara */}
              <div className="relative">
                {/* Frase actual */}
                <p 
                  className="text-lg italic font-['Sora'] text-[var(--text-primary)] leading-relaxed transition-opacity duration-300"
                  style={{ 
                    opacity: isChangingQuote ? 0 : 1 
                  }}
                >
                  {quote}
                </p>
                
                {/* Frase siguiente */}
                {isChangingQuote && (
                  <p 
                    className="absolute inset-0 text-lg italic font-['Sora'] text-gray-100 leading-relaxed transition-opacity duration-300"
                    style={{ 
                      opacity: 1,
                      clipPath: `inset(0 ${100 - flashPosition}% 0 0)`
                    }}
                  >
                    {nextQuote}
                  </p>
                )}
              </div>
              
              {/* Efecto de destello brillante */}
              {isChangingQuote && (
                <motion.div
                  className="absolute inset-y-0 z-30 pointer-events-none"
                  style={{
                    left: `${flashPosition}%`,
                    width: '40%',
                    background: `linear-gradient(90deg, 
                      transparent 0%, 
                      rgba(180, 191, 96, 0.4) 20%, 
                      rgba(229, 242, 208, 0.8) 50%, 
                      rgba(180, 191, 96, 0.4) 80%, 
                      transparent 100%)`,
                    filter: 'blur(8px)',
                    transform: 'translateX(-50%)',
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="group inline-block transform rounded-xl bg-custom-4 px-10 py-4 font-['Inter'] text-lg font-semibold text-white shadow-xl shadow-custom-4/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-4/60 hover:bg-custom-4/90"
              >
                <span className="flex items-center gap-2">
                  Ver Mis Proyectos
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open('/CvOcampos-DEV (1).pdf', '_blank')
                }}
                className="group inline-block transform rounded-xl border border-custom-4 bg-custom-2 px-10 py-4 font-['Inter'] text-lg font-semibold text-custom-4 shadow-xl shadow-custom-4/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-4/50 hover:bg-custom-2/90 hover:text-custom-4"
              >
                CV
              </button>
            </motion.div>
          </div>
        </motion.section>

        <AnimatedSection className="relative py-16 transition-all duration-300 bg-black">
          {/* Overlay de fondo */}
          <div className="absolute inset-0 bg-black"></div>
          {/* Gradientes decorativos */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-custom-4/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-custom-3/15 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-custom-2 to-custom-3 px-10 pt-6 pb-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:border-custom-4/30 transition-all duration-300" style={{ overflow: 'visible' }}>
              <h2 className="mb-6 text-center text-3xl md:text-4xl font-bold font-['Space_Grotesk'] transition-all duration-300 text-white">
                Tecnologías que Domino
              </h2>
              <div style={{ paddingTop: '10px', paddingBottom: '10px', overflow: 'visible' }}>
                <SkillsCarousel skills={skillsData} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="relative overflow-hidden py-16 text-[var(--text-primary)] transition-all duration-300"
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
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-custom-2 to-custom-3 px-10 pt-6 pb-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:border-custom-4/30 transition-all duration-300">
              <h2 className="mb-4 text-3xl font-bold font-['Space_Grotesk'] text-white">
                ¿Querés conocer más sobre mí?
              </h2>
              <p className="mb-8 text-lg font-['Inter'] font-medium text-white/80">
                Explorá mi historia, proyectos y conectemos.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="rounded-lg border border-custom-4 bg-custom-4 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-custom-4/50 transition-colors duration-300 hover:bg-custom-4/90"
              >
                Mi Historia
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-custom-4/60 bg-custom-3 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-black/30 transition-colors duration-300 hover:bg-custom-4 hover:border-custom-4 hover:text-custom-1"
              >
                Contactame
              </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Home

