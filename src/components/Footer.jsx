import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const socialLinks = [
    { href: 'https://github.com/campe111', label: 'GitHub', icon: 'GitHub' },
    { href: 'https://www.linkedin.com/in/brianocampos/', label: 'LinkedIn', icon: 'LinkedIn' },
    { href: 'mailto:brianmatias999@gmail.com', label: 'Email', icon: 'Email' },
  ]

  return (
    <footer className={`mt-auto border-t backdrop-blur-md text-[var(--text-tertiary)] shadow-2xl transition-colors duration-300 ${
      theme === 'light'
        ? 'border-[#B4BF60]/30 bg-[#808C65]'
        : 'border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-primary)]/80 shadow-[var(--shadow-color)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="font-['Inter'] font-medium transition-colors duration-300 text-white">
              © {new Date().getFullYear()} Brian. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-['Inter'] font-semibold transition-all duration-300 hover:text-custom-4 hover:drop-shadow-[0_0_8px_rgba(180,191,96,0.5)] ${
                  theme === 'light' ? 'text-[#0D0D0D]' : 'text-[var(--text-tertiary)]'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

