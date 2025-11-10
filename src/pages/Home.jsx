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

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-custom-1 text-white">
      <div className="flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-20"
          style={{
            backgroundImage: `url('/images/background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute inset-0 bg-custom-1/90 transition-colors duration-300"
            style={{ opacity: 0.4 }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-5xl font-bold font-['Space_Grotesk'] md:text-6xl text-white"
            >
              Hola, soy <span className="text-custom-5">Brian</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-xl font-['Inter'] font-semibold text-gray-300 md:text-2xl"
            >
              Desarrollador y Emprendedor
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mb-8 max-w-2xl rounded-lg border border-custom-3/40 bg-custom-2/40 p-6 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg italic font-['Sora'] text-gray-100">{quote}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/projects"
                className="inline-block transform rounded-lg border border-custom-5 bg-custom-5 px-8 py-3 font-['Inter'] text-lg font-semibold text-white shadow-lg shadow-custom-5/60 transition-transform duration-300 hover:scale-105 hover:bg-custom-4"
              >
                Ver Mis Proyectos
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <AnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-10 shadow-xl shadow-black/20 backdrop-blur-md">
              <h2 className="mb-12 text-center text-3xl font-bold font-['Space_Grotesk'] text-white">
                Tecnologías que Domino
              </h2>
              <SkillsCarousel skills={skillsData} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="relative overflow-hidden py-16 text-white"
          style={{
            backgroundImage: `url('/img/background-cta.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(42, 42, 42, 0.6) 0%, rgba(59, 59, 59, 0.6) 20%, rgba(28, 28, 28, 0.6) 40%, rgba(59, 59, 59, 0.6) 60%, rgba(42, 42, 42, 0.6) 80%, rgba(59, 59, 59, 0.6) 100%)',
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold font-['Space_Grotesk'] text-white">
              ¿Querés conocer más sobre mí?
            </h2>
            <p className="mb-8 text-lg font-['Inter'] font-medium text-gray-300">
              Explorá mi historia, proyectos y conectemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="rounded-lg border border-custom-5 bg-custom-5 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-custom-5/50 transition-colors duration-300 hover:bg-custom-4"
              >
                Mi Historia
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-custom-5/40 bg-custom-3 px-8 py-3 font-['Inter'] font-semibold text-white shadow-lg shadow-black/30 transition-colors duration-300 hover:bg-custom-4"
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

