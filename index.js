// var A = {
//     // Inside arrow function {this} keyword can't use since it always give empty output.
//     x: () => {
//         console.log('x');        
//         return A;
//     },
//     y: () => {
//         console.log('y');
//         return A;
//     },
//     z: () => {
//         console.log('z');
//         return A;
//     }
// }

// A.x().y().z();

//---------------------------------------------------------------------------------------------------

// Recursion function with stack memory.

// function foo(n) {
//     if (n < 1) {
//         return;
//     }
//     else {
//         foo(n - 1)   // foo(3-1), foo(2-1), foo(1-1) - it will push in stack and pop when needed
//         console.log('Hello', n);
//     }
// }

// foo(3);   // Hello 1
// Hello 2
// Hello 3

//----------------------------------------------------------------------------------------------------

// console.log(Math.floor(1.9999999));  // 1
// console.log(Math.trunc(-1.211));  // -1
// console.log(Math.ceil(-2.25));  // -2
// console.log(Math.ceil(2.25));  // 3

// //Always gives positive number
// console.log(Math.abs(-2));  // 2

// console.log(Math.sign(2));   //  1
// console.log(Math.sign(-2));  // -1

//------------------------------------------------------------------------------------------------

// let arr = [5, 2, 8, 2, 6];
// let len = Math.floor(arr.length / 2); // 2
// let len1 = Math.ceil(arr.length / 2); // 3

// let arr2 = arr.splice(2, 2);

// console.log(arr2);  // [ 8, 2 ]
// console.log(arr);   // [5,2,6]

//------------------------------------------------------------------------------------------------

// console.log(typeof(NaN)); // number

// console.log(NaN == NaN);  // false
// console.log(NaN === NaN); // false

// console.log(typeof (NaN) === typeof (NaN)); // true

//-------------------------------------------------------------------------------------------------

// Internally sort method use compare function in JS.

// const arr = [1, 2, 15, 22, 2, 30, 5, 45, 7];
// console.log(arr.sort((a, b) => {
//     return a - b;  // [1, 2, 2, 5, 7, 15, 22, 30, 45]   -- acending
//     return b - a;  // [45, 30, 22, 15, 7, 5, 2, 2, 1]   -- descending
// }));

//-------------------------------------------------------------------------------------------------

// let number = 10;
// function incrment(number) {
//     number++
//     console.log('Inside function:', number); // Inside function: 11
// }

// incrment(number);
// console.log(number); // 10

//--------------------------------------------------------------------------------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let divBy3 = array.filter(v => {
//     return v % 3 == 0;
// })
// console.log(divBy3);   // [3, 6, 9, 12, 15]

//---------------------------------------------------------------------------------------------------

// NodeJS should NOT be used where computations are CPU intensive.

//---------------------------------------------------------------------------------------------------------

// let fact = (n) => {
//     if (n == 0) {
//         return 1;           // 5 * 24,4 * 6, 3 * 2, 2 * 1,{ 1 {* 1 {= 120
//     }
//     return n * fact(n - 1) // (5 * ?), (4 * ?), (3 * ?), (2 * ?), (1* ?) => it will store in stack memory.
// }
// console.log(fact(5));  // 120

// OR

// function fact(n) {

//     let totalFact = 1;
//     for (let i = 0; i < n - 1; i++) {
//         totalFact *= n - i;
//     }
//     return totalFact;
// }
// console.log(fact(5));  // 120

//-------------------------------------------------------------------------------------------------------

// Splice changes the original array whereas Slice doesn't but both of them returns array object.

// let array = [1, 2, 3, 4, 5];
// console.log(array.splice(2));

// // This will return [3,4,5]. The original array is affected resulting in array being [1,2].

// let array = [1, 2, 3, 4, 5]
// console.log(array.slice(2));

// This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

//-------------------------------------------------------------------------------------
// a = ['s', 'r', 't', 'y', 'i', 'v'];

// console.log(a.slice(2, 3));   // ['t']
// console.log(a.slice(2));      // ['t','y','i','v']
// console.log(a);               // ['s', 'r', 't', 'y', 'i', 'v']

// console.log(a.splice(2, 3));  // ['t','y','i']
// console.log(a.splice(2));     // [ 't', 'y', 'i', 'v' ]
// console.log(a);               // [ 's', 'r' ]

// substring(start, end)
// substr(start, length)

// var str = "Apple, Banana, Kiwiii";
// console.log(str.substring(7, 13)); // Banana
// console.log(str.substring(8)); // anana, Kiwiii

//it takes index, length
// console.log(str.substr(7, 13)); // Banana, Kiwii
// console.log(str.substr(7));    // Banana, Kiwiii
// console.log(str.substr(-4));     // wiii

//---------------------------------------------------------------------------------------------------

// let findIndex = (n) => {
//     let a = [5, 9, 2, 56, 9];
//     let len = a.length;
//     let index = null;
//     for (let i = 0; i < len; i++) {
//         if (a[i] === n) {
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(findIndex(56)); // 3

//-------------------------------------------------------------------------------------------------------

// let insertValIn1D = (v, l) => {
//     let arr = [10, 20, 30, 40];

//     if (l > (arr.length - 1){) {
//         arr[l] = v;
//     }
//     else {
//         // arr[l] = v;
//         return `location is occupied`;
//     }
//     return arr;
// }
// console.log(insertValIn1D(32, 7)); // [ 10, 20, 30, 40, <2 empty items>, 32 ]

// Time complexity = O(1){
// Space complexity = O(1){

//-------------------------------------------------------------------------------------------------

// let findBiggestSmallestNumber = (arr) => {
//     let bigNo = arr[0]; //............................ O(1){
//     let smallNo = arr[0];
//     let len = arr.length;
//     for (let i = 1;{ i < len; i++) {    //.......O(n) }
//         if (arr[i] > bigNo) {          //....O(1){ }          }.....O(n)
//             bigNo = arr[i];            //....O(1){ }----O(1){  }
//         }
//         if (arr[i] < smallNo) {        //...O(1){ }           }.....O(n)
//             smallNo = arr[i];          //....O(1){ }----O(1){  }
//         }
//     }
//     return {
//         bigNo: bigNo,
//         smallNo: smallNo
//     } //.................................. O(1){
// }

// console.log(findBiggestSmallestNumber([5, 9, 13, 5]));  // { bigNo: 13, smallNo: 5 }

// Time Comlexity = O(1){ + O(n) + O(1){ ==> O(n)

//---------------------------------------------------------------------------------------------

// Example of fibonacci is -- 0,1,1,2,3,5,8,13,21,34,55..

// let fibo = (n) => {
//     if (n < 1){ {
//         return false
//     }
//     else if (n == 1 || n == 2) {
//         return (n - 1)       // f(2) = 1, f(1) = 0
//     }
//     else {
//         return fibo(n - 1) + fibo(n - 2) //f(6)=f(5)+f(4),f(5)=f(4)+f(3),f(4)= f(3)+f(2),f(3)= f(2)+f(1)
//     }                                   //    5    3 + 2     3    2 + 1     2     1 + 1     1     1 + 0
// }
// console.log(fibo(8));

// fibonacci_series with recursion

// OR

// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[result.length - 1];
//         const b = result[result.length - 2];
//         result.push(a + b);
//     }
//     return result[n];
// }
// console.log(fib(8));


//--------------------------------------------------------------------------------------------------

// let dup = (arr) => {
//     let arrSort = arr.sort();
//     let dup = []
//     let len = arrSort.length;

//     for (let i = 0; i < len - 1;{ i++) {
//         if (arrSort[i + 1] === arrSort[i]) {
//             dup.push(arrSort[i + 1]{)
//         }
//     }
//     return dup;
// }
// console.log(dup([5, 7, 1, 4, 6, 7, 9]));   // [7]

//---------------------------------------------------------------------------------------------------

// let dup = [5, 7, 1, 4, 6, 7, 9];
// let dup1 = [...dup] // copying array
// console.log(dup1);

//---------------------------------------------------------------------------------------------------

// let count = (param, string) => {    
//     let len = string.length;
//     let count = 0
//     for (let i = 0; i < len; i++) {
//         if (param === string[i])
//             count++;
//     }
//     return count;
// }
// console.log(count('p', 'apple'));     // 2

//------------------------------------------------------------------------------------------------------

// let max = Math.max(...[4, 8, 1, 2, 3])
// console.log(max);  // 8

//------------------------------------------------------------------------------------------------

// const x = [1,2,3];
// x[-1] = -2;
// console.log(x);                    // [ 1, 2, 3, '-1': -2 ]
// console.log(x[x.indexOf(10000)]);  // -1 => x[-1] => -2

//------------------------------------------------------------------------------------------------

// let isPrime = (n) => {
//     if (n === 2) {
//         return true;
//     }
//     if (n < 2 || !Number.isInteger(n) || !(n % 2)) {
//         return false;
//     }
//     for (let i = 3; i < n; i++ , i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(20)); // false
// console.log(isPrime(7));  // true

//-------------------------------------------------------------------------------------------------

// let a = [1, 2, 5, 4];
// let b = [];

// for (let i of a) {
//     b.push(i)
// }

// b.push(9);

// console.log(b);  // [ 1, 2, 5, 4, 9 ]
// console.log(a);  // [ 1, 2, 5, 4 ]

// console.log(('10' - +0));   // 10
// console.log(('10' + -0));   // 100

//----------------------------------------------------------------------------------------------

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// let obj = {
//     x: 1,
//     y: 2
// }

// console.log(Array.isArray(arrayList)); // true
// console.log(typeof(arrayList));        // object

//-----------------------------------------------------------------------------------------------

