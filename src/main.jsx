// Importaciones de React y ReactDOM para renderizar la aplicación
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importación del componente principal de la aplicación
import App from './App.jsx'
// Importación del proveedor de tema para envolver la aplicación
import { ThemeProvider } from './context/ThemeContext'
// Importación de los estilos globales
import './index.css'

/**
 * Punto de entrada de la aplicación React
 * Renderiza la aplicación en el elemento root del DOM
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode ayuda a identificar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* ThemeProvider proporciona el contexto de tema a toda la aplicación */}
    <ThemeProvider>
      {/* Componente principal de la aplicación */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

