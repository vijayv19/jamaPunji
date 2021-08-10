// JavaScript is synchronous single threaded language.

// Execution Context
// ------------------------------------------------------
// Memory => Variable Env | Code => Thread of Execution
// -----------------------|------------------------------
// Key : value            |  ----code---
// a:10                   |  ----code---
// fn: {...}              |  -----------


// JavsScript is loosely type language that means we can convert a variable from string to number or
// any other data types.

// What is lexical environment ? 
// lexical enviroment is a local memory along with the lexical enviroment of it's parent,

// lexical env, closure, scope chaining all are same.

// let a = 10;  // This will give any error
// let a = 300

// var a = 10;  // This will not give the error
// var a = 300