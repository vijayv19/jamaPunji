
// Greedy Algorithm : it is a algorithmic paradigm which builds up a solution piece by piece.
// It always chooses the next piece that offers the most obvious and immediate benefits.
// Greedy fits perfectly for those solutions in which choosing a locally optimal solution also leads 
// to global optimal solution.

// Common Greedy Algoritms :

// 1. Insertion Sort, Selection sort, Topologica sort, Prims, Kruskal 
// 2. Activity selection problem
// 3. Coin Change problem
// 4. Fractional knapsack

// Practical use of greedy algo:
// - coin change problem in ATM machine

// Coin Change Problem

// let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
// let coinsObj = {
//     count: 0
// }
// let values = [];
// function coinChange(arr, value) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         let currNo = arr[len - i - 1];
//         if (value >= currNo) {
//             value = value - currNo;
//             values.push(currNo)
//             console.log(values);

//             if (value === 0) {
//                 coinsObj.count = values.length;
//                 return coinsObj;
//             }
//             coinsObj = {
//                 values,

//             }
//             return coinChange(arr, value);
//         }
//     }
// }
// console.log(coinChange(arr, 1));


// Fractional knapsack Problem:

//----------------------------------------------------------------------------------------------------

// Divide and Conquer

// Divide and conquer is a algorithm design paradigm which works by recursively breaking down a problem 
// into a sub problems of similar type, until these become simple enough to be solved directly.
// The solution to the sub problems are then combined to give a solution to the original problem.

// Example

// Software development modules  

//                                  website  
//                                      |
//            __________________________|__________________________
//            |                         |                          |
//         Module1                   Module2                    Module3
//            |                         |                          |
//     submod1,submod2            submod1,submod2            submod1,submod2


// Divide and conquer is most effective when problem has a 'optimal substructure' property.

// Example:
// 1.Merge Sort
// 2.Quick Sort
// 3.Binary Search


// Number Factor (D & C)

// function waysToGetN(n) {
//     if (n == 0 || n == 1 || n == 2) {
//         return 1;
//     }
//     if (n == 3) {
//         return 2;
//     }
//     let sub1 = waysToGetN(n - 1);
//     let sub2 = waysToGetN(n - 3);
//     let sub3 = waysToGetN(n - 4);
//     return sub1 + sub2 + sub3;
// }
// console.log(waysToGetN(6));