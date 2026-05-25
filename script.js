// Theme
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeBtn.textContent = '○';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '○' : '☾';
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.textContent = open ? '×' : '☰';
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
});

mobileMenu.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.textContent = '☰';
    burger.setAttribute('aria-label', 'Menu');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
