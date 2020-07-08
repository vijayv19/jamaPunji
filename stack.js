// Implementation #1 (Array)

// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     // Inserts the element into the top of the stack
//     push(element) {
//         this.stack.push(element);
//         console.log(this.stack);
//     }

//     // Removes the element from the top of the stack and return that element
//     pop() {
//         console.log('this:', this);

//         if (this.isEmpty()) return 'Stack is empty!'
//         return this.stack.pop()
//     }

//     // Return which element is on top of the stack
//     peek() {
//         if (this.isEmpty()) return 'Stack is empty'
//         return this.stack[this.stack.length - 1]
//     }

//     // helper method
//     isEmpty() {
//         return !this.stack.length
//     }
// }

// let arr = new Stack();

// arr.push(1);
// arr.push(2);
// arr.push(3);

// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());


//-------------------------------------------------------------------------------------------------

// Implementation #2 (Linked List)

// class Node {
//     constructor(next, value) {
//         this.next = next
//         this.value = value
//     }
// }

// class Stack {
//     constructor() {
//         this.stack = null
//     }

//     push(element) {
//         let head = this.stack
//         let newNode = new Node(null, element)

//         if (!head) {
//             this.stack = newNode
//         } else {
//             newNode.next = head
//             this.stack = newNode
//         }
//     }

//     pop() {
//         let head = this.stack
//         if (!head) return 'Stack is empty!'
//         this.stack = head.next
//         return head.value
//     }

//     peek() {
//         if (!this.stack) return 'Stack is empty!'
//         return this.stack.value
//     }
// }
