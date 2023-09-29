function generateInputFields(selectedValue) {
    const inputContainer = document.querySelector('#inputContainer');
    inputContainer.innerHTML = ''; 
  
    for (let i = 1; i <= selectedValue; i++) {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = 'field' + i;
      inputField.placeholder = 'Field ' + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm(event) {
    event.preventDefault(); 
  
    const inputFields = document.querySelectorAll('#inputContainer input');
    let isValid = true;
  
    inputFields.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
      }
    });
  
    if (!isValid) {
      alert('Please fill in all fields.');
    } else {
      alert('Form submitted successfully!');
      document.querySelector('#submitForm').submit();
    }
  }
  
 
  document.querySelector('#submitForm').addEventListener('submit', validateForm);