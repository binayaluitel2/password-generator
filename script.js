// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
	     var pwdlength = prompt("Please enter length of password between 8 and 128");

     pwdlength=parseInt(pwdlength);

     if (pwdlength < 8 || pwdlength > 128) {
     		     var pwdlength = alert("Please reclick 'Generate Password' and re-enter length of password between 8 and 128");

     }

   var password = 'passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword';


  return password;

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    // var password = "generatePassword";

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
