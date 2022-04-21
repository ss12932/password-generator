//Acceptance Criteria

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code

//Variable Declarations
var generateBtn = document.querySelector("#generate");
const letters = ["abcdefghijklmnopqrstuvwxyz"]; //26 chars
const numbers = ["1234567890"]; //10 chars
const specials = ["!#$%&()*+,-./:;<=>?@[]^_`{|}~"]; //29 chars
// console.log(specials[0].length);
//removed space, double quotes, single quotes to avoid bugs with program.
let passwordCharKey = [];

function generatePassword() {
  const passwordLength = +prompt(
    "Please select the length of your password. Must be between 8 characters and no more than 128 characters. 8 <= length < 128"
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please select a password length with the following requirements: Must be between 8 characters and no more than 128 characters"
    );
    generatePassword();
  } else {
    //once user selects password length and passes following criteria, proceed with further prompts selecting character types.
    let lowerCase = confirm(
      "Use lowercase letters? press OK for yes or press Cancel for No"
    );
    //returns boolean. can use for if/else checks to proceed to next prompt

    if (lowerCase) {
      passwordCharKey.push.apply(passwordCharKey, letters);
      // console.log(passwordCharKey);
    }
    let upperCase = confirm(
      "Use uppercase letters? press OK for yes or press Cancel for No"
    )
    
    if (upperCase) {
      passwordCharKey.push.apply(passwordCharKey, letters.toUppercase());
      // console.log(passwordCharKey);
    
    ;
  }
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
