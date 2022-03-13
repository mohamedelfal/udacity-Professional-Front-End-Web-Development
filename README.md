# [Professional Front End Web Development](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)<br>Nanodegree program by [Udacity](https://www.udacity.com/)[![logo](./images/logo.min.svg)](https://www.udacity.com/)<br>
Learn how to build high quality websites and dynamic applications to create stunning user experiences for the web.
## Table of Contents
* [SYLLABUS](#SYLLABUS)
* [Moudel 3 *[JavaScript & The DOM]* Project](#Landing-Page)
   * [Landing Page](#Landing-Page)
     * [Project Introduction](#Project-Introduction)
       * [Project Summary](#Project-Summary)
       * [What You Will Build](#What-You-Will-Build)
       * [What will I learn?](#what-will-i-learn)
     * [Getting Started](#Getting-Started)
       * [Introduction](#Introduction)
       * [Project Rubric](#Project-Rubric)
       * [Get the Starter Code](#Get-the-Starter-Code)
       * [JavaScript and the DOM](#JavaScript-and-the-DOM)
     * [Development Strategy](#Development-Strategy)
       * [# Rubric Tip](#Rubric-Tip)
       * [Version Control](#Version-Control)
       * [Udacity Style Guides](#Udacity-Style-Guides)
     * [Project Submission](#Project-Submission)
       * [Landing Page](#Landing-Page)
       * [Project Files](#Project-Files)
       * [Rubric](#Rubric)
       * [Submission](#Submission)
     * [Project rubric](#Project-rubric)
       * [Interface and Architecture](#Interface-and-Architecture)
       * [Landing Page Behavior](#Landing-Page-Behavior)
       * [Documentation](#Documentation)
  * [Landing Page Solution](#Landing-Page-Solution)
* [Moudel 4 *[Web APIs and Asynchronous Applications]* Project](#Weather-Journal-App)
  * [Weather Journal App](#Weather-Journal-App)
    * [Getting Started](#Getting-Started)
       * [Introduction](#Introduction)
       * [Get the Starter Code](#Get-the-Starter-Code)
       * [Web APIs and Asynchronous Application](#Web-APIs-and-Asynchronous-Application)
    * [Development Strategy](#Development-Strategy)
       * [Testing](#Testing)
    * [Project Submission](#Project-Submission)
      * [Weather Journal App with Asynchronous JavaScript](#Weather-Journal-App-with-Asynchronous-JavaScript)
      * [Project Files](#Project-Files)
      * [Rubric](#Rubric)
      * [Submission](#Submission)
    * [Project rubric](#Project-rubric)
      * [Project Environment Setup](#Project-Environment-Setup)
      * [APIs and Routes](#APIs-and-Routes)
      * [Dynamic UI](#Dynamic-UI)
  * [Weather Journal App Solution](#Weather-Journal-App-Solution)
* [GRADUATED](#GRADUATED)

# SYLLABUS 
The goal of the Udacity NANODEGREE PROGRAM:[Professional Front End Web Development](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker.


 # Moudel 3 *[JavaScript & The DOM]* Project
 ># Landing Page
  the Project starter code [here](./Project-1-Landing-Page/Starter-Code/) or [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page)<br>
  Build a landing page that uses JavaScript to create an interactive navigational experience for the user.
 > # [Project Introduction](./Project-1-Landing-Page/1-Project-Introduction.md)

>>## Project Summary
This project aims to give you real-world scenarios of manipulating the DOM. The functionality you will be using serves two purposes: to prepare you for appending dynamically added data to the DOM, and to show you how javascript can improve the usability of an otherwise static site. This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

For this project, refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code. If it takes you 3 hours to figure out the logic, it should likely take you another 3 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission.

>>## What You Will Build
You will be building a multi-section landing page. Often times, we don’t know how much content will be added to a page through a CMS or an API. To circumvent this problem, we can dynamically add the content to the page. We will be demonstrating this with the navigation menu. Additionally, dynamically building the navigation is a great precursor to understanding the virtual DOM which you will experience when you begin working with JavaScript frameworks.

To improve the user experience, the section actively being viewed should be differentiated in some way. Additionally, when a user clicks on a navigation item, the item should scroll you to the appropriate section rather than giving you the default jump.

This may not sound like a lot, but there are a fair amount of moving pieces that rely on each other to work. You’ll need to plan out the logic of what you are trying to accomplish before you begin developing. If you find this process to be quick, there’s a list of additional functionality that you can add that all strive to improve the users’ experience.

>>## What will I learn?
The landing page presents the first opportunity to fully combine your skills in HTML, CSS, and JavaScript into a large project. Aside from solidifying your skills with these three technologies, you’ll discover how best to combine them in a complex application.

The following are just some of the questions that you’ll experience along the way:

* What’s the ideal workflow?
* How many files do I need?
* Do I modify the HTML first or the CSS?
* How many JavaScript functions do I need?
* Should my function be this many lines of code?
* Is readability or performance more important?

There’s no single correct answer to each question. While building this project, working with peers, and getting feedback from the project reviewer -- you will naturally develop your own answers to these questions!
<br><br><br>




 > # [Getting Started](./Project-1-Landing-Page/2-Getting-Started.md)

>>## Introduction
This project requires you to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.


>>## Project Rubric
Your project will be evaluated by a Udacity code reviewer according to the Landing Page [project rubric](./Landing-Page-rubric.md) ( *download [pdf](./Landing-Page-rubric.pdf)* ).<br>
Please review for detailed project requirements.


>>## Get the Starter Code
If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project (i.e., a "skeleton") to use.

You can download the starter code [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page) by cloning the specific branch 'refresh-2019'.

The starter code has a static, non-interactive version of the project so you can get a jump-start on development!


>>## JavaScript and the DOM
Great! You now have the starter code. Before moving forward, make sure you are comfortable with the content from the JavaScript and the DOM course. Ask yourself:

* What is the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)?
* What are [events](https://developer.mozilla.org/en-US/docs/Web/API/Event)?
  * How do we [listen for them](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)?
  * How does **event delegation** help us avoid too many events?
  * Check **Working with Browser Events** in JavaScript and the DOM for a refresher if needed
  
* How can we access elements with the following two methods? What are the differences between them?
  * [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  * [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  
* How do you use [getElementbyId()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) to select a DOM element by its `id`?
* We can also access elements with [getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName). What does this method return, and how do you use it?
* How do you use the [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) property? What does it return, and why would it be useful?
* What are the different methods for [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods)?
  * Hint: the `add()`, `remove()`, and `toggle()` methods look particularly useful...
* Every element has an innerHTML property that represents the markup of the element's content. How can you leverage this property to get and set content?

<br><br><br>




># [Development Strategy](./Project-1-Landing-Page/3-Development-Strategy.md)
  >>## Development Strategy
For this project, you will be writing most of your code in **js/app.js**. Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Feel free to implement your own design workflow, but if you get stuck -- here is a walkthrough to get you up and running!

>>## Rubric Tip
All the points mentioned below will help you to satisfy the criteria for the [project rubric](./Project-1-Landing-Page/Landing-Page-rubric.md).<br> 
  Please make sure to re-review the rubric for detailed project requirements prior to submission.

1- **Start by linking your app.js**. <br>
    where should this file go based on your present knowledge? We’ll test some other locations later.<br><br>

2- **Build out your HTML and at least 4 content sections**.<br> 
>>The rest of your functionality relies on these sections.
   * Take a quick look at all the HTML elements in index.html. Note the values for their `id`, `class`, and `data` attributes. To manipulate the DOM, you'll be using many of the tools and methods you've learned on these elements (and on those that you will create).
   * For a refresher on the data attribute, visit [here](https://www.w3schools.com/tags/att_data-.asp).
   * Which data structure can you use to store these sections? This data structure can represent all sections for your page, so it might be a good idea to save it to a variable.
   * How you would iterate (i.e., loop) over this data structure?
   * Think about how you can create, say, an unordered list (i.e., bulleted list) in HTML from this structure, and where you be placing that list.
   * Think about how you’ll test whether a section is in the viewport.
   * What actions are you performing that will cause interactivity with the DOM?
  
3- **Build the navigation menu**.<br> 
>>This will dynamically create a navigation menu based on the sections of the page. 
     This can be a particularly useful trick when you begin working with content management systems or APIs when you are uncertain of where the items will be.
   * Are you listening for an event for the navigation to build?
   * Where are you placing the navigation?
   * Where is the text for each navigation item coming from and where are you anchoring to?
   * How are you going to add each navigation item to your menu? <br>(`Hint`: there are several ways to do this. 
                                                                  Do some research to figure out which makes the most sense for your situation. Performance? Clarity?).<br>
    
4- **Add functionality to distinguish the section in view** . <br> 
>>While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.
   * Are you listening for an event for sections to become active?
   * How are you going to test which section should be highlighted?
   * How can we use `classList` [methods](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods) to change the CSS being displayed? What about removing that CSS?
   * Check the HTML and CSS files to ensure that what you chose is updated in the other locations.<br>

5- **Add the functionality to scroll to sections**.<br>Clicking on a navigation item should scroll to the appropriate section of the page.<br>
   * Which event are you listening for (hint: you were just reading it)?
   * There is a default event occurring that we need to stop. How?
   * If you don’t recall how HTML page anchors work, [read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Examples) to figure out which variables you should set.
   * There are several javascript methods for scrolling. Which seems like it may be the most simple?<br>

6- **REFACTOR**. <br>At this point, your code should be working properly. Ideally, refactoring happens while you are developing, but as a new developer, you often don’t have the whole picture in your head to be able to do so properly. Let’s clean the project up.
   * Have you run your code through a linter? We request you still follow Udacity standards when the code is complete, but running it through an [eslinter](https://eslint.org/demo) is going to help you get started in refactoring.
   * Are you using ES6 const and let?
   * Are all your functions using ES6 arrow functions?
   * Is your code DRY? Are there any pieces that would be better served as a helper function to avoid duplication?
   * How is your code structured? Have you created functions for the main functionality with properly scoped variables? Starting out it’s likely that you will have a globally scoped variables on occasion until you learn more about closures and design patterns. But placing your code into functions is a great way to make your code more readable and a way to avoid globally scoped variables.
   * Are you using the best method for your iterations?<br>

7- **Add additional sections to your HTML document**.<br> See how the navigation builds.<br>

8- **Test the performance**.<br> The performance of your page can be affected by how you write your javascript as well as where you load your javascript.
   * Test loading the javascript in the head vs at the end of the body. What issues arise? Is there a way to still load in the head without breaking the page? What is the performance like compared to loading at the end of the body?<br>

9- **Add an active state** <br>to your navigation items when a section is in the viewport.
   * Detect the element location relative to the viewport using [.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) built-in function.
   * Set CSS class active state when the element is in the viewport.
   * **Hint**: see this [Knowledge](https://knowledge.udacity.com/questions/85408) post to implement this functionality.

Set class to active state on the navigation items when a section is in the viewport.


Section active state styling and scrolling to the appropriate page<br>

10- **Suggested**:<br>
    * Hide fixed navigation bar while not scrolling (it should still be present on page load).
    * Hint: setTimeout can be used to check when the user is no longer scrolling.
    * Add a scroll to the top button on the page that’s only visible when the user scrolls below the fold of the page.
    * Update/change the design/content.
    * Make sections collapsible.<br>

11-**Responsive landing page**:<br>
  * A Responsive layout of the landing page should be created to use across all devices, such as modern desktops, tablets, and phone browsers.
  * Make sure that the navigation bar is responsive too across all these devices.
Responsiveness can be verified by inspecting the landing page using the Developer Tools option on Google Chrome Browser.
Create a responsive landing page on the modern desktop, tablet, and phone browsers
Create a responsive landing page on the modern desktop, tablet, and phone browsers<br>

12-**Comments**:<br>
   * The project should be properly commented.
   * Comments should be present at the beginning of each procedure and class.
   * Great to have comments before crucial code sections within the procedure.<br>

13-**README**:<br>
   * The README file in the starter code should replace the given texts with the specific information of this project.
   * It doesn’t have to be thorough but should have some basic information, e.g. project description, usage, dependencies
   * The markdown syntax should be used correctly in this file.
   * References: [markdown guide](https://www.markdownguide.org/basic-syntax/) and [example of README contents](https://www.markdownguide.org/basic-syntax/)
>>## Version Control
Although not a requirement, we recommend using Git from the very beginning. Make sure to commit often and to use well-formatted commit messages that conform to our [Git Style Guide](https://udacity.github.io/git-styleguide/).

>>## Udacity Style Guides
You should write your code and markup to meet the specifications provided in these style guides:

* [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
* [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
* [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
* [Git Style Guide](https://udacity.github.io/git-styleguide/) <br>
Still Not Sure How to Begin?
To reiterate, be sure that you are comfortable with the content from JavaScript and the DOM. After all, this entire project is about DOM manipulation!

A note on plagiarism: Viewing someone else’s code to get a general idea of implementation, then putting it away and starting to write your own code from scratch is okay. **Please do not copy someone's code**, in whole or in part. For further details, check out this [guide regarding plagiarism](https://udacity.zendesk.com/hc/en-us/categories/360000151251-Plagiarism).

<br><br><br>



 > # [Project Submission](./Project-1-Landing-Page/4-Project-Landing-Page.md)
>>## Landing Page
This project requires you to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

>>## Project Files
You can obtain the project code here. To complete the project will mostly require modifying the `js/app.js` file, as well as modifications to the `index.html` and `css/styles.css` files to further update and customize your project.

>>## Rubric
Your project will be evaluated by a Udacity code reviewer according to the Landing Page [project rubric](./Project-1-Landing-Page/Landing-Page-rubric.md). Please make sure to re-review the rubric for detailed project requirements prior to submission.

>>## Submission
Once you've met all of the rubric requirements, you can submit your project as either a zip file or a Github repository link below.
<br><br>


 > # [Project rubric](./Project-1-Landing-Page/Landing-Page-rubric.md) [[pdf](./Project-1-Landing-Page/Landing-Page-rubric.pdf)]
>>PROJECT SPECIFICATION
>># Landing Page
>>## Interface and Architecture
| CRITERIA    | MEETS SPECIFICATIONS    |
|:------ |:------|
| Architecture | The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console. ``css - styles.css  index.html js - app.js README.md ``|
| Usability | All features are usable across modern desktop,tablet, and phone browsers. <br> A Responsive layout of the landing page should be created to use across all devices. <br> Make sure that the navigation bar is responsive too across all these devices. <br> Responsiveness can be veriêed by inspecting the landing page using the Developer Tools option on Google Chrome Browser.|
| Styling | Styling should be added for active states. <br>Set CSS class active state when the element is in the viewport.<br>The active section in the Navbar should be highlighted. |
| HTML Structure | There are at least 4 sections that have been added to the page. |

>>## Landing Page Behavior

| CRITERIA    | MEETS SPECIFICATIONS    |
|:------ |:------|
| Navigation           | Navigation is built dynamically as an unordered list. Start with empty  `ul`  and dynamically build navigation using  `Append` ,  `appendChild` , and `innerHTML` .|
| Section Active State | It should be clear which section is being viewed while scrolling through the page. <br>Tip: Detect the element location relative to the viewport using `.getBoundingClientRect()` built- in function. | 
|Scroll to Anchor      | When clicking an item from the navigation menu, the link should scroll to the appropriate section.<br> You can use the following methods to fulêll this criterion:<br> Use addEventListener('click',....) to listen to the click event. <br> Use preventDefault() as if there is a default event occurring we need to stop that.<br> There are several javascript methods for scrolling, `scroll()`, `scrollBy()`, and `scrollIntoView()` are all acceptable.<br> A smooth scrolling behavior is expected in the project. |

>>## Documentation

| CRITERIA    | MEETS SPECIFICATIONS    |
|:------ |:------|
| README  | The ReadMe file should replace the given texts on the README template with speciêc information for this project. It doesn’t have to be thorough, but should have some basic information, eg. project description, usage, dependencies, and use correct the markdown syntax.<br><br><br> References: [markdown guide](https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md) and [example of README contents](https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md) |
| Comments | Comments should be present at the beginning of each procedure and class.<br><br><br> Bonus: Great to have comments before crucial code sections within the procedure. Refer [to Udacity JavaScript Style Guide Comments](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#comments) for standard best practices. |

<br><br><br>


# Landing Page Solution 
># Landing Page Solution [*Source Code*](./Project-1-Landing-Page/Landing-Page/)
>># [README.md](./Project-1-Landing-Page/Landing-Page/README.md)
>># [index.html](./Project-1-Landing-Page/Landing-Page/index.html)
>># [styles.css](/Project-1-Landing-Page/Landing-Page/css/styles.css)
>># [app.js](/Project-1-Landing-Page/Landing-Page/js/app.js)
># Landing Page Solution [*WebPage*](https://mohamedelfal.github.io/udacity-Professional-Front-End-Web-Development/Project-1-Landing-Page/Landing-Page/index.html)
<br><br><br><br>


# Moudel 4 *[Web APIs and Asynchronous Applications]* Project
  ># Weather Journal App
   the Project starter code [here](./Project-2-Weather-Journal-App/Starter-Code/) *[[Zip File](./Project-2-Weather-Journal-App/Starter-Code/weather-journal-app.zip)]* or [here](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app)<br>
  This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.
  
 ># [Getting Started](./Project-2-Weather-Journal-App/1-Getting-Started.md)

>>## Introduction<br>
This project requires you to create an asynchronous web app that uses Web API and user data to
dynamically update the UI for a Weather-Journal App.<br>
>>## Project Rubric<br>
Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal project
rubric. Please review the rubric for detailed project requirements. If you'd like to start from
scratch without any files, you are encouraged to do so! You learn the most by developing on your
own. But, it can be a bit challenging having to start from scratch, so we do provide a starter
project (i.e., a "skeleton") to use.<br>
>>## Get the Starter Code<br>
You can download the starter code below by cloning the speciÒc branch 'refresh-2019':
* [The Weather Journal project repository](https://github.com/udacity/fend/tree/refresh-2019)
The starter code has all the elements and CSS you will need to complete the project, plus a little
help getting started with the JavaScript. If you decide to start development on your own and then
get stuck, you can always take a peek at the starter code available at the links provided for
inspiration.
If you want to try the project without the starter code, and would like to use a comments only
version of the finished JS code, you can find that at the link below.
* [Comments only version of fnal JS code](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app/commentsOnlyJS) ( `commentsOnlyJS`  directory)<br>
>>## Web APIs and Asynchronous Applications<br>
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

 
 
 ># [Development Strategy](./Project-2-Weather-Journal-App/2-Development-Strategy.md)
For this project, you will be writing most of your code in two files: `server.js` and `website/app.js`. <br> Note that it's very important that you plan your project before you start writing any code! Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

>>## Testing
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

 
 
 ># [Project Submission](./Project-2-Weather-Journal-App/3-Weather-Journal-App.md)
>>## Weather Journal App with Asynchronous JavaScript
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI in a Weather Journal application.

>>## Project Files
You can obtain the project code here. To complete the project will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

>>## Rubric
Your project will be evaluated by a Udacity code reviewer according to the Weather-Journal [project rubric](./4-project-rubric-Weather-Journal-App.md). Please make sure to re-review the rubric for detailed project requirements prior to submission.

>>## Submission
Once you've met all of the rubric requirements, you can submit your project as either a zip file or a Github repository link below.



 ># [Project rubric](./Project-2-Weather-Journal-App/4-project-rubric-Weather-Journal-App.md)
**PROJECT SPECIFICATION**
>>## Weather Journal App

>>## Project Environment Setup
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|Node and Express Environment|Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express. The Express app instance should be pointed to the project folder with .html, .css, and .js files|
|Project Dependencies|The ‘cors’ package should be installed in the project from the command line, required in the project file `server.js`, and the instance of the app should be setup to use `cors()`.<br>The `body-parser` package should be installed and included in the project.|
|Local Server|Local server should be running and producing feedback to the Command Line through a working callback function.|
|API Credentials|Create API credentials on OpenWeatherMap.com <br>Note: The following line of code should be at the top of the app.js file: <br> ``// Personal API Key for OpenWeatherMap API const apiKey = '<your_api_key>&units=imperial';`` <br>* The actual API key itself will be different for everyone. <br>* Notice the last part ‘&units=imperial’-- this should be included in the saved variable.|

>>## APIs and Routes
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|APP API Endpoint|There should be a JavaScript Object named `projectData` initiated in the file `server.js` to act as the app API endpoint. <br>Tip: Near the top of the file server.js there should be a line of code that creates an empty JavaScript object:``projectData = {   }   ``|
|Integrating OpenWeatherMap API|The personal API Key for OpenWeatherMap API is saved in a named `const` variable.<br>The API Key variable is passed as a parameter to `fetch()`.<br>Data is successfully returned from the external API.<br>In the file `app.js`, there should be a line of code near the top:<br> ``   // Personal API Key for OpenWeatherMap API   const apiKey = '<your_api_key>&units=imperial';``   Note: The personal API key must be stored in a const variable.|
|Return Endpoint Data <br> GET Route I: Server Side|There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.|
|Return Endpoint Data<br>GET Route II: Client Side|There should be an asynchronous function to fetch the data from the app endpoint|
|POST Route|You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function. The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST. The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST. <br>Tip: Implement async calling by the use of promise chaining where you will pass the the mix of API and user responses, to POST endpoint on server side. The POST route in the server side should setup which will map the data sent via the API from the client side and save it in the projectData variable.|

>>## Dynamic UI
|CRITERIA |MEETS SPECIFICATIONS|
|:--------|:------|
|Naming HTML Inputs and Buttons For Interaction|The `input` element with the `placeholder` property set to “enter zip code here” should have an `id` of `zip`.<br>The `textarea` included in project HTML should have an `id` of `feelings`. The button included in project HTML should have an `id` of `generate`.|
|Assigning Element Properties Dynamically|The div with the `id`, `entryHolder` should have three child divs with the ids:<br> **`date`<br> `temp`<br>`content`<br>`Event Listeners`**|
|Adds an event| listener to an existing HTML button from DOM using Vanilla JS. In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.|
|Dynamically Update UI|Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript. Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.<br>Note: Function to GET Project Data:<br> ```  const retrieveData = async () =>{  const request = await fetch('/all');   try {   // Transform into JSON   const allData = await request.json()   console.log(allData)   // Write updated data to DOM elements   document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';   document.getElementById('content').innerHTML = allData.feel;  document.getElementById(""date"").innerHTML =allData.date;   }   atch(error)   console.log(""error"", error);   // appropriately handle the error   ```|




 ># Weather Journal App Solution 
 ># Weather Journal App [*Zip File*](./Project-2-Weather-Journal-App/Weather-Journal-App/Weather-Journal-App-Project-master.zip)
 ># [README](./Project-2-Weather-Journal-App/Weather-Journal-App/README.md)
  

# [GRADUATED](https://confirm.udacity.com/2SUPGAPR)
[![GRADUATED](./images/udacity.jpg)](https://confirm.udacity.com/2SUPGAPR)
