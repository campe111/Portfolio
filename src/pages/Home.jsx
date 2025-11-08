// Importaciones de React hooks para manejar estado y efectos
import { useState, useEffect } from 'react'
// Importación de Link de React Router para navegación
import { Link } from 'react-router-dom'
// Importación de motion de Framer Motion para animaciones
import { motion } from 'framer-motion'
// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'
// Importación del componente carrusel de habilidades
import SkillsCarousel from '../components/SkillsCarousel'
// Importación del componente de sección animada
import AnimatedSection from '../components/AnimatedSection'
// Importación de los datos de habilidades desde JSON
import skillsData from '../data/skills.json'

// Array de frases motivacionales que se muestran aleatoriamente en la página
const motivationalQuotes = [
  "El código es poesía escrita en lógica.",
  "Construir el futuro, un commit a la vez.",
  "La mejor manera de predecir el futuro es creándolo.",
  "Cada línea de código es un paso hacia la innovación.",
  "La pasión por la tecnología impulsa el cambio.",
]

/**
 * Componente Home - Página principal del portfolio
 * Muestra una sección hero con presentación, carrusel de habilidades y llamados a la acción
 */
const Home = () => {
  // Estado para almacenar la frase motivacional aleatoria
  const [quote, setQuote] = useState('')
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  // Efecto que se ejecuta al montar el componente para seleccionar una frase aleatoria
  useEffect(() => {
    // Selecciona una frase aleatoria del array de frases motivacionales
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    // Contenedor principal con altura mínima de pantalla
    <div className="min-h-screen flex flex-col">
      {/* Contenedor que crece para ocupar el espacio disponible */}
      <div className="flex-grow">
        {/* Sección Hero - Presentación principal con imagen de fondo */}
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
          {/* Overlay con opacidad para mejorar la legibilidad del texto sobre la imagen */}
          <div 
            className="absolute inset-0 bg-custom-1 transition-colors duration-300"
            style={{ opacity: isLight ? 0.5 : 0.1 }}
          ></div>
          {/* Contenedor del contenido con ancho máximo y padding responsivo */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Título principal con animación */}
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
            {/* Subtítulo con animación */}
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
            {/* Contenedor de la frase motivacional con animación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`bg-custom-2/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8 border border-custom-3/30 ${
                isLight ? 'bg-white/90 border-custom-3 shadow-lg' : ''
              }`}
            >
              {/* Frase motivacional aleatoria */}
              <p className={`text-lg italic font-['Sora'] ${
                isLight ? 'text-gray-800' : 'text-gray-200'
              }`}>{quote}</p>
            </motion.div>
            {/* Botón de llamada a la acción con animación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Enlace a la página de proyectos */}
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

        {/* Sección de Habilidades - Muestra el carrusel de tecnologías */}
        <AnimatedSection className={`py-16 transition-colors duration-300 ${
          isLight ? 'bg-custom-1 text-custom-5' : 'bg-custom-1 text-white'
        }`}>
          {/* Contenedor con ancho máximo y padding responsivo */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Título de la sección de habilidades */}
            <h2 className={`text-3xl font-bold text-center mb-12 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>
              Tecnologías que Domino
            </h2>
            {/* Carrusel de habilidades con los datos importados */}
            <SkillsCarousel skills={skillsData} />
          </div>
        </AnimatedSection>

        {/* Sección CTA (Call To Action) - Llamados a la acción con imagen de fondo */}
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
          {/* Overlay con gradiente y opacidad para mejorar la legibilidad */}
          <div 
            className="absolute inset-0 transition-colors duration-300"
            style={{
              background: isLight 
                ? 'linear-gradient(135deg, rgba(232, 232, 232, 0.6) 0%, rgba(245, 245, 245, 0.6) 20%, rgba(232, 232, 232, 0.6) 40%, rgba(245, 245, 245, 0.6) 60%, rgba(232, 232, 232, 0.6) 80%, rgba(245, 245, 245, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(42, 42, 42, 0.3) 0%, rgba(59, 59, 59, 0.3) 20%, rgba(28, 28, 28, 0.3) 40%, rgba(59, 59, 59, 0.3) 60%, rgba(42, 42, 42, 0.3) 80%, rgba(59, 59, 59, 0.3) 100%)',
            }}>
          </div>
          {/* Contenedor del contenido con ancho máximo y padding responsivo */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Título de la sección CTA */}
            <h2 className={`text-3xl font-bold mb-4 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>
              ¿Querés conocer más sobre mí?
            </h2>
            {/* Descripción de la sección */}
            <p className={`mb-8 text-lg font-['Inter'] ${
              isLight ? 'text-gray-800 font-medium' : 'text-gray-300'
            }`}>
              Explorá mi historia, proyectos y conectemos.
            </p>
            {/* Contenedor de botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Enlace a la página "Sobre Mí" */}
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
              {/* Enlace a la página de contacto */}
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

// Exportación del componente Home como exportación por defecto
export default Home

