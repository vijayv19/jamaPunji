// Q. What is Node.js ?

// Node.js is an open-source, server side runtime environment built on Chrome's V8 JavaScript
// engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform 
// runtime environment for building highly scalable server-side applications using JavaScript.

//============================================================================================

// What is Node.js Process Model ?
// Node.js runs in a single process and the application code runs in a single thread and 
// thereby needs less resources than other platforms.All the user requests to your web 
// application will be handled by a single thread and all the I/O work or long running job is
// performed asynchronously for a particular request. So, this single thread doesn't have to 
// wait for the request to  complete and is free to handle the next request. 
// When asynchronous I/O work completes then it processes the request further and sends the 
// response.

//=============================================================================================

// What are the data types in Node.js?

// Primitive Types
// String
// Number
// Boolean
// Undefined
// Null
// RegExp
// Buffer: Node.js includes an additional data type called Buffer (not available in browser's 
// JavaScript). Buffer is mainly used to store binary data, while reading from a file or 
// receiving packets over the network

// ===========================================================================================

// How do Node.js works?

// Node is completely event-driven. Basically the server consists of one thread processing 
// one event after another.
// A new request coming in is one kind of event. The server starts processing it and when there 
// is a blocking IO operation, it does not wait until it completes and instead registers a 
// callback function. The server then immediately starts to process another event 
// (maybe another request). When the IO operation is finished, that is another kind of event, 
// and the server will process it (i.e. continue working on the request) by executing the 
// callback as soon as it has time.

// So the server never needs to create additional threads or switch between threads, which 
// means it has very little overhead. If you want to make full use of multiple hardware cores, 
// you just start multiple instances of node.js

// Node JS Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows
// Single Threaded with Event Loop Model. 
// Node JS Processing model mainly based on Javascript Event based model with Javascript 
// callback mechanism.

// Single Threaded Event Loop Model Processing Steps:

// Clients Send request to Web Server.
// Node JS Web Server internally maintains a Limited Thread pool to provide services to the 
// Client Requests.
// Node JS Web Server receives those requests and places them into a Queue. It is known as 
// “Event Queue”.
// Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name 
// is that it uses indefinite loop to receive requests and process them.
// Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
// Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming 
// requests for indefinitely.
// If yes, then pick up one Client Request from Event Queue
// Starts process that Client Request
// If that Client Request Does Not requires any Blocking IO Operations, then process 
// everything, prepare response and send it back to client.

// If that Client Request requires some Blocking IO Operations like interacting with Database,
// File System, External Services then it will follow different approach
// Checks Threads availability from Internal Thread Pool
// Picks up one Thread and assign this Client Request to that thread.
// That Thread is responsible for taking that request, process it, perform Blocking IO 
// operations, prepare response and send it back to the Event Loop
// Event Loop in turn, sends that Response to the respective Client.

// ===========================================================================================

// What is an error-first callback ?

// The pattern used across all the asynchronous methods in Node.js is called Error-first 
// Callback.

//  Here is an example:

// fs.readFile( "file.json", function ( err, data ) {
//   if ( err ) {
//     console.error( err );
//   }
//   console.log( data );
// });


// Any asynchronous method expects one of the arguments to be a callback.
// The full callback argument list depends on the caller method, but the first argument is 
// always an error object or null. When we go for the asynchronous method, an exception thrown 
// during function execution cannot be detected in a try/catch statement. The event happens 
// after the JavaScript engine leaves the try block.

// In the preceding example, if any exception is thrown during the reading of the file, it 
// lands on the callback function as the first and mandatory parameter.

//============================================================================================

// What is callback hell in Node.js?

// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to 
// execute multiple asynchronous operations one after the other.

// An asynchronous function is one where some external activity must complete before a result can 
// be processed; it is “asynchronous” in the sense that there is an unpredictable amount of time 
// before a result becomes available. Such functions require a callback function to handle errors
// and process the result.


// getData(function(a){
//     getMoreData(a, function(b){
//         getMoreData(b, function(c){ 
//             getMoreData(c, function(d){ 
// 	            getMoreData(d, function(e){ 
// 		            ...
// 		        });
// 	        });
//         });
//     });
// });

// Techniques for avoiding callback hell

// Using Async.js
// Using Promises
// Using Async-Await

// Managing callbacks using Async.js
// Async is a really powerful npm module for managing asynchronous nature of JavaScript. 
// Along with Node.js, it also works for JavaScript written for browsers.
// Async provides lots of powerful utilities to work with asynchronous processes under 
// different scenarios.


// npm install --save async

// ASYNC WATERFALL
// var async = require('async');

// async.waterfall([
//     function(callback) {
//         //doSomething
//         callback(null, paramx); //paramx will be availaible as the first parameter to the next function
//         /**
//             The 1st parameter passed in callback.
//             @null or @undefined or @false control moves to the next function
//             in the array
//             if @true or @string the control is immedeatly moved
//             to the final callback fucntion
//             rest of the functions in the array
//             would not be executed
//         */
//     },

//     function(arg1, callback) {
//         // doSomething else
//         // arg1 now equals paramx
//         callback(null, result);
//     },

//     function(arg1, callback) {
//         // do More
//         // arg1 now equals 'result'
//         callback(null, 'done');
//     },

//     function(arg1, callback) {
//         // even more
//         // arg1 now equals 'done'
//         callback(null, 'done');
//     }
// ], function (err, result) {
//     // final callback function
//     // finally do something when all function are done.
//     // result now equals 'done'
// });


// ASYNC SERIES

// var async = require('async');
// async.series([
//     function(callback){
//         // do some stuff ...
//         callback(null, 'one');
//         /**
//             The 1st parameter passed in callback.
//             @null or @undefined or @false control moves to the next function
//             in the array
//             if @true or @string the control is immediately moved
//             to the final callback function with the value of err same as
//             passed over here and
//             rest of the functions in the array
//             would not be executed
//         */
//     },
//     function(callback){
//         // do some more stuff ...
//         callback(null, 'two');
//     }
// ],
// // optional callback
// function(err, results){
//     // results is now equal to ['one', 'two']
// });


// Managing callbacks hell using promises

// Promises are alternative to callbacks while dealing with asynchronous code. 
// Promises return the value of the result or an error exception. The core of the promises is 
// the .then() function, which waits for the promise object to be returned. The .then() 
// function takes two optional functions as arguments and depending on the state of the 
// promise only one will ever be called. The first function is called when the promise if 
// fulfilled (A successful result). The second function is called when the promise is rejected.


// var outputPromise = getInputPromise().then(function (input) {
//     // handle success
// }, function (error) {
//     //handle error
// });

