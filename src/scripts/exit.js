const exitModal = document.getElementById('modal-exit');

function userLeave(modal) {
  const promoModal = document.getElementById('modal-promo');
  const promoTitle = promoModal.querySelector('.modal__title')
  const promoText = promoModal.querySelector('.modal__text')
  const close = promoModal.querySelector('.modal__close');
  const button = modal.querySelector('.modal__button');

  const progress = modal.querySelector('.progress');
  const text = progress.querySelector('.progress__text');
  const failText = text.dataset.fail;

  const line = progress.querySelector('.progress__line');
  const track = progress.querySelector('.progress__track');

  const form = modal.querySelector('form');

  const value = track.getBoundingClientRect().width / 60;
  let second = 1;

  const timer = setInterval(() => {
    line.style.width = `${value * second}px`;
    second++;

    if (second > 60) {
      clearInterval(timer);
      text.innerHTML = failText;
    }

  }, 1000);

  close.addEventListener('click', () => {
    MicroModal.close('modal-promo', {
      disableFocus: true,
      awaitCloseAnimation: true,
    });

    MicroModal.close('modal-exit', {
      disableFocus: true,
      awaitCloseAnimation: true,
    });
  });

  button.addEventListener('click', () => {
    clearInterval(timer);

    if (second < 60) {
      const code = randomInteger(1000, 10000);

      promoModal.classList.add('modal-promo--succes');
      promoTitle.innerHTML = promoModal.getAttribute('data-title');

      form.setAttribute('data-additional', code);

      promoText.innerHTML = `nice10-` + code;
    }
  });
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const mouseEvent = e => {
  if (!e.toElement && !e.relatedTarget && !localStorage.getItem('userLeave')) {
    const activeModal = document.querySelector('.modal.is-open');
    if (!activeModal) {
      document.removeEventListener('mouseout', mouseEvent);

      MicroModal.show('modal-exit', modalParams);
      userLeave(exitModal);

      localStorage.setItem('userLeave', true);
    }
  }
};

document.addEventListener('mouseout', mouseEvent);