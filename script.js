// Assignment Code
var generateBtn = document.querySelector("#generate");


const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";
const symbols = "!@#$%^&*()";

// test commit


function generatePassword() {
  var results = "";
  let validSize = false;

  while (validSize == false) {
    var passWordSize = window.prompt("How long would you like your password to be?");
    
    if (passWordSize == "" || passWordSize == null) {
      return null;
    }
    else {
      var charQty = parseInt(passWordSize);

      if (charQty > 7 && charQty < 129) {
        validSize = true;
        var upperCase = window.confirm("Would you like to include upper case letters?");
        var lowerCase = window.confirm("How about lower case?");
        var numeric  = window.confirm("Include numbers?");
        var specialCharacters = window.confirm("Special Characters?");
      
        var characters = "";

        if (upperCase) {
          characters += alphabetUpper;
        }
        if (lowerCase) {
          characters += alphabetLower;
        }
        if (numeric) {
          characters += numbers;
        }
        if (specialCharacters) {
          characters += symbols;
        }


        console.log(characters);


        if (characters == "") {
          results = null;
        }
        else {
          for (i = 0; i < charQty; i++) {
            results += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        console.log(results);

      } 
      else {
        window.alert("That is an invalid entry. Select a length between 8 and 128");
      }
    }
  }

  return results;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);