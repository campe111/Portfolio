const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-block bg-custom-5 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md shadow-custom-5/50 hover:bg-custom-4 hover:shadow-lg hover:shadow-custom-5/70 transition-all">
      {skill}
    </span>
  )
}

export default SkillBadge