// Using Async Await

// Async await makes asynchronous code look like it’s synchronous.
// This has only been possible 
// Because of the re-introduction of promises into node.js. Async-Await only works with 
// functions that return a promise.


// const getRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 20));
//         }, 1000);
//     });
// }


// const addRandomNumber = async () => {
//     const sum = await getRandomNumber() + await getRandomNumber();
//     console.log(sum);

// }

// addRandomNumber();


//============================================================================================

// What are Promises in Node.js?

// It allows to associate handlers to an asynchronous action's eventual success value or 
// failure reason. This lets asynchronous methods return values like synchronous methods: 
// instead of the final value, the asynchronous method returns a promise for the value at 
// some point in the future.

// Promises in node.js promised to do some work and then had separate callbacks that would be 
// executed for success and failure as well as handling timeouts. Another way to think of 
// promises in node.js was that they were emitters that could emit only two events: success 
// and error.The cool thing about promises is you can combine them into dependency chains 
// (do Promise C only when Promise A and Promise B complete).


// The core idea behind promises is that a promise represents the result of an asynchronous 
// operation. A promise is in one of three different states:

// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation. Once a promise is 
// fulfilled or rejected, it is immutable (i.e. it can never change again).

// Creating a Promise

// var myPromise = new Promise(function(resolve, reject){
//    ....
// })

//============================================================================================

// Q. What tools can be used to assure consistent style?
// ESLint
// Standard
// jshintrc

//============================================================================================

// What is a stub?

// Stubbing and verification for node.js tests. Enables you to validate and override behaviour
// of nested pieces of code such as methods, require() and npm modules or even instances of 
// classes. This library is inspired on node-gently, MockJS and mock-require.

// Features of Stub:

// Produces simple, lightweight Objects capable of extending down their tree 
// Compatible with Nodejs
// Easily extendable directly or through an ExtensionManager
// Comes with predefined, usable extensions
// Stubs are functions/programs that simulate the behaviours of components/modules. Stubs 
// provide canned answers to function calls made during test cases. Also, you can assert on with 
// what these stubs were called.

// A use-case can be a file read, when you do not want to read an actual file:

// var fs = require('fs');

// var readFileStub = sinon.stub(fs, 'readFile', function (path, cb) {  
//   return cb(null, 'filecontent');
// });

// expect(readFileStub).to.be.called;  
// readFileStub.restore();

//============================================================================================

// What is Event loop in Node.js? And How does it work?

// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the 
// fact that JavaScript is single-threaded — by offloading operations to the system kernel 
// whenever possible.

// Node.js is a single-threaded application, but it can support concurrency via the concept of 
// event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they 
// use async function calls to maintain concurrency. Node uses observer pattern. Node thread 
// keeps an event loop and whenever a task gets completed, it fires the corresponding event 
// which signals the event-listener function to execute.

// Event-Driven Programming
// In an event-driven application, there is generally a main loop that listens for events, and 
// then triggers a callback function when one of those events is detected.

// Although events loop quite similar to callbacks, the difference lies in the fact that callback 
// functions are called when an asynchronous function returns its result, whereas event 
// handling works on the observer pattern. The functions that listen to events act as 
// Observers. Whenever an event gets fired, its listener function starts executing. 
// Node.js has multiple in-built events available through events module and EventEmitter 
// class which are used to bind events and event-listeners as follows

// Import events module
// const events = require('events');

// Create an eventEmitter object
// const eventEmitter = new events.EventEmitter();


// Example

// Create an event handler as follows

// var connectHandler = function connected() {
//    console.log('connection succesful.');

//    // Fire the data_received event 
//    eventEmitter.emit('data_received');
// }

// Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });

// Fire the connection event 
// eventEmitter.emit('connection');

// console.log("Program Ended.");

//============================================================================================

// What is REPL? What purpose it is used for?
// REPL (READ, EVAL, PRINT, LOOP) is a computer environment similar to Shell (Unix/Linux) and 
// command prompt. Node comes with the REPL environment when it is installed. System interacts 
// with the user through outputs of commands/expressions used. It is useful in writing and 
// debugging the codes. The work of REPL can be understood from its full form:

// Read: It reads the inputs from users and parses it into JavaScript data structure. It is 
// then stored to memory.
// Eval: The parsed JavaScript data structure is evaluated for the results.
// Print: The result is printed after the evaluation.
// Loop: Loops the input command. To come out of NODE REPL, press ctrl+c twice
// Simple Expression

// $ node
// > 10 + 20
// 30
// > 10 + ( 20 * 30 ) - 40
// 570
// >

//============================================================================================

// What is the difference between Asynchronous and Non-blocking?

// Asynchronous: The architecture of asynchronous explains that the message sent will not give 
// the reply on immediate basis just like we send the mail but do not get the reply on an 
// immediate basis. It does not have any dependency or order. Hence improving the system 
// efficiency and performance. The server stores the information and when the action is done 
// it will be notified.

// Non-Blocking: Nonblocking immediately responses with whatever data available. Moreover, it 
// does not block any execution and keeps on running as per the requests. If an answer could 
// not be retrieved than in those cases API returns immediately with an error. Nonblocking is 
// mostly used with I/O(input/output). Node.js is itself based on nonblocking I/O model. 
// There are few ways of communication that a nonblocking I/O has completed. The callback 
// function is to be called when the operation is completed. Nonblocking call uses the help 
// of javascript which provides a callback function.

// Asynchronous VS Non-Blocking

// Asynchronous does not respond immediately, While Nonblocking responds immediately if the 
// data is available and if not that simply returns an error.
// Asynchronous improves the efficiency by doing the task fast as the response might come 
// later, meanwhile, can do complete other tasks. Nonblocking does not block any execution 
// and if the data is available it retrieves the information quickly.
// Asynchronous is the opposite of synchronous while nonblocking I/O is the opposite of blocking.
// They both are fairly similar but they are also different as asynchronous is used with a 
// broader range of operations while nonblocking is mostly used with I/O.

//==============================================================================================

// What is EventEmitter in Node.js?
// All objects that emit events are members of EventEmitter class. These objects expose an 
// eventEmitter.on() function that allows one or more functions to be attached to named events 
// emitted by the object.

// When the EventEmitter object emits an event, all of the functions attached to that specific 
// event are called synchronously. All values returned by the called listeners are ignored and 
// will be discarded. 

// Example

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// listener #1
// var listner1 = function listner1() {
//    console.log('listner1 executed.');
// }


// listener #2
// var listner2 = function listner2() {
//    console.log('listner2 executed.');
// }


// Bind the connection event with the listner1 function
// eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
// eventEmitter.on('connection', listner2);

