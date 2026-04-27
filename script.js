const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("portfolio-theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("portfolio-theme", "light");
    themeToggle.textContent = "🌙";
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const menuIsOpen = navLinks.classList.contains("active");

  if (menuIsOpen) {
    menuToggle.textContent = "×";
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

year.textContent = new Date().getFullYear();