// var trees = ["xyz","xxxx","test","ryan","apple"];
// delete trees[3];
// console.log(trees,trees.length);  // 5 => [ 'xyz', 'xxxx', 'test', <1 {empty item>, 'apple' ] 

//-------------------------------------------------------------------------------------------------

// var fs = require('fs');
// console.log("started \n");
// fs.readFile("index.js", (error, data) => {
//     console.log("myFile.txt says:" + data);
// });
// console.log("finished");


//-------------------------------------------------------------------------------------------------

// The output would be 1.
// The delete operator is used to delete properties from an object or to delete the element from array.
// Here x is not an object but a local variable.
// delete operators don't affect local variables.

// let output = (function (x) {
//     console.log('1st', x);
//     delete x;
//     return x;
// })(1);
// console.log(output); // 1

//----------------------------------------------------------------------------------------------------

// var trees = ["redwood", "bay", "cedar", "oak", "maple"];
// delete trees[3];
// console.log(trees);  // [ 'redwood', 'bay', 'cedar', <1 {empty item>, 'maple' ]

//---------------------------------------------------------------------------------------------------

// var z = 1, y = z = typeof y;
// console.log(y);   // undefined
// console.log(z);   // undefined

//--------------------------------------------------------------------------------------------------

// Curry function

// function mul(x) {
//     console.log(x);
//     return function (y) { // anonymous function 
//         console.log(y);
//         return function (z) { // anonymous function 
//             console.log(z);
//             return x * y * z;
//         };
//     };
// }
// console.log(mul(2)(3)(4));

//----------------------------------------------------------------------------------------------------

// console.log(typeof (Number('12')));  // number


// let n = 8;
// hexString = n.toString(16);
// console.log(hexString); // 8

//-------------------------------------------------------------------------------------------------

// function countMaxNo() {
//     let x = [1, 4, 1, 2, 2, 4, 2, 4];
//     let num = Math.max(...x);
//     let c = 0;
//     let len = x.length;
//     for (let i = 0; i < len; i++) {
//         if (x[i] == num) {
//             c++;
//         }
//     }
//     return c;
// }
// console.log(countMaxNo());  // 3

//--------------------------------------------------------------------------------------------------

// function reduce1() {
//     let arr = [1, 0, 8, -4, 7];

//     let sum = arr.reduce((a, e) => {
//         return (a + e);
//     })
//     return sum
// }
// console.log(reduce1()); // 12

//----------------------------------------------------------------------------------------------------

// let isPalindrom = (a) => {
//     let b = a.split('').reverse().join('');
//     if (a == b) {
//         return true;
//     }
//     return false;
// }
// console.log(isPalindrom('level')); // true

// ++++++++++++++++++++++++++++++++++=

// function palindrome(str) {
//     console.log(str.split(''));

//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1]{
//     })
// }

// console.log(palindrome('abcba'));


//---------------------------------------------------------------------------------------------------

// Swap 2 variables

// let a = 1, b = 3;

// [a, b] = [b, a];

// OR

// let b = [a, a = b][0];

// console.log(a, b); // 3 1

//----------------------------------------------------------------------------------------------------

// function replaceWithZero(n) {
//     let str = String(n)
//     let arr = str.split('');
//     let len = arr.length;

//     for (let i = 0; i < len; i++) {
//         if (arr[i] == 0) 
//             arr[i] = 5;
//     }

//     let num = parseInt(arr.join(''));
//     console.log(typeof (num));
//     return num;
// }
// console.log(replaceWithZero(60000543234567));

//---------------------------------------------------------------------------------------

// var colors = ['red', 'green', 'blue'];
// colors.splice(1,{ 0, 'purple');
// console.log(colors);   // ['red','purple', 'green', 'blue'];

//------------------------------------------------------------------------------------------------

// function findMinMax() {
//     const array = [1,{ 2, 3, 4];
//     let minNumber = Math.min(...array);
//     let maxNumber = Math.max(...array);
//     let arraySum = array.reduce((a, b) => a + b)
//     let minSum = arraySum - minNumber
//     let maxSum = arraySum - maxNumber
//     return JSON.stringify({ minSum: minSum, maxSum: maxSum });
// }
// console.log(findMinMax()); // {"minSum":9,"maxSum":6}

//-----------------------------------------------------------------------------------------------

// let findMissNo = () => {
//     let arr = [1, 2, 5, 4];
//     let count = arr.length + 1;{
//     let missNo = null
//     for (let i = 1;{ i <= count; i++) {
//         if (arr.indexOf(i) == -1){ {
//             missNo = i;
//         }
//     }
//     return missNo;
// }
// console.log(findMissNo());

//-----------------------------------------------------------------------------------------------
// ANAGRAMS

// let isAnagram = (a, b) => {
//     let x = a.replace(/[^\w]/g,'').tolowerCase().split('').sort().join('');
//     let y = b.replace(/[^\w]/g,'').tolowerCase().split('').sort().join('');
//     if (x == y) {
//         return true;
//     }
//     return false;
// }
// console.log(isAnagram('awq', 'waq')); // true


//--------------------------------------

// function anagrams(stringA,stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// let buildCharMap = (str) => {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 {|| 1;{
//     }
//     return charMap;
// }

// console.log(anagrams('awq', 'waq')); // true

//--------------------------------------

//---------------------------------------------------------------------------------------------------

// Reverse number 

// function reverseInt(n) {
//     return parseInt(String(n).split('').reverse().join('')) * Math.sign(n);
// }
// console.log(reverseInt(-218)); // -812

//---------------------------------------------------------------------------------------------------
// const string = "Hello There!"

// const arr = [4, 3, 7, 3, 1,{ 8, 3, 9, 7, 3]
// const nums = {};

// for (let num of arr) {
//     if (nums[num]) {
//         nums[num]++;
//     } else {
//         nums[num] = 1;{
//     }
// }

// console.log(nums);

// let max = 0;
// let numss;

// for (let num in nums) {
//     if (nums[num] > max) {
//         console.log('num',num);

//         max = nums[num];
//         numss = num;
//     }
// }
// console.log({ 'max': max, 'num': numss });
// return ({ 'max': max, 'num': numss });

//-------------------------------------------------------------------------------------------------

// let chunk = (arr, size) => {
//     let chunked = [];
//     let index = 0;

//     while (index < arr.length) {
//         chunked.push(arr.slice(index, index + size));
//         index += size;
//     }
//     return chunked;
// }

// console.log(chunk([3, 6, 8, 1,{ 6, 2], 2));

//---------------------------------------------------------------------------------------------------

// Reverse string using recursion

// let reverseString = (Str) => {
//     return Str.split('').reverse().join('');
//     if (Str === "") {
//         return "";
//     }
//     return reverseString(Str.substr(1){) + Str.charAt(0); // ? + h, ? + e, ? + l , ? + l , ? + o
// }
// console.log(reverseString('Hello')); // olleH

//+++++++++++++++

// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         console.log('char :', char);
//         reversed = char + reversed;
//         console.log('reversed', reversed);
//     }
//     return reversed;
// }
// console.log(reverse('hEllo'));

// ++++++++++++++++

// function reverse() {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }
//-------------------------------------------------------------------------------------------------

// traversing 2d array 

// let traverse2Darr = () => {
//     var items = [
//         [1,{ 2, 43],
//         [3, 4, 12],
//         [5, 6, 9],
//         [15, 16, 19]

//     ];
//     let rows = items.length;
//     let cols = items[0].length;
//     // console.log(rows, cols);

//     for (i = 0; i < rows; i++) {
//         for (j = 0; j < cols; j++) {
//             console.log(items[i][j]);
//         }
//     }
// }
// traverse2Darr();

//------------------------------------------------------------------------------------------------


// function countVowel(str) {
//     let count = 0;
//     let len = str.length;
//     let vowels = 'aeiou';

//     for (let i of str) {
//         if (vowels.indexOf(i) !== -1){ {     // or (vowels.includes(i))
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel('Helilou')); // 4

//----------------------------------------------------------------------------------------------------

//Removing duplicate using ES6 new feature called new Set

// let a = [1,{ 2, 15, 2, 1,{ 8];
// let b = [...new Set(a)];
// console.log(b);  // [ 1,{ 2, 15, 8 ]

// OR

// let a = [1,{ 2, 18, 2, 1,{ 5];
// let obj = {};

// for (let i of a) {
//     obj[i] = true;        // Key has to be unique. it won't repeat
// }
// let b = Object.keys(obj);
// console.log(b);      // [ '1'{, '2', '5', '18' ]

//----------------------------------------------------------------------------------------------------

// true = 1 {only for comparison operator 

// let a = [1,{ 2, 15, 2, 1,{ 8];
// let b = [...new Set(a)];
// console.log(b); // [ 1,{ 2, 15, 8 ]


// console.log(2 + '2');        // Concat   '22'
// console.log(2 - '2');        // 0 => Convert String to number

// console.log(5 < 6 < 7); // (5 < 6) => true, true always 1 {=> (1 {< 7)=> true
// console.log(7 > 6 > 5); // (7 > 6) => true, true always 1 {=> (1 {> 5)=> false

// let profile = {
//     name: 'vijay'
// };

// Object.freeze(profile);

// delete profile.name;
// console.log(profile);   // { name: 'vijay' }

// profile.name = 'kiran';
// console.log(profile);   // { name: 'vijay' }


// Object.freeze doesn't allow to add, remove or rename properties from JS.
// Object.seal can't add/remove property it can rename existing property.

// console.log(Math.max());       // -Infinity
// console.log(typeof(null));    // object

//--------------------------------------------------------------------------------------------

// let foo;
// const bar = null;
// console.log(foo == bar);      // true
// console.log(foo === bar);     // false

