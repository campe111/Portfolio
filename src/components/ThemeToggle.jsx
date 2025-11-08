// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'

/**
 * Componente ThemeToggle - Botón para alternar entre tema claro y oscuro
 * Muestra un ícono de sol cuando está en modo oscuro y un ícono de luna cuando está en modo claro
 */
const ThemeToggle = () => {
  // Obtiene el tema actual y la función para cambiar el tema
  const { theme, toggleTheme } = useTheme()

  return (
    // Botón para cambiar el tema
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-custom-2 border border-custom-3/30 hover:bg-custom-3 transition-all"
      aria-label="Cambiar tema"
    >
      {/* Muestra ícono de sol si el tema es oscuro, ícono de luna si es claro */}
      {theme === 'dark' ? (
        <svg
          className="w-5 h-5 text-white dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-custom-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  )
}

// Exportación del componente ThemeToggle como exportación por defecto
export default ThemeToggle

