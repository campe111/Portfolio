# Portafolio Web Personal – Brian

Este proyecto es un portafolio profesional desarrollado con **React + Vite** y estilizado con **Tailwind CSS**. Está pensado para mostrar proyectos, habilidades y tu historia como desarrollador y emprendedor.

---

## 🧱 Estructura del Proyecto

```
/src
  /components
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
    SkillBadge.jsx
  /pages
    Home.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
  /data
    projects.json
    skills.json
  App.jsx
  main.jsx
  index.css
/public
  /images
    (screenshots de proyectos)
/README.md
/tailwind.config.js
/vite.config.js
/package.json
```

---

## 🚀 Tecnologías Usadas

- **React + Vite** – Frontend moderno y veloz
- **Tailwind CSS** – Estilos responsivos y personalizables
- **React Router DOM** – Navegación entre páginas
- **Vercel** – Despliegue continuo desde GitHub

---

## 📄 Páginas

- `/` – **Inicio**: presentación personal, frase motivacional aleatoria, CTA a proyectos
- `/projects` – **Proyectos**: cards con imagen, descripción, tecnologías, links a GitHub y demo
- `/about` – **Sobre mí**: historia, motivación, transición profesional, visión a futuro
- `/contact` – **Contacto**: formulario o links a redes (LinkedIn, GitHub, email)

---

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Cloná el repositorio:
```bash
git clone https://github.com/brian/portfolio.git
cd portfolio
```

2. Instalá las dependencias:
```bash
npm install
```

3. Ejecutá el servidor de desarrollo:
```bash
npm run dev
```

4. Abrí tu navegador en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

El build se generará en la carpeta `dist/`.

---

## 📦 Despliegue

### Vercel (Recomendado)

1. Conectá el repo a GitHub
2. Subilo a [Vercel](https://vercel.com)
3. Configurá dominio personalizado si querés (ej: brian.dev)

### Pasos en Vercel:

1. Creá una cuenta en [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Importá tu repositorio de GitHub
4. Vercel detectará automáticamente Vite
5. Click en "Deploy"
6. ¡Listo! Tu portafolio estará en línea

---

## ✅ Personalización

### Agregar Proyectos

Editá `src/data/projects.json` y agregá tus proyectos:

```json
{
  "id": 1,
  "title": "Mi Proyecto",
  "description": "Descripción del proyecto",
  "technologies": ["React", "Node.js"],
  "image": "/images/proyecto1.jpg",
  "github": "https://github.com/tu-usuario/proyecto",
  "demo": "https://proyecto-demo.vercel.app"
}
```

### Agregar Habilidades

Editá `src/data/skills.json`:

```json
["HTML", "CSS", "JavaScript", "React", "Node.js", "Docker", "Git", "Vercel"]
```

### Personalizar Textos

- **Home**: Editá `src/pages/Home.jsx` para cambiar las frases motivacionales
- **About**: Editá `src/pages/About.jsx` para tu historia personal
- **Contact**: Editá `src/pages/Contact.jsx` para actualizar links de redes sociales

### Agregar Imágenes de Proyectos

1. Agregá tus imágenes en `public/images/`
2. Actualizá las rutas en `src/data/projects.json`

---

## 📝 Notas

- Asegurate de tener todas las imágenes de proyectos en `public/images/`
- Personalizá los textos en cada página según tu experiencia
- Actualizá los links de redes sociales en `Footer.jsx` y `Contact.jsx`
- Las frases motivacionales se pueden editar en `src/pages/Home.jsx`

---

## 🎨 Características

- ✨ Diseño moderno y responsivo
- 🎯 Navegación fluida con React Router
- 📱 Totalmente responsive (mobile-first)
- 🚀 Optimizado para producción
- 🎨 Estilos con Tailwind CSS

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

---

## 👤 Autor

**Brian**

- GitHub: [@brian](https://github.com/brian)
- LinkedIn: [Brian](https://linkedin.com/in/brian)
- Email: brian@example.com
