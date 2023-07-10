'use strict';
const inputEmail = document.querySelector('.email');
const errorElement = document.querySelector('.email-error');

inputEmail.addEventListener('click', function () {
  if (inputEmail.value === ' ') {
    errorElement.classList.remove('hidden');
  }
});
