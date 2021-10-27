const exitModal = document.getElementById('modal-exit');

function userLeave(modal) {
  const progress = modal.querySelector('.progress');
  const text = progress.querySelector('.progress__text');
  const failText = text.dataset.fail;

  const line = progress.querySelector('.progress__line');
  const track = progress.querySelector('.progress__track');

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
}

const mouseEvent = e => {
  if (!e.toElement && !e.relatedTarget && !localStorage.getItem('userLeave')) {
    // document.removeEventListener('mouseout', mouseEvent);

    MicroModal.show('modal-exit', modalParams);
    userLeave(exitModal);

    // localStorage.setItem('userLeave', true);
  }
};

document.addEventListener('mouseout', mouseEvent);