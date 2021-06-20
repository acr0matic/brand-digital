const serviceSection = document.getElementById('service');
if (serviceSection) {
  const serviceWrapper = serviceSection.querySelector('.service__wrapper');
  const serviceCards = serviceWrapper.querySelectorAll('.service-card');

  if (serviceCards.length === 5) serviceWrapper.classList.add('service__wrapper--five-items')
  else if (serviceCards.length === 6) serviceWrapper.classList.add('service__wrapper--six-items')
  else if (serviceCards.length === 4) serviceWrapper.classList.add('service__wrapper--four-items')
}