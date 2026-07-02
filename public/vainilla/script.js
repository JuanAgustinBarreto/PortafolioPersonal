/* ============================================================
   Portfolio — Juan Agustín Barreto
   JavaScript Vanilla, sin librerías.
   ============================================================ */

"use strict";

/* ---------- Preloader ---------- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
    setTimeout(() => preloader.remove(), 600);
  }, 900);
});

/* ---------- Navbar dinámica ---------- */
const nav = document.getElementById("nav");
const onNavScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onNavScroll();
window.addEventListener("scroll", onNavScroll, { passive: true });

/* ---------- Menú móvil ---------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

/* ---------- Scroll suave + cerrar menú ---------- */
document.querySelectorAll(".nav-go").forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

/* ---------- Texto rotativo (typing) ---------- */
const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Programador SIU Guaraní",
];

const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeTick() {
  const role = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typingEl.textContent = role.slice(0, charIndex);
    if (charIndex === role.length) {
      deleting = true;
      setTimeout(typeTick, 1800);
      return;
    }
    setTimeout(typeTick, 70);
  } else {
    charIndex--;
    typingEl.textContent = role.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeTick, 350);
      return;
    }
    setTimeout(typeTick, 38);
  }
}
setTimeout(typeTick, 500);

/* ---------- Parallax suave en el hero ---------- */
const orb1 = document.getElementById("orb1");
const orb2 = document.getElementById("orb2");

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.5) {
      orb1.style.transform = "translateY(" + y * 0.22 + "px)";
      orb2.style.transform = "translateY(" + y * 0.12 + "px)";
    }
  },
  { passive: true },
);

/* ---------- Tecnologías (cards generadas) ---------- */
const techs = [
  ["HTML", "<>"],
  ["CSS", "#"],
  ["JavaScript", "JS"],
  ["C#", "C#"],
  [".NET", ".NET"],
  ["SQL Server", "SQL"],
  ["MySQL", "SQL"],
  ["Git", "Git"],
  ["GitHub", "GH"],
  ["Java", "Jv"],
  ["PHP", "php"],
  ["Python", "Py"],
  ["Node.js", "Nd"],
  ["Linux", ">_"],
  ["Windows", "Win"],
  ["APIs REST", "API"],
];

const techGrid = document.getElementById("techGrid");
techGrid.innerHTML = techs
  .map(
    ([name, mono]) =>
      '<div class="glass tech-card hover-card">' +
      '<div class="tech-icon">' + mono + "</div>" +
      '<p class="tech-name">' + name + "</p>" +
      "</div>",
  )
  .join("");

/* ---------- Proyectos (ACA PONGO MIS PROYECTOS) ---------- */
const GITHUB = "https://github.com/juanagustinbarreto";

const projects = [
  {
    name: "Hekel Amigurumis",
    description: "Landing page de tienda online de amigurumis con catálogo, carrito de compras y formulario de contacto.",
    image: "img/project-1.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "https://hekel.vercel.app/",
  },
  {
    name: "Bien Criollo Nogoyá",
    description: "Landing page de pizzas listas Bien Criollo Nogoyá, con catálogo, packs de pizzas, integraciones y pedidos a whatsapp.",
    image: "img/project-2.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "https://biencriollo.vercel.app/",
  },
  {
    name: "Marcelo Barreto Propiedades - Inmobiliaria Nogoyá",
    description: "Landing page de inmobiliaria con catálogo de propiedades, formulario de contacto y mapa interactivo.",
    image: "img/project-3.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "https://marcelobarretopropiedades.vercel.app/",
  },
  {
    name: "Detalles que Enamoran",
    description: "Landing page sobre decoración de eventos en Nogoyá, con integración a whatsapp e instagram.",
    image: "img/project-4.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "https://detallesqueenamoran.vercel.app/",
  },
  {
    name: "Bien Criollo Nogoyá - Gestión",
    description: "Sistema de Gestión de ventas, gastos, reportes entre fechas, día, semana, mes, año, exportaciones a excel, pdf y gráficos de ventas y gastos. Desarrollado con HTML, CSS, JavaScript y Node.js.",
    image: "img/project-5.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "No disponible.",
  },
  {
    name: "Marcelo Barreto Propiedades Nogoyá - Gestión",
    description: "Sistema de Gestión de propiedades, clientes, reportes entre fechas, día, semana, mes, año, exportaciones a excel, pdf y gráficos de propiedades y clientes. Desarrollado con HTML, CSS, JavaScript y Node.js.",
    image: "img/project-6.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: GITHUB,
    demo: "No disponible.",
  },
  {
    name: "Meier Distribuciones",
    description: "Landing page de distribuidora local de alimentos, con catálogo de productos, formulario de contacto y mapa interactivo. Carrito de compra con integración a whatsapp.",
    image: "img/project-7.jpg",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    github: GITHUB,
    demo: "No disponible.",
  },
];


const iconGithub =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';
const iconExternal =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.innerHTML = projects
  .map(
    (p, i) =>
      '<article class="glass project-card hover-card reveal d' + ((i % 3) + 1) + '">' +
      '<div class="project-media"><img src="' + p.image + '" alt="Captura del proyecto ' + p.name + '" loading="lazy" width="832" height="512" /></div>' +
      '<div class="project-body">' +
      "<h3>" + p.name + "</h3>" +
      "<p>" + p.description + "</p>" +
      '<div class="project-tags">' + p.tags.map((t) => "<span>" + t + "</span>").join("") + "</div>" +
      '<div class="project-actions">' +
      '<a class="pa-github" href="' + p.github + '" target="_blank" rel="noreferrer">' + iconGithub + "GitHub</a>" +
      '<a class="pa-demo" href="' + p.demo + '" target="_blank" rel="noreferrer">' + iconExternal + "Demo</a>" +
      "</div></div></article>",
  )
  .join("");

/* ---------- Fade al hacer scroll (reveal) ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Contadores animados ---------- */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterObserver.unobserve(el);
      const to = parseInt(el.dataset.to, 10);
      const duration = 1500;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

/* ---------- Botón volver arriba ---------- */
const toTop = document.getElementById("toTop");
const onTopScroll = () => toTop.classList.toggle("visible", window.scrollY > 480);
onTopScroll();
window.addEventListener("scroll", onTopScroll, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- Formulario de contacto ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("f-name").value;
  const email = document.getElementById("f-email").value;
  const message = document.getElementById("f-message").value;
  const subject = encodeURIComponent("Contacto desde el portfolio — " + name);
  const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  window.location.href = "mailto:barretojuanagustin@gmail.com?subject=" + subject + "&body=" + body;
});

/* ---------- Año dinámico del footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