//----------------------------------------------------------------------------------------------

// function a() {
//     console.log(arguments); // { '0': [ 'hi' ] }
//     return 'Hello';
// }
// let sentence = a`hi`      //`hi` is argument of funtion
// console.log(sentence);    // Hello


// const x = 'constructor';
// console.log(x[x](01));   // 1 {

//-------------------------------------------------------------------------------------------------

// const obj = {
//     a: 1,{
//     b: 2,
//     getA() {
//         console.log(this.a); // 1
//         return this;
//     },
//     getB() {
//         console.log(this.b); // 2
//     }
// }
// obj.getA().getB()

//-----------------------------------------------------------------------------------------------

// Cloning object

// Object.assign will not affect upto one level only hence below example works.

// For deep cloning

// const obj = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// }
// console.log(typeof (obj));  // object

// const clone = JSON.parse(JSON.stringify(obj))   // Deep cloning
// console.log(typeof (clone));  // object

// clone.a.b.c = 2;
// console.log(clone);  // { a: { b: { c: 2 } } }
// console.log(obj);    // { a: { b: { c: 1 {} } }

//--------------------------------------------------------------------------------------------

// const obj = {
//     x: 1,{
//     getX() {
//         // 2. const that = this;
//         const inner = function () {   // 1.{create arrow function, const inner = ()=>{}
//             // 2. console.log(that.x);
//             console.log(this.x);
//         }
//         inner();  // 3. inner.call(this)
//     }
// }
// obj.getX() // undefined

//-------------------------------------------------------------------------------------------------

// To get the output '1'{ we can get it by above 3 points.

// let i = Number.MIN_VALUE;  
// console.log(i);       // 5e-324
// console.log(i * i);   // 0
// console.log(i + i);   // 1
// console.log(i - 1){;   // -1
// console.log(i / i);   // 1

//-------------------------------------------------------------------------------------------------

// console.log([1,{ 2, 3] + [4, 5, 6]); // [1,{2,34,5,6]

// console.log([...[1,{ 2, 3], ...[4, 5, 6]]);  // [1,{2,3,4,5,6]

//-----------------------------------------------------------------------------------------------

// Best way to find out missing no. with best time complexity

// const arr = [12, 3, 4, 5, 14, 6, 7, 8, 1,{ 9, 10, 11, 2, 15, 16] // One no is missing
// let n = arr.length + 1;{
// let total = n * (n + 1){ / 2
// let arrTotal = arr.reduce((a, e) => a + e);

// console.log(total - arrTotal);

//-------------------------------------------------------------------------------------------------

// length of integer in JS is 16.

//----------------------------------------------------------------------------------------------------

// Q. find min and max sum of Array

// let findMinMaxSum = () => {
//     let arr = [1, 2, 3, 4];

//     let maxNumber = Math.max(...arr);
//     let minNumber = Math.min(...arr);

//     let sumArray = arr.reduce((t, i) => t + i);
//     let minSum = sumArray - maxNumber;
//     let maxSum = sumArray - minNumber;

//     return {
//         minSum: minSum,
//         maxSum: maxSum
//     }
// }
// console.log(findMinMaxSum());  // { minSum: 9, maxSum: 6 }

//--------------------------------------------------------------------------------------------------

// const profile = {
//     name: 'vijay',
//     getName: () => { // to get the outpput 'vijay' => getName : function(){}
//         console.log(this);   // {}
//         console.log(this.name);  // undefined
//     }
// }
// profile.getName()   

//------------------------------------------------------------------------------------------------------

// call, apply & bind

// let obj = {
//     num: 2
// }

// let functionName = function (a1, a2, a3) {

// }

// functionName.call(obj,arg1,arg2,arg3); //call will pass each args

// functionName.apply(obj, [arg1, arg2, arg3]); //apply will pass args as array

// let bound = functionName.bind(obj); //1st it will bind function with object

// bound(arg1, arg2, arg3); // It will call by variable passing arguments


// function func(x) {
//     console.log(typeof x, arguments.length);
// }
// func();                 // "undefined"  0
// func(7);                // "number"  1
// func("1"{, "2", "3");   // "string"  3


// setTimeout(function () {
//     console.log('there');
// }, 5000)                // it will console output after 5000 milisecond i.e 5 sec.

//----------------------------------------------------------------------------------------------------

// const a = [1,{2,5,7,9]
// const b = [2,5,7,12,100]

// const c = a.concat(b)

// console.log(c);  // [ 1, 2, 5, 7, 9, 2, 5, 7, 12, 100 ]

//---------------------------------------------------------------------------------------------------

// function cb1() {
//     console.log('Processed in next iteration');
// }
// process.nextTick(cb1);
// console.log('Processed in the first iteration');

// Output :
// 1.Processed in the first iteration
// 2.Processed in next iteration

//----------------------------------------------------------------------------------------------------

// A local variable takes precedence over a global variable with the same name.

// for (var i = 1;{ i <= 9; i++) {
//     setTimeout(() => {
//         console.log('2nd', i);
//         // console.log(i);
//     })
// }
// Output :
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
// 2nd 10
//------------------------------------------------------------------------------------------------

// Example of curry function
// it is a technique to translating one function that takes multiple arguments into a sequence function
// that each take a single argument which is exactly what our triple add function is a sequence of functions 
// that each take in a single argument.

// let tripleAdd = (x) => {
//     return function (y) {
//         return function (z) {
//             return x + y + z
//         }
//     }
// }

// console.log(tripleAdd(10)(20)(30)); // 60


// function quadrupleAdd(num1) {
//     return function (num2) {
//         return function (num3, num4, num5) {
//             console.log(num5);
//             return num1 + num2 + num3 + num4;
//         };
//     };
// }

// console.log(quadrupleAdd(10)(20)(30, 40, 10, 23, 48));

//-------------------------------------------------------------------------------------------------
// const pi = 3.14285714286
// const pi = 22 / 7;       // SyntaxError: Identifier 'pi' has already been declared

//------------------------------------------------------------------------------------------------

// IIFE - Immediately invoked function expession 
// A function that is executed right after it is created

// (function doubleNumber(num) {
//     return num * 2;
//   })(10);

//   (function() {

//     function getTotal(a, b) {
//       return a + b;
//     }

//     var $ = 'currency';

//     if (true) console.log('hello world');

//   })();

//-------------------------------------------------------------------------------------------------

// What is Closure ? 

// Closure is an inner function that has access to the scope of an enclosing function.

// A closure has access to variables in 3 seperate scopes.
// 1. variable in its own scope
// 2. variable in the scope of outer function
// 3. variable in the global scope

// Closure has access to:
// 1.its own parameter
// 2.Parameter of outer function(s)

// const globalVariable = 'global var';

// function outterFunc(param1) {
//   const variable1 = 'var one';

//   function innerFunc(param2) {
//     const variable2 = 'var two';

//     console.log('globalVariable: ', globalVariable);
//     console.log('variable1: ', variable1);
//     console.log('variable2: ', variable2);
//     console.log('param1: ', param1);
//     console.log('param2: ', param2);
//   }

//   innerFunc('param one');
// }

// outterFunc('param two');

//-------------------------------------------------------------------------------------------------------

// What is this keyword ?

// In browser it works as global window object.

// var house = {
//     price: 100000,
//     squareFeet: 2000,
//     owner: 'Taylor',
//     getPricePerSquareFoot: function () {
//         console.log('this=>', this);
//         return this.price / this.squareFeet;
//     }
// };
// console.log('this1==>', this);  // this1==> {}

// console.log(house.price);  // 100000
// console.log(house.getPricePerSquareFoot());  // 50

// If we use this keyword with arrow function

// var house = {
//     price: 100000,
//     squareFeet: 2000,
//     owner: 'Taylor',
//     getPricePerSquareFoot: () => { //if we use arrow function this won't work infact this would be {}(Empty Objet).
//         console.log('this=>', this);  // {}
//         return this.price / this.squareFeet;
//     }
// };

// console.log(house.price);                      //100000
// console.log(house.getPricePerSquareFoot());    // NaN

//---------------------------------------------------------------------------------------------

// Hoisting

// What is variable and function hoisting is in JS ?

// In JS variable and functions are all hoisted to the top of the scope in which they are declared.
// The scope is either global scope or function scope.
// So variable and function hoisting is basically the process in which JS interpreter looks ahead in the codes
// to find all of the variable and function declarations and then hoist those declarations to the top of file.

// tab 1

// console.log(color); // undefined
// var color = "blue";
// console.log(color); // blue

//tab 2

// var color;
// console.log(color);
// color = "blue";
// console.log(color);

//tab 3

// console.log(getProduct(2, 3)); // getProduct is not a function

// function expression

// var getProduct = function (num1, num2) {
//     return num1 * num2;
// };

//  console.log(getProduct(2, 3)); // 6

// Using function declarations instead of function expressions can be very useful in your coding beacuse
// with a function declaration the whole function is hoisted to the top of the file or top of the scope.
//

//tab 4

// console.log(getProduct(2, 3));

// function getProduct(num1, num2) {
//   return num1 * num2;
// }

//tab 5

// var globalVar = 'global';
// (function () {
//     var name = 'Jen';
//     console.log(name);
//     console.log(globalVar);

//     var getAge = function () {
//         console.log('inside getAge');
//         return '30';
//     };

//     function getState() {
//         console.log('inside getState');
//         return 'Delaware';
//     }
// })();


// tab 1

// function getTotal() {
//     console.log(multiplier);
//     console.log(total);
//     let total = 0;

//     for(var i = 0; i < 10; i++) {
//       let valueToAdd = i;
//       var multiplier = 2;
//       total += valueToAdd * multiplier;
//     }
//     return total;
//   }
//   getTotal();


