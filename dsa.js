// What is Data Structure ?

// Ways of organizing information with optimal 'runtime complexity' for adding or removing 
// records.

// Write a program that prints the numbers from 1 to 100.

// But for multiples of three print "Fizz" instead of number and for the multiples of the five print 
// "Buzz". 
// For example which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else if (i % 15 === 0) console.log("FizzBuzz");
//     else console.log(i);
// }

//---------------------------------------Queue -------------------------------------------------------

// implements queue.

// class Queue {
//     constructor() {
//         this.data = [];
//     }
//     add(record) {
//         this.data.push(record);
//         console.log(this.data);
//     }
//     remove() {
//         return this.data.shift();
//     }
//     peek() {
//         return this.data[this.data.length - 1];
//     }
// }

// let q1 = new Queue();
// q1.add(10);
// q1.add(13);
// q1.add(1);
// console.log(q1.peek());
// console.log(q1.remove());



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

//---------------------------------------------------------------------------------------------------------

// Binary Search

// let a = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

// a.sort(function (a, b) {
//     return a - b;
// });

// console.log(a);

// function binarySearch(arr, i) {
//     var mid = Math.floor(arr.length / 2);
//     console.log(arr[mid], i);
//     if (arr[mid] === i) {
//         console.log('match', arr[mid], i);
//         return arr[mid];
//     } else if (arr[mid] < i && arr.length > 1) {
//         console.log('mid lower', arr[mid], i);
//         return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//     } else if (arr[mid] > i && arr.length > 1) {
//         console.log('mid higher', arr[mid], i);
//         return binarySearch(arr.splice(0, mid), i);
//     } else {
//         console.log('not here', i);
//         return -1;
//     }
// }
// console.log(binarySearch(a, 100));


//------------------------------------------------------------------------


function addTwoNumbers(l1, l2) {
    let list = new ListNode(0);
    let currentNode = list;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;

        sum = carry;
        carry = 0;
    }

    return list.next;
}