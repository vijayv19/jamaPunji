// Implementation #1 (Array)

// class Queue {
//     constructor() {
//         this.queue = []
//     }

//     enqueue(element) {
//         this.queue.push(element)
//     }

//     dequeue() {
//         if (this.isEmpty()) return 'Queue is empty'
//         return this.queue.shift()
//     }

//     peek() {
//         if (this.isEmpty()) return 'Queue is empty'
//         return this.queue[0]
//     }

//     // helper method
//     isEmpty() {
//         return !this.queue.length
//     }
// }



// Implementation #2 (Linked List)

// class Node {
//     constructor(next, value) {
//         this.next = next
//         this.value = value
//     }
// }

// class Queue {
//     constructor() {
//         this.queue = null
//     }

//     enqueue(element) {
//         let head = this.queue
//         let newNode = new Node(null, element)

//         if (!head) {
//             this.queue = newNode
//         } else {
//             let traverseNode = head
//             while (traverseNode.next) {
//                 traverseNode = traverseNode.next
//             }
//             traverseNode.next = newNode
//         }
//     }

//     dequeue() {
//         let head = this.queue

//         if (!head) return 'Queue is empty!'

//         this.queue = head.next
//         return head.value
//     }

//     peek() {
//         if (!this.queue) return 'Queue is empty!'
//         return this.queue.value
//     }
// }



// Implementation a Queue using 2 stacks


// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
    Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
    if (Stack2.length === 0) {
        if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
        while (Stack1.length > 0) {
            var p = Stack1.pop();
            Stack2.push(p);
        }
    }
    return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
console.log(Dequeue());
console.log(Dequeue());
console.log(Dequeue());
