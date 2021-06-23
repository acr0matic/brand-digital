const serviceSection = document.getElementById('service');
if (serviceSection) {
  const serviceWrapper = serviceSection.querySelector('.service__wrapper');
  const serviceCards = serviceWrapper.querySelectorAll('.service-card');

  if (serviceCards.length === 5) serviceWrapper.classList.add('service__wrapper--five-items')
  else if (serviceCards.length === 6) serviceWrapper.classList.add('service__wrapper--six-items')
  else if (serviceCards.length === 4) serviceWrapper.classList.add('service__wrapper--four-items')
}

const serviceContentSection = document.getElementById('service-content');

if (serviceContentSection) {
  const serviceItems = serviceContentSection.querySelectorAll('.service-content-tabs__item');

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeItem = document.querySelector('.service-content-tabs__item--active');
      if (activeItem) activeItem.classList.remove('service-content-tabs__item--active');

      item.classList.add('service-content-tabs__item--active');
    });
  });

}