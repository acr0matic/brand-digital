const header = document.querySelector('header');
const headerDropdown = header.querySelector('.dropdown');

let scrollPosition = window.pageYOffset;
headerDropdown.addEventListener('click', () => headerDropdown.classList.toggle('dropdown--open'));
window.addEventListener('click',
  (e) => {
    if (!headerDropdown.contains(e.target)) headerDropdown.classList.remove('dropdown--open');
  });

window.addEventListener('scroll',
  () => {
    scrollPosition = window.pageYOffset;
    if (scrollPosition >= 150) headerDropdown.classList.remove('dropdown--open');
  });

const headerBurger = header.querySelector('.header__burger');
headerBurger.addEventListener('mouseenter', () => headerBurger.firstElementChild.classList.add('is-active'));
headerBurger.addEventListener('mouseleave', () => headerBurger.firstElementChild.classList.remove('is-active'));