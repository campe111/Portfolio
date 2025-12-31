# Portfolio de Brian Matias Ocampos

🚀 Portfolio profesional de Desarrollador Web Frontend

## 🎯 Descripción

Portfolio moderno y responsive desarrollado con React, Tailwind CSS y Framer Motion. Incluye secciones de presentación, proyectos, sobre mí y contacto, con diseño optimizado para SEO y accesibilidad.

## 🖥️ Tecnologías Utilizadas

- **Frontend Framework:** React 18.2.0
- **Routing:** React Router DOM 6.20.0
- **Estilos:** Tailwind CSS 3.3.6
- **Animaciones:** Framer Motion 12.23.24
- **Build Tool:** Vite 5.0.8
- **Formularios:** EmailJS (@emailjs/browser)

## 🚀 Características Principales

- ✅ **Diseño Responsive:** Optimizado para todos los dispositivos
- ✅ **Animaciones Suaves:** Transiciones y efectos con Framer Motion
- ✅ **SEO Optimizado:** Meta tags completos, sitemap.xml, robots.txt
- ✅ **Accesibilidad:** Skip links, aria-labels, navegación por teclado
- ✅ **Code Splitting:** Lazy loading de rutas para mejor rendimiento
- ✅ **Formulario Funcional:** Integración con EmailJS para contacto
- ✅ **Validación de Formularios:** Validación en tiempo real de emails
- ✅ **Optimización de Imágenes:** Lazy loading y pre-carga inteligente
- ✅ **Google Analytics:** Integración opcional para tracking

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone <url-del-repositorio>
cd Portfolio
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
Crea un archivo `.env` en la raíz del proyecto:
```env
# EmailJS Configuration (Opcional - el formulario funciona sin esto usando mailto)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Site Configuration
VITE_SITE_URL=https://portfolio-brian-eta.vercel.app

# Google Analytics (Opcional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. **Ejecutar en desarrollo:**
```bash
npm run dev
```

5. **Compilar para producción:**
```bash
npm run build
```

6. **Previsualizar build de producción:**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
Portfolio/
├── public/
│   ├── images/          # Imágenes de proyectos
│   ├── robots.txt       # Configuración para crawlers
│   ├── sitemap.xml      # Sitemap para SEO
│   └── ...
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── AnimatedSection.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SkipToContent.jsx
│   │   └── GoogleAnalytics.jsx
│   ├── pages/           # Páginas principales
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/            # Datos estáticos
│   │   ├── projects.json
│   │   └── skills.json
│   ├── utils/           # Utilidades
│   │   ├── emailValidation.js
│   │   └── backgroundAttachment.js
│   ├── context/         # Contextos de React
│   │   └── ThemeContext.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Paleta de Colores

- **Color 1 (Naranja):** `#FFA500`
- **Color 2 (Azul Oscuro):** `#0A0A2A`
- **Color 3 (Turquesa):** `#40E0D0`
- **Color 4 (Cyan):** `#00BFFF`
- **Color 5 (Gris Oscuro):** `#1C1C1C`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Previsualiza el build de producción

## 🔧 Configuración Adicional

### EmailJS (Formulario de Contacto)

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email
4. Agrega las credenciales a tu archivo `.env`

**Nota:** Si no configuras EmailJS, el formulario usará `mailto:` como fallback.

### Google Analytics

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
3. Agrega `VITE_GA_MEASUREMENT_ID` a tu archivo `.env`

## 🚀 Deploy

El proyecto está optimizado para deploy en Vercel, Netlify o cualquier plataforma que soporte aplicaciones React.

**Vercel:**
```bash
npm install -g vercel
vercel
```

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ♿ Accesibilidad

- Navegación por teclado completa
- Skip to content link
- Aria-labels en elementos interactivos
- Contraste de colores WCAG AA
- Textos alternativos en imágenes

## 🔍 SEO

- Meta tags completos (Open Graph, Twitter Cards)
- Sitemap.xml
- Robots.txt
- URLs semánticas
- Títulos y descripciones optimizados

## 📬 Contacto

- **LinkedIn:** [brianocampos](https://www.linkedin.com/in/brianocampos/)
- **Email:** brianmatias999@gmail.com
- **GitHub:** [campe111](https://github.com/campe111)
- **Instagram:** [@cxmpedev](https://www.instagram.com/cxmpedev/)

## 📄 Licencia

Este proyecto es privado y propiedad de Brian Matias Ocampos.

---

Desarrollado con ❤️ por Brian Matias Ocampos
