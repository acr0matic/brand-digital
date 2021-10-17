const scrollTopArrow = document.getElementById('scrollTop');
if (scrollTopArrow) {
  scrollTopArrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

const widget = document.getElementById('widget');
const widgetIcons = document.querySelectorAll('.widget__link--hide')

widget.addEventListener('click', () => {
  widgetIcons.forEach(icon => {
    icon.classList.toggle('widget__link--hide');
  });
});

['click', 'touchstart'].forEach(evt =>
  window.addEventListener(evt, (e) => {
    if (!widget.contains(e.target))
      widgetIcons.forEach(icon => icon.classList.add('widget__link--hide'));
  })
);
