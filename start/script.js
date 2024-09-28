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
const years = [1990, 1967, 2002, 2018];
// here we create any new variable so we can connect the function (calacAge) with the array years 
const age1 = calacAge(years[0]);
const age2 = calacAge(years[1]);
const age3 = calacAge(years[years.length - 1]);
console.log(age1, age2, age3);

// or we can do this we create variable ages as array and i add inside function calacAge and add inside the line Array
const ages = [calacAge(years[0]), calacAge(years[1]), calacAge(years[years.length - 1])];
console.log(ages);
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

const Michael = {
    firstName: 'Michael',
    lastName: 'Mikhail',
    job: 'Teacher',
    birthday:1986,
    friends: ['john', 'peter', 'steven'],
    hasDriverLicense:true,
// ? is function to calculate age instied we put birthday variable in inside () we used [this .] so can pull birthdaY info from the array key 
    calacAge:function(){
        return 2037- this.birthday
    }

};
// console.log(Michael.s());
console.log(`Michael is a ${Michael.calacAge()} old ${Michael.job} , and he has a driver's License`)


