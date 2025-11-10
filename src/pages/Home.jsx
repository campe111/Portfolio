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
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-white py-20 text-gray-900 transition-colors duration-300 dark:bg-custom-1 dark:text-white"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div 
            className="absolute inset-0 bg-custom-1 transition-colors duration-300"
            style={{ opacity: isLight ? 0 : 0.1 }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-5xl font-bold font-['Space_Grotesk'] md:text-6xl text-gray-900 transition-colors duration-300 dark:text-white"
            >
              Hola, soy <span className="text-custom-5">Brian</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-xl font-['Inter'] font-semibold text-gray-800 transition-colors duration-300 md:text-2xl dark:text-gray-300"
            >
              Desarrollador y Emprendedor
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mb-8 max-w-2xl rounded-lg border border-custom-3/30 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-colors duration-300 dark:border-custom-3/40 dark:bg-custom-2/60"
            >
              <p className="text-lg italic font-['Sora'] text-gray-800 transition-colors duration-300 dark:text-gray-200">{quote}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-block transform rounded-lg border-2 border-custom-5 bg-custom-5 px-8 py-3 font-['Inter'] text-lg font-semibold text-white shadow-lg shadow-custom-5/70 transition-transform transition-colors duration-300 hover:scale-105 hover:bg-custom-4 dark:border-transparent dark:shadow-custom-5/50"
              >
                Ver Mis Proyectos
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <AnimatedSection className="py-16 bg-white text-gray-900 transition-colors duration-300 dark:bg-custom-1 dark:text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-black/10 bg-black/20 p-10 shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 dark:border-[#b3b3b3]/20 dark:bg-[#b3b3b3]/20 dark:shadow-black/30">
              <h2 className="mb-12 text-center text-3xl font-bold font-['Space_Grotesk'] text-white transition-colors duration-300 dark:text-white">
                Tecnologías que Domino
              </h2>
              <SkillsCarousel skills={skillsData} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="relative overflow-hidden py-16 text-gray-900 transition-colors duration-300 dark:text-white"
        style={{
          backgroundImage: `url('/img/background-cta.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
          <div 
            className="absolute inset-0 transition-colors duration-300"
            style={{
              background: isLight 
                ? 'transparent'
                : 'linear-gradient(135deg, rgba(42, 42, 42, 0.3) 0%, rgba(59, 59, 59, 0.3) 20%, rgba(28, 28, 28, 0.3) 40%, rgba(59, 59, 59, 0.3) 60%, rgba(42, 42, 42, 0.3) 80%, rgba(59, 59, 59, 0.3) 100%)',
            }}>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="mb-4 text-3xl font-bold font-['Space_Grotesk'] text-gray-900 transition-colors duration-300 dark:text-white">
              ¿Querés conocer más sobre mí?
            </h2>
            <p className="mb-8 text-lg font-['Inter'] font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300">
              Explorá mi historia, proyectos y conectemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="rounded-lg border-2 border-custom-5 bg-custom-5 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-custom-5/60 transition-colors duration-300 hover:bg-custom-4 dark:border-transparent dark:shadow-custom-5/30"
              >
                Mi Historia
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-custom-3 bg-custom-3 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-gray-600/40 transition-colors duration-300 hover:bg-custom-4 dark:border-custom-5/30"
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

