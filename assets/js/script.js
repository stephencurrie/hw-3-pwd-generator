// high level methodology:
// 1) use window alerts to capture the password criteria
// 2) store criteria in a boolean variables
// 3) construct a viable array from existing arrays based on the criteria entered
// 4) create a random character from that array by using a for loop with Math.floor(Math.random) and then store it in variable
// 5) create the password array by using push to extend that variable for the length of the input length
// 6) use query selectors to output to the web site



// variables to store all the initial arrays

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","X"];
var numeric = [0, 1, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!","@","$","*","#","!","%","(",")","+",",","-",".","/",":",";","<","=",">","?","}","^","{","~"];
var newArray = []; // <- this is the array that is created from the inputs of all the selection criteria
var generate = []; // <- this is the array that is the ouput that converts to the final one


// variables to store the selection criteria

var hasLower = ''; // <- boolean
var hasUpper = ''; // <- boolean
var hasNumeric = ''; // <- boolean
var hasSpecial = ''; // <- boolean
var passwordLength = ''; // <- number minimum length = 8 maximum length = 128

function generatePassword () {

// use windows alerts to capture the criteria
// lower case

var hasLower = window.confirm("Do you want your password to contain lower case characters?")
if (hasLower == true) {
  window.alert("Your password will contain lower case characters")
}
else {
  window.alert("Your password will not contain lower case characters")
}

// upper case

var hasUpper = window.confirm("Do you want your password to contain upper case characters?")
if (hasUpper == true) {
  window.alert("Your password will contain upper case characters")
}
else {
  window.alert("Your password will not contain upper case characters")
}

// numeric

var hasNumeric = window.confirm("Do you want your password to contain numeric characters?")
if (hasNumeric == true) {
  window.alert("Your password will contain numeric characters")
}
else {
  window.alert("Your password will not contain numeric case characters")
}

//special

var hasSpecial = window.confirm("Do you want your password to contain special characters?")
if (hasSpecial == true) {
  window.alert("Your password contain special characters")
}
else {
  window.alert("Your password will not contain special characters")
}

var passwordLength = window.prompt("Please enter the length of your password (between 8 and 128?");

console.log(hasLower);
console.log(hasUpper);
console.log(hasNumeric);
console.log(hasSpecial);
console.log(passwordLength);



// this builds the array based on the selection criteria

password = generatePwd(hasLower, hasUpper, hasNumeric, hasSpecial);  

function generatePwd(hasLower, hasUpper, hasNumeric, hasSpecial) { 

  if (hasLower) newArray = newArray.concat(lowerCase);
  if (hasUpper) newArray = newArray.concat(upperCase);
  if (hasNumeric) newArray = newArray.concat(numeric);
  if (hasSpecial) newArray = newArray.concat(specialChar);
  
}





// this creates a series of random indexes and then builds the array to the input length.



   for(let i = 0; i < passwordLength; i++) {
     let randomIndex =  Math.floor(Math.random() * newArray.length);
     var random = newArray[randomIndex];
     generate.push(random);                 //<- the array of the new password is "generate"
   
}

var newpwd = generate.join('');         //<- converts the generate array into a string 

console.log(newpwd);
console.log(typeof newpwd);
return newpwd;
}



// // Assignment Code - This selects the generateBtn in the HTML
var generateBtn = document.querySelector("#generate");

 // Write password to the #password input - This writes all the code to get the password and store it in a variable called password.  it then takes the value of that password and writes it to passwordText and places it in the form in the HTML
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 // Add event listener to generate button.  This kicks off the writePassword function that in turn kicks off the generatePassword function that starts all the code

generateBtn.addEventListener("click", writePassword);