const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Sobre Mí
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mi Historia
              </h2>
              <p className="leading-relaxed">
                Mi nombre es Brian y soy un apasionado desarrollador y emprendedor. 
                Mi viaje en el mundo de la tecnología comenzó con la curiosidad de entender 
                cómo funcionaban las cosas que usaba a diario. Esta curiosidad me llevó a 
                explorar el mundo del desarrollo de software, donde encontré mi verdadera pasión.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mi Motivación
              </h2>
              <p className="leading-relaxed">
                Creo firmemente en el poder de la tecnología para transformar vidas y resolver 
                problemas reales. Cada proyecto que desarrollo es una oportunidad para aprender, 
                crecer y contribuir al mundo digital. Me motiva la idea de crear soluciones que 
                impacten positivamente a las personas y mejoren su experiencia diaria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Transición Profesional
              </h2>
              <p className="leading-relaxed">
                Mi transición al desarrollo profesional fue un proceso de aprendizaje continuo 
                y dedicación. Comencé explorando las bases del desarrollo web y, con el tiempo, 
                fui expandiendo mis conocimientos hacia tecnologías más avanzadas. Cada desafío 
                que enfrenté me ayudó a crecer como desarrollador y a entender mejor las 
                necesidades del mercado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Visión a Futuro
              </h2>
              <p className="leading-relaxed">
                Mi visión es seguir creciendo como desarrollador, explorando nuevas tecnologías 
                y metodologías. Aspiro a liderar proyectos innovadores que combinen mi pasión 
                por la tecnología con mi espíritu emprendedor. Quiero seguir aprendiendo de 
                cada experiencia y contribuir a la comunidad de desarrolladores, compartiendo 
                conocimiento y creando soluciones que marquen la diferencia.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 italic">
              "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

