// Importación del hook para acceder al contexto de tema
import { useTheme } from '../context/ThemeContext'

/**
 * Componente SkillCard - Tarjeta que representa una habilidad o tecnología
 * Muestra un círculo con la primera letra de la skill y el nombre completo
 * 
 * @param {string} skill - Nombre de la habilidad o tecnología a mostrar
 */
const SkillCard = ({ skill }) => {
  // Obtiene el tema actual del contexto
  const { theme } = useTheme()
  // Variable booleana que indica si el tema actual es claro
  const isLight = theme === 'light'

  return (
    // Tarjeta de skill con ancho mínimo y máximo, y efectos hover
    <div className={`rounded-lg shadow-lg p-6 min-w-[200px] max-w-[250px] border transition-all hover:shadow-xl ${
      isLight 
        ? 'bg-custom-3 border-gray-500 shadow-gray-600/50 hover:border-custom-5 hover:shadow-custom-5/50' 
        : 'bg-custom-2 shadow-black/50 border-custom-3/30 hover:border-custom-5/50 hover:shadow-custom-5/30'
    }`}>
      {/* Contenedor con contenido centrado */}
      <div className="text-center">
        {/* Contenedor del círculo con la inicial */}
        <div className="mb-4">
          {/* Círculo que muestra la primera letra de la skill */}
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center border-2 ${
            isLight 
              ? 'bg-custom-5/30 border-custom-5' 
              : 'bg-custom-5/20 border-custom-5/40'
          }`}>
            {/* Muestra la primera letra de la skill en mayúscula */}
            <span className="text-2xl font-bold text-custom-5">
              {skill.charAt(0)}
            </span>
          </div>
        </div>
        {/* Nombre completo de la skill */}
        <h3 className={`text-lg font-semibold ${
          isLight ? 'text-gray-900' : 'text-white'
        }`}>{skill}</h3>
      </div>
    </div>
  )
}

// Exportación del componente SkillCard como exportación por defecto
export default SkillCard

