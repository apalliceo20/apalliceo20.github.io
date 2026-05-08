// Configuracion runtime del sitio.
// En produccion este archivo puede ser sobreescrito por GitHub Actions con variables/secrets del repositorio.
window.__APAL_CONFIG__ = {
  SITE_LINKS: {
    EMAIL_APAL: "[EMAIL_APAL]",
    INSTAGRAM_APAL: "[INSTAGRAM_APAL]",
    LINK_COMUNIDAD_WHATSAPP: "#",
    LINK_GOOGLE_GROUPS_FAMILIAS: "#",
    LINK_FORMULARIO_REGISTRO_FAMILIAS: "#",
    LINK_FORMULARIO_VOLUNTARIOS: "#",
    LINK_FORMULARIO_APORTES: "#",
    LINK_FORMULARIO_CONTACTO: "#",
    LINK_CARPETA_RENDICIONES_DRIVE: "#",
  },
  DONATION_INFO: {
    BROU_ACCOUNT_NUMBER: "[NUMERO_CUENTA_BROU]",
    BROU_ACCOUNT_OWNER: "APAL Liceo 20",
  },
  SECURITY_CONFIG: {
    OFFICIAL_SITE_URL: "https://apalliceo20.github.io",
    OFFICIAL_INSTAGRAM_URL: "https://instagram.com/apalliceo20",
    TRUSTED_HOSTS: ["apalliceo20.github.io", "localhost", "127.0.0.1"],
    HIDE_ACCOUNT_ON_UNTRUSTED_HOST: true,
    ENFORCE_HTTPS: true,
    MONTHLY_VERIFICATION_CODE: "[CODIGO_VERIFICACION_MENSUAL]",
    MONTHLY_VERIFICATION_MONTH: "Mayo 2026",
  },
};
