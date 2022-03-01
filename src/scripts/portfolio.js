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
            if (image.src !== '') image.src = '';
            list.innerHTML = '';

            image.setAttribute('data-src', item.querySelector('.portfolio-item__image').src);
            LazyLoad.resetStatus(image);

            title.innerHTML = item.querySelector('.portfolio-item__title').innerHTML;
            text.innerHTML = item.querySelector('.portfolio-item__description').innerHTML;

            const listItems = item.querySelectorAll('.portfolio-item__list .list__item');
            listItems.forEach(element => list.innerHTML += element.outerHTML);

            lazyLoadInstance.update();
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

          images.forEach((image, index) => {
            if (imageSource[index]) {
              const link = image.parentElement;
              image.parentElement.parentElement.style.display = "block";
              if (image.src !== '') image.src = '';
              image.setAttribute('data-src', imageSource[index].getAttribute('data-src'));
              LazyLoad.resetStatus(image);
              link.setAttribute('href', imageSource[index].getAttribute('data-full'));
            }
            else {
              image.parentElement.parentElement.style.display = "none";
            }
          });

          if (additionalSource.length !== 0) {
            if (window.matchMedia('(min-width: 991px)').matches) {
              modal.querySelector('.modal__additional').style.display = 'block';
              additionalImages.forEach((image, index) => {
                if (additionalSource[index]) {
                  const link = image.parentElement;
                  image.parentElement.parentElement.style.display = "block";
                  if (image.src !== '') image.src = '';
                  image.setAttribute('data-src', additionalSource[index].getAttribute('data-src'));
                  LazyLoad.resetStatus(image);
                  link.setAttribute('href', additionalSource[index].getAttribute('data-full'));
                }

                else {
                  image.parentElement.parentElement.style.display = "none";
                }
              });
            }
          }

          else {
            modal.querySelector('.modal__additional').style.display = 'none';
          }

          if (portfolioModalSlider) portfolioModalSlider.update();
          refreshFsLightbox();
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