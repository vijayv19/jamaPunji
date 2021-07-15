// process.env.UV_THREADPOOL_SIZE = 5;

// const {request} = require("express");


//-------------------------------------------------------------------------------------

// Standard library in Node js ?

// 1.http, 2.fs, 3.path, 4.crypto

//-------------------------------------------------------------------------------------

// Process.binding() Connects JS and C++ functions.

//------------------------------------------------------------------------------------------------

// What is process, thread CPU core ?

// What is Process ?
// ------------------

// Whenever we run programs on our computers we start something called process.
// A process is a instance of computer program that is been executed.
// In single process we can have multiple threads.


// What is thread ?
// A thread is like a todo list that has some number of instructions that need to be executed by CPU of our computer.
// Thread given to the CPU and CPU will attempt to run every instructions on it one by one.
// starting at top and going down.

// What is OS Thread Scheduler ?
// OS Thread scheduler - decides which thread should be processed based on priority.
// Urgent thread don't have to wait too long to executed.

// What is CPU Core ?
// CPU Core : Technically one core can process more that one thread at a time through a process 
// called multithreading/hyperthreading.

// if CPU core executing 2 threads at a time and thread 1 contains read file from HD and thread 2
// contains multiple 3*3 then OS scheduler puts the thread 1 on pause and execute the 2nd thread.
// As soon the thread 2 complete it will go back to thread 1 and start executing.

// ---------------------------------------------------------------------------------------------------

// **Node Event Loop**

// const pendingTimers = [];
// const pendingOSTasks = [];
// const pendingOperations = [];

// function shouldContinue() {

// Check One : Any Pending setTimeout, setInterval, setImmediate?
// Check Two : Any pending operating tasks ? (Like server listening to port e.g: https)
// Check Three : Any pending long running operations? (Like fs module)

//     return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
// }

// Entire body executes in one 'tick'
// Below are the 5 phases of event loop which it gone through

// while (shouldContinue()) {
// 1) Node looks at PendingTimers and sees if any functions are ready to be called.
// 2) Node looks at PendingOSTasks and Pending Operations and calls relevant callbakcs.
// 3) Pause execution. Continue when...
//    - a new pending OS Task is done.
//    - a new pendingOperation is done.
//    - a timer is about to complete.
// 4) Node looks at Pending Timers. Call any setImmediate
// 5) Handle any 'close' events.
// }


// ---------------------------------------------------------------------------------------------------

// Is node js signle threaded ? Let's test it.

// Node js is not truely single threaded because it has libuv library which uses thread pool contains
// 4 threads which gets use for computation intesive task.

// These threads run outside the eventloop.

// Node Event Loop is Single Threaded.
// Some of Node Framework / Standard library does not use single thread.

// Let's take an example where we will going to execute all 4 threads from thread pool at same time.

// pbkdf2 and fs is to be handled and executed by thread pool.


// const crypto = require('crypto');
// const start1 = Date.now();
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('1:', Date.now() - start1);
// });

// const start2 = Date.now();
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('2:', Date.now() - start2);
// });

// const start3 = Date.now();
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('3:', Date.now() - start3);
// });

// const start4 = Date.now();
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('4:', Date.now() - start4);
// });

// const start5 = Date.now();
// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('5:', Date.now() - start5);
// });

// Output :
// 3: 675
// 2: 681
// 1: 681
// 4: 681
// 5: 1264


// If you observe first four result are taking almost same time to execute but 5th result is taking
// almost double time is just because first 4 functions is to be executed by all 4 threads when one
// of the threads gets avaiable 5th function will excuted by one of the thread by thread pool and assign
// it to CPU Core.

//_________________________________________________________________
//             CORE 1                      CORE 2
//________________|__________________________|______________________
//________________|__________________________|_______________________
//                |    OS THREAD SCHEDULER    
// _______________|__________________________|______________________
//________________|__________________________|______________________
//                |           THREAD POOL
//_______________/__\_____________     _____/__\_________________________
//            thead1 thread2          thread3  thread4
//_______________|_______|________      __|_________|______________________
//            PBKDF2    PBKDF2          PBKDF2    PBKDF2   PBKDF2
//_________________________________________________________________

