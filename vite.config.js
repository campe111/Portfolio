import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para manejar rutas SPA correctamente
  preview: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        // Previene problemas con rutas dinámicas
        manualChunks: undefined,
      },
    },
  },
})

