import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const About = () => {
  const { theme } = useTheme()
  const quote = "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
  const [displayedQuote, setDisplayedQuote] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const quoteRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            setShowCursor(true)
            let currentIndex = 0
            const typingInterval = setInterval(() => {
              if (currentIndex < quote.length) {
                setDisplayedQuote(quote.slice(0, currentIndex + 1))
                currentIndex++
              } else {
                clearInterval(typingInterval)
                // Ocultar cursor después de un tiempo
                setTimeout(() => {
                  setShowCursor(false)
                }, 1000)
              }
            }, 50) // Velocidad de escritura

            // Desconectar el observer después de iniciar
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px' }
    )

    if (quoteRef.current) {
      observer.observe(quoteRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasStarted, quote])
  return (
    <div className={`relative min-h-screen py-12 text-[var(--text-primary)] transition-all duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-[#E5F2D0] via-[#FFFFFF] to-[#E5F2D0]'
        : 'bg-gradient-to-br from-custom-1 via-custom-2 to-custom-1'
    }`}>
      {/* Patrón de fondo sutil */}
      <div className={`absolute inset-0 opacity-60 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#808C65]/5 via-[#B4BF60]/5 to-[#808C65]/5'
          : 'bg-pattern'
      }`}></div>
      {/* Gradientes decorativos */}
      <div className={`absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl ${
        theme === 'light'
          ? 'bg-gradient-to-br from-[#B4BF60]/20 to-transparent'
          : 'bg-gradient-to-br from-custom-4/10 to-transparent'
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-3xl ${
        theme === 'light'
          ? 'bg-gradient-to-tl from-[#808C65]/25 to-transparent'
          : 'bg-gradient-to-tl from-custom-3/15 to-transparent'
      }`}></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className={`rounded-lg border p-8 shadow-lg backdrop-blur-md md:p-12 transition-all duration-300 ${
            theme === 'light'
              ? 'border-[#808C65]/30 bg-[#C4D89A] shadow-[#808C65]/20'
              : 'border-white/10 bg-black/40 shadow-black/30'
          }`}>
            <h1 className="mb-8 text-center text-4xl font-bold font-['Space_Grotesk']">
              <span 
                className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                  theme === 'light' 
                    ? 'from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D]' 
                    : 'from-custom-5 via-custom-4 to-custom-5'
                }`}
              >
                Sobre Mí
              </span>
            </h1>

          <div className={`space-y-6 ${
            theme === 'light' ? 'text-[#0D0D0D]' : 'text-[var(--text-primary)]'
          }`}>
            <AnimatedSection delay={0.1}>
              <section>
                <h2 className={`text-2xl font-semibold mb-4 font-['Space_Grotesk'] ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                    : 'text-custom-5'
                }`}>
                  Mi Historia
                </h2>
                <p className={`leading-relaxed font-['Inter'] ${
                  theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
                }`}>
                  Mi nombre es Brian y soy un apasionado desarrollador y emprendedor.
                  Mi viaje en el mundo de la tecnología comenzó con la curiosidad de entender
                  cómo funcionaban las cosas que usaba a diario. Esta curiosidad me llevó a
                  explorar el mundo del desarrollo de software, donde encontré mi verdadera pasión.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className={`text-2xl font-semibold mb-4 font-['Space_Grotesk'] ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                    : 'text-custom-5'
                }`}>
                  Mi Motivación
                </h2>
                <p className={`leading-relaxed font-['Inter'] ${
                  theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
                }`}>
                  Creo firmemente en el poder de la tecnología para transformar vidas y resolver
                  problemas reales. Cada proyecto que desarrollo es una oportunidad para aprender,
                  crecer y contribuir al mundo digital. Me motiva la idea de crear soluciones que
                  impacten positivamente a las personas y mejoren su experiencia diaria.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className={`text-2xl font-semibold mb-4 font-['Space_Grotesk'] ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                    : 'text-custom-5'
                }`}>
                  Transición Profesional
                </h2>
                <p className={`leading-relaxed font-['Inter'] ${
                  theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
                }`}>
                  Mi transición al desarrollo profesional fue un proceso de aprendizaje continuo
                  y dedicación. Comencé explorando las bases del desarrollo web y, con el tiempo,
                  fui expandiendo mis conocimientos hacia tecnologías más avanzadas. Cada desafío
                  que enfrenté me ayudó a crecer como desarrollador y a entender mejor las
                  necesidades del mercado.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <h2 className={`text-2xl font-semibold mb-4 font-['Space_Grotesk'] ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                    : 'text-custom-5'
                }`}>
                  Visión a Futuro
                </h2>
                <p className={`leading-relaxed font-['Inter'] ${
                  theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
                }`}>
                  Mi visión es seguir creciendo como desarrollador, explorando nuevas tecnologías
                  y metodologías. Aspiro a liderar proyectos innovadores que combinen mi pasión
                  por la tecnología con mi espíritu emprendedor. Quiero seguir aprendiendo de
                  cada experiencia y contribuir a la comunidad de desarrolladores, compartiendo
                  conocimiento y creando soluciones que marquen la diferencia.
                </p>
              </section>
            </AnimatedSection>
          </div>

          <div className="mt-12 border-t border-[var(--border-color)] pt-8" ref={quoteRef}>
            <p className={`text-center italic font-['Sora'] min-h-[3rem] flex items-center justify-center ${
              theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
            }`}>
              "{displayedQuote}"
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className={`inline-block w-0.5 h-6 ml-1 align-middle ${
                    theme === 'light' ? 'bg-[#0D0D0D]' : 'bg-white'
                  }`}
                />
              )}
            </p>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default About

