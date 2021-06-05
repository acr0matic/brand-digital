const header = document.querySelector('header');
const headerDropdown = header.querySelector('.dropdown');

const sideMenu = document.getElementById('side-menu');
const sideMenuOverlay = sideMenu.querySelector('.side-menu__overlay');
const sideMenuClose = sideMenu.querySelector('.side-menu__close');

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

    if (window.scrollY >= header.offsetHeight + 50) header.classList.add('header-inverted');
    else header.classList.remove('header-inverted')
  });

const headerBurger = header.querySelector('.header__burger');
headerBurger.addEventListener('mouseenter', () => headerBurger.firstElementChild.classList.add('is-active'));
headerBurger.addEventListener('mouseleave', () => headerBurger.firstElementChild.classList.remove('is-active'));

headerBurger.addEventListener('click', () => SideMenu('open'));
sideMenuOverlay.addEventListener('click', () => SideMenu('close'));
sideMenuClose.addEventListener('click', () => SideMenu('close'));

function SideMenu(state) {
  if (state === 'open') {
    document.body.classList.add('body-scroll--disabled');
    sideMenu.classList.add('side-menu--open');
  }

  else if (state === 'close') {
    document.body.classList.remove('body-scroll--disabled');
    sideMenu.classList.remove('side-menu--open');
  }
}

