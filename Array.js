// function zigZag(arr, n) {
//     // Flag true indicates relation "<" is expected, 
//     // else ">" is expected.  The first expected relation 
//     // is "<" 

//     let flag = true;
//     for (let i = 0; i <= n - 2; i++) {
//         if (flag)  /* "<" relation expected */ {
//             /* If we have a situation like A > B > C, 
//                we get A > B < C by swapping B and C */
//             if (arr[i] > arr[i + 1])
//                 arr[i + 1] = [arr[i], arr[i] = arr[i + 1][0]];
//         }
//         else /* ">" relation expected */ {
//             /* If we have a situation like A < B < C, 
//                we get A < C > B by swapping B and C */
//             if (arr[i] < arr[i + 1])
//                 arr[i + 1] = [];
//         }
//         flag = !flag; /* flip flag */
//     }
// }

// function main() {
//     let arr = [4, 3, 7, 8, 6, 2, 1];
//     let n = (arr.length / 1);

//     zigZag(arr, n);
//     for (let i = 0; i < n; i++)
//         cout << arr[i] << "  ";
//     return 0;
// }
// console.log(main());


// function diagonalDifference(arr) {
//     let prim_diag = 0;
//     let sec_diag = 0;
//     for (let i = 0; i < arr.length; i++) {
//         prim_diag = prim_diag + arr[i][i]; // 00 11 22
//         sec_diag = sec_diag + arr[i][arr.length -1--]; // 02 11 20
//     }
//     return Math.abs(prim_diag - sec_diag)
// }


// function plusMinus(arr) {
//     let positive = [];
//     let negative = [];
//     let zero = [];
//     let len = arr.length;

//     for (let i of arr) {
//         if (i > 0) {
//             positive.push(i);
//         }
//         else if (i === 0) {
//             zero.push(i);
//         }
//         else if (i < 0) {
//             negative.push(i);
//         }
//     }
//     console.log((positive.length/len));
//     console.log((negative.length/len));
//     console.log((zero.length/len));
// }


// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));


// function gradingStudents(grades) {
//     let finalArr = []
//     for (let i of grades) {
//         if (i < 38) {
//             finalArr.push(i)
//         } else {
//             let modulo = i % 5;
//             if (modulo == 0) {
//                 finalArr.push(i);
//             }
//             else {
//                 let temp = 5 - modulo;
//                 let incr = i + temp;
//                 if (incr > 100) {
//                     finalArr.push(i)
//                 }
//                 else if ((incr - i) < 3) {
//                     finalArr.push(incr)
//                 } else {
//                     finalArr.push(i)
//                 }
//             }
//         }
//     }
//     return finalArr;
// }
// console.log(gradingStudents([0, -99, 100, 80, 38, 18, 73, 78, 60, 60, 15, 10, 5, 71, 2]));


// function breakingRecords(arr) {
//     let len = arr.length,
//         lowCount = 0,
//         highCount = 0,
//         lowestScore = arr[0],
//         highestScore = arr[0];

//     for (let i = 1; i < len; i++) {
//         if (arr[i] < lowestScore) {
//             console.log(lowCount++, ++lowCount);
//             lowestScore = arr[i];
//         } else if (arr[i] > highestScore) {
//             highCount++;
//             highestScore = arr[i];
//         }
//     }
//     return [highCount, lowCount];
// }
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));