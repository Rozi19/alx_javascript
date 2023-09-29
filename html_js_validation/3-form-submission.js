function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
  
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
  
    if (nameValue === '' || emailValue === '') {
      alert('Please fill in all required fields.');
    } else {
      alert('Form submitted successfully!');
      document.querySelector('#submitForm').submit();
    }
  }
  
  // Add event listener to the form element
  document.querySelector('#submitForm').addEventListener('submit', handleFormSubmit);