// ---------------------------------------------------------------------------------------------------

// How to change thread pool size ?

// By changing the eviroment variable.

// process.env.UV_THREADPOOL_SIZE = 2;


// ---------------------------------------------------------------------------------------------------

// Common Thread Pool Questions.

// Q1. Can we use threadpool for javascript code or can only nodeJS function use it.
// Ans : We can write custom JS that uses the thread pool.

// Q2 : What functions in node std library use the threadpool ?
// Ans : All 'fs' module functions Some crypto stuff. Depends on OS (windows and unix based)

// Q3 : Hows does this thread pool stuff fit into the event loop.
// Ans : Tasks running in the threadpool are the 'Pending Operations' in our code example.


// ---------------------------------------------------------------------------------------------------

// Explaining OS Operations

// const https = require('https');

// const start = Date.now();

// function doRequest() {
//     https.request('https://www.google.com', res => {
//         res.on('data', () => {});
//         res.on('end', () => {
//             console.log(Date.now() - start);
//         });
//     }).end();

// }

// doRequest(); // 232
// doRequest(); // 245
// doRequest(); // 245
// doRequest(); // 251 
// doRequest(); // 253
// doRequest(); // 253
// doRequest(); // 258

// If you see above all 7 requests are taking almost same time to execute.
// By default thread pool has 4 threads and if these request are being executed by thread pool then there
// might be some difference with 5th functtions call onwards.
// It proves that https request is not being handled by thread pool.

// Neither libuv nor node has any code to handlee super low level operations thar involed to network reqst.
// Insted libuv delegates to undelying operating system.

// So actually it is OS that does real http request.
// Libuv is just use to issue the request and then just it waits to OS to emit the signal.

//-------------------------------------------------------------------------------------------------

// OS/Async Common Questions 

// Q1: What function in node.js std library use the OS's async feature ?
// Ans : Almost eveything around the networking for all OS's.
// Some other stuff is OS Specific.

// Q2 : How does this os async stuff fit into the event loop ?
// Ans : Tasks using the underlying OS are reflected in our 'pendingOSTasks' array.
// (Making reqst, setting listner on port, receiving reqst all comes under pending OS Tasks).

//-------------------------------------------------------------------------------------------------

//                              Diagram for event loop

//                                    node index.js
//                       ____________________|_______________________
//                        Process and execute code in index.js file
//                       ____________________________________________
//                       _____________________|______________________
//                        Do we still have work to do ? Look at      |
//              |----->// timers, OS Tasks, threadpool               | --NO--> Exit program
//              |      //____________________________________________|
//              |      //____________________|__YES__________________
//              |      //       Run setTimeout's, setInterval's
//            Repeat   //____________________________________________
//              |      //____________________|_______________________
//              |      //     Pause and wait for stuff to happen
//              |      //____________________________________________
//              |      //     Pause and wait for stuff to happen
//              |      //____________________________________________
//              |______//          Handle Close events
//                     //____________________________________________

//-------------------------------------------------------------------------------------------------

// const https = require('https');
// const crypto = require('crypto');
// const fs = require('fs');

// const start = Date.now();

// function doRequest() {
//     https.request('https://www.google.com', res => {
//         res.on('data', () => {});
//         res.on('end', () => {
//             console.log(Date.now() - start);
//         });
//     }).end();
// }

// function doHash() {
//     crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//         console.log('hash:', Date.now() - start);
//     });
// }

// doRequest();

// fs.readFile('dsa.js', 'utf8', () => {
//     console.log('FS :', Date.now() - start);
// });

// doHash();
// doHash();
// doHash();
// doHash();

// OUTPUT

// 231
// hash: 741
// FS : 742
// hash: 752
// hash: 840
// hash: 875


// Based on above output https request executed first since we are calling it first.
// Second fs function is executing and 3rd has functions.
// But if you look at 2nd line output is hash and 3rd line is FS and after all 3 hashes are executed.
// Now the question is why FS exeuted after 1 hash it should be excute in second since we are 
// executing right after http reqst.

// Below is explanations for this.

