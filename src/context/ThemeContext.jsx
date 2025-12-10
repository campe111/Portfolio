import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Asegurar que siempre esté en modo oscuro
    const root = document.documentElement
    root.classList.remove('light')
    root.classList.add('dark')
    // Limpiar localStorage si existe
    localStorage.removeItem('theme')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