// tab 2

//   function getTotal() {
//     let total;
//     var multiplier;

//     total = 0;

//     for(var i = 0; i < 10; i++) {
//       let valueToAdd;

//       valueToAdd = i;
//       multiplier = 2;
//       total += valueToAdd * multiplier;
//     }

//     return total;
//   }

//   getTotal();

//-----------------------------------------------------------------------------------------------

// for (var i = 0; i < 10; i++) {
//     console.log('i', i);
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// } //  10 10 10 10 10 10 10 10 10 10

//------------------------------------------------------------------------------------------------

// color = 'red';
// var myCar = {
//     color: "Blue",
//     logColor: function () {
//         var self = this;
//         console.log("In logColor - this.color: " + this.color);  // Blue
//         console.log("In logColor - self.color: " + self.color);  // Blue
//         (function () {
//             console.log("In IIFE - this.color: " + this.color);  // undefined-> bcoz of function scope it won't work
// // and here this keyword works as global object
//             console.log("In IIFE - self.color: " + self.color);  //blue
//         })();
//     }
// };

// myCar.logColor();


//--------------------------------------------------------------------------

// in  === & ==  
// 1. comparing number and string then string is converted to number.
// 2. comparing boolean and non boolean then non boolean is converted to boolean.
// 3. comparing object to primitive data type then object is converted to primitive data type.

//--------------------------------------------------------------------------------------------

//Becuase of hoisting using var keyword

// var num = 50;
// function logNumber() {
//                        //-- var num; beacuse of hoisting it works as like this
//     console.log(num);  // undefined
//     var num = 100;
// }

// logNumber();  // undefined


// using same above example with let keyword

// let num = 50;
// function logNumber() {
//     console.log(num);  // ReferenceError: num is not defined
//     let num = 100;
// }
// logNumber();

//---------------------------------------------------------------------------------------------

// Counter function

// function myFunc() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const instanceOne = myFunc();
// console.log('instanceOneFunction', instanceOne);
// const instanceTwo = myFunc();

// console.log('instanceOne: ', instanceOne());  // 1
// console.log('instanceOne: ', instanceOne());  // 2
// console.log('instanceOne: ', instanceOne());  // 3
// console.log('instanceTwo: ', instanceTwo());  // 1
// console.log('instanceTwo: ', instanceTwo());  // 2
// console.log('instanceOne: ', instanceOne());  // 4

//------------------------------------------------------------------------------------------------

// (function () {
//     var x = y = 200;        //here y will work as global variable beacuse it is without var keyword
// })();

// console.log('y: ', y);   // 200
// console.log('x: ', x);   // x is not defined

// (function () {
//     'use strict'
//     var x = y = 200;
// })();
// console.log('y: ', y);   //  y is not defined  -- beacuse of use strict
// console.log('x: ', x);

//-------------------------------------------------------------------------------------------------
//  Event Loop Pahses :

// https://dzone.com/articles/a-word-about-nodejs-event-loop

//------------------------------------------------------------------------------------------------------

// if log 3 has 0 milisecond then why not looged 3 first before logged 4.
// this is because of event loop. event loop is a queue in which all the events are taking place in
// the browser are placed. 
// there events can include click events, AJAX callback, callback functions,set timeout or set interval etc.
// All of these events are pushed into the event loop queue and processed one at a time in the order 
// that they were place in the queue
// as logged 3 is in pushed into event queue bcoz it is inside callback function.

// function logNumbers() {
//     console.log(1){;
//     setTimeout(function () { console.log(2) }, 1000);
//     setTimeout(function () { console.log(3) }, 0);
//     console.log(4);
// }

// logNumbers(); // 1 4 3 2

//-------------------------------------------------------------------------------------------------

// Making an Object

// 1.object literal syntax

// const myBoat = {
//   length: 24,
//   maxSpeed: 45,
//   passengers: 14,
//   getLength: function() {
//     return this.length;
//   }
// }; 


// 2.new keyword & Object constructor

// const student = new Object();

// student.grade = 12;
// student.gradePointAverage = 3.7;
// student.classes = ["English", "Algebra", "Chemistry"];
// student.getClasses = function() {
//   return this.classes;
// };


// 3.constructor function 

// function Car(color, brand, year) {
//     this.color = color;
//     this.brand = brand;
//     this.year = year;
//     // this.getColor = function () {
//     //     return this.color
//     // }
// }

// Car.prototype.getColor = function () {  // constructor has a property called prototype which can holdes bunch of methods
//     return this.color;
// };

// const carlysCar = new Car('blue', 'ferarri', 2015);
// const jimsCar = new Car('red', 'tesla', 2014);

// console.log(carlysCar.getColor()); // blue
// console.log(jimsCar.getColor()); // red

//------------------------------------------------------------------------------------------------------

// console.log(typeof null);  // object
// console.log(typeof undefined); // undefined
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(Array.isArray([]));  // true
// console.log([1,2] instanceof Array);  // true

//-----------------------------------------------------------------------------------------------------

// Use Strict in JS
// Enforcing stricter parsing and error handling in your code.

// example 1
// Prevents use of global variable.

// 'use strict';
// city = 'London';
// console.log(city); // ReferenceError: city is not defined

//----------------------------
// example 2
// 'use strict';
// function myFunc(a, a, b) {
//     console.log(a, a, b); // SyntaxError: Duplicate parameter name not allowed in this context
// }
// myFunc(1, 2, 3);
//----------------------------

// example 3
// 'use strict';
// delete Object.prototype;   // gives error instead of false

//------------------------------------------------------------------------------------------------------

// what is BIND method

// distance = 10000;
// const roadTrip1 = {
//     distance: 3000,
//     getDistance: function (unit) {
//         return this.distance + unit;
//     }
// };

// const roadTrip2 = {
//     distance: 5000
// };

// console.log(roadTrip1.getDistance());  // NaN

// const getTripDistance = roadTrip1.getDistance;
// console.log(getTripDistance(200));     // 10200

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip1);
// console.log(getTripDistance());     // 3000

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip2);
// console.log(getTripDistance()); // 5000

// As per the below example the bind method is:
// Bind method allows to bind a method to certain this(roadTrip2) in context
// and it also allows to define parameters that you want a hold constant as well.

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');  //passing km arguments to unit parameter
// console.log(getTripDistance());  // 5000km

//----------------------------------------------------------------------------------------------------

// const user1 = {
//     name: 'Jordan',
//     age: 28,
// };

// const user2 = {
//     name: 'Jordan',
//     age: 28,
// };

// const user3 = user1;
// console.log(user3 === user1); // true => user1 and user3 is now both referencing the same object.

// Two different objects are never equal to each other
// Because in JS we pass object by reference instead of by value.

// console.log(user1 == user2); //  false
// console.log(user1 === user2); // false

// console.log(JSON.stringify(user1) === JSON.stringify(user2)) // true => JSON.stringify simply turns an objct into a JSON object
// and turns a JSON object into a string 
// console.log(user1 === user1); // true

// console.log([] === []); // false bcoz of call by referece
// console.log(JSON.stringify([]) === JSON.stringify([]));  // true

//-----------------------------------------------------------------------------------------------------

// TASK:

// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// JSON - JavaScript Object Notation
// Lightweight format for transferring data

// JSON is used bcoz:
// 1. It is easy for human to understand
// 2. It is easy for computers to parse and generate

// proper JSON Object

// const myJsonObj = {
//     "myString": "hello world",
//     "myNumber": 12345.6789,
//     "myNull": null,
//     "myBoolean": true,
//     "myArray": [20, 30, "orange"],
//     "myObject": {
//       "name": "Sam",
//       "age": 30
//     }
//   };

//-------------------------------------------------------------------------------------------------------

// Singly or Doubly Invoked Function 

// function getTotal() {
//     var args = Array.prototype.slice.call(arguments); // arguments gives access whatever args pass to funtion
//     // using arguments keyword don't need to define how may args or what args are passed into function.
//     // console.log(args);

//     if (args.length === 2) {
//         return args[0] + args[1]{;
//     }
//     else if (args.length === 1){ {
//         return function (num2) {
//             return args[0] + num2;
//         };
//     }
// }

// console.log(getTotal(10, 20)); // 30
// console.log(getTotal(5, 40));  // 45
// console.log(getTotal(3)(30));  // 33
// console.log(getTotal(8)(12));  // 20

// getTotal(10, 20);  // Singly invoked function
// getTotal(10)(20);  // Double invoked function

//------------------------------------------------------------------------------------------------------

// var x = 10;
// function y() {
//     function x() { }
//     x = 100;
//     return; // No code ever runs after a return statement hit.
//     // function x() { } // Due to hoisting it will declare on top of the function scope
// }
// y();
// console.log(x); // 10

//----------------------------------------------------------------------------------------------------

// What happen when we placed object as a property to another object.

// const a = {};
// const b = { name: 'b' };
// const c = { name: 'c' };

// // In JS key or properties of object can only be string it cannot by any other datatype.hence it cannot be object
// a[b] = 200; // Placing object as property to a object 
// // a['[object Object]'] = 200   // b object as property converting to '[object Object]' is a string property.

// a[c] = 400; 
// // a['[object Object]'] = 400

// console.log(a[b]); // 400
// console.log(a['[object Object]']);

//-----------------------------------------------------------------------------------------------------

// const data1 = 'Jordan Smith';

// const data2 = [].filter.call(data1, function(elem, index) {
//   return index > 6;
// });

// // only use 'read-only' methods: filter, forEach, map, some, every, etc.
// // cannot use: push, pop, splice, shift, reverse, etc.

