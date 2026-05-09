# APAL Liceo 20 - Sitio institucional

Sitio web estático para **APAL Liceo 20** (Asociación de Padres de Alumnos), diseñado para publicarse gratis en **GitHub Pages**.

## Estructura

- `index.html`
- `styles.css`
- `config.js`
- `script.js`
- `assets/banner-apal-liceo20.png`
- `.github/workflows/deploy-pages.yml`

## Configuración del sitio

Los valores ahora se cargan desde `config.js` (runtime config).

- En local: podés editar `config.js`.
- En producción: el workflow de GitHub Pages sobreescribe `config.js` con variables/secrets del repositorio.

`script.js` contiene solo defaults de respaldo.

### Variables recomendadas en GitHub

Ir a **Settings > Secrets and variables > Actions** y crear:

Variables (Repository variables):

- `EMAIL_APAL`
- `INSTAGRAM_APAL`
- `LINK_COMUNIDAD_WHATSAPP`
- `LINK_GOOGLE_GROUPS_FAMILIAS`
- `LINK_FORMULARIO_REGISTRO_FAMILIAS`
- `LINK_FORMULARIO_VOLUNTARIOS`
- `LINK_FORMULARIO_APORTES`
- `LINK_FORMULARIO_CONTACTO`
- `LINK_CARPETA_RENDICIONES_DRIVE`
- `BROU_ACCOUNT_OWNER`
- `OFFICIAL_SITE_URL`
- `OFFICIAL_INSTAGRAM_URL`
- `TRUSTED_HOSTS_JSON` (ejemplo: `["apalliceo20.github.io","localhost","127.0.0.1"]`)
- `HIDE_ACCOUNT_ON_UNTRUSTED_HOST` (`true` o `false`)
- `ENFORCE_HTTPS` (`true` o `false`)

Secrets (Repository secrets):

- `BROU_ACCOUNT_NUMBER`

Ejemplo de `config.js` local:

```js
window.__APAL_CONFIG__ = {
  SITE_LINKS: {
    EMAIL_APAL: "[EMAIL_APAL]",
    INSTAGRAM_APAL: "[INSTAGRAM_APAL]",
  },
  DONATION_INFO: {
    BROU_ACCOUNT_NUMBER: "[NUMERO_CUENTA_BROU]",
  },
};
```

## Banner institucional

Guardar el banner con este nombre exacto:

- `assets/banner-apal-liceo20.png`

## Publicación en GitHub Pages

1. Crear (o usar) un repositorio llamado `apalliceo20.github.io`.
2. Subir todos los archivos al branch `main`.
3. Ir a **Settings > Pages** en GitHub.
4. En **Build and deployment**, elegir:

- **Source:** `GitHub Actions`

5. Cargar las variables y secrets en **Settings > Secrets and variables > Actions**.
6. Hacer push a `main` para disparar el deploy.
7. El sitio quedará accesible en `https://USUARIO.github.io/` o en el dominio del repositorio de páginas.

## Recomendaciones de privacidad

- No publicar datos personales de estudiantes.
- No subir comprobantes con datos sensibles.
- Compartir documentos en modo solo lectura cuando corresponda.
- Mantener los formularios externos en Google Forms (sin recolección en este sitio).

## Mantenimiento

- Para actualizar comunicados o actividades, editar directamente `index.html`.
- Para cambios visuales, editar `styles.css`.
- Para configuración local, editar `config.js`.
- Para producción segura, actualizar Variables/Secrets del repo y volver a desplegar.

---

Sitio informativo creado para facilitar la comunicación con las familias.
