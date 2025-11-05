import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
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
  const { theme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`bg-custom-1 py-20 transition-colors duration-300 relative overflow-hidden ${
            isLight ? 'text-custom-5' : 'text-white'
          }`}
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay con opacidad para la imagen de fondo */}
          <div 
            className="absolute inset-0 bg-custom-1 transition-colors duration-300"
            style={{ opacity: isLight ? 0.5 : 0.1 }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-6xl font-bold mb-6 font-['Space_Grotesk'] ${
                isLight ? 'text-custom-5' : 'text-white'
              }`}
            >
              Hola, soy <span className="text-custom-5">Brian</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl md:text-2xl mb-8 font-['Inter'] ${
                isLight ? 'text-gray-800 font-semibold' : 'text-gray-300'
              }`}
            >
              Desarrollador y Emprendedor
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`bg-custom-2/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8 border border-custom-3/30 ${
                isLight ? 'bg-white/90 border-custom-3 shadow-lg' : ''
              }`}
            >
              <p className={`text-lg italic font-['Sora'] ${
                isLight ? 'text-gray-800' : 'text-gray-200'
              }`}>{quote}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className={`inline-block px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-lg font-['Inter'] ${
                  isLight 
                    ? 'bg-custom-5 text-white hover:bg-custom-4 shadow-custom-5/70 border-2 border-custom-5' 
                    : 'bg-custom-5 text-white hover:bg-custom-4 shadow-custom-5/50'
                }`}
              >
                Ver Mis Proyectos
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <AnimatedSection className={`py-16 transition-colors duration-300 ${
          isLight ? 'bg-custom-1 text-custom-5' : 'bg-custom-1 text-white'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-center mb-12 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>
              Tecnologías que Domino
            </h2>
            <SkillsCarousel skills={skillsData} />
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.2} className={`py-16 transition-colors duration-300 relative overflow-hidden ${
          isLight ? 'text-custom-5' : 'text-white'
        }`}
        style={{
          backgroundImage: `url('/img/background-cta.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
          {/* Overlay con gradiente y opacidad para la imagen de fondo */}
          <div 
            className="absolute inset-0 transition-colors duration-300"
            style={{
              background: isLight 
                ? 'linear-gradient(135deg, rgba(232, 232, 232, 0.6) 0%, rgba(245, 245, 245, 0.6) 20%, rgba(232, 232, 232, 0.6) 40%, rgba(245, 245, 245, 0.6) 60%, rgba(232, 232, 232, 0.6) 80%, rgba(245, 245, 245, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(42, 42, 42, 0.3) 0%, rgba(59, 59, 59, 0.3) 20%, rgba(28, 28, 28, 0.3) 40%, rgba(59, 59, 59, 0.3) 60%, rgba(42, 42, 42, 0.3) 80%, rgba(59, 59, 59, 0.3) 100%)',
            }}>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className={`text-3xl font-bold mb-4 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>
              ¿Querés conocer más sobre mí?
            </h2>
            <p className={`mb-8 text-lg font-['Inter'] ${
              isLight ? 'text-gray-800 font-medium' : 'text-gray-300'
            }`}>
              Explorá mi historia, proyectos y conectemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className={`px-8 py-3 rounded-lg font-semibold hover:bg-custom-4 transition shadow-lg font-['Inter'] ${
                  isLight 
                    ? 'bg-custom-5 text-white shadow-custom-5/60 border-2 border-custom-5' 
                    : 'bg-custom-5 text-white shadow-custom-5/30'
                }`}
              >
                Mi Historia
              </Link>
              <Link
                to="/contact"
                className={`px-8 py-3 rounded-lg font-semibold transition border font-['Inter'] ${
                  isLight 
                    ? 'bg-custom-3 text-white hover:bg-custom-4 border-2 border-custom-3 shadow-lg shadow-gray-600/40' 
                    : 'bg-custom-3 text-white hover:bg-custom-4 border border-custom-5/30'
                }`}
              >
                Contactame
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Home

