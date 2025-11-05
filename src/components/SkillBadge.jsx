const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
      {skill}
    </span>
  )
}

export default SkillBadge

