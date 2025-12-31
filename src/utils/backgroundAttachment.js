/**
 * Hook para determinar si usar backgroundAttachment fixed basado en el tamaño de pantalla
 * @returns {string} - 'fixed' para desktop, 'scroll' para mobile
 */
export const getBackgroundAttachment = () => {
  if (typeof window === 'undefined') return 'scroll'
  return window.innerWidth >= 768 ? 'fixed' : 'scroll'
}

/**
 * Hook para manejar cambios de tamaño de ventana y actualizar backgroundAttachment
 * @param {Function} callback - Función a ejecutar cuando cambia el tamaño
 */
export const useResponsiveBackground = (callback) => {
  if (typeof window === 'undefined') return

  const handleResize = () => {
    const attachment = getBackgroundAttachment()
    callback(attachment)
  }

  window.addEventListener('resize', handleResize)
  handleResize() // Ejecutar inmediatamente

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}

