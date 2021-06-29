const header = document.querySelector('#header');
const headerDropdown = header.querySelector('.nav__list > .dropdown > .dropdown__header');

const sideMenu = document.getElementById('side-menu');
const sideMenuOverlay = sideMenu.querySelector('.side-menu__overlay');
const sideMenuClose = sideMenu.querySelector('.side-menu__close');

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = mobileMenu.querySelector('.mobile-menu__overlay');
const mobileMenuDropdown = mobileMenu.querySelector('.mobile-dropdown');

let scrollPosition = window.pageYOffset;
headerDropdown.addEventListener('click', () => headerDropdown.parentNode.classList.toggle('dropdown--open'));
window.addEventListener('click',
  (e) => {
    if (!headerDropdown.parentNode.contains(e.target)) headerDropdown.parentNode.classList.remove('dropdown--open');
  });

window.addEventListener('scroll',
  () => {
    scrollPosition = window.pageYOffset;
    if (scrollPosition >= 150) headerDropdown.parentNode.classList.remove('dropdown--open');

    if (window.scrollY >= header.offsetHeight + 50) header.classList.add('header-inverted');
    else header.classList.remove('header-inverted')
  });

const headerBurger = header.querySelector('.header__burger');

if (window.matchMedia('(min-width: 991px)').matches) {
  let timer = setTimeout(() => headerBurger.firstElementChild.classList.remove('is-active'), 500);

  headerBurger.addEventListener('mouseenter', () => {
    window.clearTimeout(timer);
    headerBurger.firstElementChild.classList.add('is-active');
  });

  headerBurger.addEventListener('mouseleave', () => timer = window.setTimeout(() => {
    headerBurger.firstElementChild.classList.remove('is-active');
  }, 500));
}

else {
  const button = headerBurger.querySelector('.hamburger');
  button.classList.remove('hamburger--arrowalt');
  button.classList.add('hamburger--collapse');

  headerBurger.addEventListener('click', () => headerBurger.firstElementChild.classList.toggle('is-active'));
  mobileMenuOverlay.addEventListener('click', () => headerBurger.firstElementChild.classList.toggle('is-active'));
}

headerBurger.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 991px)').matches) Menu('side', 'open');
  else Menu('mobile', 'toggle');
});

sideMenuOverlay.addEventListener('click', () => Menu('side', 'close'));
sideMenuClose.addEventListener('click', () => Menu('side', 'close'));

mobileMenuOverlay.addEventListener('click', () => Menu('mobile', 'toggle'));
mobileMenuDropdown.addEventListener('click', () => mobileMenuDropdown.classList.toggle('mobile-dropdown--open'));

function Menu(menu, state) {
  if (state === 'open') {
    document.body.classList.add('body-scroll--disabled');

    if (menu === 'side') sideMenu.classList.add('side-menu--open');
    else if (menu === 'mobile') mobileMenu.classList.add('side-menu--open');
  }

  else if (state === 'close') {
    document.body.classList.remove('body-scroll--disabled');
    if (menu === 'side') sideMenu.classList.remove('side-menu--open');
  }

  else if (state === 'toggle') {
    header.classList.toggle('header-mobile');
    document.body.classList.toggle('body-scroll--disabled');
    if (menu === 'mobile') mobileMenu.classList.toggle('mobile-menu--open');
  }
}

