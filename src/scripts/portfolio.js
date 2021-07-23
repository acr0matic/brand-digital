// const portfolioSection = document.getElementById('portfolio');
if (window.matchMedia('(max-width: 991px)').matches) InitPortfolio();

function InitPortfolio() {
  const modal = document.getElementById('modal-portfolio');
  if (modal) {
    const close = modal.querySelector('.modal__swipe');
    const title = modal.querySelector('.modal__title');
    const text = modal.querySelector('.modal__text');
    const list = modal.querySelector('.modal__list');
    const image = modal.querySelector('.modal__image');

    const items = document.querySelectorAll('.portfolio--block .portfolio-item');

    close.addEventListener('touchend', () => {
      MicroModal.close('modal-portfolio', modalParams)
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        lazyLoadInstance.update();

        MicroModal.show('modal-portfolio', modalParams);
        list.innerHTML = '';

        image.setAttribute('data-src', item.querySelector('.portfolio-item__image').src);
        title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
        text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

        const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
        listItems.forEach(element => list.innerHTML += element.outerHTML);
      });
    });
  }
}

if (window.matchMedia('(max-width: 768px)').matches) {
  const portfolioModalSlider = new Swiper('.modal-portfolio--full .modal-slider', {
    speed: 500,
    spaceBetween: 30,
    slidesPerView: 1,

    pagination: {
      el: '.modal-portfolio--full .swiper-pagination',
    },
  });
}

