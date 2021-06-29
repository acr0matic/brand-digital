const priceContent = document.getElementById('price-content');

if (priceContent) {
  const action = priceContent.querySelectorAll('.price-content__service');
  action.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      const activeItem = document.querySelector('.price-content__service--active');

      if (activeItem) activeItem.classList.remove('price-content__service--active');
      item.classList.add('price-content__service--active');

      priceSlider.slideTo(index);
    });
  });
}