// console.log(data2); // [ 'S', 'm', 'i', 't', 'h' ]

//---------------------------------------------------------------------------------------------------

// Equivalent Number

// console.log(900.9 === 300.3 * 3); // false
// console.log(typeof (300.3 * 3).toFixed(2)); //  string
// console.log(300.3 * 3);  // 900.9000000000001 // In JS all numbers are IEE 754 floating point numbers
// // because of the way they are binary encoded some decimal numbers cannot be expressed perfectly accuratly
// // console.log(2/3)  // 0.6666666666666666
// console.log(Number((300.3 * 3).toFixed(2))); // 900.9
// console.log(Number((300.3 * 3).toPrecision(12))); // 900.9
// console.log(((300.3 * 10) * 3) / 10); // 900.9

// Array.indexOf
// const myArray = [5];
// const anotherArray = myArray;

// console.log([10, 20, 30, 40, 50].indexOf(30));  // 2
// console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1 {=> Two obect are never be same - pass by reference
// console.log('hello world'.indexOf('o'));  // 4
// console.log([[1], [2], [3], [4]].indexOf([2])); // -1 ==> different array and pass by reference
// console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); // 4 ==> both arrays are refering same address

//-----------------------------------------------------------------------------------------------------

// Curry Function
// tab 1

// function getProduct(num1, num2) {
//   return num1 * num2;
// }

// function getProduct(num1) {
//   return function(num2) {
//     return num1 * num2;
//   };
// }

// getProduct(10)(20);

// tab 2

// function getTravelTime(distance, speed) {
//   return distance / speed;
// }

// function getTravelTime(distance) {
//   return function(speed) {
//     return distance / speed;
//   };
// }

// const travelTimeBosNyc = getTravelTime(400);
// const travelTimeMiamiAtlanta = getTravelTime(600);
// console.log(travelTimeBosNyc(100));  // 4

//--------------------------------------------------------------------------------------------------

// Array Constructor

// var arr1 = [];
// var arr2 = new Array(50);
// var arr3 = new Array(1, 2, "three", 4, "five");
// var arr4 = new Array([1, 2, 3, 4, 5]);

// console.log('arr1: ', arr1); // []
// console.log('arr2: ', arr2); // [ <50 empty items> ]  => aplicable only for number
// //  single argument number -> returns empty array of that length
// console.log('arr3: ', arr3); // [ 1, 2, 'three', 4, 'five' ]
// console.log('arr4: ', arr4); // [ [ 1, 2, 3, 4, 5 ] ]


// var string1 = 'Tampa';
// var string2 = string1;
// string1 = 'Venice';

// console.log(string2); // 'Tampa'

// ////////////////////////////////

// var person1 = {
//     name: 'Alex',
//     age: 30
// };

// var person2 = person1;

// person2.name = 'Kyle';

// console.log(person1); //  { name: 'Kyle', age: 30};

//----------------------------------------------------------------------------------------------------

// const account1 = {
//     name: 'Jen',
//     totalAmount: 5000,
//     deductAmount: function (amount) {   // 200 
//         this.totalAmount -= amount;     // 7500 - 200 = 7300
//         return 'Amount in account: ' + this.totalAmount;
//     },
// };

// const account2 = {
//     name: 'James',
//     totalAmount: 8000,
// };

// const withdrawFromAccount = function (amount) {
//     return account1.deductAmount.bind(account2, amount);
// };

// console.log(withdrawFromAccount(500)()); // Amount in account: 7500
// console.log(withdrawFromAccount(200)()); // Amount in account: 7300

//---------------------------------------------------------------------------------------------------

// const list1 = [1, 2, 3, 4, 5];

// const list2 = list1.slice();
// // OR
// // const list2 = list1.concat([]);

// list1.push(6, 7, 8);

// console.log('List 1: ', list1);  // List 1:  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// console.log('List 2: ', list2);  // List 2:  [ 1, 2, 3, 4, 5 ]

//--------------------------------------------------------------------------------------------------

// console.log("start");
// const interval = setInterval(() => {
//     console.log("setInterval 1");
//     Promise.resolve()
//         .then(() => {
//             console.log("promise 1"{);
//             setImmediate(() => {
//                 console.log("setImmediate 1"{);
//                 Promise.resolve()
//                     .then(() => {
//                         console.log("promise 3");
//                     })
//                     .then(() => {
//                         console.log("promise 4");
//                     })
//                     .then(() => {
//                         clearInterval(interval);
//                     });
//             });
//         })
//         .then(() => {
//             console.log("promise 2");
//         });
// }, 0);

// Both the promise and nextTick are micro task in event loop.

// Promise.resolve().then(() => {
//     console.log('promise 3');
// })
// process.nextTick(() => console.log("processNextTick 1"{))  // micro task

// console.log("end");

// Process.nextTick ?
// The event loop is busy processing the current function code.
// When this operation ends, the JS engine runs all the functions passed to nextTick
// calls during that operation. It's the way we can tell the JS engine to process a function 
// asynchronously (after the current function), but as soon as possible, not queue 


// The major difference between setImmediate and process.nextTick ?  is that
// setImmediate queues its callbacks on the event loop while process.nextTick doesn't.
// Since process.nextTick callbacks execute before going back to the event loop,
// they run before setImmediate callbacks.


// function cbFunc() {
//     console.log('inside cbFunc()', message);
// }
// process.nextTick(() => {
//     cbFunc()
// })
// let message = 'Hello'

//------------------------------------------------------------------------------------------------
// Q. What is pure function ?

// Give the same input will always returns the same output.

// let f_pure = function (input) {
//     let output = input.toUpperCase();
//     return output;
// }

// console.log(f_pure('Some String'));

//------------------------------------------------------------------------------------------------

// Q. What is higher order function ?

// May accept functions as parameters
// Will return a function

// let higher = (f) => {
//     let output = f();
//     return output;
// }

// let x = function () {
//     console.log('x');
//     return function () {
//         console.log('x return value');
//     }
// }
// console.log(higher(x));

//------------------------------------------------------------------------------------------------

// What is a first order function?
// First-order function is a function that doesn’t accept other function as an argument and doesn’t return a function as its return value.

// const firstOrder = () => console.log ('Iam a first order functionn!');

//------------------------------------------------------------------------------------------------

// What is memoization?
// Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

// const memoizAddition = () => {
//   let cache = {};
//  return (value) => {
//   if (value in cache) {
//    console.log('Fetching from cache');
//    return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//   }
//   else {
//    console.log('Calculating result');
//    let result = value + 20;
//    cache[value] = result;
//    return result;
//   }
//  }
// }
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached


//---------------------------------------------------------------------------------------------------

// What are classes in ES6?
// In ES6, Javascript classes are primarily syntactical sugar over JavaScript’s existing prototype-based
// inheritance. For example, the prototype based inheritance written in function expression as below,

// function Bike(model,color) {
//     this.model = model;
//     this.color = color;
// }

// Bike.prototype.getDetails = function() {
//     return this.model+ ' bike has' + this.color+ ' color';
// };

// Whereas ES6 classes can be defined as an alternative

// class Bike{
//   constructor(color, model) {
//     this.color= color;
//     this.model= model;
//   }
// }

//---------------------------------------------------------------------------------------------------

// What is a Cookie?

// A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below,

// document.cookie = "username=John";

// Why do you need a Cookie?
// Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

// When a user visits a web page, user profile can be stored in a cookie.
// Next time the user visits the page, the cookie remembers user profile.

//---------------------------------------------------------------------------------------------------

// What are the differences between cookie, local storage and session storage?
// Below are some of the differences between cookie, local storage and session storage,

//       Feature	                                 Cookie                       	Local storage	                                                        Session storage
// Accessed on client or server side	 Both server-side & client-side             client-side only	client-side only
// Lifetime	                             As configured using Expires option	        until deleted	until tab is closed
// SSL support	                         Supported	                                Not supported	Not supported
// Maximum data size	                 4KB	                                    5 MB	5MB

//---------------------------------------------------------------------------------------------------

// What is the difference between Shallow and Deep copy?
// There are two ways to copy an object,

// Shallow Copy
// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the
//  values in the original object. If any of the fields of the object are references to other objects,
//  just the reference addresses are copied i.e., only the memory address is copied.

//---------------------------------------------------------------------------------------------------
// What paradigm is Javascript?
// JavaScript is a multi-paradigm language, supporting imperative/procedural programming
// , Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented
//  Programming with prototypical inheritance.
//---------------------------------------------------------------------------------------------------

// What is a callback function?
// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function

// function callbackFunction(name) {
//   console.log('Hello ' + name);
// }

// function outerFunction(callback) {
//   let name = prompt('Please enter your name.');
//   callback(name);
// }

// outerFunction(callbackFunction);

// The callbacks are needed because javascript is a event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message.

// function firstFunction(){
//   // Simulate a code delay
//   setTimeout( function(){
//     console.log('First function called');
//   }, 1000 );
// }
// function secondFunction(){
//   console.log('Second function called');
// }
// firstFunction();
// secondFunction();

// Output :
// Second function called
// First function called
//---------------------------------------------------------------------------------------------------

// Difference between module and module.exports ?

// Exports is a reference to modules.exports.
// So, assing properties to the exports object is a neat shortcut if you want to export an object
// from your module:
// You have no choice - exports is not a reference to modules.exports all the time!

// If you assign anything to module.exports, exports is not no longer a reference to it,
// and exports loses all its power.

// module.exports = { a: 'A' };

// exports.b = 'B';
// // module.exports = { c: 'C' };

// console.log(exports === module.exports); // false

// console.log(module) // --> Module {
//    id: '.',
//  exports: { a: 'A' },
//...

