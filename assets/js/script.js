// high level methodology:
// 1) use window alerts to capture the password criteria
// 2) store criteria in a boolean
// 3) construct a viable array from existing arrays based on the criteria entered
// 4) create a random element from that array by using a for loop with Math.floor(Math.random) and then store it in variable
// 5) create the password array by using push to extend that variable for the length of the input length
// 6) use query selectors and document.write to output to the web site



// variables to store all the initial arrays

var lowerCase = ["a","b","c","d"];
var upperCase = ["A","B","C","D"];
var numeric = [0, 1, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["$","@","!","*"];
var generate = []; // <- this is the array that is the ouput that converts to the final one

// variables to store the selection criteria

var hasLower = '';
var hasUpper = '';
var hasNumeric = '';
var hasSpecial = '';
var passwordLength = 17; // <- minimum length = 8 maximum length = 128

// this builds the array based on the selection criteria
// NEED TO BUILD THIS
  
// this creates a series of random indexes and then builds the array to the input length
// this is just a place holder for now

  for(let i = 0; i < passwordLength; i++) {
    let lowerIndex =  Math.floor(Math.random() * lowerCase.length);
    var lower = lowerCase[lowerIndex];
    generate.push(lower);
   
}


console.log(generate);

  
// this takes the output and places it on the website


// this is the original code commented out for now

// // Assignment Code
//var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//
//}
//
// // Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);