

// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3,9,23,64,2,8,28,93]; 

//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 

let newAge= ages[ages.length-1]- ages[0];

console.log (newAge);

//b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths)

ages.push(34);
ages [ages.length-1];
console.log(ages [ages.length-1]);
console.log(newAge); // Why is it not subtracting with the added number? 

//c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

//2.Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.