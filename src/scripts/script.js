// Прелоадер
const preloader = document.getElementById('page-loader');
const isLoaded = new CustomEvent('pageLoaded');

document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    preloader.classList.add('page-loader--hide');
    window.dispatchEvent(isLoaded);
  }, 2500);
});

const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
  callback_loaded: (el) => {
    const container = el.closest('div');
    const loader = container.querySelector('.preloader');

    if (!container.classList.contains('modal__picture') && loader && !container.classList.contains('modal__row'))
      loader.classList.add('preloader--hide');
  },
});

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

if (document.querySelector('.handorgel')) {
  var accordion = new handorgel(document.querySelector('.handorgel'));
}

tippy('.input__warning[data-tippy-content]', {
  placement: 'right',
  allowHTML: true,
  maxWidth: 300,
  theme: 'brand-digital',
});

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
};

MicroModal.init(modalParams);

AOS.init({
  mirror: true,
});

if (window.matchMedia('(max-width: 768px)').matches) {
  const animated = document.querySelectorAll('.layout__picture');

  animated.forEach(item => {
    item.dataset.aosOffset = 200;
  });
}
