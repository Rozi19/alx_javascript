function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageElement = document.getElementById('message');

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue === '' || emailValue === '') {
    messageElement.innerHTML = 'Please fill in all required fields.';
  } else {
    messageElement.innerHTML = 'Form submitted successfully!';
    document.getElementById('submitForm').submit();
  }
}

// Add event listener to the form element
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);