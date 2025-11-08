// Importaciones de Framer Motion para animaciones
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
// Importación de useRef de React para crear referencias a elementos DOM
import { useRef } from 'react'

/**
 * Componente AnimatedSection - Sección animada que se muestra cuando entra en vista
 * Utiliza Framer Motion para animar la entrada de elementos al hacer scroll
 * 
 * @param {React.ReactNode} children - Contenido a animar
 * @param {number} delay - Retraso en segundos antes de iniciar la animación (por defecto 0)
 * @param {string} className - Clases CSS adicionales para estilizar el contenedor
 */
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  // Referencia al elemento DOM para detectar cuando está en vista
  const ref = useRef(null)
  // Hook que detecta si el elemento está visible en la ventana
  // once: true significa que la animación solo se ejecuta una vez
  // margin: '-100px' agrega un margen para activar la animación antes de que esté completamente visible
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    // Contenedor animado con Framer Motion
    <motion.div
      ref={ref}
      // Estado inicial: invisible y desplazado 50px hacia abajo
      initial={{ opacity: 0, y: 50 }}
      // Estado animado: visible y en posición original cuando está en vista
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      // Configuración de la transición: duración y retraso personalizables
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Exportación del componente AnimatedSection como exportación por defecto
export default AnimatedSection

