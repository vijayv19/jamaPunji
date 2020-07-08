// let 

// let age = 30;
// if (true) {
//     let age = 27
//     console.log(age); // 27
// }
// console.log(age); // 30

//---------------------------------------------------------------------------------------------------
// const 

// const age = 20;
// const AGE = 30;
// const Age = 40;
// const AgE = 42;

// console.log(age);   // 20
// console.log(AGE);   // 30
// console.log(Age);   // 40
// console.log(AgE);   // 42


// const obj = {
//     age: 21
// }

// obj.age = 22;

// console.log(obj); // { age: 22 } -- bcoz of reference type

//------------------------------------------------------------------------------------------------------

// FAT arrow function and 'this' keyword.

// function fn() {
//     console.log(this);
// }
// fn();


// In arrow function passing single argument then we can eliminate parathensis in parameters.

// let fn2 = a => a + 5;
// console.log(fn2(4));


// 1. In browser it will give you window object but here it will be {} object.

// In arrow function if there is one line of code then can write like this

// let fn3 = () => console.log(this);
// fn3();


// Main difference between regular and arrow function when we running it on browser.

// function fn() {
//     console.log(this);  // it will give you HTML Button Element object  
// }

// button.addEventListner('click', fn);

// let fn2 = () => {
//     console.log(this); // here still it will give you window object
// }
// button.addEventListner('click', fn2);

//------------------------------------------------------------------------------------------------------

// Functions and Default Parameters

// assign value to parameter

// function isEqual(number = 10, compare = number) {
//     console.log(number); // 10
//     console.log(compare); // 10
//     return number == compare; // true
// }
// console.log(isEqual());

//-----------------------------------------------------------------------------------------------------

// Object Literal Expression

// let name = "Vijay";
// let age = 25;

// let obj = {
//     name,
//     age,
//     greet() {
//         console.log(this.name + ',' + this.age);
//     }
// };

// obj["greet"](); // Vijay,25
// obj.greet(); // Vijay,25

// console.log(obj); // { name: 'Vijay', age: 25, greet: [Function: greet]}

//------------------------------------------------------------------------------------------------------

// Rest Operator - It converts list of numbers into array of numbers.

// function sumUp(...toAdd) {
//     console.log(toAdd); // [ 100, 2, 30 ]

//     return toAdd.reduce((a, b) => {
//         return a + b;
//     })
// }
// console.log(sumUp(100, 2, 30)); // 132

//-----------------------------------------------------------------------------------------------------

// Spread Operator

// Opposite of rest operator is spread operator but we have to use it in different location.

// let numbers = [1, 2, 3, 4, 5];
// console.log(...numbers);  // converts into list of numbers
// console.log(Math.max(...numbers));


//------------------------------------------------------------------------------------------------

// The for - of loop

// let testResults = [1.23, 1.10, 4.1];

// for (let restResult of testResults) {
//     console.log(restResult);
// }

//----------------------------------------------------------------------------------------------------
// Template Literals

// let name = 'Vijay';

// let description = `Hello, I'm ${name} !!!`

// console.log(description); // Hello, I'm Vijay !!!

//-----------------------------------------------------------------------------------------------------

// Destructuring - Arrays 

// let numbers = [1, 2, 3];

// let [a, c] = numbers;
// console.log(a, c); // 1 2

// let [a, ,b] = numbers;
// console.log(a, b); // 1 3


// let a = 10, b = 20;
// [b, a] = [a, b];
// console.log(a, b); // 20 10

//-----------------------------------------------------------------------------------------------------

// Destructuring - Objects 

// let obj = {
//     name: "vijay",
//     age: 26,
//     greet() {
//         console.log('Hello there!');
//     }
// };

// let { age, name, greet } = obj;

// console.log(name, age); // vijay 26

// greet(); // Hello there!

//-----------------------------------------------------------------------------------------------------

