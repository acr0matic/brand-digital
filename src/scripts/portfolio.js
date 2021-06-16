function InitPortfolio() {
  const params = {
    awaitCloseAnimation: true,
    disableFocus: true,
    onClose: modal => document.body.classList.remove('body-scroll--disabled'),
  };

  const modal = document.getElementById('modal-portfolio');
  if (modal) {
    const title = modal.querySelector('.modal__title');
    const text = modal.querySelector('.modal__text');
    const list = modal.querySelector('.modal__list');
    const image = modal.querySelector('.modal__image');

    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        MicroModal.show('modal-portfolio', params);
        document.body.classList.add('body-scroll--disabled');

        list.innerHTML = '';

        image.src = item.querySelector('.portfolio-item__image').src;
        title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
        text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

        const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
        listItems.forEach(element => list.innerHTML += element.outerHTML);
      });
    });
  }
}

if (window.matchMedia('(max-width: 576px)').matches) InitPortfolio();
