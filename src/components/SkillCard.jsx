import { useTheme } from '../context/ThemeContext'

const SkillCard = ({ skill }) => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className={`rounded-lg shadow-lg p-6 min-w-[200px] max-w-[250px] border transition-all hover:shadow-xl ${
      isLight 
        ? 'bg-custom-3 border-gray-500 shadow-gray-600/50 hover:border-custom-5 hover:shadow-custom-5/50' 
        : 'bg-custom-2 shadow-black/50 border-custom-3/30 hover:border-custom-5/50 hover:shadow-custom-5/30'
    }`}>
      <div className="text-center">
        <div className="mb-4">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center border-2 ${
            isLight 
              ? 'bg-custom-5/30 border-custom-5' 
              : 'bg-custom-5/20 border-custom-5/40'
          }`}>
            <span className="text-2xl font-bold text-custom-5">
              {skill.charAt(0)}
            </span>
          </div>
        </div>
        <h3 className={`text-lg font-semibold ${
          isLight ? 'text-gray-900' : 'text-white'
        }`}>{skill}</h3>
      </div>
    </div>
  )
}

export default SkillCard

