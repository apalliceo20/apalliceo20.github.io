// Valores editables para enlaces y canales oficiales de APAL.
const SITE_LINKS = {
  EMAIL_APAL: "apal.liceo20.joaquintorresgarcia@gmail.com",
  INSTAGRAM_APAL: "https://instagram.com/apalliceo20",
  LINK_COMUNIDAD_WHATSAPP: "#",
  LINK_GOOGLE_GROUPS_FAMILIAS: "#",
  LINK_FORMULARIO_REGISTRO_FAMILIAS: "https://forms.gle/ooqPR1YevR6ezPcj9",
  LINK_FORMULARIO_VOLUNTARIOS: "https://forms.gle/cNu3qokjgbiciMjz5",
  LINK_FORMULARIO_APORTES: "https://forms.gle/4tnmq15Fd7Cetu4W7",
  LINK_FORMULARIO_CONTACTO: "#",
  LINK_CARPETA_RENDICIONES_DRIVE: "#",
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
setupMobileMenu();
setCurrentYear();
