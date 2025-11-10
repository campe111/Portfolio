import { useTheme } from '../context/ThemeContext'
import AnimatedSection from '../components/AnimatedSection'

const About = () => {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div 
      className="relative overflow-hidden min-h-screen bg-white py-12 text-gray-900 transition-colors duration-300 dark:bg-custom-1 dark:text-white"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div 
        className="absolute inset-0 bg-custom-1 transition-colors duration-300"
        style={{ opacity: isLight ? 0 : 0.1 }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200 transition-colors duration-300 md:p-12 dark:border-custom-3/30 dark:bg-custom-2 dark:shadow-black/50">
            <h1 className="mb-8 text-center text-4xl font-bold font-['Space_Grotesk'] text-gray-900 transition-colors duration-300 dark:text-white">
              Sobre Mí
            </h1>

          <div className="space-y-6 text-gray-800 transition-colors duration-300 dark:text-gray-300">
            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold text-custom-5 mb-4 font-['Space_Grotesk']">
                  Mi Historia
                </h2>
                <p className="leading-relaxed font-['Inter']">
                  Mi nombre es Brian y soy un apasionado desarrollador y emprendedor. 
                  Mi viaje en el mundo de la tecnología comenzó con la curiosidad de entender 
                  cómo funcionaban las cosas que usaba a diario. Esta curiosidad me llevó a 
                  explorar el mundo del desarrollo de software, donde encontré mi verdadera pasión.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold text-custom-5 mb-4 font-['Space_Grotesk']">
                  Mi Motivación
                </h2>
                <p className="leading-relaxed font-['Inter']">
                  Creo firmemente en el poder de la tecnología para transformar vidas y resolver 
                  problemas reales. Cada proyecto que desarrollo es una oportunidad para aprender, 
                  crecer y contribuir al mundo digital. Me motiva la idea de crear soluciones que 
                  impacten positivamente a las personas y mejoren su experiencia diaria.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-2xl font-semibold text-custom-5 mb-4 font-['Space_Grotesk']">
                  Transición Profesional
                </h2>
                <p className="leading-relaxed font-['Inter']">
                  Mi transición al desarrollo profesional fue un proceso de aprendizaje continuo 
                  y dedicación. Comencé explorando las bases del desarrollo web y, con el tiempo, 
                  fui expandiendo mis conocimientos hacia tecnologías más avanzadas. Cada desafío 
                  que enfrenté me ayudó a crecer como desarrollador y a entender mejor las 
                  necesidades del mercado.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold text-custom-5 mb-4 font-['Space_Grotesk']">
                  Visión a Futuro
                </h2>
                <p className="leading-relaxed font-['Inter']">
                  Mi visión es seguir creciendo como desarrollador, explorando nuevas tecnologías 
                  y metodologías. Aspiro a liderar proyectos innovadores que combinen mi pasión 
                  por la tecnología con mi espíritu emprendedor. Quiero seguir aprendiendo de 
                  cada experiencia y contribuir a la comunidad de desarrolladores, compartiendo 
                  conocimiento y creando soluciones que marquen la diferencia.
                </p>
              </section>
            </AnimatedSection>
          </div>

          <div className="mt-12 border-t border-custom-3/30 pt-8">
            <p className="text-center italic font-['Sora'] text-custom-3 transition-colors duration-300 dark:text-gray-400">
              "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
            </p>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default About

