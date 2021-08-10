const promotions = document.getElementById('modal-promotions');

if (promotions) {
  const promotionsWrapper = document.querySelector('.promotions');

  const modal = document.getElementById('modal-promotions');
  const content = modal.querySelector('.modal__inner');
  const title = modal.querySelector('.modal__title');
  const text = modal.querySelector('.modal__text');

  const items = promotionsWrapper.querySelectorAll('.promotions-item');

  let copied = null;

  const button = modal.querySelector('.modal__button');
  const form = modal.querySelector('.modal__form');

  items.forEach(item => {
    item.addEventListener('click', () => {
      content.innerHTML = '';
      copied = item.cloneNode(true);
      copied.classList.add('promotions-item--big');
      content.appendChild(copied);

      const header = copied.querySelector('.promotions-item__title').innerHTML + " " + copied.querySelector('.promotions-item__description').innerHTML;

      title.innerHTML = header;
      text.innerHTML = copied.querySelector('.promotions-item__text').innerHTML;
      form.setAttribute('data-additional', header)
    });

    button.addEventListener('click', () => {
      button.classList.add('modal__button--hidden');
      form.classList.add('modal__form--visible');
    });
  });
}