// Assignment Code
var generateBtn = document.querySelector("#generate");


const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbols = "!@#$%^&*()";

function generatePassword() {
  var results = "";
  var passWordSize = window.prompt("How long would you like your password to be?");
  var charQty = parseInt(passWordSize);

  if (charQty > 7 && charQty < 129) {
    var upperCase = window.confirm("Would you like to include upper case letters?");
    var lowerCase = window.confirm("How about lower case?");
    var numeric  = window.confirm("Include numbers?");
    var specialCharacters = window.confirm("Special Characters?");
  
    var i = 0;
    while (i < charQty) {

    if (upperCase) {
      results += alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
      i++;
      if (i == charQty) {
        break;
      }
    }
    if (lowerCase) {
      results += alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
      i++;
      if (i == charQty) {
        break;
      }
    }
    if (numeric) {
      results += numbers[Math.floor(Math.random() * numbers.length)];
      i++;
      if (i == charQty) {
        break;
      }
    }
    if (specialCharacters) {
      results += symbols[Math.floor(Math.random() * symbols.length)];
      i++;
      if (i == charQty) {
        break;
      }
    }


  }
    // var i = 0;
    // while (i < charQty) {
      
    //   if (upperCase == true) {
    //     results += alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
    //     i++;
    //   }
    //   if (lowerCase == true) {
    //     results += alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
    //     i++;
    //   }
    //   if (numeric == true) {
    //     results += numbers[Math.floor(Math.random() * numbers.length)];
    //     i++;
    //   }
    //   if (specialCharacters == true) {
    //     results += symbols[Math.floor(Math.random() * symbols.length)];
    //     i++;
    //   }
    // }
    console.log(results);
  } 
  else {
    window.alert("That is an invalid entry. Select a length between 8 and 128");
    return generatePassword();
  }
  return results;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);