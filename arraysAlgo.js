
// Challenge 1: 

// Using the given array:

// var testArr = [6,3,5,1,2,4]

// Print Values and Sum
// 1. Print each array value and the sum so far
// 2. The expected output will be:

// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

var arr = [6,3,5,1,2,4];
var sum = 0;

for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

console.log('Num' + arr[i]);
console.log('Sum' + sum);
}



// Challenge 2:

// Value * Position

// Multiply each value in the array by its array position
// The expected output will be:

// [0,3,10,3,8,20]

var arr = [6,3,5,1,2,4];

for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * i;
}

console.log(arr);