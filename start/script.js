'use strict';
function fruitProcessor(apples, oranges) { // function declare with tow parameter 
    // here what is the function do (juice )
    const juice = `juice with ${apples} appels and ${oranges} oranges`;
    return (juice); // here what is the function will return (juice )
}
// to provoke the function we need to stored to value so we create appleJuice 
// and we give 2 value 
const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice)
// same as before 
const orangeJuice = fruitProcessor(4, 2);
console.log(orangeJuice)

//! function Declaration vs Expression 
// function Declaration 
// function calcAge1 (birthYear){
// const age = 2024 - birthYear
// return age ;
//}//call the function 
// let michaelAge = calcAge1(1986);
// console.log(michaelAge)

// function expression 
// we can wright the function in a different way without a name 
// const calcAge2 = function(birthYear){
//     return 2024 - birthYear
// }
// const michaelAge2 = calcAge2(1991);
// console.log(michaelAge,michaelAge2)

//! the Arrow function 
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear
// }
// const calcAge3 = birthYear => 2024 - birthYear;
// will save the return  in variable 
// const age3 = calcAge3(1986);
// console.log(age3);


//! calling function calling other function 
// lets add a function (that to cut fruite to small picess )

// function cutFruitPieces (fruit) {
//     return fruit*4;
// } 

// function fruitProcessor(apples, oranges) { // function declare with tow parameter 
// here add the function cutFruitpieces

// const applePieces = cutFruitPieces(apples);
// const orangePieces = cutFruitPieces (oranges);
// const juice = `juice with ${apples} appels and ${oranges} oranges`;
//     return (juice); // here what is the function will return (juice )
// }

//! calling function from other functin 
// function num 1 (expression function style )
// const calcAge = function (born) {// born = 1991
//     return 2037 - born;
// }
//birhYear here =1991    
// const yearsUntilR = function (birthYear, firstName) {
// her we called the first function (s)
//     const age = calcAge(birthYear)

//     const retirement = 65 - age; // we can here add a if statement
//     if (retirement > 0) {
//         return retirement;

//     } else {
//         return -1;
//     }
//return retirement;// we will but return inside the if 
// }

// console.log(yearsUntilR(1991, 'Michael'))
// console.log(yearsUntilR(1960, 'John'))


