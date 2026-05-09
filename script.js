// Defaults seguros. Los valores reales se inyectan por config.js en runtime.
const DEFAULT_SITE_LINKS = {
  EMAIL_APAL: "[EMAIL_APAL]",
  INSTAGRAM_APAL: "[INSTAGRAM_APAL]",
  LINK_COMUNIDAD_WHATSAPP: "#",
  LINK_GOOGLE_GROUPS_FAMILIAS: "#",
  LINK_FORMULARIO_REGISTRO_FAMILIAS: "#",
  LINK_FORMULARIO_VOLUNTARIOS: "#",
  LINK_FORMULARIO_APORTES: "#",
  LINK_FORMULARIO_CONTACTO: "#",
  LINK_CARPETA_RENDICIONES_DRIVE: "#",
};

const DEFAULT_DONATION_INFO = {
  BROU_ACCOUNT_NUMBER: "[NUMERO_CUENTA_BROU]",
  BROU_ACCOUNT_OWNER: "APAL Liceo 20",
};

const DEFAULT_SECURITY_CONFIG = {
  OFFICIAL_SITE_URL: "https://apalliceo20.github.io",
  OFFICIAL_INSTAGRAM_URL: "https://instagram.com/apalliceo20",
  TRUSTED_HOSTS: ["apalliceo20.github.io", "localhost", "127.0.0.1"],
  HIDE_ACCOUNT_ON_UNTRUSTED_HOST: true,
  ENFORCE_HTTPS: true,
};

const RUNTIME_CONFIG =
  typeof window !== "undefined" &&
  window.__APAL_CONFIG__ &&
  typeof window.__APAL_CONFIG__ === "object"
    ? window.__APAL_CONFIG__
    : {};

const SITE_LINKS = {
  ...DEFAULT_SITE_LINKS,
  ...(RUNTIME_CONFIG.SITE_LINKS || {}),
};

const DONATION_INFO = {
  ...DEFAULT_DONATION_INFO,
  ...(RUNTIME_CONFIG.DONATION_INFO || {}),
};

const SECURITY_CONFIG = {
  ...DEFAULT_SECURITY_CONFIG,
  ...(RUNTIME_CONFIG.SECURITY_CONFIG || {}),
};

function applyEditableLinks() {
  const externalNodes = document.querySelectorAll("[data-link-key]");
  externalNodes.forEach((node) => {
    const key = node.getAttribute("data-link-key");
    if (!key || !SITE_LINKS[key]) {
      return;
    }

    node.setAttribute("href", SITE_LINKS[key]);

    // Muestra la URL real en enlaces informativos, pero mantiene texto de botones.
    if (
      node.tagName.toLowerCase() === "a" &&
      node.textContent &&
      node.textContent.startsWith("[")
    ) {
      node.textContent = SITE_LINKS[key];
    }
  });

  const email = SITE_LINKS.EMAIL_APAL;
  const emailHref = `mailto:${email}`;
  const emailText = document.getElementById("emailText");
  const btnEmail = document.getElementById("btnEmail");

  if (emailText) {
    emailText.setAttribute("href", emailHref);
    emailText.textContent = email;
  }

  if (btnEmail) {
    btnEmail.setAttribute("href", emailHref);
  }

  const instagram = SITE_LINKS.INSTAGRAM_APAL;
  const instagramText = document.getElementById("instagramText");
  const btnInstagram = document.getElementById("btnInstagram");

  if (instagramText) {
    instagramText.setAttribute("href", instagram);
    instagramText.textContent = instagram;
  }

  if (btnInstagram) {
    btnInstagram.setAttribute("href", instagram);
  }
}

function applyDonationInfo() {
  const accountNumber = document.getElementById("brouAccountNumber");
  const accountOwner = document.getElementById("brouAccountOwner");
  const officialSiteUrl = document.getElementById("officialSiteUrl");

  if (accountNumber) {
    accountNumber.textContent = DONATION_INFO.BROU_ACCOUNT_NUMBER;
  }

  if (accountOwner) {
    accountOwner.textContent = DONATION_INFO.BROU_ACCOUNT_OWNER;
  }

  if (officialSiteUrl) {
    officialSiteUrl.setAttribute("href", SECURITY_CONFIG.OFFICIAL_SITE_URL);
    officialSiteUrl.textContent = SECURITY_CONFIG.OFFICIAL_SITE_URL;
  }
}

function isTrustedHost(hostname) {
  const normalizedHost = hostname.toLowerCase();
  return SECURITY_CONFIG.TRUSTED_HOSTS.some((trustedHost) => {
    const normalizedTrusted = trustedHost.toLowerCase();
    return (
      normalizedHost === normalizedTrusted ||
      normalizedHost.endsWith(`.${normalizedTrusted}`)
    );
  });
}

function applyDomainSecurityWarning() {
  const currentHost = window.location.hostname;
  const isTrustedDomain = isTrustedHost(currentHost);
  const isLocalhost =
    currentHost === "localhost" || currentHost === "127.0.0.1";
  const isHttps = window.location.protocol === "https:";
  const shouldWarnProtocol =
    SECURITY_CONFIG.ENFORCE_HTTPS && !isHttps && !isLocalhost;

  let isFramed = false;
  try {
    isFramed = window.top !== window.self;
  } catch {
    isFramed = true;
  }

  const warnings = [];
  if (!isTrustedDomain) {
    warnings.push(
      `Este dominio no figura como oficial para APAL Liceo 20. Usá ${SECURITY_CONFIG.OFFICIAL_SITE_URL}.`,
    );
  }
  if (shouldWarnProtocol) {
    warnings.push("La conexión no está en HTTPS.");
  }
  if (isFramed) {
    warnings.push(
      "El sitio está embebido en otra página. Abrí la URL oficial directamente.",
    );
  }

  if (warnings.length === 0) {
    return;
  }

  const warning = document.createElement("div");
  warning.className = "security-warning";
  const warningText = document.createElement("p");
  warningText.className = "container";
  warningText.textContent = `Atención: ${warnings.join(" ")} Confirmá la información únicamente por canales oficiales: ${SECURITY_CONFIG.OFFICIAL_INSTAGRAM_URL}.`;
  warning.appendChild(warningText);
  document.body.prepend(warning);
  document.body.classList.add("untrusted-host");

  if (
    SECURITY_CONFIG.HIDE_ACCOUNT_ON_UNTRUSTED_HOST &&
    (!isTrustedDomain || shouldWarnProtocol || isFramed)
  ) {
    const accountNumber = document.getElementById("brouAccountNumber");
    if (accountNumber) {
      accountNumber.textContent = "Validar por canales oficiales";
    }
  }
}

function setupMobileMenu() {
  const menuButton = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function setCurrentYear() {
  const yearNode = document.getElementById("currentYear");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

applyEditableLinks();
applyDonationInfo();
applyDomainSecurityWarning();
setupMobileMenu();
setCurrentYear();
