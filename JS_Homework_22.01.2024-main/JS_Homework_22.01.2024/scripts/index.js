// ---- TASK 1 ---- ("Hello, " + name)
// let userName = prompt("Please input your name:", "<write your name here>");
// alert("Hello, " + userName);


// ---- TASK 2 ---- (What is your age now)
// const year = 2024;
// let bornYear = prompt("Please input your born year:", "<write born year here>");
// let userAge = year - bornYear;
// alert("Your age is " + userAge);


// ---- TASK 3 ---- (Count perimetr of square)
// let squareLength = prompt("Please input the length of the side of the square:", "<write side length here");
// let perimetr = squareLength * 4;
// alert("Perimetr of the square is " + perimetr);


// ---- TASK 4 ---- (Count area of circle)
// let radius = prompt("Please input radius of circle:", "<write radius here>");
// let area = Math.PI * Math.pow(radius, 2);
// alert("Area of circle is " + area);


// ---- TASK 5 ---- (With what speed must you drive the distance during certain time)
// let distance = prompt("Please input distance between cities:", "<write distance here>");
// let timeExpectation = prompt("Please input expectation time to drive this distance:", "<write expectation time here>");
// let forcedSpeed = distance / timeExpectation;
// alert("Forced speed to drive " + distance + "km during " + timeExpectation + "h is " + forcedSpeed + "km/h");


// ---- TASK 6 ---- (Dollar --> Euro)
// const dollarExchangeRate = 0.91; // Dollar --> Euro
// let dollars = prompt("Please input amount of dollars:", "<write amount here>");
// let dollarsToEuros = dollars * dollarExchangeRate;
// alert("Dollars: " + dollars + "$ --> Euros: " + dollarsToEuros + "€");


// ---- TASK 7 ---- (How many files can contain in flash drive)
// const file = 820 // MB
// let flashStorage = prompt("Please input flash storage in GB:", "<write storage here>");
// let fileAmountOnFlashDrive = Math.floor((flashStorage * 1000) / file); // Convert to MB and then divide by an integer
// alert("Amount of files, which can contains in flash drive: " + fileAmountOnFlashDrive);


// ---- TASK 8 ---- (How much chocolate you can buy)
// let userMoney = prompt("Please input your amount of money($):", "<write amount here>");
// let chocolateBar = prompt("Please input price of chocolate bar:", "<write price here>");
// let amount = Math.floor(userMoney / chocolateBar);
// let change = userMoney % chocolateBar;
// alert("Amount of chocolate bars that you can buy is " + amount + "\nChange from the purchase is " + change);


// ---- TASK 9 ---- (Reverse number use "%")
// let number = prompt("Input a three-digit number:", "<write number here>");
// if (number.toString().length == 3) {
//     let thirdDigit = number % 10;       
//     let secondDigit = Math.floor(number / 10) % 10;
//     let firstDigit =  Math.floor(number / 100) % 10;

//     let reverseNumber = (((thirdDigit * 10) + secondDigit) * 10) + firstDigit;
//     alert("Reverse number: " + reverseNumber);
// }else {
//     alert("Your number is non three-digit!!!" + "\nERROR!!!");
// }


// ---- TASK 10 ---- (Even or Odd number don't use "if" or "switch")
// let number = prompt("Input integer:", "<write integer here>");
// let even = (number % 2 == 0);
// let odd = (number % 2 !== 0);
// alert("Even: " + even + "\nOdd: " + odd); 