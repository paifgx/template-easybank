const hamburgerBtn = document.querySelector('.header__toggle');
const header = document.querySelector('header.header');
const overlay = document.querySelector('.overlay');

function toggleMobileMenu() {
  header.classList.toggle('open');
  overlay.classList.toggle('fade-in');
  overlay.classList.toggle('fade-out');
}

overlay.addEventListener('click', () => {
  toggleMobileMenu();
});

hamburgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleMobileMenu();
});
