// ---------------------------------------------------------------------------------
// Operation                Array                Linked List               Tree
// ---------------------------------------------------------------------------------
// Creation                 O(1)                    O(1) 
// Insertion                O(n)                    O(n)
// Deletion                 O(n)                    O(n) 
// Searching                O(n)                    O(n)              Can We Improve 
// Traversing               O(n)                    O(n)              Let's See
// DeleteEntireArray/LL     O(1)                    O(1)
// SpaceEfficient           No                      Yes 
// Implementation           Easy                    Moderate  
// ---------------------------------------------------------------------------------

// What is Tree ?

//                                  Cooling Devie  
//                                      |
//                     _________________|_______________
//                     |                               |
//                  Air Condtioner                   Cooler
//              ________|_____                   _______|_________
//              |             |                  |               |
//         WindowAC         SplitAC         DesertCooler      TowerCooler          
//        ___|            ____|___          _____|___        ______|_____
//        |              |        |         |       |        |          |
//      1.5 Ton      1 Ton    1.5 Ton    60ltr    80ltr    45ltr      60ltr   


// Properties of above pic (Properties of Tree)
// 1. Used to represent the data in hierarchical form.
// 2. Every node has 2 components ( Data and Reference to it's sub category)
// 3. At top it has base product and 2 products called left sub category and right sub category under it.


// Why Learn Tree ?

// It implements to improve Time complexity in terms of insertion, deletion and search.
// With the help of this we will try to convert time complexity from O(n) to O(logn).

// Tree Terminologies

// Root : Node with no parent
// Edge : Link from parent to child
// Leaf : Node with no children
// Sibling : Children of same parent
// Ancestor : means parent,grand parent, great grand parent and so on for a given node.
// Depth of node : length of the path from root to node.
// Height of node : Length of the path from that node to deepest node.
// Height of tree : Height of node ( Calculates from deepest node )
// Depth of tree : Same as depth of root node ( Max depth among all nodes )


// Predecessor : Predecessor of a node in the immediate previous node in inorder traversal of Binary Tree.
// eg: 90 is Predecessor of 100

// Successor : Successor of a node in the immediate next node in inorder traversal of Binary Tree.
// eg : 140 is successor of 100.
// eg : 300 is successor of 350.


//                                   100
//                                  /    \
//                                80     200 
//                              /   \     / \
//                             70   90  150  300
//                            /         / \     \
//                           50      140  110    400
//                          / \                 /   \
//                        40  60              350   410

// Inorder traversal : 40,50,60,70,80,90,100,140,150,160,200,300,350,400,410


// A tree is called as binary tree if each node has zero, one or 2 child.
// It is family of data structure (BST,Heap Tree,AVL,Red-Black,Syntax Tree,Huffman Coding Tree etc)


// Why we should we learn binary tree ?

// -Prerequisite for more advanced trees (BST,AVL,Red-Black,Expression Tree etc..).
// -It is used in solving specific problems like :
// -Huffman coding
// -Heap (Priority Queue)
// -Expression parsing

// Types of Binary Tree

//  -Strict Binary Tree - If each node has either 2 children or none.
//  -Full Binary Tree - If each non leaf node has 2 children and all leaf nodes are at same level.
//  -Complete Binary Tree - If all the levels are completely filled except possibly the last level
//                          and the last level has all keys as left as possible.



//                                   20
//                                  /    \
//                                100     3 
//                              /   \     / \
//                             50   15  250  35
//                            /         
//                           222    

// How does tree looks when implemented via Array :

// ----------------------------------------------------------------------------------
//    Cell  | 0   1   2    3  4   5   6   7    8   9  10  11  12  13  14  15  16  17 
// ----------------------------------------------------------------------------------
//    Value | *  20  100   3  50 15  250  35  222
// ----------------------------------------------------------------------------------

// We never use the 0th cell bcoz of mathematical complexity.
// You can use but ideally we don't take it

// Let Child : cell[2x]  where x is the cell number of parent
// Right Child : cell[2x+1]


// Traversing all nodes of Binary Tree ( Array Implementation ) it has 2 ways as below :

// 1. Depth First Search
//     - PreOrder Traversal
//     - InOrder Traversal
//     - PostOrder Traversal

// 2. Breadth First Search
//    - LevelOrder Traversal

//     - InOrder Traversal Example


// let arr = ['', 20, 100, 3, 50, 15, 250, 35, 222];

// console.log(arr[0]);
// console.log(arr[1]);


// function inorderTraversal(index) {
//     if (index >= arr.length) {
//         return;
//     }
//     inorderTraversal(index * 2);
//     console.log(arr[index]);

//     inorderTraversal(index * 2 + 1);

// }

// inorderTraversal(1);


// Time and Space complexity - Binary Tree (Array vs LinkedList)

// ----------------------------------------------------------------------------------------------------
//                           Array Implementation                Linked List Implementation
// ------------------------------------------------------------------------------------------------------                          
//  Operation               Time               Time                Time                 Time  
//                        Complexity         Complexity          Complexity          Complexity
// ----------------------------------------------------------------------------------------------------
// Creation of Tree         O(1)                O(n)               O(1)               O(1)
// Insertion of Value       O(1)                O(1)               O(n)               O(n)    
// Deletion of Value        O(n)                O(1)               O(n)               O(n)
// Searching for a value    O(n)                O(1)               O(n)               O(n)  
// Traversing a tree        O(n)                O(1)               O(n)               O(n)
// Delete Entire Tree       O(1)                O(1)               O(1)               O(1)
// Space Efficient ?         -                   No                 -                 Yes
//--------------------------------------------------------------------------------------------------------