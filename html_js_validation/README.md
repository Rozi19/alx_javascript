<h1>HTML Form + JS validation</h1>
<h1>0. Form Validation - Password Strength</h1>
<br>
Below is the content of password.html:
<br>
Implement JavaScript validation to check the password strength when the form is submitted.<br>
Retrieve the value entered in the password input field using JavaScript.<br>
Your JavaScript should be written in a separate file and used as an external script in the HTML code
<br>
Write a function called validatePassword to validate the password based on the provided criteria.
<br>
The validatePassword function should check the following criteria:
<br>
The password must be at least 8 characters long.
<br>
The password must contain at least one uppercase letter.
<br>
The password must contain at least one lowercase letter.
<br>
The password must contain at least one numeric digit.
<br>
The password must contain at least one special character (e.g., !@#$%^&*).
<br>
If the password meets all the criteria, allow the form submission.
<br>
If the password does not meet the criteria, display an appropriate error message in the <p> element with the id “error” .
<br>
<h1>1. Form Validation - Email Validation</h1>
<br>
Below is the content of email.html:
<br>
Implement JavaScript validation to check the email format when the form is submitted.
<br>
Retrieve the value entered in the email input field using JavaScript.
<br>
Your JavaScript should be written in a separate file and used as an external script in the HTML code
<br>
Write a function called validateEmail to validate the email based on the email format.
<br>
The validateEmail function should check if the email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name.
<br>
If the email format is correct, allow the form submission.
<br>
If the email format is incorrect, display the error message “Please enter a valid email address.” in the

element with the id "error".
<br>
Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.<br>

<h1>2. Dynamic Form Field</h1>
<br>
Implement JavaScript to generate a dynamic number of text input fields based on the selected value in the dropdown menu.
<br>
Retrieve the selected value from the dropdown menu using JavaScript.
<br>
Write a function called generateInputFields to generate the specified number of text input fields dynamically within the “inputContainer” div.
<br>
The generateInputFields function should take the selected value from the dropdown menu as a parameter.
<br>
Inside the generateInputFields function, use a loop or other appropriate logic to create the desired number of text input fields.
<br>
Each text input field should have a unique name attribute, such as “field1”, “field2”, etc., to differentiate them.
<br>
Append the dynamically generated text input fields to the “inputContainer” div.
<br>
Implement JavaScript validation to ensure that all dynamically generated fields are filled before submitting the form.
<br>
Write a function called validateForm to validate the form before submission.
<br>
The validateForm function should be called when the form is submitted.
<br>
Inside the validateForm function, retrieve the values entered in the dynamically generated text input fields using JavaScript.
<br>
Check if any of the fields are empty. If any field is empty, prevent the form submission and display the error message “Please fill in all fields”.
<br>
Note: You may need to use event listeners or other appropriate techniques to detect changes in the dropdown menu selection and handle form submission.<br>

<h1>3. Form Submission Handling</h1>
<br>
Implement JavaScript to handle form submission and perform validation before submitting.
<br>
Write a function called handleFormSubmit to handle the form submission.
<br>
Your JavaScript should be written in a separate file and used as an external script in the HTML code.
<br>
Add an event listener to the form element to listen for the “submit” event and call the handleFormSubmit function.
<br>
Inside the handleFormSubmit function, prevent the default form submission behavior using event.preventDefault().
<br>
Retrieve the values entered in the form fields using JavaScript.
<br>
Use JavaScript validation to ensure that all required fields are filled.
<br>
Check if the “name” and “email” fields are filled. If any of them are empty, display the error message “Please fill in all required fields”.
<br>
If all validations pass, display a success message “Form submitted successfully!” .
<br>
If any validations fail, do not submit the form and allow the user to correct the errors before submitting again.<br>

