'use strict';

const input = document.querySelector('input');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('form');

const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener('submit', (event) => {
    const emailAddress = input.value.toString();
    let emailVerification = regExp.test(emailAddress);

    if (emailVerification === false) {
        errorIcon.style.visibility = 'visible';
        errorMessage.style.visibility = 'visible';
        event.preventDefault();
    } else {
        form.submit();
    }
});