// // Q1.  Write a program to take “city” name as input from user. If user enters “Karachi”, 
// // welcome the user like this: “Welcome to city of lights”

// // Take input for the city name
// var cityName = prompt("Enter the city name:");

// // Check if the entered city is Karachi
// if (cityName && cityName.toLowerCase() === "karachi") {
//     document.write("<h2>Welcome to the city of lights!</h2>");
// } else {
//     document.write("<h2>Welcome!</h2>");
// }


// // Q2.  Write a program to take “gender” as input from user. If the user is male, give the 
// // message: Good Morning Sir. If the user is female, give the message: Good Morning 
// // Ma’am.

// // Take input for the gender
// var gender = prompt("Enter your gender (Male/Female):");

// // Check the gender and display appropriate greeting
// if (gender) {
//     if (gender.toLowerCase() === "male") {
//         document.write("<h2>Good Morning Sir!</h2>");
//     } else if (gender.toLowerCase() === "female") {
//         document.write("<h2>Good Morning Ma'am!</h2>");
//     } else {
//         document.write("<h2>Hello!</h2>");
//     }
// } else {
//     document.write("<h2>Hello!</h2>");
// }

// // Q3.  Write a program to take input remaining fuel in car (in litres) from user. If the current 
// // fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

//  // Take input for the remaining fuel in the car
//  var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

//  // Check if the remaining fuel is less than 0.25 liters
//  if (remainingFuel && parseFloat(remainingFuel) < 0.25) {
//      document.write("<h2>Please refill the fuel in your car!</h2>");
//  } else {
//      document.write("<h2>Safe travels!</h2>");
//  }



// // Q4.  Run this script, & check whether alert message would be displayed or not.  
// // // Record the outputs.  

// // var a = 4;
// // if (++a === 5){
// //     alert("given condition for variable a is true");
// // }

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }


// // b.  var b = 82;  
// // if (b++ === 83){  
// // alert("given condition for variable b is true");  
// // }  

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// // c.  var c = 12;  
// // if (c++ === 13){  
// // alert("condition 1 is true");  
// // }  
// // if (c === 13){  
// // alert("condition 2 is true");  
// // }  
// // if (++c < 14){  
// // alert("condition 3 is true");  
// // }  
// // if(c === 14){  
// // alert("condition 4 is true");  
// // }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// // d.  var materialCost = 20000;  
// // var laborCost = 2000;  
// // var totalCost = materialCost + laborCost;  
// // if (totalCost === laborCost + materialCost){  
// // alert("The cost equals");  
// // }  

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// // e.  if (true){ 
// //  alert("True");  
// // } if (false){  
// // alert("False");  
// // } 

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// // f.  if("car" < "cat"){  
// // alert("car is smaller than cat");  
// // } 
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }



// // Q5.  Guess game:  
// // Store a secret number (ranging from 1 to 10) in a variable.  
// // Prompt user to guess the secret number.  
// // a. If user guesses the same number, show “Bingo! Correct answer”.  
// // b. If the guessed number +1 is the secret number, show “Close enough to the 
// // correct answer”.

// // Generate a secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt the user to guess the number
// var userGuess = prompt("Guess the secret number (between 1 and 10):");

// // Convert the user's input to an integer
// userGuess = parseInt(userGuess);

// // Check if the guess is correct or close enough
// if (userGuess === secretNumber) {
//     document.write("<h2>Bingo! Correct answer.</h2>");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("<h2>Close enough to the correct answer.</h2>");
// } else {
//     document.write("<h2>Sorry, incorrect guess. The correct answer was " + secretNumber + ".</h2>");
// }

// // Q6.  Write a program to check whether the given number is divisible by 3. Show the 
// // message to the user if the number is divisible by 3. 

//     // Prompt the user to enter a number
//     var userNumber = prompt("Enter a number:");

//     // Convert the user's input to an integer
//     userNumber = parseInt(userNumber);

//     // Check if the number is divisible by 3
//     if (userNumber % 3 === 0) {
//         document.write("<h2>The number " + userNumber + " is divisible by 3.</h2>");
//     } else {
//         document.write("<h2>The number " + userNumber + " is not divisible by 3.</h2>");
//     } 



// // Q7.  Write a program that checks whether the given input is an even number or an odd 
// // number.

// // Prompt the user to enter a number
// var userInput = prompt("Enter a number:");

// // Convert the user's input to an integer
// var number = parseInt(userInput);

// // Check if the number is even or odd
// if (isNaN(number)) {
//     document.write("<h2>Please enter a valid number.</h2>");
// } else if (number % 2 === 0) {
//     document.write("<h2>The number " + number + " is even.</h2>");
// } else {
//     document.write("<h2>The number " + number + " is odd.</h2>");
// }



// // Q8.  Write a program that takes temperature as input and shows a message based on 
// // following criteria  
// // a. T > 40 then “It is too hot outside.”  
// // b. T > 30 then “The Weather today is Normal.”  
// // c. T > 20 then “Today’s Weather is cool.”  
// // d. T > 10 then “OMG! Today’s weather is so Cool.” 


//         //Prompt the user to enter the temperature
//         var temperature = prompt("Enter the temperature:");

//         // Convert the user's input to an integer
//         temperature = parseInt(temperature);

//         // Check the temperature and display the appropriate message
//         if (isNaN(temperature)) {
//             document.write("<h2>Please enter a valid temperature.</h2>");
//         } else if (temperature > 40) {
//             document.write("<h2>It is too hot outside.</h2>");
//         } else if (temperature > 30) {
//             document.write("<h2>The weather today is normal.</h2>");
//         } else if (temperature > 20) {
//             document.write("<h2>Today's weather is cool.</h2>");
//         } else if (temperature > 10) {
//             document.write("<h2>OMG! Today's weather is so cool.</h2>");
//         } else {
//             document.write("<h2>It's freezing outside!</h2>");
//         }

// // 9.  Write a program to create a calculator for +,-,*, / & % using if statements. Take 
// // the following input:  
// // a. First number  
// // b. Second number  
// // c. Operation (+, -, *, /, %) Compute & show the calculated result to user

// // Prompt the user to enter the first number
// var firstNumber = prompt("Enter the first number:");

// // Prompt the user to enter the second number
// var secondNumber = prompt("Enter the second number:");

// // Convert the user's input to numbers
// firstNumber = parseFloat(firstNumber);
// secondNumber = parseFloat(secondNumber);

// // Prompt the user to enter the operation
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Perform the calculation based on the operation
// var result;

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     result = "Please enter valid numbers.";
// } else {
//     if (operation === '+') {
//         result = firstNumber + secondNumber;
//     } else if (operation === '-') {
//         result = firstNumber - secondNumber;
//     } else if (operation === '*') {
//         result = firstNumber * secondNumber;
//     } else if (operation === '/') {
//         if (secondNumber === 0) {
//             result = "Cannot divide by zero.";
//         } else {
//             result = firstNumber / secondNumber;
//         }
//     } else if (operation === '%') {
//         result = firstNumber % secondNumber;
//     } else {
//         result = "Invalid operation. Please enter +, -, *, /, or %.";
//     }
// }

// // Display the result
// document.write("<h2>Result: " + result + "</h2>");