// Importaciones de React Router para manejar el enrutamiento de la aplicación
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Importación del componente de navegación
import Navbar from './components/Navbar'
// Importación del componente de pie de página
import Footer from './components/Footer'
// Importación de las páginas de la aplicación
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

/**
 * Componente principal de la aplicación
 * Configura el enrutamiento y la estructura general de la aplicación
 */
function App() {
  return (
    // Router principal que envuelve toda la aplicación para habilitar el enrutamiento
    <Router>
      {/* Contenedor principal con layout flex column y altura mínima de pantalla */}
      <div className="flex flex-col min-h-screen">
        {/* Barra de navegación que aparece en todas las páginas */}
        <Navbar />
        {/* Área principal de contenido que crece para ocupar el espacio disponible */}
        <main className="flex-grow">
          {/* Configuración de las rutas de la aplicación */}
          <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de proyectos */}
            <Route path="/projects" element={<Projects />} />
            {/* Ruta para la página sobre mí */}
            <Route path="/about" element={<About />} />
            {/* Ruta para la página de contacto */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Pie de página que aparece en todas las páginas */}
        <Footer />
      </div>
    </Router>
  )
}

// Exportación del componente App como exportación por defecto
export default App

