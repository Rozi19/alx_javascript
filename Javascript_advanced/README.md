<h1>Javascript advanced</h1>
<h1>0. Lexical scoping and welcome message</h1>
<br>
Create a function named welcome:
<br>
It takes two arguments: firstName (string) and lastName (string)<br>
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName<br>
Within the welcome function, write a function named displayFullName:<br>
It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.<br>
Call the function displayFullName at the end of the function welcome<br>
<h1>1. Closure Scope Chain</h1>
<br>
Create a variable named globalVariable with value Welcome<br>
Create a function outer that:<br>
alerts the content of the variable globalVariable<br>
creates a variable named course with value Holberton<br>
creates a function inner that:<br>
alerts the content of the variable globalVariable and course (concatenated)<br>
creates a variable named exclamation with value !<br>
creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)<br>
calls the function inception<br>
calls the function inner<br>
Call the function outer<br>
<h1>2. Closure</h1>
<br>
Write a function named welcomeMessage:
<br>
It accepts one argument fullName (string)<br>
It should be a closure for an alert displaying Welcome fullName<br>
After this function definition, create three variables:
<br>
guillaume contains a call welcomeMessage with Guillaume as argument<br>
alex contains a call welcomeMessage with Alex as argument<br>
fred contains a call welcomeMessage with Fred as argument<br>
<h1>3. Closure and loops</h1>
<br>
Write a function named createClassRoom:
<br>
It takes into argument numbersOfStudents (number)<br>
Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number<br>
After the definition of studentSeat, create and populate a variable students (array)<br>
Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array<br>
Returns the students array<br>
Create a closure classRoom, calling createClassRoom with 10 students<br>
