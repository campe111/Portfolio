import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/campe111',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/brianocampos/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cxmpedev/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.325 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.063 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.262-3.608 1.325-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.063-2.633-.35-3.608-1.325-.975-.975-1.262-2.242-1.325-3.608C2.175 15.634 2.163 15.254 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.262 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0 1.684c-3.17 0-3.548.012-4.795.069-1.046.048-1.612.22-1.988.396-.5.195-.86.43-1.237.807-.377.377-.612.737-.807 1.237-.176.376-.348.942-.396 1.988-.057 1.247-.069 1.625-.069 4.795s.012 3.548.069 4.795c.048 1.046.22 1.612.396 1.988.195.5.43.86.807 1.237.377.377.737.612 1.237.807.376.176.942.348 1.988.396 1.247.057 1.625.069 4.795.069s3.548-.012 4.795-.069c1.046-.048 1.612-.22 1.988-.396.5-.195.86-.43 1.237-.807.377-.377.612-.737.807-1.237.176-.376.348-.942.396-1.988.057-1.247.069-1.625.069-4.795s-.012-3.548-.069-4.795c-.048-1.046-.22-1.612-.396-1.988-.195-.5-.43-.86-.807-1.237-.377-.377-.737-.612-1.237-.807-.376-.176-.942-.348-1.988-.396-1.247-.057-1.625-.069-4.795-.069zm0 3.905a4.932 4.932 0 110 9.863 4.932 4.932 0 010-9.863zm0 8.141a3.209 3.209 0 100-6.418 3.209 3.209 0 000 6.418zm5.406-9.888a1.155 1.155 0 11-2.31 0 1.155 1.155 0 012.31 0z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="mt-auto border-t backdrop-blur-md text-[var(--text-tertiary)] shadow-2xl transition-colors duration-300 border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary)]/80 shadow-[var(--shadow-color)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 md:py-4">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-3 mb-3">
          {/* Enlaces Rápidos en línea horizontal centrado */}
          <div className="text-center">
            <h3 className="text-xs font-semibold font-['Space_Grotesk'] text-white mb-1.5">
              Enlaces Rápidos
            </h3>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <li>
                <Link to="/" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales y Proyecto centrados */}
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Redes Sociales */}
            <div className="p-0 text-center">
              <h3 className="text-xs font-semibold font-['Space_Grotesk'] text-white mb-1.5">
                Sígueme en redes
              </h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-6 h-6 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-custom-4 hover:border-custom-4/50 hover:bg-white/10 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sección de Proyecto */}
            <div className="text-center">
              <h3 className="text-xs font-semibold font-['Space_Grotesk'] text-white mb-1.5">
                ¿Tenés un proyecto?
              </h3>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-white/70">
                <a
                  href="mailto:brianmatias999@gmail.com"
                  className="flex items-center gap-1 hover:text-custom-4 transition-colors duration-300"
                >
                  <svg
                    className="w-3 h-3"
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
                  <span className="font-['Inter'] text-[10px]">Email</span>
                </a>
                <a
                  href="https://wa.me/5492284505500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-custom-4 transition-colors duration-300"
                >
                  <svg
                    className="w-3 h-3"
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
                  <span className="font-['Inter'] text-[10px]">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-4 mb-4">
          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-semibold font-['Space_Grotesk'] text-white mb-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-custom-4 font-['Inter'] text-xs transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="p-0">
            <h3 className="text-sm font-semibold font-['Space_Grotesk'] text-white mb-2">
              Sígueme en redes
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-custom-4 hover:border-custom-4/50 hover:bg-white/10 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sección de Proyecto */}
          <div>
            <h3 className="text-sm font-semibold font-['Space_Grotesk'] text-white mb-2">
              ¿Tenés un proyecto? Contame
            </h3>
            <div className="flex flex-col gap-1.5 text-white/70">
              <a
                href="mailto:brianmatias999@gmail.com"
                className="flex items-center gap-1.5 hover:text-custom-4 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
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
                <span className="font-['Inter'] text-xs">brianmatias999@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5492284505500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-custom-4 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
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
                <span className="font-['Inter'] text-xs">+54 9 2284 50-5500</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-1.5 md:pt-2 mt-1.5 md:mt-2">
          <p className="text-center text-white/60 font-['Inter'] text-[10px] md:text-xs">
            © {new Date().getFullYear()} Brian Matias Ocampos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

