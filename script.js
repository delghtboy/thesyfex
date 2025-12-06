// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
const words = ["Secure", "Powerful", "Fast", "Anti-Nuke", "Auto-Mod"];
let index = 0;

setInterval(() => {
  const text = document.querySelector(".animated-text");
  text.classList.remove("show");
  setTimeout(() => {
      text.textContent = words[index];
      text.classList.add("show");
      index = (index + 1) % words.length;
  }, 400);
}, 2000);
