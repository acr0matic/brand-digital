const promotions = document.getElementById('modal-promotions');

if (promotions) {
  const promotionsWrapper = document.querySelector('.promotions');

  const modal = document.getElementById('modal-promotions');
  const close = modal.querySelector('.modal__swipe');
  const content = modal.querySelector('.modal__inner');
  const title = modal.querySelector('.modal__title');
  const text = modal.querySelector('.modal__text');

  const items = promotionsWrapper.querySelectorAll('.promotions-item');

  let copied = null;

  close.addEventListener('touchend', () => {
    MicroModal.close('modal-promotions', modalParams)
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      content.innerHTML = '';
      copied = item.cloneNode(true);
      copied.classList.add('promotions-item--big');
      content.appendChild(copied);

      title.innerHTML = copied.querySelector('.promotions-item__title').innerHTML + " " + copied.querySelector('.promotions-item__description').innerHTML;
      text.innerHTML = copied.querySelector('.promotions-item__text').innerHTML;
    });
  });
}