// var eventListeners = require('events').EventEmitter.listenerCount
//    (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
// eventEmitter.emit('connection');

// Remove the binding of listner1 function
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 will not listen now.");

// Fire the connection event 
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

// console.log("Program Ended.");
// Now run the main.js

// $ node main.js

// Output

// 2 Listner(s) listening to connection event

// listner1 executed.
// listner2 executed.
// Listner1 will not listen now.
// listner2 executed.
// 1 Listner(s) listening to connection event

// Program Ended.

//==============================================================================================

// How many types of streams are present in node.js?

// Streams are objects that let you read data from a source or write data to a destination in 
// continuous fashion. 

// There are four types of streams

// Readable − Stream which is used for read operation.
// Writable − Stream which is used for write operation.
// Duplex − Stream which can be used for both read and write operation.
// Transform − A type of duplex stream where the output is computed based on input.

// Each type of Stream is an EventEmitter instance and throws several events at different 
// instance of times.


// For example:

// data − This event is fired when there is data is available to read.
// end − This event is fired when there is no more data to read.
// error − This event is fired when there is any error receiving or writing data.
// finish − This event is fired when all the data has been flushed to underlying system.
// Reading from a Stream

// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });


// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");
// Writing to a Stream

// var fs = require("fs");
// var data = 'Simply Easy Learning';

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');

// Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });

// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");

// Piping the Streams
// Piping is a mechanism where we provide the output of one stream as the input to another 
// stream. It is normally used to get data from one stream and to pass the output of that 
// stream to another stream. There is no limit on piping operations.

// var fs = require("fs");

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log("Program Ended");
// Chaining the Streams
// Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.

// var fs = require("fs");
// var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));

// console.log("File Compressed.");

//==============================================================================================

// What is crypto in Node.js? How do you cipher the secure information in Node.js?

// The Node.js Crypto module supports cryptography. It provides cryptographic functionality
// that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify
// functions.
// Hash: A hash is a fixed-length string of bits i.e. procedurally and deterministically 
// generated from some arbitrary block of source data.


// HMAC: HMAC stands for Hash-based Message Authentication Code. It is a process for applying 
// a hash algorithm to both data and a secret key that results in a single final hash.


// Encryption Example using Hash and HMAC

// const crypto = require('crypto');  
// const secret = 'abcdefg';  
// const hash = crypto.createHmac('sha256', secret)  
//                    .update('Welcome to JavaTpoint')  
//                    .digest('hex');  
// console.log(hash);  

// Encryption example using Cipher

// const crypto = require('crypto');  
// const cipher = crypto.createCipher('aes192', 'a password');  
// var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');  
// encrypted += cipher.final('hex');  
// console.log(encrypte d);   

// Decryption example using Decipher

// const crypto = require('crypto');  
// const decipher = crypto.createDecipher('aes192', 'a password');  
// var encrypted = '4ce3b761d58398aed30d5af898a0656a3174d9c7d7502e781e83cf6b9fb836d5';  
// var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
// decrypted += decipher.final('utf8');  
// console.log(decrypted);  

//==============================================================================================

// What is the use of DNS module in Node.js?

// DNS is a node module used to do name resolution facility which is provided by the 
// operating system as well as used to do an actual DNS lookup. No need for memorising IP 
// addresses – DNS servers provide a nifty solution of converting domain or subdomain names 
// to IP addresses. This module provides an asynchronous network wrapper and can be imported 
// using the following syntax.

// Example: dns.lookup() function

// const dns = require('dns');
// dns.lookup('www.google.com', (err, address, family) => {
//     console.log('address:', address);
//     console.log('family:', family);
// });
// Example: resolve4() and reverse() functions


// const dns = require('dns');
// dns.resolve4('www.google.com', (err, addresses) => {
//     if (err) throw err;
//     console.log(`addresses: ${JSON.stringify(addresses)}`);
//     addresses.forEach((a) => {
//         dns.reverse(a, (err, hostnames) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//         });
//     });
// });


// Example: print the localhost name using lookupService() function

// const dns = require('dns');
// dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
//     console.log(hostname, service);
//     // Prints: localhost  
// });

//==============================================================================================

// What are the security mechanisms available in Node.js?
// Using the Helmet module
// Helmet helps to secure your Express applications by setting various HTTP headers, like:

// X-Frame-Options to mitigates clickjacking attacks,
// Strict-Transport-Security to keep your users on HTTPS,
// X-XSS-Protection to prevent reflected XSS attacks,
// X-DNS-Prefetch-Control to disable browsers’ DNS prefetching.

// const express = require('express')
// const helmet = require('helmet')
// const app = express()
// app.use(helmet())


// Validating user input
// Validating user input is one of the most important things to do when it comes to the 
// security of your application. Failing to do it correctly can open up your application and 
// users to a wide range of attacks, including command injection, SQL injection or stored 
// cross-site scripting.
// To validate user input, one of the best libraries you can pick is joi. Joi is an object 
// schema description language and validator for JavaScript objects.

// const Joi = require('joi');

// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     access_token: [Joi.string(), Joi.number()],
//     birthyear: Joi.number().integer().min(1900).max(2013),
//     email: Joi.string().email()
// }).with('username', 'birthyear').without('password', 'access_token')


// Return result

// const result = Joi.validate({
//     username: 'abc',
//     birthyear: 1994
// }, schema)

// result.error === null -> valid

// Securing your Regular Expressions
// Regular Expressions are a great way to manipulate texts and get the parts that you need 
// from them. However, there is an attack vector called Regular Expression Denial of Service
// attack, which exposes the fact that most Regular Expression implementations may reach 
// extreme situations for specially crafted input, that cause them to work extremely slowly.
// The Regular Expressions that can do such a thing are commonly referred as Evil Regexes. 
// These expressions contain: *grouping with repetition, *inside the repeated group: 
// *repetition, or *alternation with overlapping


// Examples of Evil Regular Expressions patterns:

// (a+)+
// ([a-zA-Z]+)*
// (a|aa)+
// Security.txt
// Security.txt defines a standard to help organizations define the process for security 
// researchers to securely disclose security vulnerabilities.
// const express = require('express')
// const securityTxt = require('express-security.txt')

// const app = express()

// app.get('/security.txt', securityTxt({
//   // your security address
//   contact: 'email@example.com',
//   // your pgp key
//   encryption: 'encryption',
//   // if you have a hall of fame for securty resourcers, include the link here
//   acknowledgements: 'http://acknowledgements.example.com'
// }))

//==============================================================================================

// Name the types of API functions in Node.js?

// There are two types of API functions in Node.js:

