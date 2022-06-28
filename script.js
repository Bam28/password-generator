// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById('password');
  
        /* Function to generate combination of password */
function generateP(sign, choiceCh) {
  var pass = '';
      var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= sign; i++) {
      var char = Math.floor(Math.random()
       * str.length + 1);
      pass += str.charAt(char);

switch(choiceCh.toLowerCase()) {
  case 'uppercase':
    return pass.toUpperCase();
    break;
  case 'lowercase':
    return pass.toLowerCase();
    break;
  default:
    return pass;
}

    }

        }


        function gfg_Run() {
          //passwordText.preventDefault();

          var sign = prompt("How many characters do you want?");
          if (isNaN(sign)){
            alert('Please input a number');
            passwordText.value = 'Incorrect password';
            return;
          }
          var choiceCh = prompt('Do you want your password to have Uppercase and/or Lowercase ?');




          passwordText.value = generateP(sign, choiceCh);

      }

      generateBtn.addEventListener("click", gfg_Run);
/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

*/