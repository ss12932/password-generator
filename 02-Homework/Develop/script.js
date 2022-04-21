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
let passwordChar = [];

function generatePassword() {
  const passwordLength = +prompt(
    "Please select the length of your password. Must be between 8 characters and no more than 128 characters. 8 <= length <= 128"
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please select a password length with the following requirements: Must be between 8 characters and no more than 128 characters"
    );
    generatePassword();
  } else {
    //once user selects password length and passes following criteria, proceed with further prompts selecting character types.
    let lcPrompt = confirm(
      "Use lowercase letters? press OK for yes or press Cancel for No"
    );
    //returns boolean. can use for if/else checks to proceed to next prompt

    if (lcPrompt) {
      passwordChar.push.apply(passwordChar, letters);
      console.log(passwordChar);
    }
    let ucPrompt = confirm(
      "Use uppercase letters? press OK for yes or press Cancel for No"
    );

    if (ucPrompt) {
      passwordChar.push.apply(
        passwordChar,
        letters.map((letter) => letter.toUpperCase())
      );
      console.log(passwordChar);
    }

    let spPrompt = confirm(
      "Use Special characters? !#$%&()*+,-./:;<=>?@[]^_`{|}~ press OK for yes or press Cancel for No"
    );

    if (spPrompt) passwordChar.push.apply(passwordChar, specials);
    console.log(passwordChar);
  }

  //input validation - check at least one char type selected or empty array.

  if (passwordChar.length === 0) {
    alert(
      "Please select at least one character type or else no password will be generated."
    );
    generatePassword();
  } else {
    passwordChar = passwordChar.flatMap((cSet) => cSet.split(""));
    // console.log(passwordChar);
    let passwordKey = "";
    for (let i = 0; i < passwordLength; i++) {
      passwordKey +=
        passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return passwordKey;
  }
}

// Write password to the #password input
function writePassword() {
  //reset previous selected password characters
  passwordChar = [];
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
