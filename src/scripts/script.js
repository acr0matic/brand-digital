MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
};

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

