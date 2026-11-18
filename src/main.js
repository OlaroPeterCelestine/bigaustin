import "./style.css";
import { mountLayout } from "./layout.js";

mountLayout();

const announceClose = document.getElementById("announceClose");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const overlayNav = document.getElementById("overlayNav");
const menuRoot = document.getElementById("menuRoot");

if (sessionStorage.getItem("announceHidden") === "1") {
  document.getElementById("announce")?.classList.add("hidden");
}

announceClose?.addEventListener("click", () => {
  document.getElementById("announce")?.classList.add("hidden");
  sessionStorage.setItem("announceHidden", "1");
});

function setMenu(open) {
  overlayNav?.classList.toggle("is-open", open);
  overlayNav?.setAttribute("aria-hidden", String(!open));
  menuToggle?.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  if (!open) resetFolders();
}

function resetFolders() {
  menuRoot?.querySelectorAll(".menu-folder").forEach((folder) => {
    folder.classList.remove("hidden");
    folder.querySelector(".menu-folder__btn")?.classList.remove("hidden");
    folder.querySelector(".menu-folder__panel")?.classList.add("hidden");
  });
  menuRoot?.querySelectorAll(".menu-link").forEach((a) => a.classList.remove("hidden"));
}

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});
menuClose?.addEventListener("click", () => setMenu(false));
overlayNav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => setMenu(false))
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

overlayNav?.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-folder-open]");
  const backBtn = e.target.closest("[data-folder-back]");
  if (openBtn) {
    const folder = openBtn.closest(".menu-folder");
    menuRoot?.querySelectorAll(".menu-link, .menu-folder").forEach((el) => {
      if (el !== folder) el.classList.add("hidden");
    });
    openBtn.classList.add("hidden");
    folder?.querySelector(".menu-folder__panel")?.classList.remove("hidden");
  }
  if (backBtn) resetFolders();
});

const testimonials = [...document.querySelectorAll("[data-testimonial]")];
let tIndex = 0;
function showTestimonial(next) {
  if (!testimonials.length) return;
  testimonials[tIndex]?.classList.add("hidden");
  testimonials[tIndex]?.classList.remove("block");
  tIndex = (next + testimonials.length) % testimonials.length;
  testimonials[tIndex]?.classList.remove("hidden");
  testimonials[tIndex]?.classList.add("block");
}
document.querySelectorAll("[data-slider='testimonials']").forEach((btn) => {
  btn.addEventListener("click", () =>
    showTestimonial(tIndex + Number(btn.dataset.dir || 1))
  );
});
if (testimonials.length > 1) setInterval(() => showTestimonial(tIndex + 1), 7000);

const rail = document.getElementById("partnersRail");
document.querySelectorAll("[data-slider='partners']").forEach((btn) => {
  btn.addEventListener("click", () => {
    rail?.scrollBy({ left: Number(btn.dataset.dir || 1) * 220, behavior: "smooth" });
  });
});

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.querySelector("[data-form-success]")?.classList.remove("hidden");
    form.reset();
  });
});

const pathRoot = document.getElementById("pathQuiz");
if (pathRoot) {
  const steps = [...pathRoot.querySelectorAll("[data-step]")];
  let step = 0;
  const answers = {};
  const result = document.getElementById("pathResult");
  const showStep = (i) => steps.forEach((s, idx) => s.classList.toggle("hidden", idx !== i));
  pathRoot.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-answer]");
    if (!btn) return;
    answers[btn.dataset.q] = btn.dataset.answer;
    step += 1;
    if (step < steps.length) return showStep(step);
    pathRoot.classList.add("hidden");
    result?.classList.remove("hidden");
    const map = {
      learn: { title: "Education & Workshops", href: "/education/", blurb: "Build real-world business and financial skills through practical classes." },
      fund: { title: "Lending & Microloans", href: "/lending/", blurb: "Explore flexible financing designed for entrepreneurs facing barriers to traditional credit." },
      coach: { title: "1:1 Business Consulting", href: "/business-consulting/", blurb: "Get confidential personalized support whether you are launching or scaling." },
      start: { title: "Start Smart", href: "/startsmart/", blurb: "A live five-week course to leave with a real business plan and a cohort of peers." },
    };
    const pick = map[answers.need] || map.learn;
    result.innerHTML = `<h3 class="mb-2 text-2xl" style="color:#04a964">${pick.title}</h3><p class="mb-4" style="color:#555">${pick.blurb}</p><a class="btn btn-primary" href="${pick.href}">Go to this service</a>`;
  });
  showStep(0);
}

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
