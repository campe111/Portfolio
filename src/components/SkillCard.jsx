const SkillCard = ({ skill }) => {
  return (
    <div className="min-w-[200px] max-w-[250px] rounded-lg border border-black/40 bg-black/50 p-6 shadow-lg shadow-black/60 backdrop-blur-lg transition-all hover:border-custom-5/60 hover:shadow-xl hover:shadow-black/80">
      <div className="text-center">
        <div className="mb-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-custom-5 bg-custom-5/20">
            <span className="text-2xl font-bold text-custom-5">
              {skill.charAt(0)}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-custom-5 transition-colors duration-300">
          {skill}
        </h3>
      </div>
    </div>
  )
}

export default SkillCard

