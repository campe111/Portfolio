import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import AnimatedSection from '../components/AnimatedSection'

const Contact = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div 
      className="min-h-screen bg-custom-1 py-12 transition-colors duration-300 relative overflow-hidden"
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-bold mb-4 font-['Space_Grotesk'] ${
              isLight ? 'text-custom-5' : 'text-white'
            }`}>Contacto</h1>
            <p className={`text-lg font-['Inter'] ${
              isLight ? 'text-gray-800 font-medium' : 'text-gray-300'
            }`}>
              ¿Tenés un proyecto en mente? ¡Me encantaría escucharlo!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className={`bg-custom-2 rounded-lg shadow-lg p-8 md:p-12 border transition-colors duration-300 ${
            isLight ? 'bg-custom-2 shadow-gray-400 border-gray-400' : 'shadow-black/50 border-custom-3/30'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulario */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 font-['Space_Grotesk'] ${
                isLight ? 'text-custom-5' : 'text-white'
              }`}>
                Enviame un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isLight ? 'text-gray-800 font-semibold' : 'text-gray-300'
                    }`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-custom-5 focus:border-transparent ${
                      isLight 
                        ? 'bg-white text-gray-900 border-gray-300 placeholder-gray-400 shadow-sm' 
                        : 'bg-custom-1 text-white border-custom-3/30 placeholder-gray-500'
                    }`}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isLight ? 'text-gray-800 font-semibold' : 'text-gray-300'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-custom-5 focus:border-transparent ${
                      isLight 
                        ? 'bg-white text-gray-900 border-gray-300 placeholder-gray-400 shadow-sm' 
                        : 'bg-custom-1 text-white border-custom-3/30 placeholder-gray-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isLight ? 'text-gray-800 font-semibold' : 'text-gray-300'
                    }`}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-custom-5 focus:border-transparent ${
                      isLight 
                        ? 'bg-white text-gray-900 border-gray-300 placeholder-gray-400 shadow-sm' 
                        : 'bg-custom-1 text-white border-custom-3/30 placeholder-gray-500'
                    }`}
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold hover:bg-custom-4 transition shadow-lg ${
                    isLight 
                      ? 'bg-custom-5 text-white shadow-custom-5/60 border-2 border-custom-5' 
                      : 'bg-custom-5 text-white shadow-custom-5/30'
                  }`}
                >
                  Enviar Mensaje
                </button>
                {submitted && (
                  <div className="bg-custom-5/20 text-custom-5 p-3 rounded-lg text-center border border-custom-5/40">
                    ¡Mensaje enviado! Te contactaré pronto.
                  </div>
                )}
              </form>
            </div>

            {/* Redes Sociales */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 font-['Space_Grotesk'] ${
                isLight ? 'text-custom-5' : 'text-white'
              }`}>
                Conectemos
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/brian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-custom-1 rounded-lg hover:bg-custom-2 transition border border-custom-3/30"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className={`font-medium ${
                    isLight ? 'text-custom-5' : 'text-white'
                  }`}>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/brian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-custom-1 rounded-lg hover:bg-custom-2 transition border border-custom-3/30"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className={`font-medium ${
                    isLight ? 'text-custom-5' : 'text-white'
                  }`}>LinkedIn</span>
                </a>
                <a
                  href="mailto:brian@example.com"
                  className="flex items-center p-4 bg-custom-1 rounded-lg hover:bg-custom-2 transition border border-custom-3/30"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className={`font-medium ${
                    isLight ? 'text-custom-5' : 'text-white'
                  }`}>Email</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Contact