//---------------------------------------------------------------------------------------------------

// Libuv has thread pools and thread pools contains 4 threads.
// Node js event loop is single threaded

// 1 core can contains 2 threads in CPU.

// let x = [1, 2, 4, 9, 3]

// for (let i of x) {
//     console.log(i);
// }


// let obj = {
//     attendaces: [{
//         in_time: 1,{
//         out_time: 2
//     }, {
//         in_time: 3,
//         out_time: 4
//     }, {
//         in_time: 5,
//         out_time: 6
//     }]
// }

// let intime = obj.attendaces.shift().in_time;
// let outime = obj.attendaces.pop().out_time;

// console.log(intime, 'Intime', outime, 'Outime');



// Convert Queue from Stack


// function arrSum() {
//     let arr = [1, 2, 3, 4, 10, 11];

//     let sum = 0;
//     for (let i of arr) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(arrSum());  



// 'bootless'

// 'bottles'


// Repeat first non repeating element from a string in a single traversal.

// function firstNonRepeatedCharacter(string) {
//     for (let i = 0; i < string.length; i++) {
//         let c = string.charAt(i);
//         if (string.indexOf(c) == i && string.indexOf(c, i + 1){ == -1){ {
//             return c;
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeatedCharacter('hello there'));


// Calculate the difference between 2 dates.

// function diffDateDays() {
//     const date1 = new Date('6/13/2010');
//     const date2 = new Date('6/30/2010');
//     console.log(date2);

//     const diffTime = date2.getTime() - date1.getTime(); // it will give in miliseconds
//     // 1 second equals to 1000 Miliseconds
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     console.log(diffDays);
// }
// diffDateDays();


//--------------------------------------------------------------------------------------------------

// function timeConversion(time) {
//     var hours = Number(time.match(/^(\d+)/)[1]{);
//     console.log('hours', hours);
//     var minutes = Number(time.match(/:(\d+)/)[1]{);
//     var seconds = Number(time.match(/:(\d+)/)[1]{);

//     console.log('minutes', seconds);
//     var AMPM = time.match(/\s(.*)$/)[1]{;
//     if (AMPM == "PM" && hours < 12) hours = hours + 12;
//     if (AMPM == "AM" && hours == 12) hours = hours - 12;
//     var sHours = hours.toString();
//     var sMinutes = minutes.toString();
//     if (hours < 10) sHours = "0" + sHours;
//     if (minutes < 10) sMinutes = "0" + sMinutes;
//     return (sHours + ":" + sMinutes + ":" + seconds);
// }

// console.log(timeConversion('07:05:45 PM'));

//---------------------------------------------------------------------------------------------------

// Performance of Google chrome vs nodejs (v8)?

// Reasons : In a web browser(Chrome), declaring the variable i outside of any function scope makes
// it global and therefore binds to window object. As a result, running this code in a web browser
// requires repeatedly resolving the property within the heavily populated window namespace in each
// iteration of the for loop.

// In Node.js however, declaring any variable outside of any function’s scope binds it only to the
// module scope (not the window object) which therefore makes it much easier and faster to resolve.
// We will get more or less same execution speed when we wrap the above code in function.

// console.time("Test");
// for (let i = 0; i < 2500000; i += 1) {
//     // loop around
// }
// console.timeEnd("Test");

// Average speed

// Google Chrome - 1518.021ms

// Node.js - 4 ms

//-------------------------------------------------------------------------------------------------


// function powerOfNum(a, b) {
//     console.log(b);

//     if (b < 1){ {
//         return 1;{
//     }
//     return a * powerOfNum(a, (b - 1){); // 3 * (3, ?) * 3 * (3,?)
// }

// console.log(powerOfNum(3, 4));

//-----------------------------------------------------------------------------------------------------

// Merge Sort

// Link : https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

// Merge the two arrays: left and right

// function merge (left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // We will concatenate values into the resultArray in order

//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//         resultArray.push(left[leftIndex]);
//         leftIndex++; // move left array cursor
//       } else {
//         resultArray.push(right[rightIndex]);
//         rightIndex++; // move right array cursor
//       }
//     }
//// We need to concat here because there will be one element remaining from either left OR the right
//     return resultArray
//             .concat(left.slice(leftIndex))
//             .concat(right.slice(rightIndex));
//   }



// function convertNumberToWords(amount) {
//     var words = [];
//     words[0] = '';
//     words[1]{ = 'One';
//     words[2] = 'Two';
//     words[3] = 'Three';
//     words[4] = 'Four';
//     words[5] = 'Five';
//     words[6] = 'Six';
//     words[7] = 'Seven';
//     words[8] = 'Eight';
//     words[9] = 'Nine';
//     words[10] = 'Ten';
//     words[11] = 'Eleven';
//     words[12] = 'Twelve';
//     words[13] = 'Thirteen';
//     words[14] = 'Fourteen';
//     words[15] = 'Fifteen';
//     words[16] = 'Sixteen';
//     words[17] = 'Seventeen';
//     words[18] = 'Eighteen';
//     words[19] = 'Nineteen';
//     words[20] = 'Twenty';
//     words[30] = 'Thirty';
//     words[40] = 'Forty';
//     words[50] = 'Fifty';
//     words[60] = 'Sixty';
//     words[70] = 'Seventy';
//     words[80] = 'Eighty';
//     words[90] = 'Ninety';
//     amount = amount.toString();
//     var atemp = amount.split(".");
//     var number = atemp[0].split(",").join("");
//     var n_length = number.length;
//     var words_string = "";
//     if (n_length <= 9) {
//         var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
//         var received_n_array = new Array();
//         for (var i = 0; i < n_length; i++) {
//             received_n_array[i] = number.substr(i, 1){;
//         }
//         for (var i = 9 - n_length, j = 0; i < 9; i++ , j++) {
//             n_array[i] = received_n_array[j];
//         }
//         for (var i = 0, j = 1;{ i < 9; i++ , j++) {
//             if (i == 0 || i == 2 || i == 4 || i == 7) {
//                 if (n_array[i] == 1){ {
//                     n_array[j] = 10 + parseInt(n_array[j]);
//                     n_array[i] = 0;
//                 }
//             }
//         }
//         value = "";
//         for (var i = 0; i < 9; i++) {
//             if (i == 0 || i == 2 || i == 4 || i == 7) {
//                 value = n_array[i] * 10;
//             } else {
//                 value = n_array[i];
//             }
//             if (value != 0) {
//                 words_string += words[value] + " ";
//             }
//             if ((i == 1 {&& value != 0) || (i == 0 && value != 0 && n_array[i + 1]{ == 0)) {
//                 words_string += "Crores ";
//             }
//             if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1]{ == 0)) {
//                 words_string += "Lakhs ";
//             }
//             if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1]{ == 0)) {
//                 words_string += "Thousand ";
//             }
//             if (i == 6 && value != 0 && (n_array[i + 1]{ != 0 && n_array[i + 2] != 0)) {
//                 words_string += "Hundred ";
//             } else if (i == 6 && value != 0) {
//                 words_string += "Hundred ";
//             }
//         }
//         words_string = words_string.split("  ").join(" ");
//     }
//     if (Number(amount) % 1 {!= 0) {
//         n = (amount + "").split(".");

//         let decimalNum = Number(n[1]{);

//         let decimal_string = convertNumberToWords(decimalNum)
//         console.log('decimal_string', decimal_string);
//         words_string += decimal_string + "Paisa"
//     }
//     return words_string;
// }

// console.log(convertNumberToWords(7842156))


// function maxMin(k, arr) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     console.log(sortedArr);

//     let mySuperK = [];

//     let myArr = [];

//     let len = sortedArr.length;

//     for (let i = 0; i < len - 1;{ i++) {
//         myArr.push({
//             diff: sortedArr[i + 1]{ - sortedArr[i],
//             num: [sortedArr[i], sortedArr[i + 1]{]
//         })
//     }
//     console.log('myArr:', myArr);


//     let subArr = sortedArr.slice(0, k);
//     console.log(subArr);

//     return Math.max(...subArr) - Math.min(...subArr);
// }

// console.log(maxMin(3, [10, 97, 92, 100, 102]));


// console.log(maxMin(8, [6327, 571, 6599, 479, 7897, 9322, 4518, 571, 6677, 7432, 815, 6920, 4329, 4104, 7775, 5708, 7991, 5802, 8619, 6053, 7539,
//     7454, 9000, 3267, 6343, 7165, 4095, 439, 5621, 4095, 153, 1948, 1018, 6752, 8779, 5267, 2426, 9649, 2190, 9103,
//     7081, 3006, 2376, 7762, 3462, 151, 3471, 1453, 2305, 8442]));

// console.log(maxMin(5, [4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948, 2822, 1784,
//     7802, 3142, 9739, 5629, 5413, 7232]));




// console.log(maxMin(3, [97, 100, 102]));

//--------------------------------------------------------------------------------------------------


// Here we will search the dupicate number with O(logn)

// function findDup() {
//     let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//     let len = Math.floor(arr.length / 2);
//     let leftSubArr = arr.slice(0, len);
//     console.log('leftSubArr', leftSubArr);

//     let rightSubArr = arr.slice(len, arr.length)
//     console.log('rightSubArr', rightSubArr);

//     if (leftSubArr[leftSubArr.length - 1] !== len) {
//         for (let i = 0; i < leftSubArr.length; i++) {
//             if (leftSubArr[i] === leftSubArr[i + 1]{) {
//                 return leftSubArr[i]
//             }
//         }
//     }
//     else {
//         for (let i = 0; i < rightSubArr.length; i++) {
//             if (rightSubArr[i] === rightSubArr[i + 1]{) {
//                 return rightSubArr[i]
//             }
//         }
//     }
// }