//? first challange in FUnction 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// to activate the function you have to put () and enter the score so the function can work 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// test the function 
//  console.log(scoreDolphins,scoreKoalas) 
//* now we check for the winner
// i used arrow function and  i  used if statement to run the check 
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win🏆 (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Win🏆 (${avgDolphins} vs. ${avgKoalas})`)
    } else {
        console.log('No one Wine ')
    }
}
// and here we connect the tow function 
checkWinner(scoreDolphins, scoreKoalas);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas)

// ! >>>>>>>Arrays<<<<<<<<<

//Ex
const calacAge = function (birthday) {
    return 2037 - birthday;
}
// here i create array to store the data 
// const years = [1990, 1967, 2002, 2018];
// here we create any new variable so we can connect the function (calacAge) with the array years 
// const age1 = calacAge(years[0]);
// const age2 = calacAge(years[1]);
// const age3 = calacAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// or we can do this we create variable ages as array and i add inside function calacAge and add inside the line Array
// const ages = [calacAge(years[0]), calacAge(years[1]), calacAge(years[years.length - 1])];
// console.log(ages);
// trying operation in array 


//! object in array 
const JoArray = [
    'Michael',
    'Mikhail',
    2037 - 1991,
    'teacher'
    ['Michael', 'Peter', 'steven']
];
// here we create a object (is key = value pair )
// const Michael = {
//     firstName: 'Michael',
//     lastName: 'Mikhail',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['john', 'peter', 'steven']
// };
// console.log(Michael);
// console.log(Michael.lastName)
//? <we can store a rebating part from the array (Name )in a new variable  >
// const keyName = 'Name';
// console.log(Michael['first' + keyName]);

// const interstedIn = prompt('what do you want to know about Michael?choose between firstName  , lastName, age, job and friends');
// when you use a[] so we can put any expression so JS can replace expression with actual value of variable
// console.log(Michael[interstedIn]);
// now js can read the input of user choose job and convert or go back to the array and find key (job ) and send back value (teacher)

// if (Michael[interstedIn]){
//     console.log(Michael[interstedIn]);
// }else{
//     console.log('Wrong request!');
// }

// ?add

// Michael.location = 'USA';
// console.log (Michael);

// ! object method

// const Michael = {
//     firstName: 'Michael',
//     lastName: 'Mikhail',
//     job: 'Teacher',
//     birthday:1986,
//     friends: ['john', 'peter', 'steven'],
//     hasDriverLicense:true,
// // ? is function to calculate age instied we put birthday variable in inside () we used [this .] so can pull birthdaY info from the array key 
//     calacAge:function(){
//         return 2037- this.birthday
//     }

// };
// // console.log(Michael.s());
// console.log(`Michael is a ${Michael.calacAge()} old ${Michael.job} , and he has a driver's License`)



// ! Looping arrays 
// calculate age using loop so here 
// const years =[1991,2007,1969,2020];// add the years 
// const age = [];// her is empty array لما تخلص حسابات ترجع هنا 

// for ( let i=0 ; i<years.length;i++){
// we used .push to use the empaty array 
// age.push (2037-years[i]);

// }

// console.log(age)

//! continue and break 

// const Michael = [
//     'mikhail',
//     2037 - 1986,
//     ' teacher',
//     ['joans', 'peter', 'steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < Michael.length; i++) {

//     if (typeof Michael[i] !== 'string') continue;


//     console.log(Michael[i], typeof Michael[i]);

// }

// ! looping backward and Loop in Loop 

const eleanor = [
    'Eleanor',
    'Mikhail',
    2027 - 2018,
    'Teacher',
    ['Nore', 'Nona ', 'Nana'],

];

for (let i = eleanor.length - 1; i >= 0; i--) {
    console.log(eleanor[i])
};

//! create loop inside loop 

// for (let exercise = 1; exercise <4 ; exercise++){
//     console.log(`------- loop 1 start ${exercise}` );
//     for (let rep = 1 ; rep<6 ; rep++){
//         console.log(`Excercise ${exercise}:lift wight repa ${rep}`);
//     }
// }

//!the while Loop

// for (let rep = 1 ; rep <=10 ; rep++) {
//     console.log(`Lifiting wight repatation ${rep}`);
// }

// will use example to roll a dice  until we roll a six 
// let rep = 1;
// while (rep <=10) {
//     console.log(`while: Lifiting wights Repatition ${rep}`);
//     rep++;
// }
// rowling dice random numbers 
let dice = Math.trunc(Math.random() * 6) + 1; // to got rid of the decimal part we use (math.trunc)


// create the loop 
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('loop is a bout to end ');
    }
}


// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals(tips and totals)
// Use the calcTip function we wrote before(included in the starter code) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
// BONUS:
// Write a function calcAverage which takes an array called arr as an argument.This function calculates the average of all numbers in the given array.This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:
// First, you will need to add up all values in the array.To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop.In each iteration, add the current value to the sum variable.This way, by the end of the loop, you have all values added together.
// To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements).
// Call the function with the totals array.


//? creTE  empty array > create loop > we have bills (numbers)
//? so the [i] only run for bills array size 
//? > create anew variable tip to connect the function(calcTip) with bills array 
//? and now we need to push the resualt to the empty array tips (Empty) we used tips.push 


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totall = [];

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totall.push(tip + bills[i]);
}
console.log(bills, tips, totall);


function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(evenOrOdd(5))

//? from code ware 

let sheepLog = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

// function count(sheepLog) {

//     let sheepCOUNT = 0; // here we Initialize counter
//     // loop through the array
//     for (let i = 0; i < sheepLog.length; i++) {
//         // check if the current element is true
//         if (sheepLog[i] === true) {
//             // increment count for true values 
//             sheepCOUNT += 1;
//         }
//     }
//     return sheepCOUNT; // return the final count 
// }

// let resualt = count(sheepLog) // call the function 
// console.log(resualt)
//?arrow function 
let count2 = (sheeepLog)=> 
    {let sheepCOUNT2 = 0; // here we Initialize counter
// loop through the array
for (let i = 0; i < sheepLog.length; i++) {
    // check if the current element is true
    if (sheepLog[i] === true) {
        // increment count for true values 
        sheepCOUNT2 += 1;
    }
}
return sheepCOUNT2; // return the final count 
}

let resualt = count2 (sheepLog) // call the function 
console.log(resualt)