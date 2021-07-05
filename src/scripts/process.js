const list = document.querySelector('.process-content__list');

if (list) {
  const items = list.querySelectorAll('.list__item');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      const activeItem = document.querySelector('.list__item--active');

      if (activeItem) activeItem.classList.remove('list__item--active');
      item.classList.add('list__item--active');

      processSliderSmall.slideTo(index);
    })
  });
}