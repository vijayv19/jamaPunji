// What is Data Structure ?

// Ways of organizing information with optimal 'runtime complexity' for adding or removing records.

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of number and for the multiples of the five print 
// "Buzz". For example which are multiples of both three and five print "FizzBuzz".

// for (var i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }


//

//---------------------------------------Queue -------------------------------------------------------

// implements queue.

// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     add(record) {
//         this.data.push(record);
//     };
//     remove() {
//         return this.data.shift();

//     };
//     peek() {
//         return this.data[this.data.length - 1];
//     }
// }

// function weave(sourceOne, sourceTwo) {
//     const q = new Queue();
//     console.log('q :', q);

//     while (q.peek(sourceOne) || q.peek(sourceTwo)) {
//         if (q.peek(sourceOne)) {
//             q.add(sourceOne.remove());
//             console.log(q);

//         }
//         if (q.peek(sourceTwo)) {
//             q.add(sourceTwo.remove());
//         }
//     }
//     console.log('q', q);

//     return q;
// }

// console.log(weave([1, 2, 3], [11, 12, 13]));
