(() => {

  // common
  const entryItems = document.querySelectorAll('.entry-item, .attrEntry');
  const inputs = document.querySelectorAll('input, select');
  const errors = document.querySelectorAll('.error');
  const buttons = document.querySelectorAll('button');

  document.body.classList.add('bg');
  entryItems.forEach(elm => elm.classList.add('form-group'));
  inputs.forEach(elm => elm.classList.add('form-control'));
  errors.forEach(elm => elm.classList.add('invalid-feedback'));
  buttons.forEach(elm => {
    const type = elm.getAttribute('type');
    const variant = type === 'submit' ? 'btn-primary' : 'btn-light';

    elm.classList.add('btn', variant);
  });

  // signup
  const verifyEmailButtons = document.querySelectorAll('#email_ver_but_send, #email_ver_but_verify');

  verifyEmailButtons.forEach(elm => {
    elm.classList.remove('btn-light');
    elm.classList.add('btn-info');
  });

})();
