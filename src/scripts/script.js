const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
};

const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  const close = modal.querySelector('.modal__swipe');

  if (close)
    close.addEventListener('touchend', () => {
      MicroModal.close(modal.getAttribute('id'))
    });
});

// Прелоадер
const preloader = document.getElementById('preloader');
document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    preloader.classList.add('preloader--hide');
  }, 2500);
});


const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

if (document.querySelector('.handorgel')) {
  var accordion = new handorgel(document.querySelector('.handorgel'));
}

const lightbox = GLightbox({
  touchNavigation: true,
  autoplayVideos: true,
  openEffect: 'fade',
});

tippy('.input__warning[data-tippy-content]', {
  placement: 'right',
  allowHTML: true,
  maxWidth: 300,
  theme: 'brand-digital',
});