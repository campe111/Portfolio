import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GoogleAnalytics = () => {
  const location = useLocation()
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!gaMeasurementId) return

    // Cargar Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaMeasurementId}', {
        page_path: window.location.pathname,
      });
    `
    document.head.appendChild(script2)

    return () => {
      // Cleanup no es realmente necesario para scripts, pero por buenas prácticas
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [gaMeasurementId])

  useEffect(() => {
    if (!gaMeasurementId || typeof window.gtag === 'undefined') return

    // Track page views
    window.gtag('config', gaMeasurementId, {
      page_path: location.pathname + location.search,
    })
  }, [location, gaMeasurementId])

  return null
}

export default GoogleAnalytics

