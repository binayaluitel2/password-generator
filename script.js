// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwLength = prompt("Please enter length of password between 8 and 128");

  pwLength = parseInt(pwLength);

  if (pwLength < 8 || pwLength > 128) {
    var pwLength = alert(
      "Please re-click 'Generate Password' and re-enter length of password between 8 and 128"
    );
  } else {
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numChar = "0123456789";
    var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var containsUpper = confirm("Do you want to include uppercases?");
    var containsNum = confirm("Do you want to include numbers?");
    var containsSpecial = confirm("Do you want to include special characters?");

    console.log(containsUpper);
    console.log(containsNum);
    console.log(containsSpecial);

    var pwString = lowerChar;
    var password = "";
    if (containsUpper && containsNum && containsSpecial) {
      pwString = (pwString + upperChar + numChar + specialChar);
      console.log(pwString);
    } else if (containsUpper && containsNum) {
      pwString = (pwString + upperChar + numChar);
      console.log(pwString);

    } else if (containsNum && containsSpecial) {
      pwString = (pwString + numChar + specialChar);
      console.log(pwString);

    } else if (containsUpper && containsSpecial) {
      pwString = (pwString + upperChar + specialChar);
      console.log(pwString);

    } else if (containsSpecial) {
      pwString = (pwString + specialChar);
      console.log(pwString);

    } else if (containsNum) {
      pwString = (pwString + numChar);
      console.log(pwString);

    } else if (containsUpper) {
      pwString = (pwString + upperChar);
      console.log(pwString);

    }

    for (var i = 0; i < pwLength; i++) {
      password += pwString.charAt(
        Math.random() * pwString.length
      );

    }
    console.log(password);
    return password;
  }
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
