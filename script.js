// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (Not really, this is a static demo.)");
  this.reset();
});

// Typing effect
const phrases = [
  "Just a friendly neighborhood dev",
  "Trying to make the internet less ugly",
  "Building the web, one line at a time",
  "Coffee-powered coder",
  "Wrangler of bugs and pixels",
  "Will code for snacks"
];
let index = 0;
let char = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (char < phrases[index].length) {
    typingText.textContent += phrases[index].charAt(char);
    char++;
    setTimeout(type, 70);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (char > 0) {
    typingText.textContent = phrases[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typingText.textContent = "";
  type();
});

// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});