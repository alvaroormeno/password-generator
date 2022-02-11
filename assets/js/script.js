// Assignment code here

const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// PASSWORD LENGTH FUNCTION

function userLength() {

  var passwordLength = window.prompt("Please input the number of characters you want for your password. MIn 8 - MAX 128 Characters");

  if (passwordLength === null || passwordLength === "") {
  window.alert("Please provide a valid answer!")
  return userLength();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The password can only have a MINIMUM of 8 characterd and a MAXIMUM of 128 characters! Please provide a valid answer!");
    return userLength()
  }
  console.log(passwordLength);
  return passwordLength;

};


//userLength();


// OTHER ATTRIBUTES FUNCTION

function otherAttributes() {

  var moreOptions = {

    combineOptions: [],
    wantUpperCase: window.confirm("Would you like to include upper case letters?"),
    wantLowerCase: window.confirm("Would you like to include lower case letters"),
    wantNumbers: window.confirm("Would you like to include numbers?"),
    wantSpecialCharacters: window.confirm("Would you like to include special characters?"),
  }

  if (moreOptions.wantLowerCase === false && moreOptions.wantLowerCase === false && moreOptions.wantNumbers === false && moreOptions.wantSpecialCharacters === false) {
    window.alert("At least one of the options must be used!");
    return otherAttributes()
  }



}










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
