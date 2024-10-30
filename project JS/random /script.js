console.log('connect...');
/* craeating function called greeting that take one argument called name 
the function should return a statement that say "hey russell , how s it going "
*/



const greeting = function (name){
    return `hey ${name} , hows it doing `
};

console.log(greeting("Russle"));

/* create a function called 'getvolume' that calculate the volume 
of rectangle box (length x width x height )
make sure it work by calling the function 
L 10   W 2  H 3
*/
//! what i need is to make the the  function check etch input alone not combaind 
//! what i did here wrong that i didnot  understand the logic 
// const getVolume = function (length,width,height) {
//     let total = length * width * height ;
//     // return total;

//     if (typeof total === "number"){
//         return total ;
//     } else {
//         return ' it have to be number'
//     }
  
// }
// console.log(getVolume(10,2,3))
// here the wright order 
const getVolume = function (length, width, height) {
    if (typeof length !== "number" || typeof width !== "number" || typeof height !== "number") {
        return "All inputs must be numbers";
    }

    let total = length * width * height;
    return total;
}
console.log(getVolume(10, 2, '3'))


/*Exercise 1: Variable Declaration and Data Types
Declare variables to represent your name, age, and favorite color.
Assign appropriate values to these variables.
Use console.log to display these variables in the browser console.
Use comments to describe the data types of these variables.
*/
const firstName = 'Michael'
const age = 38
const color = 'blue'
console.log(typeof firstName , firstName)
console.log(typeof age, age)
console.log (typeof color , color)

/* Exercise 4: Variable Reassignment
Declare a variable score and assign an initial value (e.g., 100).
Reassign the score variable with a new value.
Use console.log to display the updated score variable.*/
let score = 500;
score ++ ;
console.log(`score now ${score}`) ;


/*Exercise 8: Variable Reassignment and Math
Declare a variable currentBalance and assign it a random number representing your current bank balance.
Create a variable transaction and assign it another random number representing a transaction amount.
Reassign currentBalance by subtracting the transaction amount.
Display the updated currentBalance in the console. */


let currentBalance = 200 ;
let transaction = 10; 
currentBalance=currentBalance-transaction
console.log(currentBalance)


/* write a function that compar the last 3 character of string return match 
if they match EX 'dogs  and horses dose not match 
dogs and lincoln logs >>> match */
// function compar (str1,str2){
//     let lastThreeLetterstr1 =str1.slice (-3);
//     let lastThreeLetterstr2 =str2.slice (-3)
//     if (lastThreeLetterstr1 === lastThreeLetterstr2){
//         return 'match';
//     } else {
//         return "dose not match"
//     }
// }
// console.log(compar('dogs','horse'))
// console.log(compar("dogs", "lincoln logs"))

function compareLastThree(str1, str2) {
    // Extract the last 3 characters using substr
    let lastThreeStr1 = str1.substr(str1.length - 3);
    let lastThreeStr2 = str2.substr(str2.length - 3);

    // Compare the last 3 characters of both strings
    if (lastThreeStr1 === lastThreeStr2) {
        return "match";
    } else {
        return "does not match";
    }
}

// Test cases
console.log(compareLastThree("horses", "horses")); // Output: "does not match"
console.log(compareLastThree("mark", "lincoln mkmark")); // Output: "match"

 /*create a function that take a string as an argument 
 if the string gas an even of characters return even
 if the string have odd return odd  */

 const test = function(string1) { 
    if (string1.length %2 === 0){
        // console.log('even')
        return'even';
    }else{
        // console.log('odd')
        return "odd" ;
    }
    
    
 }
console.log (test('lul'))

/*
Write a function called isHighest that finds the largest of three integers, passed in as arguments to the function.
For example, if you pass in 2, 6, and 4, the function will return 6 because that is the highest number.
Make sure to test with three different numbers.*/

function isHighest(num1, num2, num3) {
    let highest = num1; // Assume the first number is the highest

    // Compare num2 with highest
    if (num2 > highest) {
        highest = num2;
    }

    // Compare num3 with highest
    if (num3 > highest) {
        highest = num3;
    }

    return highest;
}

// Test cases
console.log(isHighest(2, 6, 4)); // Output: 6
console.log(isHighest(10, 5, 8)); // Output: 10
console.log(isHighest(3, 7, 1)); // Output: 7



