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
<h1>4. Complex Closure</h1>
<br>
Create a function divideBy:
<br>
It takes into argument firstNumber (number)<br>
It returns a function that takes into argument secondNumber (number)<br>
It returns the second number divided by the first number<br>
Create a function addBy:
<br>
It takes into argument firstNumber (number)<br>
It returns a function that takes into argument secondNumber (number)<br>
It returns the sum of the two numbers<br>
Create four closures:
<br>
addBy100, that uses the function addBy with the number 100<br>
addBy1000, that uses the function addBy with the number 1000<br>
divideBy10, that uses the function divideBy with the number 10<br>
divideBy100, that uses the function divideBy with the number 100<br>

<h1>5. Changing DOM with closure</h1>
<br>
Create a function named changeMode:
<br>
It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)<br>
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color<br>
Write a function named main:
<br>
Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode<br>
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode<br>
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode<br>
Add a paragraph to the body of the page with the text Welcome Holberton!<br>
Add a button to the body with the text Spooky<br>
Add a button to the body with the text Dark mode<br>
Add a button to the body with the text Scream mode<br>
When clicking on each button, the page CSS should change to the different themes you created previously<br>
Call the main function<br>

<h1>6. Private methods with closure</h1>
<br>
Write a module named studentHogwarts:
<br>
It contains two variables privateScore set to 0, and name set to null<br>
It contains one private method changeScoreBy, it takes points in argument and add it to privateScore<br>
The module gives access to four public methods (return an object):<br>
setName, it takes into argument newName, and set the private variable name<br>
rewardStudent, it calls the method changeScoreBy with 1<br>
penalizeStudent, it calls the method changeScoreBy with -1<br>
getScore, it returns name: score (ex: Harry: 14)<br>
Create one variable named harry, that is an instance of studentHogwarts:
<br>
Set the name of the object to Harry<br>
Reward the student four times<br>
Log to the console the name and score<br>
Create one variable named draco, that is an instance of studentHogwarts:
<br>
Sets the name of the object to Draco<br>
Reward the student one time<br>
Penalize the student three times<br>
Log to the console the name and score<br>