# APAL Liceo 20 - Sitio institucional

Sitio web estático para **APAL Liceo 20** (Asociación de Padres de Alumnos), diseñado para publicarse gratis en **GitHub Pages**.

## Estructura

- `index.html`
- `styles.css`
- `script.js`
- `assets/banner-apal-liceo20.png`

## Contenido editable rápido

Los enlaces y canales de contacto se editan en el objeto `SITE_LINKS` dentro de `script.js`:

```js
const SITE_LINKS = {
  EMAIL_APAL: "apalliceo20@gmail.com",
  INSTAGRAM_APAL: "https://instagram.com/apalliceo20",
  LINK_COMUNIDAD_WHATSAPP: "#",
  LINK_GOOGLE_GROUPS_FAMILIAS: "#",
  LINK_FORMULARIO_REGISTRO_FAMILIAS: "#",
  LINK_FORMULARIO_VOLUNTARIOS: "#",
  LINK_FORMULARIO_APORTES: "#",
  LINK_FORMULARIO_CONTACTO: "#",
  LINK_CARPETA_RENDICIONES_DRIVE: "#",
};
```

Reemplazar `#` por las URLs reales de Google Forms, Drive y canales de comunicación.

## Banner institucional

Guardar el banner con este nombre exacto:

- `assets/banner-apal-liceo20.png`

## Publicación en GitHub Pages

1. Crear (o usar) un repositorio llamado `apalliceo20.github.io`.
2. Subir todos los archivos al branch `main`.
3. Ir a **Settings > Pages** en GitHub.
4. En **Build and deployment**, elegir:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` y carpeta `/ (root)`
5. Guardar y esperar la publicación.
6. El sitio quedará accesible en `https://USUARIO.github.io/` o en el dominio del repositorio de páginas.

## Recomendaciones de privacidad

- No publicar datos personales de estudiantes.
- No subir comprobantes con datos sensibles.
- Compartir documentos en modo solo lectura cuando corresponda.
- Mantener los formularios externos en Google Forms (sin recolección en este sitio).

## Mantenimiento

- Para actualizar comunicados o actividades, editar directamente `index.html`.
- Para cambios visuales, editar `styles.css`.
- Para links y contactos, editar `script.js`.

---

Sitio informativo creado para facilitar la comunicación con las familias.
