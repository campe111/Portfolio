import { useEffect } from 'react'

const SkipToContent = () => {
  useEffect(() => {
    // Asegurar que el botón esté disponible para navegación por teclado
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
          e.preventDefault()
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const skipLink = document.getElementById('skip-to-content')
    if (skipLink) {
      skipLink.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      if (skipLink) {
        skipLink.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      id="skip-to-content"
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-custom-4 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-custom-4 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
      aria-label="Saltar al contenido principal"
    >
      Saltar al contenido principal
    </a>
  )
}

export default SkipToContent

