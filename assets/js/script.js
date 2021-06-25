// Declaration of variable and arrays
var pwLength; //Length of the password
var passWord=""; //Initial password
/*Boolean variables stating if the user needs any type of letters, 
numbers or special characters */
var incUpperCase; var incLowerCase; var incNumbers; var incSpecialChar;
var isLengthCorrect;

// Arrays for capital letters and special characters
var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar=["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",
                  ">","?","@","[","]","^","_","`","{","|","}","`"];

pwLength=window.prompt("Please enter the desired length of your password?");

while(pwLength<8 || pwLength>128)
{
  window.alert("Enter a number between 8 to 128!");
  pwLength=window.prompt("Please enter the desired length of your password?");

}

incUpperCase = window.confirm("Do you need uppercase letters in your password?");
incLowerCase = window.confirm("Do you need lowercase letters in your password?");
incNumbers = window.confirm("Do you need numbers in your password?");
incSpecialChar = window.confirm("Do you need special characters in your password?");
genPassWordS(pwLength);

//Generate random numbers from 0 to 10
function genPassWordN(pwLength)
{
  for(var i=0;i<pwLength;i++)
  {
      var num=Math.floor(Math.random() * 10);
      passWord= passWord+""+num+"";
  }
  
}

function genPassWordC(pwLength)
{
  for(var i=0;i<pwLength;i++)
  {
      var num=Math.floor(Math.random() * 24);
      var capL=capLetters[num];
      passWord= passWord+""+capL+"";
  }
  
}

function genPassWordL(pwLength)
{
  for(var i=0;i<pwLength;i++)
  {
      var num=Math.floor(Math.random() * 24);
      var lowL=capLetters[num];
      passWord= passWord+""+lowL+"";
  }
  passWord=passWord.toLowerCase();
  
}

function genPassWordS(pwLength)
{
  for(var i=0;i<pwLength;i++)
  {
      var num=Math.floor(Math.random() * 28);
      var lowL=specialChar[num];
      passWord= passWord+""+lowL+"";
  }
}

console.log(passWord);


//given-------------------------------------------------
// var generateBtn = document.querySelector('#generate');
//----------------------------------------------------

// Write password to the #password input given
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
