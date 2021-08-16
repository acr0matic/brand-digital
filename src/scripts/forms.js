const forms = document.querySelectorAll('form');
forms.forEach(form => new Form(form));

forms.forEach(form => {
  const privacy = form.querySelector('input[type=checkbox]');
  const button = form.querySelector('button[type=submit]');

  const inputPlaceholder = form.querySelector('.input--placeholder');

  if (privacy) {
    privacy.addEventListener('change', () => {
      if (privacy.checked) button.removeAttribute('disabled');
      else button.setAttribute('disabled', 'disabled');
    });
  }

  if (inputPlaceholder) {
    const input = inputPlaceholder.querySelector('.input__field');

    input.addEventListener('focus', () => {
      if (!input.value) inputPlaceholder.classList.remove('input--placeholder')
    });

    input.addEventListener('blur', () => {
      if (!input.value) inputPlaceholder.classList.add('input--placeholder');
    });
  }
});