// Asynchronous, Non-blocking functions
// Synchronous, Blocking functions

// Blocking functions - In a blocking operation, all other code is blocked from executing 
// until an I/O event that is being waited on occurs. Blocking functions execute synchronously. 

// For example:

// const fs = require('fs');
// const data = fs.readFileSync('/file.md'); // blocks here until file is read
// console.log(data);
// // moreWork(); will run after console.log
// The second line of code blocks the execution of additional JavaScript until the entire file is read. moreWork () will only be called after Console.log

// Non-blocking functions - In a non-blocking operation, multiple I/O calls can be performed 
// without the execution of the program being halted. Non-blocking functions execute 
// asynchronously. 

// For example:

// const fs = require('fs');
// fs.readFile('/file.md', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// moreWork(); // will run before console.log

// Since fs.readFile() is non-blocking, moreWork() does not have to wait for the file read to complete before being called. 
// This allows for higher throughput.

//==============================================================================================

// How does Node.js handle child threads?

// Node.js is a single threaded language which in background uses multiple threads to execute 
// asynchronous code. 
// Node.js is non-blocking which means that all functions ( callbacks ) are
// delegated to the event loop and they are ( or can be ) executed by different threads. 
// That is handled by Node.js run-time.

// Nodejs Primary application runs in an event loop, which is in a single thread.
// Background I/O is running in a thread pool that is only accessible to C/C++ or other 
// compiled/native modules and mostly transparent to the JS.
// Node v11/12 now has experimental worker_threads, which is another option.
// Node.js does support forking multiple processes ( which are executed on different cores ).
// It is important to know that state is not shared between master and forked process.
// We can pass messages to forked process ( which is different script ) and to master process 
// from forked process with function send.

//==============================================================================================

// Q. What is the preferred method of resolving unhandled exceptions in Node.js?

// Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler 
// for uncaughtException event.

// process.on('uncaughtException', function(err) {
//     console.log('Caught exception: ' + err);
// });

// Process is a global object that provides information about the current Node.js process. 
// Process is a listener function that is always listening to events.

// Few events are :

// Exit
// disconnect
// unhandledException
// rejectionHandled

//==============================================================================================

// Q. How does Node.js support multi-processor platforms, and does it fully utilize all 
// processor resources?

// Since Node.js is by default a single thread application, it will run on a single processor 
// core and  will not take full advantage of multiple core resources. However, 
// Node.js provides support for deployment on multiple-core systems, to take greater 
// advantage of the hardware. 
// The Cluster module is one of the core Node.js modules and it allows running multiple 
// Node.js worker processes that will share the same port.

// The cluster module helps to spawn new processes on the operating system. Each process works
// independently, so you cannot use shared state between child processes. Each process 
// communicates with the main process by IPC and pass server handles back and forth.

// Cluster supports two types of load distribution:

// The main process listens on a port, accepts new connection and assigns it to a child process 
// in a round robin fashion.

// The main process assigns the port to a child process and child process itself listen the port.

//==============================================================================================

// How Node.js read the content of a file?
// The "normal" way in Node.js is probably to read in the content of a file in a non-blocking, 
// asynchronous way. That is, to tell Node to read in the file, and then to get a callback when the
//  file-reading has been finished. That would allow us to hand several requests in parallel.


// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files
// Read Files
// index.html

// <html>
// <body>
//   <h1>My Header</h1>
//   <p>My paragraph.</p>
// </body>
// </html>
// read_file.js

// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

// Initiate read_file.js:

// C:\>node read_file.js

//==============================================================================================

// What is difference between put and patch?

// PUT and PATCH are HTTP verbs and they both relate to updating a resource. 
// The main difference between PUT and PATCH requests are in the way the server processes 
// the enclosed entity to modify the resource identified by the Request-URI.

// In a PUT request, the enclosed entity is considered to be a modified version of the resource 
// stored on the origin server, and the client is requesting that the stored version be replaced.

// With PATCH, however, the enclosed entity contains a set of instructions describing how a 
// resource currently residing on the origin server should be modified to produce a new version.

// Also, another difference is that when you want to update a resource with PUT request, 
// you have to send the full payload as the request whereas with PATCH, you only send the 
// parameters which you want to update.

// The most commonly used HTTP verbs POST, GET, PUT, DELETE are similar to CRUD 
// (Create, Read, Update and Delete) operations in database. We specify these HTTP verbs in 
// the capital case. So, the below is the comparison between them.

// create - POST read - GET update - PUT delete - DELETE

// PATCH: Submits a partial modification to a resource. If you only need to update one field for 
// the resource, you may want to use the PATCH method.

//================================================================================================

// Since node is a single threaded process, how to make use of all CPUs?

// Node.js is a single threaded language which in background uses multiple threads to execute 
// asynchronous code. Node.js is non-blocking which means that all functions ( callbacks ) are
// delegated to the event loop and they are ( or can be ) executed by different threads. 
// That is handled by Node.js run-time.

// Node.js does support forking multiple processes ( which are executed on different cores ).
// It is important to know that state is not shared between master and forked process.
// We can pass messages to forked process ( which is different script ) and to master process
// from forked process with function send.
// A single instance of Node.js runs in a single thread. To take advantage of multi-core 
// systems, the user will sometimes want to launch a cluster of Node.js processes to handle 
// the load. The cluster module allows easy creation of child processes that all share server ports.

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }
// Running Node.js will now share port 8000 between the workers:

// $ node server.js
// Master 3596 is running
// Worker 4324 started
// Worker 4520 started
// Worker 6056 started
// Worker 5644 started

// The worker processes are spawned using the child_process.fork() method, so that they can 
// communicate with the parent via IPC and pass server handles back and forth.

// The cluster module supports two methods of distributing incoming connections.

// The first one (and the default one on all platforms except Windows), is the round-robin approach, where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.

// The second approach is where the master process creates the listen socket and sends it to 
// interested workers. The workers then accept incoming connections directly.

//=============================================================================================

// Q. What does emitter do and what is dispatcher?

// Node.js core API is based on asynchronous event-driven architecture in which certain kind 
// of objects called emitters periodically emit events that cause listener objects to be 
// called.

// All objects that emit events are members of EventEmitter class. These objects expose an 
// eventEmitter.on() function that allows one or more functions to be attached to named 
// events emitted by the object.

// When the EventEmitter object emits an event, all of the functions attached to that 
// specific event are called synchronously. All values returned by the called listeners are 
// ignored and will be discarded.

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this);
//   // Prints:
//   //   Technoetics Club MyEmitter {
//   //     domain: null,
//   //     _events: { event: [Function] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined }
// });

