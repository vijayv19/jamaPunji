// Q. How to create a simple server in Node.js that returns Hello World?

// Step 01: Create a project directory

// cmd> mkdir myapp
// cmd> cd myapp


// Step 02: Initialize project and link it to npm

// npm init

// This creates a package.json file in your myapp folder. The file contains references for 
// all npm packages you have downloaded to your project. The command will prompt you to enter 
// a number of things. You can enter your way through all of them EXCEPT this one:

// entry point: (index.js) 

// Rename this to:
// app.js

// Step 03: Install Express in the myapp directory

// npm install express --save

// Step 04: app.js

// It will create the simple server using express.js

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });


// Step 05: Run the app

// node app.js

//================================================================================================

// Why to use Express.js?

// ExpressJS is a prebuilt NodeJS framework that can help you in creating server-side web 
// applications faster and smarter. Simplicity, minimalism, flexibility, scalability are some 
// of its characteristics and since it is made in NodeJS itself, it inherited its performance 
// as well.


// Express 3.x is a light-weight web application framework to help organize your web 
// application into an MVC architecture on the server side. You can then use a database like 
// MongoDB with Mongoose (for modeling) to provide a backend for your Node.js application. 
// Express.js basically helps you manage everything, from routes, to handling requests and 
// views.

// It has become the standard server framework for node.js. Express is the backend part of 
// something known as the MEAN stack. The MEAN is a free and open-source JavaScript software 
// stack for building dynamic web sites and web applications which has the following components;


// MongoDB - The standard NoSQL database
// Express.js - The default web applications framework
// Angular.js - The JavaScript MVC framework used for web applications
// Node.js - Framework used for scalable server-side and networking applications.
// The Express.js framework makes it very easy to develop an application which can be used to 
// handle multiple types of requests like the GET, PUT, and POST and DELETE requests.


// Using Express

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// const server = app.listen(3000, function () {});

//================================================================================================

// Write the steps for setting up an Express JS application?

// Install Express Generator

// C:\node>npm install -g express-generator

// Create an Express Project

// C:\node>express --view="ejs" nodetest1

// Edit Dependencies

// MAKE SURE TO CD INTO YOUR nodetest FOLDER. OK, now we have some basic structure in there, 
// but we're not quite done. You'll note that the express-generator routine created a file 
// called package.json in your nodetest1 directory. Open this up in a text editor and it'll 
// look like this:


// // C:\node\nodetest1\package.json
// {
//   "name": "nodetest1",
//   "version": "0.0.0",
//   "private": true,
//   "scripts": {
//     "start": "node ./bin/www"
//   },
//   "dependencies": {
//     "cookie-parser": "~1.4.3",
//     "debug": "~2.6.9",
//     "ejs": "~2.5.7",
//     "express": "~4.16.0",
//     "http-errors": "~1.6.2",
//     "morgan": "~1.9.0"
//   }
// }

// This is a basic JSON file describing our app and its dependencies. 
// We need to add a few things to it. Specifically, calls for MongoDB and Monk.


// C:\node\nodetest1>npm install --save monk@^6.0.6 mongodb@^3.1.13
// Install Dependencies

// C:\node\nodetest1>npm install
// C:\node\nodetest1>npm start
// Node Console

// > nodetest1@0.0.0 start C:\node\nodetest1
// > node ./bin/www

//================================================================================================
//  Express Middleware ?

// It lies in between request and response.

// Use of Express Middleware ?

// Middleware functions are functions that have access to the request object (req) and 
// the response object (res), and the next function in the application's request-response cycle. 
// The next function is a function in the Express router which, when invoked, executes the middleware 
// succeeding the current middleware. 

//================================================================================================

// app.use() method allows us to add new middleware function.

// app.use((req,res,next)=>{
//    console.log("In the middleware");
//    next()  => // next function allows to travel into the next middleware function.
// })

// app.use((req,res,next)=>{
//    console.log("In the another middleware");
//    res.send('<h1> Hello from express </h1>')
// })

// app.listen(2000)


//================================================================================================

// What is your favourite HTTP framework and why ?

// Express.js: Express provides a thin layer on top of Node.js with web application features 
// such as basic routing, middleware, template engine and static files serving, so the drastic
// I/O performance of Node.js doesn’t get compromised.

// Express is a minimal, un-opinionated framework. it doesn’t apply any of the prevalent 
// design patterns such as MVC, MVP, MVVM or whatever is trending out of the box. 
// For fans of simplicity, this is a big plus among all other frameworks because you can build
// your application with your own preference and no unnecessary learning curve. 
// This is especially advantageous when creating a new personal project with no historical 
// burden, but as the project or developing team grows, lack of standardization may lead to 
// extra work for project/code management, and worst case scenario it may lead to the 
// inability to maintain.

// Generator
// Even though the framework is un-opinionated, it does have the generator that generates 
// specific project folder structure. After installing express-generator npm package and 
// creating application skeleton with generator command, an application folder with clear 
// hierarchy will be created to help you organize images, front-end static JavaScript, 
// stylesheet files and HTML template files.

// npm install express-generator -g
// express helloapp
// Middleware
// Middleware are basically just functions that have full access to both request and response objects.

// var app = express();

// app.use(cookieParser());
// app.use(bodyParser());
// app.use(logger());
// app.use(authentication());

// app.get('/', function (req, res) {
//   // ...
// });

// app.listen(3000);

// An Express application is essentially Node.js with a host of middleware functions, whether 
// you want to customize your own middleware or take advantage of the built-in middlewares of
// the framework, Express made the process natural and intuitive.

// Template Engine
// Template engines allow developer to embed backend variables into HTML files, and when 
// requested the template file will be rendered to plain HTML format with the variables 
// interpolated with their actual values. By default, the express-generator uses Pug 
// (originally known as Jade) template engine, but other options like Mustache and EJS 
// also work with Express seamlessly.

// Database Integration
// As a minimal framework, Express does not consider database integration as a required 
// aspect within its package, thus it leans toward no specific database usage whatsoever. 
// While adopting a particular data storage technology, be it MySQL, MongoDB, PostgreSQL, 
// Redis, ElasticSearch or something else, it’s just a matter of installing the particular 
// npm package as database driver. These third party database drivers do not confirm to 
// unified syntax when doing CRUD instructions, which makes switching databases a big hassle 
// and error prone.


//=====================================================================================================