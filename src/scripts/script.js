const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

MicroModal.init({
  awaitCloseAnimation: true,
  disableFocus: true,
});

var lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy',
});