// myEmitter.emit('event','Technoetics', 'Club');

// Here we create a myEmitter object and emit event at the end which triggers the callback 
// function and we are able to get the desired output.

// By default, all listeners attached to a particular event object are called by the 
// EventListener object synchronously in the order in which they are registered or attached 
// to the event object.

// Dispatcher
// The Dispatcher has functionality not provided nor expected in EventEmitter, the most 
// notable being waitFor, which allows a store to ensure that another store has been updated 
// in response to an action before it proceeds.

// Pattern-wise, the Dispatcher is also a singleton, whereas EventEmitter is an API that you 
// might object-assign onto multiple stores.

//===================================================================================================

// How to kill child processes that spawn their own child processes in Node.js?
// If a child process in Node.js spawn their own child processes, kill() method will 
// not kill the child process’s own child processes. For example, if I start a process that
// starts it’s own child processes via child_process module, killing that child process will
// not make my program to quit.

// var spawn = require('child_process').spawn;
// var child = spawn('my-command');

// child.kill();
// The program above will not quit if my-command spins up some more processes. PID range hack
// We can start child processes with {detached: true} option so those processes will not be 
// attached to main process but they will go to a new group of processes. Then using process.
// kill(-pid) method on main process we can kill all processes that are in the same group of
// a child process with the same pid group. In my case, I only have one processes in this
// group.

// var spawn = require('child_process').spawn;
// var child = spawn('my-command', {detached: true});

// process.kill(-child.pid);
// Please note - before pid. This converts a pid to a group of pids for process kill() method.

//===================================================================================================

// What are the key features of Node.js?

// Asynchronous event driven IO helps concurrent request handling – All APIs of Node.js are 
// asynchronous. This feature means that if a Node receives a request for some Input/Output 
// operation, it will execute that operation in the background and continue with the 
// processing of other requests. Thus it will not wait for the response from the previous 
// requests.

// Fast in Code execution – Node.js uses the V8 JavaScript Runtime engine, the one which is
// used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the 
// runtime engine much faster and hence processing of requests within Node.js also become 
// faster.

// Single Threaded but Highly Scalable – Node.js uses a single thread model for event looping. 
// The response from these events may or may not reach the server immediately. However, this
// does not block other operations. Thus making Node.js highly scalable. Traditional servers 
// create limited threads to handle requests while Node.js creates a single thread that 
// provides service to much larger numbers of such requests.
// Node.js library uses JavaScript – This is another important aspect of Node.js from the 

// developer’s point of view. The majority of developers are already well-versed in JavaScript. 
// Hence, development in Node.js becomes easier for a developer who knows JavaScript.
// There is an Active and vibrant community for the Node.js framework – The active community 
// always keeps the framework updated with the latest trends in the web development.

// No Buffering – Node.js applications never buffer any data. They simply output the data in 
// chunks.

//===================================================================================================

// What are globals in Node.js?
// There are three keywords in Node.js which constitute as Globals. These are Global, Process, and 
// Buffer.

// Global
// The Global keyword represents the global namespace object. It acts as a container for all 
// other objects. If we type console.log(global), 
// it will print out all of them. An important point to note about the global objects is that 
// not all of them are in the global scope, some of them fall in the module scope. 
// So, it’s wise to declare them without using the var keyword or add them to Global object.

// Variables declared using the var keyword become local to the module whereas those declared
// without it get subscribed to the global object.

// Process
// It is also one of the global objects but includes additional functionality to turn a 
// synchronous function into an async callback. There is no boundation to access it from 
// anywhere in the code. It is the instance of the EventEmitter class. And each node 
// application object is an instance of the Process object.
// It primarily gives back the information about the application or the environment.

// <process.execPath> – to get the execution path of the Node app.
// <process.Version> – to get the Node version currently running.
// <process.platform> – to get the server platform.
// Some of the other useful Process methods are as follows.

// <process.memoryUsage> – To know the memory used by Node application.
// <process.NextTick> – To attach a callback function that will get called during the next loop. 
// It can cause a delay in executing a function.
// Buffer
// The Buffer is a class in Node.js to handle binary data. It is similar to a list of integers but 
// stores as a raw memory outside the V8 heap.
// We can convert JavaScript string objects into Buffers. But it requires mentioning the encoding 
// type explicitly.

// <ascii> – Specifies 7-bit ASCII data.
// <utf8> – Represents multibyte encoded Unicode char set.
// <utf16le> – Indicates 2 or 4 bytes, little endian encoded Unicode chars.
// <base64> – Used for Base64 string encoding.
// <hex> – Encodes each byte as two hexadecimal chars.
// Here is the syntax to use the Buffer class.

// var buffer = new Buffer(string, [encoding]);
// The above command will allocate a new buffer holding the string with as the default encoding. However, if you like to write a to an existing buffer object, then use the following line of code.

// buffer.write(string)
// This class also offers other methods like and that allows read/write from various types of data to the buffer.


//===================================================================================================

// It’s an approach to connect the output of one stream to the input of another stream, 
// thus creating a chain of multiple stream operations.

//===================================================================================================


// What is a control flow function? what are the steps does it execute?

// It is a generic piece of code which runs in between several asynchronous function calls is 
// known as control flow function.

// It executes the following steps.

// Control the order of execution.
// Collect data.
// Limit concurrency.
// Call the next step in the program.

//===================================================================================================

// What is npm in Node.js?
// NPM stands for Node Package Manager. It provides following two main functionalities.

// It works as an Online repository for node.js packages/modules which are present at <nodejs.org>.
// It works as Command line utility to install packages, do version management and dependency management of Node.js packages. NPM comes bundled along with Node.js installable. We can verify its version using the following command-
// $ npm --version
// NPM helps to install any Node.js module using the following command.

// $ npm install <Module Name>
// For example, following is the command to install a famous Node.js web framework module 
// called express-

// $ npm install express

//===================================================================================================

// When to use Node.js and when not to use it?
// When to use Node.js

// It’s ideal to use Node.js for developing streaming or event-based real-time applications 
// that require less CPU usage such as :

// * Chat applications.
// * Game servers -- Node.js is good for fast and high-performance servers, 
// that face the need to handle thousands of user requests simultaneously.

// Good For A Collaborative Environment -- It is suitable for environments where multiple 
// people work together. For example, they post their documents, modify them by doing 
// check-out and check-in of these documents. Node.js supports such situations by creating 
// an event loop for every change made to the document. The “Event loop” feature of Node.js 
// enables it to handle multiple events simultaneously without getting blocked.

// Advertisement Servers -- Here again, we have servers that handle thousands of request for 
// downloading advertisements from a central host. And Node.js is an ideal solution to handle
// such tasks.

