/**
 * Componente SkillBadge - Badge que muestra una habilidad o tecnología
 * Badge pequeño con estilo redondeado que muestra el nombre de una skill
 * 
 * @param {string} skill - Nombre de la habilidad o tecnología a mostrar
 */
const SkillBadge = ({ skill }) => {
  return (
    // Badge con efectos hover y sombra
    <span className="inline-block bg-custom-5 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md shadow-custom-5/50 hover:bg-custom-4 hover:shadow-lg hover:shadow-custom-5/70 transition-all">
      {skill}
    </span>
  )
}

// Exportación del componente SkillBadge como exportación por defecto
export default SkillBadge