// Inheritance,Class,Prototypes

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet1() {
//         console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
//     }
// }

// Super keyword directly refer to the parent classs which is Person class in this case.

// class Max extends Person {
//     constructor(age) {
//         super('Maxx'); // it passes args to person class
//         this.age = age;
//     }

//     greet() {
//         console.log('Hello');
//     }

//     greetTwice() {
//         this.greet();
//         this.greet();
//         super.greet1();
//         super.greet1();
//     }
// }

// let max = new Max(25);  // Instantiated
// let person = new Person(20); // Instantiated

// max.greet();
// max.greetTwice();

// person.greet1();


// console.log(max.__proto__ === Max.prototype); // true
// console.log(person.__proto__ === Person.prototype); // true
// console.log(max.__proto__ === Person.prototype); // false


//---Static Method---


// class Helper {
//     static logTwice(msg) {
//         console.log(msg);
//         console.log(msg);
//     }
// }

// Helper.logTwice('logged')  // no need to instatiate object

//--------------------------------------------------------------------------------------------------------

// Promises

// const a = Promise.resolve(1);
// const b = Promise.reject(new Error(2));
// const c = Promise.reject(3);

// Promise.all([a, b, c].map(p => p.catch(e => e)))
//     .then(result => console.log(result))
//     .catch(e => console.log(e))


// Promise.all([a, b, c].map(p => p.catch(e => e)))
//     .then(results => console.log('Result',results)) // 1,Error: 2,3
//     .catch(e => console.log('Error', e));


// Resolve

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done');
//     }, 1000);    
// });

// promise.then((value) => {
//     console.log(value);
// });

// Reject

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Failed!');
//     }, 1000);
// });


// promise.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// });


// Chaining Promises

// function waitASec(seconds) {
//     console.log('inside waitASec', seconds);
//     return new Promise((resolve, reject) => {
//         if (seconds > 2) {
//             reject('Rejected')
//         }
//         setTimeout(() => {
//             seconds++
//             resolve(seconds)
//         }, 1000)
//     });
// }

// function waitASec2(seconds) {
//     console.log('inside waitASec2', seconds);
//     return new Promise((resolve, reject) => {
//         if (seconds > 2) {
//             reject('Rejected')
//         }
//         setTimeout(() => {
//             seconds++
//             resolve(seconds)
//         }, 1000)
//     });
// }

// waitASec(1)
//     .then(waitASec2)
//     .then((seconds) => {
//         console.log(seconds);
//     })
//     .catch((err) => {
//         console.log('inside catch', err);
//     })


//--------------------------------------------------------------------------------------------

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done1');
//     }, 0);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('rejcted'));
//     }, 0);
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done3');
//     }, 0);
// });

// Wait until all promises complete even if some rejected

// Promise.all([promise1, promise2, promise3].map(p => p.catch(e => e)))
//     .then(results => console.log('results', results)) // 
//     .catch(e => console.log('error', e));

// OR 

// Promise.all([promise1, promise2, promise3].map(p => p.catch(e => {
//     console.log('error =>', e);
//     return e;
// })))
//     .then(results => console.log('Then', results)) //
//     .catch(e => console.log('e',e));

// OR

// Promise.all([promise1.catch(e => e), promise2.catch(e => e), promise3.catch(e => e)])
//     .then(result => console.log('Then', result)) // Then ["Resolved!", "Rejected!"]
//     .catch(err => console.log('Catch', err));


// ==------------------------------------------

// Promise.all([promise1, promise2, promise3])
//     .then(success => {
//         console.log('inside success', success); // inside success [ 'Done1', 'Done2' ]
//     })
//     .catch(err => {
//         console.log('inside err', err);
//     })


// let p = Promise.all([]); // will be immediately resolved
// let p2 = Promise.all([1337, "hi"]); // non-promise values will be ignored, 
                                       // but the evaluation will be done asynchronously
// console.log('p', p);
// console.log('p2', p2)
// setTimeout(function () {
//     console.log('the stack is now empty');
//     console.log('2nd p2', p2);
// });

// Promise.race

// Promise.race([promise1, promise2])
//     .then((success) => {
//         console.log('inside success', success); // Done2
//     })
//     .catch((err) => {
//         console.log('inside err', err);
//     })

//-------------------------------------------------------------------------------------------

// startsWith  and includes method with case sensitive

// let name = 'Vijay';

// console.log(name.startsWith('Vi')); // true
// console.log(name.startsWith('VI')); // false
// console.log(name.endsWith('ay'));   // true
// console.log(name.endsWith('AY'));   // false

// console.log(name.includes('Vi')); // true
// console.log(name.includes('VI')); // false
// console.log(name.includes('Va')); // false

//-------------------------------------------------------------------------------------------

// let array = [10, 15, 12, 16];
// let newArray = Array.from(array, val => val * 3);

// console.log(array);   // [10, 15, 12, 16]
// console.log(newArray);  // [ 30, 45, 36, 48 ]

// array.fill(100); // [ 100,100, 100, 100 ]
// console.log(array);

// array.fill(100, 0, 2);  // [ 100, 100,12, 16 ]
// console.log(array);


// console.log(array.find(val => val >= 12));  // it will check and return the very first occurence


// let it = array.entries();
// for (e of it) {
//     console.log(e);
// }
// output console [index,value]
// [0, 10]    
// [1, 12]
// [2, 16]


// let array = [[2, 3, 4, 1],
//              [8, 1, 2, 2],
//              [5, 7, 8, 3]
//             ]

// console.log(array.length);   // length of rows => 3
// console.log(array[0].length); // length of columns => 4


// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[0].length; j++) {
//         console.log(array[i][j], '=>', i, j);
//     }
//     console.log('-----------');
// }


// function abc(a, b) {
//     if (b < 1)
//         return 1;
//     return a * abc(a, b - 1)  
// }

// console.log(abc(5, 4));



// Promise.all(promises.map(p => p.catch((err) => { return { err: err, status: "failed" } })))
//     .then(results => {
//         return resolve({ error: null, data: results });
//     })
//     .catch(error => {
//         return reject(error);
//     })