// Streaming Servers -- Another ideal scenario to use Node.js is for multimedia streaming 
// servers where clients fire request’s towards the server to download different multimedia 
// contents from it.

// To summarize, it’s good to use Node.js, when you need high levels of concurrency but less 
// amount of dedicated CPU time.

// Last but not the least, since Node.js uses JavaScript internally, so it fits best for 
// building client-side applications that also use JavaScript.

// When to not use Node.js
// However, we can use Node.js for a variety of applications. But it is a single threaded 
// framework, so we should not use it for cases where the application requires long 
// processing time. If the server is doing some calculation, it won’t be able to process 
// any other requests. Hence, Node.js is best when processing needs less dedicated CPU time.


//===================================================================================================

// A Node.js application creates a single thread on its invocation. Whenever Node.js receives
// a request, it first completes its processing before moving on to the next request.

// Node.js works asynchronously by using the event loop and callback functions, to handle 
// multiple requests coming in parallel. An Event Loop is a functionality which handles and 
// processes all your external events and just converts them to a callback function. 
// It invokes all the event handlers at a proper time. Thus, lots of work is done on the 
// back-end, while processing a single request, so that the new incoming request doesn’t 
// have to wait if the processing is not complete.


// While processing a request, Node.js attaches a callback function to it and moves it to the
// back-end. Now, whenever its response is ready, an event is called which triggers the 
// associated callback function to send this response.


//===================================================================================================

// Is Node.js entirely based on a single-thread?

// Yes, it’s true that Node.js processes all requests on a single thread. But it’s just a 
// part of the theory behind Node.js design. In fact, more than the single thread mechanism, 
// it makes use of events and callbacks to handle a large no. of requests asynchronously.

// Moreover, Node.js has an optimized design which utilizes both JavaScript and C++ to 
// guarantee maximum performance. JavaScript executes at the server-side by Google Chrome 
// v8 engine. And the C++ lib UV library takes care of the non-sequential I/O via background 
// workers.

// To explain it practically, let’s assume there are 100s of requests lined up in Node.js 
// queue. As per design, the main thread of Node.js event loop will receive all of them and 
// forwards to background workers for execution. Once the workers finish processing requests,
// the registered callbacks get notified on event loop thread to pass the result back to the 
// user.


//===================================================================================================

// How to make post request in Node.js?

// Following code snippet can be used to make a Post Request in Node.js.

// var request = require('request');
//     request.post('http://www.example.com/action', { form: { key: 'value' } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body)
//         }
//     });


//===================================================================================================

// Can you create http server in Node.js, explain the code used for it?
// Yes, we can create HTTP Server in Node.js. We can use the command to do so.

// Following is the sample code.

// var http = require('http');
// var requestListener = function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Welcome Viewers\n');
// }
// var server = http.createServer(requestListener);
// server.listen(4200); // The port where you want to start with.


//===================================================================================================

// How to load html in Node.js?

// To load HTML in Node.js we have to change the “Content-type” in the HTML code from 
// text/plain to text/html. Let’s see an example where we have created a static file in 
// web server.

// fs.readFile(filename, "binary", function(err, file) {
//     if(err) { 
//         response.writeHead(500, {"Content-Type": "text/plain"});
//         response.write(err + "\n");
//         response.end();
//         return;
//     }

// response.writeHead(200);
// response.write(file, "binary");
// response.end();
// });


// Now we will modify this code to load an HTML page instead of plain text.

// fs.readFile(filename, "binary", function(err, file) {
//     if(err) { 
//         response.writeHead(500, {"Content-Type": "text/html"});
//         response.write(err + "\n");
//         response.end();
//         return;
//     }

// response.writeHead(200, {"Content-Type": "text/html"});
// response.write(file);
// response.end();
// });

//===================================================================================================

// Q. How can you listen on port 80 with Node?
// Instead of running on port 80 we can redirect port 80 to your application's port (>1024) 
// using

// iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000

//===================================================================================================

// Q. What is the difference between operational and programmer errors?
// Operation errors are not bugs, but problems with the system, like request timeout or 
// hardware failure. On the other hand programmer errors are actual bugs.


//===================================================================================================
// Q. Why npm shrinkwrap is useful?

// NPM shrinkwrap lets you lock down the ver­sions of installed pack­ages and their descen­dant
// pack­ages. It helps you use same package versions on all environments (development, 
// staging, production) and also improve download and installation speed. Having same 
// versions of packages on all environments can help you test systems and deploy with 
// confidence. If all tests pass on one machine, you can be sure that it will pass on all 
// other because you know that you use same code!


// npm shrinkwrap
// It should create new npm-shrinkwrap.json file with information about all packages you use.

//===================================================================================================

//===================================================================================================

// What are the Challenges with Node.js?
// Challenges with Node.js Application Maintenance
// Improper maintenance of an application can result in issues related to stability or 
// flexibility, often leading to the app’s failure. If the code is not well-written or if
// developers use outdated tools, the performance can suffer, and users might experience more
// bugs and app crashes. On top of that, poor-quality code can hamper the app’s scaling 
// capacity and the further development of the application. In the worst case scenario, 
// it might become impossible to introduce new features without rewriting the codebase from
// scratch.

// Extensive stack
// Technical Debt
// Scalability challanges
// Poor documentation
// How to Deal With Maintenance Problems

// Conduct code review
// Use microservices
// Improve code quality
// Test before new feature implementation
// Improve documentation
// Update the stack
// Dig into the roots

//===================================================================================================

// What is the difference between Node.js vs Ajax?
// AJAX — AJAX stands for Asynchronous Javascript and XML, 
// it’s used to allow web pages (client-side) to update asynchronously by communicating 
// with a web server and by exchanging data. This essentially means that applications can 
// talk to a server in the background of the application. It uses some core components to 
// function:


// The browser’s XMLHttpRequest object to request data from a server

// HTML/CSS to display or collect data
// DOM for dynamic display
// JSON/XML for interchanging the data
// Javascript to unify everything
// Node.js — Node.js allows the developers to develop a web application in a single language 
// called JavaScript for both client side and server side.

// Unlike the other programming languages, Node.js has its cycle of the event in the form of 
// language which is very beneficial for high-performance and scalable application development.

// It is required for those web applications where traffic rate is very high. Node.js is an 
// event based I/O language and its response time is very high rather than the other 
// traditional languages. It is being used by the famous websites like Linked in, 
// Twitter and Gmail.

// The runtime environment of Node.js interprets JavaScript, which is very easy and simple 
// to understand and code. Due to this reason, even the developers find it easy going which 
// keeps them happy and relaxed. It is pertinent for real-time collaborative apps.


