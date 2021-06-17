const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
