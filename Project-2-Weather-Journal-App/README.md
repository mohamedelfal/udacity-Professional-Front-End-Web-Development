# Weather-Journal App Project

## Table of Contents
* [Getting Started](#Getting-Started)
  * [Introduction](#Introduction)
  * [Project Rubric](#Project-Rubric)
  * [Get the Starter Code](#Get-the-Starter-Code)
  * [Web APIs and Asynchronous Applications](#Web-APIs-and-Asynchronous-Applications)
* [Development Strategy](#Development-Strategy) 
  * [Testing](#Testing)
* [Project Submission](#Project-Submission)
* [Weather Journal App with Asynchronous JavaScript](#Weather-Journal-App-with-Asynchronous-JavaScript)
  * [Project Files](#Project-Files)
  * [Rubric](#Rubric)
  * [Submission](#Submission)
* [PROJECT SPECIFICATION](#Weather-Journal-App-Rubric)
  * [Weather Journal App Rubric](#Weather-Journal-App-Rubric)
   * [Project Environment Setup](#Project-Environment-Setup)
   * [APIs and Routes](#APIs-and-Routes)

* [Project MarkDown Files](#MarkDown-Files)
* [Starter Code](#Starter-Code)
# Getting Started
## Introduction<br>
This project requires you to create an asynchronous web app that uses Web API and user data to
dynamically update the UI for a Weather-Journal App.<br>
## Project Rubric<br>
Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal project
rubric. Please review the rubric for detailed project requirements. If you'd like to start from
scratch without any files, you are encouraged to do so! You learn the most by developing on your
own. But, it can be a bit challenging having to start from scratch, so we do provide a starter
project (i.e., a "skeleton") to use.<br>
## Get the Starter Code<br>
You can download the starter code below by cloning the speciÒc branch 'refresh-2019':
* [The Weather Journal project repository](https://github.com/udacity/fend/tree/refresh-2019)
The starter code has all the elements and CSS you will need to complete the project, plus a little
help getting started with the JavaScript. If you decide to start development on your own and then
get stuck, you can always take a peek at the starter code available at the links provided for
inspiration.
If you want to try the project without the starter code, and would like to use a comments only
version of the finished JS code, you can find that at the link below.
* [Comments only version of fnal JS code](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app/commentsOnlyJS) ( `commentsOnlyJS`  directory)<br>
## Web APIs and Asynchronous Applications<br>
Great! You now have the starter code. Before moving forward, make sure you are comfortable
with the content from Web APIs and Asynchronous Applications.
Ask yourself:
* How do I setup a [Node environment with Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) and the necessary project dependencies?
* How do I setup a [server with GET and POST routes?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
* How do I create developer credentials for a Web API?
* How do I use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with my credentials and user input to get dynamic data into my
* app routes?
* How do I access a GET route on the server side, from a function called on the client side?
* How do I [chain Promises](https://javascript.info/promise-chaining) together
* How do I access HTML elements with JavaScript and set their properties dynamically?


# Development Strategy
For this project, you will be writing most of your code in two files: `server.js` and `website/app.js`. <br> Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

# Testing
 >>Testing your code as you go is an excellent development approach. 
If you would like to write and run tests for parts of your implementation code, you can use the file tests.js to see examples of test code you might write along the development path.
Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!
* 1-Start by setting up your project environment. 
 >>* Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your 
`server.js` file.
 >>* Create a server running on the port of your choosing
 >>* Add a `console.log()` to the server callback function, and test that your server is running using Node in the terminal to run the file `server.js`
* 2-Add a GET route that returns the *`projectData`* object in your server code Then, add a POST route that adds incoming data to `projectData`.
 >>* The POST route should anticipate receiving three pieces of data from the request body
   >>>* temperature
   >>>* date
   >>>* user response
 >>* Make sure your POST route is setup to add each of these values with a key to projectData.
* 3-Acquire API credentials from OpenWeatherMap website. 
 >>Use your credentials and the base url to create global variables at the top of your `app.js` code.
 >>* Write an `async` function in `app.js` that uses `fetch()` to make a GET request to the OpenWeatherMap API.
 >>* Create an event listener for the element with the id: `generate` , with a callback function to execute when it is clicked.
 >>* Inside that callback function call your `async` GET request with the parameters:
 >>>* base url
 >>>* user entered zip code (see input in html with id `zip`)
 >>>* personal API key
* 4-After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.

>>* You will need to write another async function to make this POST request.
>>* The function should receive a path and a data object.
>>* The data object should include
>>>* temperature
>>>* date
>>>* user response
>>* Remember, you can access the value of DOM elements by selecting them in your JS code.
* 5-Finally, chain another Promise that updates the UI dynamically Write another `async` function that is called after the completed POST request. 
 >> This function should retrieve data from our app, select the necessary elements on the DOM (`index.html`), and then update their necessary values to reflect the dynamic values for:
 >>>* Temperature
 >>>* Date
 >>>* User input

<br>

## Project Submission
# Weather Journal App with Asynchronous JavaScript
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.

# Project Files
You can obtain the project code here. To complete the project will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

# Rubric
Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal [project rubric](./4-project-rubric-Weather-Journal-App.md). Please make sure to re-review the rubric for detailed project requirements prior to submission.

# Submission
Once you've met all of the rubric requirements, you can submit your project as either a zip file or a Github repository link below.


<br>

**PROJECT SPECIFICATION**
# Weather Journal App Rubric

## Project Environment Setup
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|Node and Express Environment|Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express. The Express app instance should be pointed to the project folder with .html, .css, and .js files|
|Project Dependencies|The ‘cors’ package should be installed in the project from the command line, required in the project file `server.js`, and the instance of the app should be setup to use `cors()`.<br>The `body-parser` package should be installed and included in the project.|
|Local Server|Local server should be running and producing feedback to the Command Line through a working callback function.|
|API Credentials|Create API credentials on OpenWeatherMap.com <br>Note: The following line of code should be at the top of the app.js file: <br> ``// Personal API Key for OpenWeatherMap API const apiKey = '<your_api_key>&units=imperial';`` <br>* The actual API key itself will be different for everyone. <br>* Notice the last part ‘&units=imperial’-- this should be included in the saved variable.|

## APIs and Routes
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|APP API Endpoint|There should be a JavaScript Object named `projectData` initiated in the file `server.js` to act as the app API endpoint. <br>Tip: Near the top of the file server.js there should be a line of code that creates an empty JavaScript object:``projectData = {   }   ``|
|Integrating OpenWeatherMap API|The personal API Key for OpenWeatherMap API is saved in a named `const` variable.<br>The API Key variable is passed as a parameter to `fetch()`.<br>Data is successfully returned from the external API.<br>In the file `app.js`, there should be a line of code near the top:<br> ``   // Personal API Key for OpenWeatherMap API   const apiKey = '<your_api_key>&units=imperial';``   Note: The personal API key must be stored in a const variable.|
|Return Endpoint Data <br> GET Route I: Server Side|There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.|
|Return Endpoint Data<br>GET Route II: Client Side|There should be an asynchronous function to fetch the data from the app endpoint|
|POST Route|You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function. The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST. The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST. <br>Tip: Implement async calling by the use of promise chaining where you will pass the the mix of API and user responses, to POST endpoint on server side. The POST route in the server side should setup which will map the data sent via the API from the client side and save it in the projectData variable.|

## Dynamic UI
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|Naming HTML Inputs and Buttons For Interaction|The `input` element with the `placeholder` property set to “enter zip code here” should have an `id` of `zip`.<br>The `textarea` included in project HTML should have an `id` of `feelings`. The button included in project HTML should have an `id` of `generate`.|
|Assigning Element Properties Dynamically|The div with the `id`, `entryHolder` should have three child divs with the ids:<br> **`date`<br> `temp`<br>`content`<br>`Event Listeners`**|
|Adds an event| listener to an existing HTML button from DOM using Vanilla JS. In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.|
|Dynamically Update UI|Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript. Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.<br>Note: Function to GET Project Data:<br> ```  const retrieveData = async () =>{  const request = await fetch('/all');   try {   // Transform into JSON   const allData = await request.json()   console.log(allData)   // Write updated data to DOM elements   document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';   document.getElementById('content').innerHTML = allData.feel;  document.getElementById(""date"").innerHTML =allData.date;   }   atch(error)   console.log(""error"", error);   // appropriately handle the error   ```|

<br>

# MarkDown Files
 * [1-Getting-Started.md](./1-Getting-Started.md)
 * [2-Development-Strategy.md](./2-Development-Strategy.md)
 * [3-Weather-Journal App.md](./3-Weather-Journal-App.md)
 * [4-project-rubric-Weather-Journal-App.md](./4-project-rubric-Weather-Journal-App.md) <br>
# Starter Code
 * [Starter Code *Source File*](./Starter-Code/)
 * [Starter Code *Zip File*](./Starter-Code/weather-journal-app.zip)

