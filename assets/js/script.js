// Declaration of variable and arrays
var pwLength=0; //Length of the password
var passWord=""; //Initial password
/*Boolean variables stating if the user needs any type of letters, 
numbers or special characters */
var incUpperCase; var incLowerCase; var incNumbers; var incSpecialChar;
var pwCombination = [0,0,0,0]; //numbers,uppercase,lowercase,special characters
var numberList=["0","1","2","3","4","5","6","7","8","9"];
var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var smallLetters=["a","b","c","d","e","f","g","h","i","j","k","l",
                "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar=["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",
                  ">","?","@","[","]","^","_","`","{","|","}","`"];
var listOfChars; 
var pwArrayIndex=0;

var remCharacters=0;
var pwArray= [];
var outerA;
var innerA;
var letterss="";

var generateBtn = document.querySelector('#generate');



// Arrays for capital letters and special characters

function generatePassword()
{
    pwLength=window.prompt("Please enter the desired length of your password?");
    // Validate the length of the password
    while(pwLength<8 || pwLength>128)
    {
        window.alert("Enter a number between 8 to 128!");
        pwLength=window.prompt("Please enter the desired length of your password?");
    }

    // Get user input for numbers, uppercase, lowercase and special characters
    getUserInput();
    // Validate if the user select one option out of four
    while(!(incLowerCase || incUpperCase || incNumbers || incSpecialChar))
    {
        window.alert("You need to select at lease one from numbers\n uppercase, lowercase and special characters.");
        getUserInput();
    }

    // Generate a password combination and a multidimesional array based of user input
    // Refer to the function for more details
    updateCombination(incNumbers,0,numberList);
    updateCombination(incUpperCase,1,capLetters);
    updateCombination(incLowerCase,2,smallLetters);
    updateCombination(incSpecialChar,3,specialChar);

if(pwCombination[0]==1){
var num=Math.floor(Math.random() * 10);
passWord= passWord+""+num+"";
remCharacters=remCharacters+1;
// pwletter[k]
}

if(pwCombination[1]==1){
var num=Math.floor(Math.random() * 26);
var capL=capLetters[num];
passWord= passWord+""+capL+"";
remCharacters=remCharacters+1;
}

if(pwCombination[2]==1){
var num=Math.floor(Math.random() * 26);
var capS=capLetters[num].toLowerCase();
passWord= passWord+""+capS+"";
remCharacters=remCharacters+1;
}

if(pwCombination[3]==1){
var num=Math.floor(Math.random() * 28);
var S=specialChar[num];
passWord= passWord+""+S+"";
remCharacters=remCharacters+1;
}

var actualRemain=pwLength-remCharacters;
var innerK, outerK;
 
j=0;
for(i=0;i<actualRemain;i++)
{
  innerK=Math.floor(Math.random() * pwArray.length);
  var lengthsub=pwArray[innerK];
  outerK=Math.floor(Math.random() * lengthsub.length);
  passWord=passWord+(pwArray[innerK][outerK]); 
}
return passWord;
}

// This function is used to get the user input for password
function getUserInput()
{
  incNumbers = window.confirm("Do you need numbers in your password?");
  incUpperCase = window.confirm("Do you need uppercase letters in your password?");
  incLowerCase = window.confirm("Do you need lowercase letters in your password?");
  incSpecialChar = window.confirm("Do you need special characters in your password?");
}

/*This function is used to generate a password combination and an array of arrays relating to that combination.
  example:pwCombination = [0,1,0,1] --> Customer needs NO numbers, YES uppercase, NO lowercase, YES special chars.
          According to above the pwArray is [[0,capLetters],[1,specialChar]] */
function updateCombination(isRequired, index, listOfChars)
{
  if(isRequired){
    pwCombination[index]=1;
    pwArray[pwArrayIndex]=listOfChars;
    pwArrayIndex++;
  }
}

// Write password to the #password input given
function writePassword() 
{
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);