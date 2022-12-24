// Practice Problem 2:>>
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla oif a student.

// Input: 
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

let mathematics = 71;
let biology = 56;
let chemistry = 87;
let physics = 85;
let bangla = 80;

let totalMarks = mathematics + biology + chemistry + physics + bangla;

let averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(2));