// HTTPS reqst is not involved with thread pool. 

// So all 4 threads will be busy in execution of fs and 3 pbkdf2 functions.
// Now fs will try to interact with hard disk for HD Access and same time 1 thread available to take
// 4th pbkdf2 function. 
// When fs returns back it will wait to execute any of pbkdf2 function.
// lets assume 2d pbkdf2 function executed first and fs will be operated by second thread bcoz it is 
// avaiable now.
// Later fs will request for file content and that time since we dont have any other task thread reamins idle.

//-------------------------------------------------------------------------------------------------

// What is Cluster ?

// Wen we start using cluster inside node application we gonna be starting of multiple node processes
// Or multiple Node Servers.

// There is alaways a parent process called Cluster Manager.
// Cluster manager is responsible for monitoring the health of individual instances of application.
// that we gonna launch on same time in computer.
// Cluster manager can start instnces, can stop them , restart them and any kind of administrative task.


// Cluster runs the multiple node instances in one machine.
// CLuster manager doesn't execute any application code.


// _______________________________________________________________________

// RUN node index.js --> index.js --> Cluster Manager ---> cluster.fork() 
//                         | |                                         |
//                         | |--<-----------------------------<--------|
//                         |                                      
//                      Worker Instances
// _________________________________________________________________________

// In above diagram when we run index.js by requiring its inbuild cluster module first it will 
// produce the cluster manager and to create multiple node worker instances cluster call the fork function.
// As soon it calls cluster.fork() it will go back to index.js and execute it again to create 
// the worker instances.


// Let's check cluster module using code.

// const cluster = require('cluster'); // To use the cluster first require it in module.

// console.log(cluster.isMaster); // In a very first call it will return true after that in each
// // fork.call()  it will return false.
// if (cluster.isMaster) { // In very first when index.js excutes it will return true.
//     cluster.fork(); // It will create 1st node instance by executing index.js from the start.
//     cluster.fork(); // It will create 2nd node instance by executing index.js from the start.
//     // cluster.fork(); // It will create 3rd node instance by executing index.js from the start.
//     // cluster.fork(); // It will create 4th node instance by executing index.js from the start.
// } else {
//     // console.log('Hi'); // When first instace gets created if condition becomes false it will execute 
//                        // the else part and display hi.
//     const loop1 = () => {
//         console.log("Loop 1 :: Start Time :: {}", new Date());
//         for (let i = 0; i < 1000000000; i++) {
//             for (let j = 0; j < 10; j++) {}

//         }
//         console.log("Loop 1 :: End Time :: {}", new Date());
//     };
//     loop1();


//     const loop2 = () => {
//         console.log("Loop 2 :: Start Time :: {}", new Date());
//         for (let i = 0; i < 1000000000; i++) {
//             for (let j = 0; j < 10; j++) {}

//         }
//         console.log("Loop 2 :: End Time :: {}", new Date());
//     };

//     loop2();
// }


// Making too many instances of cluster doesn't mean code execution will be always fast.
// It will depends on your machine CPU Cores.
// Some time making more instances slow down the application.

// What is physical and logical core ?
// If machine is dual core then physical CPU Core is 2.
// Each Core execute 2 threads at a time it means parallely 2 Core can executes 4 threads which says
// 4 logical core.


// const pm2 = require('pm2');


// console.log('dd');

//---------------------------------------------------------------------------------------------------

// What is Cache Memory.

// Let's assume for a weh app we try to find out a blog based on user id so front end (react,angular etc.)
// will interact first with framework later it will pass to mongoose(if we are using in our app) and then it will
// check in cache memory if that record is available in cache memory then it will return the record
// from there otherwise it will find the query in mongodb and along with returning the result it will
// store the result in cache.
// It store the data in the form of key value which is similar to js object.
// Cache memory only works for reading the data and not upate/delete.

//--------------------------------------------------------------------------------------------

// Browser <-- Express App <--- Mongoose|node-redis --> Redis --> MongoDB



// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);

// async function callStat() {
//     const stats = await stat('.');
//     console.log(`This directory is owned by ${stats.uid}`);
// }

// callStat();