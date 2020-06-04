let navToggle = document.querySelector('.nav__toggle');
let toggleIcon = document.querySelector('.nav__toggle-icon');
let navItems = document.querySelector('.nav__items');
let siteBody = document.querySelector('body');

// Navigation Toggler
navToggle.addEventListener('click', () => {
  toggleIcon.classList.toggle('is-active');
  navItems.classList.toggle('open');
  siteBody.classList.toggle('no-scroll');
});