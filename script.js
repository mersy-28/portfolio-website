// mobile menu toggle with ARIA state
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", function () {
  const isActive = navLinks.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isActive));
});

// scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    const targetPosition = target.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

// contact form
document.getElementById("contact-form").addEventListener("submit", function () {
  document.getElementById("form-status").style.display = "block";
});

// typing effect
const phrases = [
  "Front-end developer who turns coffee into code and bugs into features (mostly)",
  "Trying to make the internet less ugly",
  "Building websites that even my mom would be proud of",
  "Will code for snacks",
  "Turning caffeine into code",
];
let index = 0;
let char = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (char < phrases[index].length) {
    typingText.textContent = phrases[index].substring(0, char + 1);
    char++;
    setTimeout(type, 28);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (char > 0) {
    typingText.textContent = phrases[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 28);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typingText.textContent = "";
  type();
});

// dark mode toggle with persistence
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}
toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  document.body.classList.toggle("dark-mode", enabled);
  localStorage.setItem("theme", enabled ? "dark" : "light");
});

// footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});