//===================================================================================================

// How Node.js overcomes the problem of blocking of I/O operations?

// Node.js solves this problem by putting the event based model at its core, using an event 
// loop instead of threads.

// Node.js uses an event loop for this. An event loop is “an entity that handles and processes
// external events and converts them into callback invocations”. Whenever data is needed 
// nodejs registers a callback and sends the operation to this event loop. Whenever the data 
// is available the callback is called.


//===================================================================================================

// Mention the steps by which you can async in Node.js ?

// ES 2017 introduced Asynchronous functions. 
// Async functions are essentially a cleaner way to work with asynchronous code in JavaScript.

// Async/Await

// The newest way to write asynchronous code in JavaScript.
// It is non blocking (just like promises and callbacks).
// Async/Await was created to simplify the process of working with and writing chained promises.
// Async functions return a Promise. If the function throws an error, the Promise will be 
// rejected. If the function returns a value, the Promise will be resolved.

// Syntax

// Normal Function

// function add(x,y){
//   return x + y;
// }

// Async Function
// async function add(x,y){
//   return x + y;
// }


// Await

// Async functions can make use of the await expression. 
// This will pause the async function and wait for the Promise to resolve prior to moving on.


// Example

// function doubleAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x * 2);
//     }, 2000);
//   });
// }

// async function addAsync(x) {
//   const a = await doubleAfter2Seconds(10);
//   const b = await doubleAfter2Seconds(20);
//   const c = await doubleAfter2Seconds(30);
//   return x + a + b + c;
// }


// addAsync(10).then((sum) => {
//   console.log(sum);
// });


//==============================================================================================

// Q. What are the timing features of Node.js ?

// The Performance Timing API provides an implementation of the W3C Performance Timeline 
// specification. The purpose of the API is to support collection of high resolution 
// performance metrics. This is the same Performance API as implemented in modern Web browsers.


// const { PerformanceObserver, performance } = require('perf_hooks');

// const obs = new PerformanceObserver((items) => {
//   console.log(items.getEntries()[0].duration);
//   performance.clearMarks();
// });

// obs.observe({ entryTypes: ['measure'] });

// performance.mark('A');
// doSomeLongRunningProcess(() => {
//   performance.mark('B');
//   performance.measure('A to B', 'A', 'B');
// });
// request module
// The popular request module has a built-in method to measure HTTP timings. You can enable it with the time property.


// const request = require('request')

// request({
//   uri: 'https://nodejs.org',
//   method: 'GET',
//   time: true
// }, (err, resp) => {
//   console.log(err || resp.timings)
// })


//=============================================================================================

// Q. What is LTS releases of Node.js why should you care?

// An LTS(Long Term Support) version of Node.js receives all the critical bug fixes, security
// updates and performance.

// LTS versions of Node.js are supported for at least 18 months and are indicated by even 
// version numbers (e.g. 4, 6, 8). They’re best for production since the LTS release line is 
// focussed on stability and security, whereas the Current release line has a shorter 
// lifespan and more frequent updates to the code. Changes to LTS versions are limited to bug 
// fixes for stability, security updates, possible npm updates, documentation updates and 
// certain performance improvements that can be demonstrated to not break existing applications.

//=============================================================================================

// Q. Why should you separate Express 'app' and 'server'?

// Keeping the API declaration separated from the network related configuration 
// (port, protocol, etc) allows testing the API in-process, without performing network calls, 
// with all the benefits that it brings to the table: fast testing execution and getting 
// coverage metrics of the code. 
// It also allows deploying the same API under flexible and different network conditions. 
// Bonus: better separation of concerns and cleaner code.


// API declaration, should reside in app.js:

// const app = express();
// app.use(bodyParser.json());
// app.use("/api/events", events.API);
// app.use("/api/forms", forms);

// Server network declaration, should reside in /bin/www:

// const app = require('../app');
// const http = require('http');


// /**
//  * Get port from environment and store in Express.
//  */

// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */

// var server = http.createServer(app);

//=============================================================================================

// Q. What is the difference between process.nextTick() and setImmediate()?

// The difference between process.nextTick() and setImmediate() is that process.nextTick() 
// defers the execution of an action till the next pass around the event loop or it simply 
// calls the callback function once the ongoing execution of the event loop is finished 
// whereas setImmediate() executes a callback on the next cycle of the event loop and it 
// gives back to the event loop for executing any I/O operations.


//=============================================================================================

// Q. What is difference between JavaScript and Node.js?

// BASIS Of Comparison Between JavaScript vs Node JS	JavaScript	Node JS
// Type	JavaScript is a programming language. It running in any web browser with a proper 
// browser engine.	It is an interpreter and environment for JavaScript with some specific 
// useful libraries which JavaScript programming can use separately.
// Utility	Mainly using for any client-side activity for a web application, like possible 
// attribute validation or refreshing the page in a specific interval or provide some dynamic
// changes in web pages without refreshing the page.	
// It mainly used for accessing or performing any non-blocking operation of any operating 
// system, like creating or executing a shell script or accessing any hardware specific 
// information or running any backend job.

// Running Engine JavaScript running any engine like Spider monkey (FireFox), 
// JavaScript Core (Safari), V8 (Google Chrome).	
// Node JS only run in a V8 engine which mainly used by google chrome. 
// And javascript program which will be written under this Node JS will be always run in V8 
// Engine.


//--------------------------------------------------------------------------------------------
// Q. What are the difference between Events and Callbacks?

//--------------------------------------------------------------------------------------------

// Q. Explain RESTful Web Services in Node.js?

//--------------------------------------------------------------------------------------------

// Q. What is the difference between mysql.createConnection() and mysql.createPool() in 
// Node.js MySQL module?


//--------------------------------------------------------------------------------------------

// Q. how to handle file upload in node js?

//--------------------------------------------------------------------------------------------

// Q. Explain the terms body-parser, cookie-parser, debug, jade, morgan, nodemon, pm2, 
// serve-favicon, cors in Express JS?

//--------------------------------------------------------------------------------------------

// Q. How does routing work in Node.js?
// Routing with Express in Node: Express. js has an “app” object corresponding to HTTP. 
// We define the routes by using the methods of this “app” object. This app object specifies 
// a callback function, which is called when a request is received.

// const express = require('express')
// const app = express()

// For GET request use app.get() method:
// app.get('/', function(req, res) {
//     res.send('Hello Sir')
// });


// For POST request use app.post() method:
// app.post('/', function(req, res) {
//     res.send('Hello Sir')
// })

//--------------------------------------------------------------------------------------------

