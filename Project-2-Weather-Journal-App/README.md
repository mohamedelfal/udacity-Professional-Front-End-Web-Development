# Weather-Journal App Project

## Table of Contents
* [Project Title](#weather-journal-app-project)
* [Table Of Contents](#table-of-contents)
* [Overview](#overview)
* [Instructions](#instructions)
* [Main Idea](#main-idea)
* [Links Used](#links-used)

## Overview
By using the server side `node.js` in the local machine to get data from the server & post data to the server with get & post routes.
Using `APIs` getting data from [openweathermap.org](https://openweathermap.org/) website to get the temperature by entering zip-codes in US.

## Instructions
###### Node and Express Environment
Node and Express installed on the local machine. The project file `server.js` required express(), and created an instance of their app using express.
The Express app instance pointed to the project folder `website`.
###### Project Dependencies
The ‘cors’ package installed in the project from the command line, required in the project file `server.js`, and the instance of the app setup to use cors().
The body-parser package installed and included in the project.
###### Local Server
Local server is running and producing feedback to the Command Line through a working callback function.
Port is set to be 8000.
###### API Credentials
Create API credentials on OpenWeatherMap.com.
The actual API key itself will be different for everyone.
###### APP API Endpoint
There's a JavaScript Object named projectData initiated in the file `server.js` to act as the app API endpoint.
######  Return Endpoint Data (GET Route I: Server Side)
There's a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
######  Return Endpoint Data (GET Route II: Client Side)
There's an asynchronous function to fetch the data from the app endpoint
###### POST Route
Add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
###### Dynamically Update UI
In the file `app.js`, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route

## Main Idea
The user enter a zip-code and the feelings in the text-area and click on the button submit to post data to the server. The client get the data from the server (the data from API call and the feelings that the client entered) to be Updated in the client side.

## Links Used
In the head element of the HTML links attached are `font styles` from google and CSS `style.css` file link for styles

Before the end of the body element in HTML the script file of JavaScript `app.js` for the client side is placed
