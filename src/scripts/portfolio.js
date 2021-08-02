// const portfolioSection = document.getElementById('portfolio');
InitPortfolio();

function InitPortfolio() {
  const modal = document.getElementById('modal-portfolio');
  if (modal) {
    if (!modal.classList.contains('modal-portfolio--full')) {
      if (window.matchMedia('(max-width: 991px)').matches) {
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

    else {
      const close = modal.querySelector('.modal__swipe');
      const title = modal.querySelector('.modal__title');
      const text = modal.querySelector('.modal__text');
      const list = modal.querySelector('.modal__list');
      const images = modal.querySelectorAll('.modal__photos .modal__image');
      const additionalImages = modal.querySelectorAll('.modal__additional .modal__image');

      const items = document.querySelectorAll('.portfolio-body .portfolio-item');

      close.addEventListener('touchend', () => MicroModal.close('modal-portfolio', modalParams));

      items.forEach(item => {
        item.addEventListener('click', () => {
          if (portfolioModalSlider) portfolioModalSlider.slideTo(0);

          const imageSource = item.querySelectorAll('.portfolio-item__gallery .portfolio-item__image');
          const additionalSource = item.querySelectorAll('.portfolio-item__additional .portfolio-item__image');

          list.innerHTML = '';
          images.forEach((image, index) => {
            if (imageSource[index]) {
              image.parentElement.parentElement.style.display = "block";
              image.setAttribute('data-src', imageSource[index].src);
            }
            else {
              image.parentElement.parentElement.style.display = "none";
            }
          });

          additionalImages.forEach((image, index) => image.setAttribute('data-src', additionalSource[index].src));

          if (portfolioModalSlider) portfolioModalSlider.update();
          lazyLoadInstance.update();

          title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
          text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

          const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
          listItems.forEach(element => list.innerHTML += element.outerHTML);
        });
      });
    }
  }
}

let portfolioModalSlider;
if (window.matchMedia('(max-width: 768px)').matches) {
  portfolioModalSlider = new Swiper('.modal-portfolio--full .modal-slider', {
    speed: 500,
    spaceBetween: 30,
    slidesPerView: 1,

    pagination: {
      el: '.modal-portfolio--full .swiper-pagination',
    },
  });
}

