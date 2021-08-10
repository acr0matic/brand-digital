forms.forEach(form => {
  const privacy = form.querySelector('input[type=checkbox]');
  const button = form.querySelector('button[type=submit]');

  if (privacy) {
    privacy.addEventListener('change', () => {
      if (privacy.checked) button.removeAttribute('disabled');
      else button.setAttribute('disabled', 'disabled');
    });
  }
});