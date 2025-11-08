// Importaciones de React para crear contexto y manejar estado
import { createContext, useContext, useState, useEffect } from 'react'

/**
 * Contexto de tema para la aplicación
 * Permite compartir el estado del tema (claro/oscuro) entre todos los componentes
 */
const ThemeContext = createContext()

/**
 * Hook personalizado para acceder al contexto de tema
 * @returns {Object} Objeto con theme y toggleTheme
 * @throws {Error} Si se usa fuera de un ThemeProvider
 */
export const useTheme = () => {
  // Obtiene el contexto del tema
  const context = useContext(ThemeContext)
  // Verifica que el hook se esté usando dentro de un ThemeProvider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

/**
 * Proveedor del contexto de tema
 * Envuelve la aplicación y proporciona funcionalidad de tema claro/oscuro
 * Guarda la preferencia del usuario en localStorage y la aplica al documento
 * 
 * @param {React.ReactNode} children - Componentes hijos que tendrán acceso al contexto
 */
export const ThemeProvider = ({ children }) => {
  // Estado del tema, inicializado desde localStorage o con valor por defecto 'dark'
  const [theme, setTheme] = useState(() => {
    // Intenta leer el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme')
    // Si existe un tema guardado, lo usa; si no, usa 'dark' por defecto
    return savedTheme || 'dark'
  })

  // Efecto que se ejecuta cuando cambia el tema
  useEffect(() => {
    // Guarda el tema actual en localStorage para persistencia
    localStorage.setItem('theme', theme)
    // Elimina las clases de tema anteriores del elemento HTML
    document.documentElement.classList.remove('light', 'dark')
    // Agrega la clase del tema actual al elemento HTML (para estilos globales)
    document.documentElement.classList.add(theme)
  }, [theme])

  // Función para alternar entre tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    // Proveedor del contexto que pasa el tema y la función toggleTheme a los hijos
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

