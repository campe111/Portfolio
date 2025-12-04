import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
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
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

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
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold font-['Space_Grotesk']">
              <span 
                className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                  theme === 'light' 
                    ? 'from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D]' 
                    : 'from-custom-5 via-custom-4 to-custom-5'
                }`}
              >
                Contacto
              </span>
            </h1>
            <p className={`text-lg font-['Inter'] font-medium ${
              theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
            }`}>
              ¿Tenés un proyecto en mente? ¡Me encantaría escucharlo!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className={`rounded-lg border p-8 shadow-lg backdrop-blur-md md:p-12 transition-all duration-300 ${
            theme === 'light'
              ? 'border-[#808C65]/30 bg-[#C4D89A] shadow-[#808C65]/20'
              : 'border-white/10 bg-black/40 shadow-black/30'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className={`mb-6 text-2xl font-semibold font-['Space_Grotesk'] ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                  : 'text-[var(--text-primary)]'
              }`}>
                Enviame un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
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
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-gray-400 shadow-sm transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 focus:border-custom-4 focus:ring-2 focus:ring-custom-4/30 focus:bg-black/60"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
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
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-gray-400 shadow-sm transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 focus:border-custom-4 focus:ring-2 focus:ring-custom-4/30 focus:bg-black/60"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
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
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-gray-400 shadow-sm transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 focus:border-custom-4 focus:ring-2 focus:ring-custom-4/30 focus:bg-black/60"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg border border-custom-4 bg-custom-4 py-3 font-semibold text-custom-1 shadow-lg shadow-custom-4/60 transition-all duration-300 hover:bg-custom-4/90 hover:scale-105 hover:shadow-xl hover:shadow-custom-4/80 active:scale-95"
                >
                  Enviar Mensaje
                </button>
                {submitted && (
                  <div className="border border-custom-5/40 bg-custom-5/20 p-3 text-center text-custom-5 rounded-lg">
                    ¡Mensaje enviado! Te contactaré pronto.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className={`mb-6 text-2xl font-semibold font-['Space_Grotesk'] ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-[#0D0D0D] via-[#2a2a2a] via-[#1a1a1a] to-[#0D0D0D] bg-clip-text text-transparent'
                  : 'text-[var(--text-primary)]'
              }`}>
                Conectemos
              </h2>
              <div className="space-y-4">
                <a
                  href="https://github.com/campe111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/brianocampos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/cxmpe?igsh=aWxpb2pjMHZnM2Nk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
                >
                  <svg
                    className="w-6 h-6 mr-4 text-custom-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.325 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.063 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.262-3.608 1.325-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.063-2.633-.35-3.608-1.325-.975-.975-1.262-2.242-1.325-3.608C2.175 15.634 2.163 15.254 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.262 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.684c-3.17 0-3.548.012-4.795.069-1.046.048-1.612.22-1.988.396-.5.195-.86.43-1.237.807-.377.377-.612.737-.807 1.237-.176.376-.348.942-.396 1.988-.057 1.247-.069 1.625-.069 4.795s.012 3.548.069 4.795c.048 1.046.22 1.612.396 1.988.195.5.43.86.807 1.237.377.377.737.612 1.237.807.376.176.942.348 1.988.396 1.247.057 1.625.069 4.795.069s3.548-.012 4.795-.069c1.046-.048 1.612-.22 1.988-.396.5-.195.86-.43 1.237-.807.377-.377.612-.737.807-1.237.176-.376.348-.942.396-1.988.057-1.247.069-1.625.069-4.795s-.012-3.548-.069-4.795c-.048-1.046-.22-1.612-.396-1.988-.195-.5-.43-.86-.807-1.237-.377-.377-.737-.612-1.237-.807-.376-.176-.942-.348-1.988-.396-1.247-.057-1.625-.069-4.795-.069zm0 3.905a4.932 4.932 0 110 9.863 4.932 4.932 0 010-9.863zm0 8.141a3.209 3.209 0 100-6.418 3.209 3.209 0 000 6.418zm5.406-9.888a1.155 1.155 0 11-2.31 0 1.155 1.155 0 012.31 0z" />
                  </svg>
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">Instagram</span>
                </a>
                <a
                  href="mailto:brianmatias999@gmail.com"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
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
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">Email</span>
                </a>
                <a
                  href="https://wa.me/5492284505500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
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
                      d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.122 3.367a1 1 0 01-.502 1.21l-1.21.605a11.042 11.042 0 005.516 5.516l.605-1.21a1 1 0 011.21-.502l3.367 1.122a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">WhatsApp</span>
                </a>
                <a
                  href="/Ocampos-DesarrolloWeb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-lg border border-white/10 bg-black/40 p-4 transition-all duration-300 hover:border-custom-4/50 hover:bg-black/60 hover:scale-105 group"
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
                      d="M7 2h10a2 2 0 012 2v16a1 1 0 01-1.447.894L12 18.118l-5.553 2.776A1 1 0 015 20V4a2 2 0 012-2z"
                    />
                  </svg>
                  <span className="font-medium text-white transition-colors duration-300 group-hover:text-custom-4">Curriculum Vitae</span>
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

