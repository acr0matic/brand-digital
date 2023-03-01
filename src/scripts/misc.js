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
const widgetWrapper = widget.querySelector('.widget__wrapper');
const widgetIcons = widget.querySelectorAll('.widget__link--hide')
const widgetAction = widget.querySelectorAll('.widget__action');

widgetWrapper.addEventListener('click', () => {
  widgetIcons.forEach(icon => {
    icon.classList.toggle('widget__link--hide');
  });
});

window.addEventListener('click', (e) => {
  if (!widgetWrapper.contains(e.target))
    widgetIcons.forEach(icon => icon.classList.add('widget__link--hide'));
})

function ChangeWidgetIcon() {
  widgetAction.forEach((action, index) => {
    setTimeout(() => {
      if (index !== 0) action.classList.remove('widget__action--hide');
    }, (index + 1) * 3000);
  });
}

ChangeWidgetIcon();
setInterval(() => {
  widgetAction.forEach((action, index) => {
    if (index !== 0) action.classList.add('widget__action--hide');
  });

  ChangeWidgetIcon();
}, 12000);

const seoBlock = document.getElementById('seo-block');
if (seoBlock) {
  const content = seoBlock.querySelector('.seo-block__content');
  const button = seoBlock.querySelector('.seo-block__action');

  button.addEventListener('click', () => {
    content.classList.add('seo-block__content--visible');
    button.classList.add('seo-block__action--hidden');
  });
}