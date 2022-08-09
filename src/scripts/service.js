const serviceSection = document.getElementById('service');
if (serviceSection) {
  const serviceWrapper = serviceSection.querySelector('.service__wrapper');
  const serviceCards = serviceWrapper.querySelectorAll('.service-card');

  if (serviceCards.length === 5) serviceWrapper.classList.add('service__wrapper--five-items')
  else if (serviceCards.length === 6) serviceWrapper.classList.add('service__wrapper--six-items')
  else if (serviceCards.length === 4) serviceWrapper.classList.add('service__wrapper--four-items')
}

const serviceContentSection = document.getElementById('service-content');
let serviceItems;

if (serviceContentSection) {
  serviceItems = serviceContentSection.querySelectorAll('.service-content-tabs__item');

  serviceItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      ChangeServiceTab(item, index)
    });
  });
}

function ChangeServiceTab(item, index) {
  const activeItem = document.querySelector('.service-content-tabs__item--active');
  if (activeItem) activeItem.classList.remove('service-content-tabs__item--active');

  item.classList.add('service-content-tabs__item--active');
  serviceTabs.slideTo(index);
}

const serviceTabs = new Swiper('.service-content-slider', {
  autoHeight: true,
  simulateTouch: false,
  allowTouchMove: false,
  roundLengths: true,
  spaceBetween: 30,
});

const serviceGallery = new Swiper('.service-content-gallery', {
  slidesPerView: 1,
  spaceBetween: 15,
  roundLengths: true,

  pagination: {
    el: '.service-content-gallery .swiper-pagination',
    clickable: true,
  },
});

if (window.matchMedia('(max-width: 768px)').matches) {
  const serviceContent = document.getElementById('service-content');
  if (serviceContent) {
    const serviceItems = serviceContent.querySelectorAll('.service-content-tabs__item');
    const mobilePicture = serviceContent.querySelector('.service-content-tabs__picture--mobile img');

    serviceItems.forEach(item => {
      const picture = item.querySelector('.service-content-tabs__image--hidden');

      item.addEventListener('click', () => {
        mobilePicture.src = picture.src;
      });
    });
  }
}

// const serviceOther = document.querySelector('.service--other');
// if (serviceOther) {
//   const cards = serviceOther.querySelectorAll('.service-card');

//   cards.forEach(card => {
//     const imageSrc = card.querySelector('.service-card__image').src;
//     card.addEventListener('click', () => {

//     });
//   });
// }