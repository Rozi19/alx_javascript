<h1>Cookies & local storage</h1>
<h1>0. Create basic cookie</h1>
<br>
Install your development environment:
<br>
Installwebpack-dev-server by running npm install webpack-dev-server --save-dev (if you have some errors of missing dependencies, install these packages: npm i -D webpack and npm i -D webpack-cli)<br>
Create an empty file src/index.js<br>
Run your server with node_modules/.bin/webpack-dev-server<br>
In a file 0-index.html, create a basic html template:
<br>
Add two text inputs, with the id firstname and email<br>
Add one button with the text “Log me in” that will call the function setCookies<br>
Add one button with the text “Show the cookies” that will call the function showCookies<br>
Create a function setCookies:
<br>
It should set the cookie firstname with the value in the firstname input<br>
It should set the cookie email with the value in the email input<br>
Create a function showCookies:
<br>
It should create a DOM element p<br>
It should set the inner html with Cookies: and the value of the cookie<br>
It should append the paragraph at the bottom of the page<br>

<h1>1. Create cookie with expiration date and specific path</h1>
<br>
In a file 1-index.html:
<br>
Reuse the code of the previous task<br>
Modify the way you are setting cookies to expire in 10 days<br>

<h1>2. Read cookie</h1>
<br>
In a file 2-index.html:
<br>
Reuse the code of the previous task
<br>
Create a function getCookie:
<br>
It accepts name as argument<br>
It should return the value of the cookie with the name passed in argument<br>
If the cookie does not exist, it should return an empty string<br>
Modify the function showCookies:
<br>
It should display the paragraph Email: EMAIL - Firstname: FIRSTNAME<br>

<h1>3. Delete cookie and mini application</h1>
<br>
in a file 3-index.html, reuse your code from the previous task
<br>
add a div in html that will contain the login form:
<br>
You can reuse the one you previously wrote<br>
It has one h2<br>
It has two text inputs<br>
It has one button<br>
Write a function named showForm:
<br>
It should remove the Welcome message if it exists<br>
It should show the form<br>
Write a function named hideForm:
<br>
It should hide the form<br>
Write a function named deleteCookiesAndShowForm:
<br>
It should remove the two cookies<br>
it should show the form by calling the showForm function<br>
Write a function named showWelcomeMessageOrForm:
<br>
if user is not logged in, the function showForm is called<br>
If the user is logged in, replace the body of the page with a h1<br>
It should display Welcome FIRSTNAME (logout)<br>
(logout) should be a link<br>
The link font should be display in normal weight, italic, and 10px to the right of the message<br>
On click, call the function deleteCookiesAndShowForm, hide the welcome message, and show the form<br>

<h1>4. Use js-cookie</h1>
<br>
Reusing the code from the previous task:
<br>
Add js-cookie to your html page using the jsdelivr CDN<br>
Delete the getCookie function and use js-cookie get function instead<br>
Use js-cookie remove function within deleteCookiesAndShowForm function<br>
Use js-cookie set function within setCookiesAndShowWelcomeMessage function (new function that sets cookies and calls showWelcomeMessageOrForm)<br>

<h1>5. Local storage</h1>
<br>
Let’s build a basic shopping cart in a new file. Setup your files with the following:
<br>
Create an array availableItems that will contain all the available items. Add the strings Shampoo, Soap, Sponge, and Water in the array<br>
If Local storage is not enabled on your browser, display an alert that will contain the message Sorry, your browser does not support Web storage. Try again with a better one<br>
If local storage is available it should allow the user to see the application and call the function createStore and displayCart<br>
Create a function addItemToCart:
<br>
It takes on argument item (string)<br>
It adds a key to the local storage of the name of the item, and set the value to true<br>
Create a function createStore:
<br>
Create a ul and append it to the DOM<br>
Loop through the array of items, and create a list item to add to the ul<br>
The item should display the name of the available product<br>
On click the item should call the function addItemToCart<br>
Create a function displayCart:
<br>
If the local storage does not contain any item, this function does not do anything<br>
If the local storage contains any item, it should display the message You previously had X items in your cart in a p element that you can append to the body<br>

<h1>6. Session storage</h1>
<br>
Reusing the code from the previous task, replace the use of local storage by session storage<br>

<h1>7. Advanced use of web storage</h1>
<br>
In a new file, let’s build a more advanced cart system using Session Storage. Setup your files with the following:
<br>
Create an array availableItems that will contain all the available items. Add the strings Shampoo, Soap, Sponge, and Water to the array
If session storage is not enabled on your browser, display an alert that will contain the message Sorry, your browser does not support Web storage. Try again with a better one<br>
If session storage is available it should allow the user to see the application and call the function createStore and displayCart<br>
Create a function getCartFromStorage:
<br>
It should parse a string into a JSON object, returning the content of the cart stored in Session storage<br>
If there is no cart, it should return an empty object<br>
Create a function addItemToCart:
<br>
It accepts item(string) as argument<br>
It adds to the cart object the item<br>
If the same item is added multiple times, the cart store the quantity<br>
It stores the value of the cart object in a string for the key cart in the Session Storage<br>
It calls displayCart<br>
Create a function removeItemfromCart:
<br>
It accepts item(string) as argument<br>
It remove the entire item from the cart<br>
Store the value of the cart object in a string for the key cart in the Session Storage<br>
It calls displayCart<br>
Create a function clearCart:
<br>
It should clear the entire Session storage<br>
it calls displayCart<br>
Create a function createStore:
<br>
It should add a h2 tag with the text Available products:<br>
It should add a list with every item available for purchase<br>
When the user click on an item, it should add it to the cart<br>
Create a function displayCart:
<br>
It should add inside a h2 tag with the text Your cart:<br>
It should add an empty div tag<br>
If the div tag already exist, it should remove any list child<br>
It calls updateCart<br>
Create a function updateCart:
<br>
It should add a list to the div tag created previously<br>
If the cart is empty, it should add an item Your cart is empty<br>
If the cart is not empty, it should add the list of items within the cart with the following format: ITEM_NAME x QUANTITY (remove)<br>
When the user clicks on remove, it should call the function removeItemfromCart<br>
At the top of the cart, add an item named Clear my cart. When the user clicks on it, it should call the function clearCart<br>

