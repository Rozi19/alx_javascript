function validatePassword() {
    const passwordInput = document.querySelector('#password');
    const passwordForm = document.querySelector('button[type="submit"]');
    const errorElement = document.querySelector('#error');
  
    const checkPassword = () => {
      let valid = false;
      const password = passwordInput.value.trim();
  
      if (!isRequired(password)) {
        showError('Password cannot be blank');
      } else if (!isPasswordSecure(password)) {
        showError(
          'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character (!@#$%^&*)'
        );
      } else {
        showSuccess();
        valid = true;
      }
  
      return valid;
    };
  
    const isRequired = value => value === '' ? false : true;
  
    const isPasswordSecure = password => {
      const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
      return check.test(password);
    };
  
    const showError = message => {
      errorElement.textContent = message;
    };
  
    const showSuccess = () => {
        errorElement.textContent = 'Password is valid';
        errorElement.style.color = 'green';
      };
  
    passwordForm.addEventListener('click', e => {
      e.preventDefault();
      let isPasswordValid = checkPassword();
      let isCheckingPointValid = isPasswordValid;
      if (isCheckingPointValid) {
        
      }
    });
  }
  
  validatePassword();