// console.log(findDup());


// console.log('fist');

// Promise.resolve(() => {
//     console.log('done');
// })
// setTimeout(() => {
//     console.log('second');
// }, 0)

// process.nextTick(() => {
//     console.log('fourth');
// })


// // fn();

// function fn() {
//     console.log('third');
// }


// function sort(array) {
//     let len = array.length;
//     let zeroArr = [];
//     let swapped = false;
//     for (let i = 0; i < len; i++) {
//         if (array[i] === 0) {
//             (array.splice(i, 1));
//             zeroArr.push(array[i])
//         }
//         else {
//             if (array[i] > array[i + 1]) {
//                 array[i + 1] = [array[i], array[i] = array[i + 1]][0]
//                 swapped = true;
//             }
//         }

//     }
//     if (swapped == true) {
//         return sort(array)
//     } else {
//         return [...array, ...zeroArr];
//     }
// }
// console.log(sort([3, 1, 6, 0, 8, 0, 1, 0, 0, 7]));




// function getSecondLargest(nums) {
//     // Complete the function

//     let sortedArr = nums.sort((a, b) => {
//         return a - b;
//     });
//     let distinctArr = [...new Set(sortedArr)];
//     console.log('distinctArr', distinctArr);

//     return distinctArr[distinctArr.length - 2]

// }


// console.log(getSecondLargest([2, 3, 6, 6, 5]));


// function vowelsAndConsonants(s) {
//     let vowels = 'aeiou';
//     let vowStr = '';
//     let len = s.length;
//     let consStr = '';
//     for (let i = 0; i < len; i++) {
//         if (vowels.indexOf(s[i]) !== -1){ {
//             vowStr += s[i];
//         } else {
//             consStr += s[i];
//         }
//     }

//     let finalStr = vowStr + consStr;
//     for (let i of finalStr) {
//         console.log(i);

//     }
// }

// vowelsAndConsonants('javascriptloops');


// let a = [{
//     x: 1,{
//     y: 1
// }, {
//     x: 2,
//     y: 3
// }, {
//     x: 3,
//     y: 3
// }, {
//     x: 5,
//     y: 1
// }, {
//     x: 4,
//     y: 5
// }]

// function getCount() {
//     let count = 0
//     for (let i of a) {
//         console.log(i.x, i.y);
//         if (i.x == i.y)
//             count++
//     }
//     return count;
// }
// console.log(getCount());


// function modifyArray(nums) {
//     let newArr = [];
//     for (let i of nums) {
//         if (i % 2 == 0) {
//             newArr.push(i * 2)
//         } else {
//             newArr.push(i * 3)

//         }
//     }
//     return newArr;
// }            

// console.log(modifyArray([1, 2, 3, 4, 5]));

// function reverseString(s) {
//     try {
//         console.log(s.split('').reverse().join(''));
//     }
//     catch (error) {
//         console.log(error.message);
//         console.log(s);
//     }
// }

// reverseString(Number(1234));

// function isPositive(a) {
//     if (a > 0) {
//         return 'YES';
//     }
//     else if (a == 0) {
//         return "Zero Error";
//     }
//     else if (a < 0) {
//         return "Negative Error";
//     }
// }

// console.log(isPositive(0));



// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//       throw "Parameter is not a number!";
//     }
//   }

//   try {
//     getRectArea(3, 'A');
//   }
//   catch(e) {
//     console.error(e);
//     // expected output: "Parameter is not a number!"
//   }


// function getLetter(s) {
//     // Write your code here

//     if (s[0] == 'a') {
//         return 'A'
//     }
//     else if (s[0] == 'b') {
//         return 'B'
//     }
//     else if ('hjklm'.includes(s[0])) {
//         return 'C'
//     }
//     else if ('npqrstvwxyz'.includes(s[0])) {
//         return 'D'
//     }
// }

// console.log(getLetter(112));

// class Polygon {
//     constructor(arr) {
//         this.arr = arr;
//     }
//     perimeter() {
//         let total = 0;
//         for (let i of this.arr) {
//             total += i;
//         }
//         return total;
//     }
// }

// const rectangle = new Polygon([10, 20, 10, 20]);
// const square = new Polygon([10, 10, 10, 10]);
// const pentagon = new Polygon([10, 20, 30, 40, 43]);

// console.log(rectangle.perimeter());
// console.log(square.perimeter());
// console.log(pentagon.perimeter());




// function getDayOfWeek(date) {
//     var dayOfWeek = new Date(date).getDay();
//     console.log('dayOfWeek', dayOfWeek);

//     return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
// }

// console.log(getDayOfWeek("2013-07-31")); // Wednesday

// console.log(getDayOfWeek("10/11/2009")); // Sunday


// let no = 0;
// function getMaxLessThanK() {
//     let s = [1,{ 2, 3, 4, 5];
//     let len = s.length;
//     len--;
//     let min = s[no]
//     for (let i = min; i < len - 1;{ i++) {
//         console.log(s[i], s[i + 1]{);
//     }
//     no++;
//     return getMaxLessThanK()
// }

// getMaxLessThanK();



// let no1 = (2).toString(2);
// let no2 = (3).toString(2);

// let base10 = parseInt(no1 & no2, 2);

// console.log('base10', base10);


// var foo = {
//     name: "vijay",
//     age: 26,
//     gender: "male",
//     address: "mumbai"
// }

// for (let i in foo) {
//     console.log(i);
// }



// function kangaroo(x1, v1, x2, v2) {
//     if (v2 > v1) {
//         return 'NO'
//     }
//     if (v2 == v1 && x1 < x2) {
//         return 'NO'
//     }
//     if (x1 + v1 == x2 + v2) {
//         return 'YES'
//     }
//     if (x1 + v1 > x2 + v2) {
//         return 'NO'
//     }

//     while (x1 + v1 !== x2 + v2) {
//         x1 += v1, x2 += v2;
//         return kangaroo(x1, v1, x2, v2)
//     }

// }
// console.log(kangaroo(21, 6, 47, 3));

// console.log(kangaroo(43, 2, 70, 2));


// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 2, 5, 3));

// console.log(kangaroo(55, 8223, 5803, 6509));




// function compareTriplets(a, b) {
//     let x = [0, 0]
//     let len = a.length;
//     for (let i = 0; i < len; i++) {
//         if (a[i] > b[i]) {
//             x[0]++
//         }
//         if (a[i] < b[i]) {
//             x[1]{++
//         }
//     } return x

// }

// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));


// function getTotalX(a, b) {
//     let multiples = [];
//     let lastNum = a[a.length - 1]{;
//     while (lastNum <= b[0]) {
//         multiples.push(lastNum);
//         lastNum += a[a.length - 1]{;
//     }
//     let multiples1 = [];

//     for (let i of multiples) {
//         let fail = false;
//         for (let j of a) {
//             if (i % j != 0)
//                 fail = true;

//         }
//         if (fail == false)
//             multiples1.push(i)

//     }

//     let finalMultiple = [];

//     for (let i of multiples1) {
//         let fail = false;
//         for (let j of b) {
//             if (j % i != 0)
//                 fail = true;

//         }
//         if (fail == false)
//             finalMultiple.push(i)

//     }
//     return finalMultiple.length;
// }

// console.log(getTotalX([3, 4], [24, 48]));

// console.log(getTotalX([2, 6], [24, 36]));

// console.log(getTotalX([2, 4], [16, 32, 96]));

// let i = 0;

// function staircase(n) {

//     if (n < 1){ {
//         return;

//     }

//     console.log('#');

//     staircase(n - 1){;
// }

// staircase(4);


// var i, j;
// for (i = 1;{ i <= 5; i++) {
//     for (j = 1;{ j <= i; j++) {

//         console.log('*');
//     }
// }

// function repeatstr(space, n) {
//     let result = "";

//     while (n > 0) {
//         n--;
//         result += space;

//     }

//     // console.log(result + '1'{);

//     return result;
// }

// function generatePyramid(n) {
//     let output = "";
//     for (let i = 1;{ i <= n; i++) {
//         for (let j = 1;{ j <= i; j++) {
//             output += '#';
//         }
//         let op1 = repeatstr(" ", n - i) + output
//         console.log(op1);
//         output = "";
//     }
// }

// generatePyramid(4);

//Output:
//    #
//   ##
//  ###
// ####



// console.log(allPossibleCases([1,{ 2, 3]));


// function birthday(s, d, m) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (m == 1 {&& s[i] == d) {
//             return 1;{
//         }

//     }
//     return count;
// }

// console.log(birthday([1,{ 2, 1,{ 3, 2], 3, 2));

// console.log(birthday([1,{ 1,{ 1,{ 1,{ 1,{1]{, 3, 2));



// function getCombinations(chars) {
//     var result = [];
//     var f = function (prefix, chars) {
//         for (let i = 0; i < chars.length; i++) {
//             result.push(prefix + chars[i]);
//             f(prefix + chars[i], chars.slice(i + 1){);
//         }
//     }
//     f('', chars);
//     console.log('result', result);

//     for (let i of result) {
//         let arr = [];
//         if (i.length == 3) {
//             arr.push(parseInt(i));
//             for (let j of arr)
//                 console.log(j);

//         }
//     }

// }
// console.log(getCombinations([2, 1,{ 4, 2]));

// function bonAppetit(bill, k, b) {

//     bill.splice(k, 1){;

//     let totalCost = 0;

//     for (let i of bill) {
//         totalCost += i;
//     }

//     let actual = parseInt(totalCost / 2);

//     if (b === actual) {
//         console.log('Bon Appetit');
//     } else {
//         console.log(b - actual);

//     }

