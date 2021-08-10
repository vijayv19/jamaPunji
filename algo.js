// Greedy Algorithm : it is a algorithmic paradigm which builds up a solution piece by piece.
// It always chooses the next piece that offers the most obvious and immediate benefits.
// Greedy fits perfectly for those solutions in which choosing a locally optimal solution also
// leads to global optimal solution.

// Common Greedy Algoritms :

// 1. Insertion Sort, Selection sort, Topologica sort, Prims, Kruskal 
// 2. Activity selection problem
// 3. Coin Change problem
// 4. Fractional knapsack

// Practical use of greedy algo:
// - coin change problem in ATM machine

// Coin Change Problem

// let arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
// let values = [];

// function coinChange(arr, value) {
//     let len = arr.length;

//     for (let i = 0; i < len; i++) {
//         let currNo = arr[len - i - 1];
//         if (value >= currNo) {
//             value -= currNo;
//             values.push(currNo);

//             if (value == 0)
//                 return values
//             return coinChange(arr, value)
//         }
//     }
// }
// console.log(coinChange(arr, 530)); // { values: [ 500, 20, 10 ], count: 3 }


// Fractional knapsack Problem:

//--------------------------------------------------------------------------------------

// Divide and Conquer

// Divide and conquer is a algorithm design paradigm which works by recursively breaking down a 
// problem into a sub problems of similar type, until these become simple enough to be solved 
// directly. The solution to the sub problems are then combined to give a solution to the 
// original problem.

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



//-------------------------------------------------------------------------------------------------

// Given an array of integers,return the indices of the two numbers that add up to a given target.

// const findTwoSum = (nums, target) => {
//     let numsMap = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (numsMap[nums[i]] >= 0)
//             return [numsMap[nums[i]], i]

//         const numberToFind = target - nums[i]
//         numsMap[numberToFind] = i;
//     }
//     return null

// }
// let nums = [7, 9, 3, 2]
// console.log(findTwoSum(nums, 11));


//--------------------------------------------------------------------------------------------------

// let str = "string";
// let s = str.split('').join('');
// console.log(s);
// console.log(str == s);

// let arr = ["Hi", "i", "am", "Vijay"];
// let str = arr.join('');
// console.log(str);
// console.log(str.includes("iam"));

//--------------------------------------------------------------------------------------------------

// const firstRecurringCharacter = (input) => {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//         if (map[input[i]]) {
//             return input[i]
//         }
//         map[input[i]] = i;
//     }
//     return undefined;
// }

// console.log(firstRecurringCharacter([2, 3, 1, 5, 3, 2, 1, 4]));

//--------------------------------------------------------------------------------------------------

// Step 1 : Verify the contraints

// Are all the numbers positive or can there be negatives ? Ans : All positive
// Are there duplicate numbers in the array ? Ans : No

//----------------------------------------------------------------------------------------------------

// String rotation

// var primary = "abcd"
// var test = "bcda"
// var test = "dacb"
// var test = "dabc"

// function checkRotationStrings(string, rotated) {
//     console.log(rotated.repeat(2), rotated.repeat(2).includes(string));
//     return string.length === rotated.length && rotated.repeat(2).includes(string);
// }
// console.log(checkRotationStrings(primary, test));