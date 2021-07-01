const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
  onClose: modal => document.body.classList.remove('body-scroll--disabled'),
};

const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});
