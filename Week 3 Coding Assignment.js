

/*1. Create an array called ages that contains 
the following values: 3, 9, 23, 64, 2, 8, 28, 93. */
    const ages = [3,9,23,64,2,8,28,93]; 

/*a. Programmatically subtract the value of the first element in the array 
from the value in the last element of the array */
    
    let newAge= ages[ages.length-1]- ages[0];

    console.log (newAge);

/*b.Add a new age to your array and repeat the step above 
to ensure it is dynamic (works for arrays of different lengths) */
    ages.push(34);
    console.log (ages);
    newAge= ages[ages.length-1]- ages[0];
    console.log(newAge); 

/*c. Use a loop to iterate through the array and calculate the average age. 
Print the result to the console.*/
    let sum = 0
    for (let i = 0; i <ages.length; i++ ) {
  
       sum += ages[i] // This is adding all the elements within the index

    }
    let average = sum/ages.length; //Once you have the sum of your ements you take the average
      console.log (average);

/* 2.Create an array called names that contains the following values:
 ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/

    let names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

/* a. Use a loop to iterate through the array and 
calculate the average number of letters per name. 
Print the result to the console. */

    let nameSum=0
    for (let i = 0; i < names.length; i++ ) {
  
      nameSum += names[i].length; // This is adding elements in the array for the length of each element (Number of letters)
  
    }
    averagePerName= nameSum/names.length; //Once we have the sum we can divide it by the array length to get the average
    console.log(averagePerName);

/* b. Use a loop to iterate through the array again 
and concatenate all the names together, 
separated by spaces, and print the result to the console.*/
  
    let conName = ''; //set conName to an empty string
    for (let i = 0; i < names.length; i++ ) {
  
        conName += names[i]+ ' '; //adding to an empty string and iterating the names of the array + a space each time
 
    }
     console.log(conName);
  
    //names.join(' '); You can also concatanate all the names together using .join()

//3. How do you access the last element of any array?

    names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
    
    console.log(names[names.length-1]); //Grabbing the index of the array at length-1 bc first index of an array is 0

//4. How do you access the first element of any array?

    console.log(names[0]);

/* 5. Create a new array called nameLengths. 
Write a loop to iterate over the previously created names array and 
add the length of each name to the nameLengths array. */

    names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
    let nameLengths = [];

    for (let i = 0; i < names.length; i++ ) {
  
    nameLengths.push(names[i].length); // Adding an element each iteration with the length of each element in names

  }
    console.log(nameLengths);

/* 6. Write a loop to iterate over the nameLengths array and calculate the sum 
of all the elements in the array. Print the result to the console.*/

    sum = 0 // This is the starting sum
    for (let i = 0; i < nameLengths.length; i++ ) {

     sum += nameLengths[i]; // Adding every single element into the starting sum to create 1 number

    }   

    console.log (sum);

/* 7. Write a function that takes two parameters, word and n, 
as arguments and returns the word concatenated to itself 
n number of times. (i.e. if I pass in ‘Hello’ and 3, 
I would expect the function to return ‘HelloHelloHello’).*/

    function mathyWords (word, n){
 
      return word.repeat(n)


    }
    console.log(mathyWords ("Evelyn", 5));

/* 8. Write a function that takes two parameters, 
firstName and lastName, and returns a full name 
(the full name should be the first and the last name separated by a space).*/

    function fullName (firstName, lastName){
      console.log (firstName + " " + lastName);
    }
 
      fullName("Evelyn", "Barrios");

/* 9. Write a function that takes an array of numbers and returns true 
if the sum of all the numbers in the array is greater than 100.*/

    function arrayNumbers(array){
      let num = 0
      for (let i = 0; i <array.length; i++ ) {
        
        let addition = num += array[i];

        if (addition >100){
          return true
         } 
        }
      }
    
  const arr= [3,2,97,9];
  console.log (arrayNumbers(arr)) ; // When I add else it automatically converts to false why?
    

/* 10. Write a function that takes an array of numbers and returns the average 
of all the elements in the array.*/

    function averageArray (avArr) {
      let sumAvg = 0
      for (let i = 0; i < avArr.length; i++ ) {
        sumAvg += avArr[i]/avArr.length;
      }

    }
const numArr= [3,5,9,10];
averageArray (numArr);

console.log (averageArray(numArr)); // Undefined :/

/* 11. Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than 
the average of the elements in the second array.*/

/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and 
if moneyInPocket is greater than 10.50.*/

/* 13. Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.*/

    function areaRectangle(length, width) {
      return length * width 

    }

    console.log (areaRectangle (8,8)); 