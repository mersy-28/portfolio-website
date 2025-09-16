// mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
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

// dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});