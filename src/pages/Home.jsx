import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SkillBadge from '../components/SkillBadge'
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
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hola, soy <span className="text-yellow-300">Brian</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Desarrollador y Emprendedor
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg italic">{quote}</p>
            </div>
            <Link
              to="/projects"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              Ver Mis Proyectos
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Tecnologías que Domino
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Querés conocer más sobre mí?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Explorá mi historia, proyectos y conectemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Mi Historia
              </Link>
              <Link
                to="/contact"
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                Contactame
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

