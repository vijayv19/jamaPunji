
// What is Sorting ?

// Arrange the data in a particular format either ascending or descending order.

// In place and out space sorting:

// In place sorting:
// - sorting algorithms which does not require any extra space for sorting.
// - eg : Bubble Sort

// Out place sorting:
// - sorting algorithms which requires extra space for sorting.
// - eg : Merge Sort

// Stable Sort:
// - If a sorting algorithm after sorting the contents does not change the sequence of similar
// content in which they appear, is called Stable Sorting.
// - eg : Insertion Sort

// [30, 10, 40, 50(1), 70, 50(2), 20, 80]
// [10, 20, 30, 40, 50(1), 50(2), 70, 80]

// Unstable Sort:
// - If a sorting algorithm after sorting the contents, changes the sequence of similar content in which 
//   they appear,it is called unstable Sorting.
// - eg : Quick Sort

// [30, 10, 40, 50(1), 70, 50(2), 20, 80]
// [30, 10, 40, 50(2), 70, 50(1), 20, 80]


// Why Stable Sort is important ?

// Scenarios where the sort key is not entire identity of the item.
// Consider a person object with a name and a Age. Let's say we sorted based on their name. 
// if we were to then sort by age in a stable way, we'd quarantee that our original ordering 
// would be preserved for people with same age.

//-------------------------------------------------------------------------------------------------
//    UnsortedData        SortbyName       SortedByAge(Stable)     SortedByAge(UnStable)    
//------------------------- ----------------------------------------------------------------------------
//  name      age       name     age       name      age           name      age
//----------------------------------------------------------------------------------------------------
//  Reena     1         Nalini    2        Preeti     1            Preeti     1
//  Nalini    2         Preeti    1        Reena      1            Sita       1
//  Reshma    2         Reena     1        Sita       1            Reena      1
//  Preeti    1         Reshma    2        Nalini     2            Nalini     2
//  Sita      1         Sita      1        Reshma     2            Reshma     2
//----------------------------------------------------------------------------------------------------------

// Practical example of using stable sort is group by in sql.

//----------------------------------------------------------------------------------------------------------

// Sorting Algorithms

// Bubble Sort
// Selection Sort
// Insertion Sort
// Bucket Sort
// Merge Sort
// Quick Sort
// Heap Sort

// Why should we read so many Sorting techiniques ?

// Every sorting techiniques comes with its set of Pros and Cons. So we need to use specific 
// sorting technique as per the situation.


// Do we have a special requirement of Stability ?
// Is Space priority to use ?
// Is Time priority to use ?

//-------------------------------------------------------------------------------------------------


// MERGE SORT ?

// Merge Sort is a devide and conquer algorithms
// It devides input array into 2 halves, keeps breaking those 2 halves recursively until they 
// become too small to be broken further.
// Then each of the broken pieces are merged together to inch towards final answers in sorted manner.

// Link : https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

// Merge the two arrays: left and right

// Time complexity - O(nlogn)

// var unsortedArr = [340, 1, 3, 3, 76, 23, 4, -12, 122, -7642, 646];

// function merge(leftArr, rightArr) {
//     var sortedArr = [];
//     while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//             sortedArr.push(leftArr[0]);
//             leftArr = leftArr.slice(1)
//         } else {
//             sortedArr.push(rightArr[0]);
//             rightArr = rightArr.slice(1)
//         }
//     }
//     while (leftArr.length)
//         sortedArr.push(leftArr.shift());
//     while (rightArr.length)
//         sortedArr.push(rightArr.shift());
//     return sortedArr;
// };


// function mergesort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     else {
//         var midpoint = parseInt(arr.length / 2);
//         var leftArr = arr.slice(0, midpoint);
//         var rightArr = arr.slice(midpoint, arr.length);
//         console.log(leftArr, rightArr);

//         return merge(mergesort(leftArr), mergesort(rightArr));
//     }
// }
// console.log(mergesort(unsortedArr));


//-----------------------------------------------------------------------------------------------------


// Time complexity: O(n^2), Space complexity: O(1).

function bubbleSort(arr) {
    let swapped = false;

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i + 1] = [arr[i], arr[i] = arr[i + 1]][0];
            swapped = true;
        }
    }
    console.log(arr);

    if (swapped === true) {
        return bubbleSort(arr)
    }
    else {
        return arr;
    }

}

// console.log(bubbleSort([3, 0, -2, 5, -1, 4, 1])); // [ -2, -1, 0, 1, 3, 4, 5 ]

// const hello = require('./index');
// console.log(hello); // {a: 1}

// Bubble Sorting

// const bubbleSort = arr => {
//     let swapped;
//     do {
//         swapped = false;
//         let len = arr.length;
//         for (let i = 0; i < len; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 arr[i + 1] = [arr[i], arr[i] = arr[i + 1]][0]
//                 swapped = true;
//             }
//         }
//     } while (swapped)
//     return arr;
// }
// console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1])); // [ -1, 0, 1, 2, 3, 4, 5 ]

//------------------------------------------------------------------------------------------------------

// Quick Sort























































// function binarySearch(sortedArray, ele) {
//     var lowIndex = 0;
//     var highIndex = sortedArray.length - 1;
//     while (lowIndex <= highIndex) {
//         var midIndex = Math.floor((lowIndex + highIndex) / 2);
//         if (sortedArray[midIndex] == ele) {
//             return midIndex;
//         } else if (sortedArray[midIndex] < ele) {
//             lowIndex = midIndex + 1;
//         } else {
//             highIndex = midIndex - 1;
//         }
//     } return null;
// }

// let sortedArr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// console.log(binarySearch(sortedArr, 60)); // 5

// var sortedArr = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
// console.log(binarySearch(sortedArr, "violet"));// 5
// binarySearch(sortedArr, "white") // returns null


