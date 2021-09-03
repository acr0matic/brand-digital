// const portfolioSection = document.getElementById('portfolio');
InitPortfolio();

function InitPortfolio() {
  const modal = document.getElementById('modal-portfolio');
  if (modal) {
    if (!modal.classList.contains('modal-portfolio--full')) {
      if (window.matchMedia('(max-width: 991px)').matches) {
        const title = modal.querySelector('.modal__title');
        const text = modal.querySelector('.modal__text');
        const list = modal.querySelector('.modal__list');
        const image = modal.querySelector('.modal__image');

        const items = document.querySelectorAll('.portfolio--block .portfolio-item');

        items.forEach(item => {
          item.addEventListener('click', () => {
            MicroModal.show('modal-portfolio', modalParams);
            image.setAttribute('src', '');
            list.innerHTML = '';

            image.setAttribute('src', item.querySelector('.portfolio-item__image').src);

            title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
            text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

            const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
            listItems.forEach(element => list.innerHTML += element.outerHTML);
          });
        });
      }
    }

    else {
      const title = modal.querySelector('.modal__title');
      const info = modal.querySelector('.modal__info');
      const text = modal.querySelector('.modal__text');
      const list = modal.querySelector('.modal__list');
      const images = modal.querySelectorAll('.modal__photos .modal__image');
      const additionalImages = modal.querySelectorAll('.modal__additional .modal__image');

      const items = document.querySelectorAll('.portfolio-body .portfolio-item');


      items.forEach(item => {
        item.addEventListener('click', () => {
          if (portfolioModalSlider) portfolioModalSlider.slideTo(0);

          const imageSource = item.querySelectorAll('.portfolio-item__gallery .portfolio-item__image');
          const additionalSource = item.querySelectorAll('.portfolio-item__additional .portfolio-item__image');

          title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
          info.innerHTML = item.querySelector('.portfolio-item__category').innerHTML;
          text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

          list.innerHTML = '';
          const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
          listItems.forEach(element => list.innerHTML += element.outerHTML);

          if (images)
            images.forEach((image, index) => {
              if (imageSource[index]) {
                image.parentElement.parentElement.style.display = "block";
                image.setAttribute('data-src', imageSource[index].src);
              }
              else {
                image.parentElement.parentElement.style.display = "none";
              }
            });

          if (additionalImages)
            additionalImages.forEach((image, index) => image.setAttribute('data-src', additionalSource[index].src));

          if (portfolioModalSlider) portfolioModalSlider.update();
          lazyLoadInstance.update();
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