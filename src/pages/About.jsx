import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

const About = () => {
  const quote = "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
  const [displayedQuote, setDisplayedQuote] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [backgroundAttachment, setBackgroundAttachment] = useState('scroll')
  const quoteRef = useRef(null)

  useEffect(() => {
    const updateAttachment = () => {
      setBackgroundAttachment(window.innerWidth >= 768 ? 'fixed' : 'scroll')
    }
    updateAttachment()
    window.addEventListener('resize', updateAttachment)
    return () => window.removeEventListener('resize', updateAttachment)
  }, [])

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
    <div 
      className="relative min-h-screen py-12 text-[var(--text-primary)] transition-all duration-300"
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-custom-2 to-custom-3 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl hover:border-custom-4/30 transition-all duration-300 md:p-12">
            <h1 className="mb-8 text-center text-4xl font-bold font-['Space_Grotesk'] text-white">
              Sobre Mí
            </h1>

          <div className="space-y-6 text-white/90">
            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 font-['Space_Grotesk'] text-white">
                  Mi Historia
                </h2>
                <p className="leading-relaxed font-['Inter'] text-white/90">
                  Mi nombre es Brian y soy un apasionado desarrollador y emprendedor.
                  Mi viaje en el mundo de la tecnología comenzó con la curiosidad de entender
                  cómo funcionaban las cosas que usaba a diario. Esta curiosidad me llevó a
                  explorar el mundo del desarrollo de software, donde encontré mi verdadera pasión.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 font-['Space_Grotesk'] text-white">
                  Mi Motivación
                </h2>
                <p className="leading-relaxed font-['Inter'] text-white/90">
                  Creo firmemente en el poder de la tecnología para transformar vidas y resolver
                  problemas reales. Cada proyecto que desarrollo es una oportunidad para aprender,
                  crecer y contribuir al mundo digital. Me motiva la idea de crear soluciones que
                  impacten positivamente a las personas y mejoren su experiencia diaria.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-2xl font-semibold mb-4 font-['Space_Grotesk'] text-white">
                  Transición Profesional
                </h2>
                <p className="leading-relaxed font-['Inter'] text-white/90">
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
                <h2 className="text-2xl font-semibold mb-4 font-['Space_Grotesk'] text-white">
                  Visión a Futuro
                </h2>
                <p className="leading-relaxed font-['Inter'] text-white/90">
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
            <p className="text-center italic font-['Sora'] min-h-[3rem] flex items-center justify-center text-white/90">
              "{displayedQuote}"
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-0.5 h-6 ml-1 align-middle bg-white"
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

