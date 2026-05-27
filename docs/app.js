// Hero typewriter (session cancels old timers on language change)
let twSession = 0;
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const speed = 100;

function getTypewriterTextArray() {
  if (typeof window.__portfolioI18n?.getTypewriterTexts === "function") {
    const arr = window.__portfolioI18n.getTypewriterTexts();
    if (Array.isArray(arr) && arr.length) return arr;
  }
  return ["Full-Stack", "WordPress Specialist", ".NET"];
}

function typewriterEffect(session) {
  if (session !== twSession) return;
  const texts = getTypewriterTextArray();
  if (count >= texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const el = document.getElementById("typewriter");
  if (el) el.textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => deleteEffect(session), 1300);
  } else {
    setTimeout(() => typewriterEffect(session), speed);
  }
}

function deleteEffect(session) {
  if (session !== twSession) return;
  const texts = getTypewriterTextArray();
  currentText = texts[count];
  letter = currentText.slice(0, --index);
  const el = document.getElementById("typewriter");
  if (el) el.textContent = letter;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(() => typewriterEffect(session), 700);
  } else {
    setTimeout(() => deleteEffect(session), speed);
  }
}

window.__restartPortfolioTypewriter = function () {
  if (!document.getElementById("typewriter")) return;
  twSession++;
  const session = twSession;
  count = 0;
  index = 0;
  letter = "";
  currentText = "";
  const el = document.getElementById("typewriter");
  if (el) el.textContent = "";
  setTimeout(() => typewriterEffect(session), 120);
};

// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  loader.classList.add("loader-hidden");

  const removeLoader = () => {
    if (loader.parentNode) loader.parentNode.removeChild(loader);
  };

  loader.addEventListener("transitionend", removeLoader, { once: true });
  window.setTimeout(removeLoader, 800);
});

// Offline cache (GitHub Pages + local HTTPS)
if (
  "serviceWorker" in navigator &&
  (location.protocol === "https:" || location.hostname === "localhost")
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

function initAos() {
  if (typeof AOS === "undefined") return;
  AOS.init({
    once: true,
    duration: document.getElementById("typewriter") ? 1200 : 900,
  });
}

const sectionIds = ["home", "education", "experience", "techStack", "projects", "extras", "contactMe"];

document.addEventListener("DOMContentLoaded", () => {
  initAos();

  const navCollapse = document.getElementById("navbarSupportedContent");
  if (navCollapse && typeof bootstrap !== "undefined") {
    navCollapse.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.bootstrap && navCollapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  const homeEl = document.getElementById("home");
  const navLinks = document.querySelectorAll(".js-nav-scroll");
  if (!homeEl || !navLinks.length) return;

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const hashFromHref = (href) => {
    if (!href) return "";
    const i = href.indexOf("#");
    return i >= 0 ? href.slice(i + 1) : "";
  };

  const setActive = (id) => {
    navLinks.forEach((a) => {
      const match = hashFromHref(a.getAttribute("href")) === id;
      a.classList.toggle("active", match);
      if (match) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        if (sectionIds.includes(id)) setActive(id);
      });
    },
    { root: null, rootMargin: "-18% 0px -52% 0px", threshold: 0 }
  );

  sections.forEach((sec) => observer.observe(sec));

  const onScrollTop = () => {
    if (window.scrollY < 80) setActive("home");
  };
  window.addEventListener("scroll", onScrollTop, { passive: true });
  onScrollTop();

  if (typeof window.__restartPortfolioTypewriter === "function") {
    window.__restartPortfolioTypewriter();
  }
});

//send Mail
function sendMail() {
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const messageEl = document.getElementById("message");

  const params = {
    from_name: nameEl.value,
    email: emailEl.value,
    message: messageEl.value,
  };

  function msg() {
    if (window.matchMedia("(max-width: 770px)").matches) {
      document.querySelector("#alert-success-mobile").style.display = "block";
      document.querySelector("#alert-success-desktop").style.display = "none";
    } else {
      document.querySelector("#alert-success-mobile").style.display = "none";
      document.querySelector("#alert-success-desktop").style.display = "block";
    }
  }

  emailjs.send("service_30gsgtz", "template_j5wfhr8", params).then(
    () => {
      nameEl.value = "";
      emailEl.value = "";
      messageEl.value = "";
      msg();
    },
    (error) => {
      console.error("Error:", error);
      const errMsg =
        typeof window.__portfolioI18n?.t === "function"
          ? window.__portfolioI18n.t("contact.sendError")
          : "Something went wrong. Please try again or email me directly.";
      window.alert(errMsg);
    }
  );
}
