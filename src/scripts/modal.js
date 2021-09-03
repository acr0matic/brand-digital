const modals = document.querySelectorAll('.modal');
const modalDefault = {};

modals.forEach(modal => {
  const id = modal.getAttribute('id');
  const type = id.substring(6);
  const button = document.querySelectorAll(`[data-micromodal-trigger=${id}`);

  modalDefault[type] = {};

  const title = modal.querySelector('.modal__title');
  const desc = modal.querySelector('.modal__text');
  const image = modal.querySelector('.modal__image');
  const form = modal.querySelector('.modal__form');

  function ResetModal(params) {
    title.innerHTML = params['title'];
    desc.innerHTML = params['desc'];
    image.src = params['image'];

    if (params['additional'])
      form.setAttribute('data-additional', params['additional']);
    else
      form.removeAttribute('data-additional');
  }

  if (modal.classList.contains('modal-callback')) {
    modalDefault[type]['title'] = title.innerHTML;
    modalDefault[type]['desc'] = desc.innerHTML;
    modalDefault[type]['image'] = image.src;
    modalDefault[type]['additional'] = form.getAttribute('data-additional');

    button.forEach(item => {
      item.addEventListener('click', () => {
        const modalType = item.getAttribute('data-type');

        if (!modalType) {
          ResetModal(modalDefault[type])
        }

        else {
          title.innerHTML = item.getAttribute('data-title');
          desc.innerHTML = item.getAttribute('data-desc');
          image.src = item.getAttribute('data-image');
          form.setAttribute('data-additional', item.getAttribute('data-additional'));
        }
      });
    });
  }
});