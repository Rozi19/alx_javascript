function validateEmail() {
    const email = document.querySelector('#email');
    const emailForm = document.querySelector('button[type="submit"]');
    const errorElement = document.querySelector('#error');
  
    const checkEmail = () => {
      let valid = false;
      const emailValue = email.value.trim();
      if (!isRequired(emailValue)) {
        showError('Email cannot be blank.');
      } else if (!isEmailValid(emailValue)) {
        showError('Email is not valid.');
      } else {
        showSuccess();
        valid = true;
      }
      return valid;
    };
  
    const isRequired = value => value === '' ? false : true;
  
    const isEmailValid = email => {
      const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return check.test(email);
    };
  
    const showError = message => {
      errorElement.textContent = message;
      errorElement.style.color = 'red';
    };
  
    const showSuccess = () => {
      errorElement.textContent = 'Email is valid';
      errorElement.style.color = 'green';
    };
  
    emailForm.addEventListener('click', e => {
      e.preventDefault();
      let isEmailValidResult = checkEmail();
      let isCheckingPointValid = isEmailValidResult;
      if (isCheckingPointValid) {
        
      }
    });
  }
  
  validateEmail();