// You are given a string containing characters A and B only. Your task is to change it into a
// string such that there are no matching adjacent characters. To do this, you are allowed to 
// delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB  in 2 deletions.

// function alternatingCharacters(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'A' && str[i + 1] == 'A') {
//             count++;
//         } else if (str[i] == 'B' && str[i + 1] == 'B') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(alternatingCharacters('AABAAB'));


// function maximumToys(prices, k) {
//     let sortedArr = prices.sort((a, b) => a - b);
//     let totalSpend = 0,
//         count = 0;

//     for (let i of sortedArr) {
//         totalSpend += i;
//         if (totalSpend > k) {
//             return count
//         } else {
//             count++;
//         }
//     }
// }
// console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 212));


// https://www.hackerrank.com/challenges/library-fine/problem

// Complete the libraryFine function below.

// function libraryFine(d1, m1, y1, d2, m2, y2) {
//     if (y1 < y2) {
//         return Number(0);
//     };
//     if (y1 === y2 && m1 < m2) {
//         return Number(0);
//     };
//     if (y1 === y2 && m1 === m2 && d1 <= d2) {
//         return Number(0);
//     };
//     if (y1 === y2 && m1 === m2 && d1 > d2) {
//         return Number(15 * (d1 - d2));
//     };
//     if (y1 === y2 && m1 > m2) {
//         return Number(500 * (m1 - m2));
//     };
//     if (y1 > y2) {
//         return Number(10000);
//     }
// }

// console.log(libraryFine(28, 2, 2015, 15, 4, 2015));
// console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
// console.log(libraryFine(2, 7, 1014, 1, 1, 1015));


// const request = require("request"),
//     fibonacci = require("fibonacci"),
//     fs = require("fs");

// process.nextTick(() => {
//     process.stdout.write("NT #1\n");
// });

// fs.readFile("./index.js", (err, data) => {
//     process.stdout.write("1: I/O Polling...\n");
// });

// request.get("http://google.com", (err, res, body) => {
//     process.stdout.write("2: System polling...\n")
// })

// setImmediate(() => {
//     process.stdout.write("3: Set Immediate phase...\n");
// });

// setTimeout(() => {
//     process.stdout.write("4: Timers...\n");
// }, 0);

// process.stdout.write("5: Fibonacci(20): " + fibonacci.iterate(20).number + " - Callback\n");

// process.nextTick(() => {
//     process.stdout.write("NT #2\n");
// })

// var a = {
//     name: 'nitin',
//     age: 25,
//     friends: [{
//             name1: 'prajakta'
//         },
//         {
//             name2: 'Abhijit'
//         }
//     ],
//     interset: {
//         games: 'pubg',
//         books: 'ABCS',
//     },
//     DOB: new Date(),
//     active: true
// };


// function findVal(object, key) {
//     let value;
//     Object.keys(object).find(function (k) {
//         if (k === key) {
//             value = object[k];
//             return true;
//         }
//         if (object[k] && typeof object[k] === 'object') {
//             value = findVal(object[k], key);
//             if (value)
//                 return true;
//         }
//     });
//     return value;
// }
// console.log(findVal(a, 'name2'));


let a = [4, 7, 9, 1, 4];

console.log(a.reverse()); // [ 4, 1, 9, 7, 4 ]