// }
// bonAppetit([3, 10, 2, 9], 1,{ 12);


// function catAndMouse(x, y, z) {
//     if (Math.abs(z - x) == Math.abs(z - y)) {
//         return "Mouse C"
//     }
//     else {
//         if (Math.abs(z - x) > Math.abs(z - y)) {
//             return "Cat B"
//         }
//         return "Cat A"
//     }
// }


// console.log(catAndMouse(1,{ 3, 2));

// console.log(catAndMouse(1,{ 2, 3));



// function hurdleRace(k, height) {

//     let maxHurdle = Math.max(...height)
//     if (k >= maxHurdle) {
//         console.log(0);
//     }
//     else {
//         console.log(maxHurdle - k);

//     }
// }

// hurdleRace(4, [1,{ 6, 3, 5, 2]);
// hurdleRace(7, [2, 5, 4, 5, 2]);


// function getMoneySpent(keyboards, drives, b) {

//     let sumCost = [];
//     let flag = false;
//     for (let i of keyboards) {
//         for (let j of drives) {
//             if (i + j === b) {
//                 return (b);
//             } else if (i + j < b) {
//                 sumCost.push(i + j);
//                 flag = true;
//             }


//         }
//     }
//     if (flag == false) {
//         return -1;{
//     }
//     return Math.max(...sumCost);

// }

// // console.log(getMoneySpent([3, 1]{, [5, 2, 8], 10));

// console.log(getMoneySpent([3, 6, 4], [5, 1,{ 9], 5));


// function permutationEquation(p) {

//     for (let i of p) {

//         console.log(i);
//     }


// }


// console.log(permutationEquation([2, 3, 1]{));


// function beautifulDays(i, j, k) {

//     let beautifulDays = 0;
//     while (i <= j) {
//         let revNo = parseInt(String(i).split('').reverse().join(''));
//         if (Number.isInteger(Math.abs(i - revNo) / k))
//             beautifulDays++

//         i++;
//     } return beautifulDays;

// }

// console.log(beautifulDays(20, 23, 6));


// function utopianTree(n) {

//         let height = 1;{
//         for (let i = 1;{ i <= n; i++) {
//             if (i % 2 === 0) {
//                 height++;
//             } else {
//                 height *= 2;
//             }
//         }
//         return height;
// }

// console.log(utopianTree(5));


// function migratoryBirds(arr) {

//     let obj = {};;
//     for (let i of arr) {
//         if (obj[i]) {
//             obj[i]++
//         } else {
//             obj[i] = 1;{
//         }
//     }

//     let maxKey = [];
//     let values = Object.values(obj);
//     let maxCount = Math.max(...values);

//     for (let i in obj) {
//         if (obj[i] == maxCount) {
//             maxKey.push(i);
//         }
//     }
//     return maxKey[0];


// }
// console.log(migratoryBirds([1,{ 2, 3, 4, 5, 4, 3, 2, 1,{ 3, 4]));


// console.log(migratoryBirds([1,{ 1,{ 4, 4, 5, 3]));

// console.log(migratoryBirds([1,{ 4, 4, 4, 5, 3]));

// function angryProfessor(k, a) {

//     let availStudnt = 0;
//     for (let i of k) {
//         if (i <= 0) {
//             availStudnt++;
//         }
//     }
//     if (availStudnt >= a) {
//         return "NO"
//     }
//     return "YES"

// }

// console.log(angryProfessor([-1,{ - 3, 4, 2], 3));
// console.log(angryProfessor([0, -1,{ 2, 1]{, 2));


// Complete the viralAdvertising function below.
// function viralAdvertising(n) {

//     let totalShared = 5, totalLiked = 0;

//     for (let i = 1;{ i <= n; i++) {
//         totalLiked += Math.floor(totalShared / 2);
//         totalShared = Math.floor(totalShared / 2) * 3;

//     }
//     return totalLiked;
// }

// console.log(viralAdvertising(5));


// function pageCount(n, p) {

//     let fwdturnPage = 0;
//     let bwdturnPage = 0;

//     if (p == 1){ {
//         return 0;
//     }
//     for (let i = 2; i <= n; i++) {
//         fwdturnPage++;

//         if (i == p || i + 1 {== p)
//             break;
//         i++;

//     }


//     for (let i = 0; i <= n; i++) {
//         if (n == p) {
//             return 0;
//         }
//         if (n % 2 !== 0) {
//             if (n - 1 {== p) {
//                 return 0;
//             }
//         } else {
//             if (n - 1 {== p) {
//                 return 1;{
//             }
//         }

//         if (n - i == p || n - i - 1 {== p) {
//             break;
//         }
//         bwdturnPage++;
//         i++;
//     }

//     if (fwdturnPage > bwdturnPage) {
//         return bwdturnPage
//     }
//     return fwdturnPage;
// }


// console.log(pageCount(5, 4));
// console.log(pageCount(37455, 29835));
// console.log(pageCount(6, 2));

// console.log(pageCount(7, 3));


// console.log(pageCount(6, 5));



// let sticksCut = [];
// function cutTheSticks(arr) {
//     if (arr.length > 0) {
//         sticksCut.push(arr.length);
//     } else {
//         return 0;
//     }
//     let newArr = [];
//     let minNo = Math.min(...arr);
//     for (let i of arr) {
//         if (i - minNo > 0) {
//             newArr.push(i - minNo)
//         }
//     }
//     if (newArr.length > 0) {
//         return cutTheSticks(newArr);
//     }
//     else {
//         return sticksCut;
//     }
// }

// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));


// function saveThePrisoner(n, m, s) {

//     let lasePrisoner = (s + m) - 1;{
//     while (lasePrisoner > n) {
//         lasePrisoner -= n;
//     } return lasePrisoner;


// }
// console.log(saveThePrisoner(7, 19, 2));
// console.log(saveThePrisoner(3, 7, 3));

// console.log(saveThePrisoner(5, 2, 1){);

// console.log(saveThePrisoner(5, 2, 2));



// function pickingNumbers(a) {

//     let pair = [];
//     for (let i = 0; i < a.length - 1; i++) {
//         // This is where you'll capture that last value
//         for (let j = i + 1; j < a.length; j++) {
//             if (Math.abs(a[i] - a[j]) == 0 || Math.abs(a[i] - a[j]) == 1) {
//                 pair.push([a[i], a[j]])
//             }
//         }
//     }
//     return pair;

// }

// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

// let array = [1, 3, 3, 4, 5, 6];


// // let array = ["apple", "banana", "lemon", "mango"];
// let results = [];

// // Since you only want pairs, there's no reason
// // to iterate over the last element directly
// for (let i = 0; i < array.length - 1; i++) {
//     // This is where you'll capture that last value
//     for (let j = i + 1; j < array.length; j++) {
//         console.log(array[i], array[j]);
//     }
// }

// console.log(results);



// function acmIcpc(topic) {

//     let noOfAttendees = topic.length;
//     let pairCount = [];
//     let maxCount = 0;

//     for (let i = 1; i <= noOfAttendees; i++) {
//         for (let j = i + 1; j <= noOfAttendees; j++) {
//             let count = 0;
//             let bin1 = topic[i - 1].split('');
//             let bin2 = topic[j - 1].split('');

//             for (let i = 0; i < bin1.length; i++) {
//                 if (parseInt(bin1[i]) + parseInt(bin2[i]) >= 1) {
//                     count++;
//                 }
//             }
//             pairCount.push({
//                 pair: [i, j],
//                 count
//             })
//             if (count > maxCount) {
//                 maxCount = count;
//             }
//         }
//     }
//     let totalPair = 0;
//     for (let i of pairCount) {
//         if (i.count == maxCount) {
//             totalPair++;
//         }
//     }
//     return [maxCount, totalPair];

// }
// console.log(acmIcpc(['10101', '11100', '11010', '00101']));











// function findDigits(n) {
//     let count = 0;
//     str = String(n)
//     for (let i of str) {
//         if (n % i == 0) {
//             count++
//         }
//     } return count;
// }

// console.log(findDigits(1012));


// function jumpingOnClouds(c, k) {

// let energy = 100;
// for (let i = 0; i < c.length; i++) {
//     if (i + k < c.length) {
//         if (c[i + k] == 1) {
//             energy -= 3;
//         } else {
//             energy--;
//         }
//         i += k - 1;
//     }

// }
// if (c[0] == 0) {
//     energy--
// } else {
//     energy -= 3;
// }
// return energy;

// }

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
// console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));

// console.log(jumpingOnClouds([0, 0, 1, 0], 2));



// function circularArrayRotation(a, k, queries) {

//     let output = [];

//     for (let i = 1; i <= k; i++) {
//         let ele = a.pop();
//         a.unshift(ele)
//     }

//     for (let i of queries) {
//         output.push(a[i]);
//     }
//     return output;
// }



// console.log(circularArrayRotation([1, 2, 3], 2, [1, 2, 3]));

// console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

// function beautifulTriplets(d, arr) {



// }


// console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));


// function minimumDistances(a) {

//     let len = a.length;
//     let finalArr = [];
//     let dist = [];
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             minDist = Math.abs(a[j] - a[i]);
//             finalArr.push({
//                 minDist,
//                 pair: [j, i]
//             })
//         }


//     } return finalArr

// }

// console.log(minimumDistances([7, 1, 3, 4, 1, 7]));


let coverPoints = function (A, B) {

    let sortedA = A.sort((a, b) => {
        return a - b;
    });
    let sortedB = B.sort((a, b) => {
        return a - b;
    })
    let len = sortedA.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        sortedA[i]
        count++
    }
}

console.log(coverPoints([2, 1, 4, 1], [5, 1, 8, 4]));