// Q. How Node prevents blocking code?
// By providing callback function. Callback function gets called whenever corresponding event 
// triggered.

//-----------------------------------------------------------------------------------------------

// Q. What is difference between promise and async await in node js?

// await is always for a single Promise . Promise creation starts the execution of 
// asynchronous functionality. await only blocks the code execution within the async function.
// It only makes sure that the next line is executed when the promise resolves.

//=============================================================================================

// Difference b/w map and forEach ? 

// forEach is a method on the Array prototype. It iterates through each element of an array
// and passes it to a callback function.

// The forEach() iterates through the elements in the array. 
// It calls a provided callback function once for each element in the array in ascending order.

// The callback function accepts three arguments:

// value of the element
// index of the element
// array object

// let temp = [1, 14, 200, 9];
// temp.forEach((item, index, a) => {
//     console.log(item, index, a);
//     return temp[index] = item * 3;
// });
// console.log('temp:', temp);


// Array.prototype.map

// The map() method creates a new array with the results of calling a provided function on
// every element in the calling array. map() calls a provided callback function once for each 
// element in an array, in order, and constructs a new array from the results.

// The callback accepts three arguments:

// value of the element
// index of the element
// array object
// You may have used the map() function before. It qualifies as a higher-order function,
// because it takes in a callback function as an input argument.


// let numbers = [1, 4, 9];
// let triples = numbers.map(item => {
//     return item * 3;
// });

// console.log(numbers,triples);

// numbers is still [1, 4, 9]
// triples is [3, 12, 27]


// JavaScript Array filter() Method
// ----------------------------------

// The filter() method creates an array filled with all array elements that pass a test
// (provided as a function).
// Note: filter() does not execute the function for array elements without values.
// Note: filter() does not change the original array.

// const tasks = {
//     tasks: [{
//         text: 'Sell all mobiles',
//         completed: false
//     }, {
//         text: 'Sell all sim',
//         completed: false
//     }, {
//         text: 'Sell all earphones',
//         completed: true
//     }],
//     getTaskToDo() {
//         return this.tasks.filter((task) => task.completed === false)
//     }
// }

// console.log(tasks.getTaskToDo());

//=========================================================================================

// Create a simple server in node.js

// const http = require('http');

// create a server object

// http.createServer((req,res) => {
//     res.write('Hello World!');   // write a response to the client
//     res.end() // end the response
// }).listen(2001) //the server object listens on port 8080

//-----------------------------------------------------------------------------------------------

// What is Lexical Scope

// A lexical scope in JavaScript means that a variable defined outside a function can be 
// accessible inside another function defined after the variable declaration. ... So, the
// add() function is accessing the global variable x which is defined before method function
// add. This is called due to lexical scoping in JavaScript.


// I understand them through examples.

// First, lexical scope (also called static scope), in C-like syntax:

// void fun() {
//     int x = 5;
//     void fun2() {
//         printf("%d", x);
//     }
// }

// Every inner level can access its outer levels.

// There is another way, called dynamic scope used by the first implementation of Lisp, 
// again in a C-like syntax:


// void fun() {
//     printf("%d", x);
// }


// void dummy1() {
//     int x = 5;
//     fun();
// }


// void dummy2() {
//     int x = 10;
//     fun();
// }


// Here fun can either access x in dummy1 or dummy2, or any x in any function that call 
// fun with x declared in it.


// dummy1();
// will print 5,


// dummy2();
// will print 10.


// The first one is called static because it can be deduced at compile-time, 
// and the second is called dynamic because the outer scope is dynamic and depends on the 
// chain call of the functions.

// I find static scoping easier for the eye. Most languages went this way eventually, 
// even Lisp (can do both, right?). Dynamic scoping is like passing references of all 
// variables to the called function.

// As an example of why the compiler can not deduce the outer dynamic scope of a function, 
// consider our last example. If we write something like this:


// if(/* some condition */)
//     dummy1();
// else
//     dummy2();

// The call chain depends on a run time condition. If it is true, then the call chain looks 
// like:

// dummy1 --> fun()
// If the condition is false:

// dummy2 --> fun()
// The outer scope of fun in both cases is the caller plus the caller of the caller and so on.

// Just to mention that the C language does not allow nested functions nor dynamic scoping.

// Call by value
// When a variable is passed as a parameter to a function, if any changes are made to the parameter, the original variable will remain unaffected. This is known as call by value and this is true for all values having a primitive data type.
// Let’s look at an example:

// let original = 10;
// function updateOriginal(originalVal) {
//     originalVal += 10;
//     console.log('originalVal', originalVal);
// }
// updateOriginal(original)
// console.log('original', original);


// The output for the above example is 20,10. So, why didn’t the value for original update at line 3?
// It’s actually easy, think of it as when we pass original to the updateOriginal function, 
// we pass the value directly and not the reference to the value(memory address allocated). 
// Any changes made to the value does not update the actual reference of the original value.


// Call by reference
// When a variable’s reference(address) and not its value is passed to a function’s parameter, 
// any changes made to the parameter will update the original variable reference. 
// This is known as call by reference and this is true for all values having a non-primitive datatype.

// Let’s look at an example:



// let myObj = {
//     value: 10
// }

// function updateValue(objRef) {
//     objRef.value = 20
// }
// updateValue(myObj)
// console.log(myObj.value);

// The output for the above example is 20. So, why did the value in myObj update in line 3?
// Think about an object pointing to a memory address for e.g. 1000 and each property of that object
// pointing to a value.

// myObj -->1000 (memory address location)
// So now when we pass this object as a parameter to a function(updateValue), the parameter points 
// to the same reference.

// objRef -->1000
// When the values of the properties are updated, they are reflected throughout the object’s scope,
// as objects are references. So how can we access the properties and operate on them without 
// updating the object itself?
// The solution is easier than you think, create a copy of the object and operate on it. 
// This is one of the basics of immutable style of programming.



// Event loop Phase
// ----------------

// 1. Timers - Execute setTimeout, setInterval Callbacks.
// 2. Pending Callbacks - Exeuted I/O related callbacks that were deferred.
// 3. Poll - Retrieve new I/O events,execute their callbacks.
// 4. Check - Execute SetImmediate() callbacks 
// 5. Close Callbacks - Execute all 'close' event callbacks.



// Types of Erros 

// 1. Syntax errors
// 2. Runtime errors
// 3. Logical errors


// const names = ['Jason', 'Jedi', 'Tommy', 'Ryan'];

// function jNames(arr) {
//     return arr.filter(name => name.split('')[0] === "J");
// }
// console.log(jNames(names));

// const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
// console.log(camelToSnakeCase('eeGrr'));