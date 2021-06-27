var pwLength=0; /*Length of the password*/ var passWord=""; //Initial password
var incUpperCase; var incLowerCase; var incNumbers; var incSpecialChar; //Boolean variable for password combination
var pwCombination = [0,0,0,0]; //numbers,uppercase,lowercase,special characters
var numberList=["0","1","2","3","4","5","6","7","8","9"];
var capLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var smallLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar=["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","\\","{","}","|",";","\'",":","\"","\,",".","/","<",">","?"];
var listOfChars; // This changes to numberList/capLetters/smallLetters/specialChar
var pwArray= []; // This is an array comprises of other arrays from above, based on user input
var pwArrayIndex=0; // This is the index for the above pwArray
var count; // This counts the number of times if statement in generateFirstChars fn runs
var generateBtn = document.querySelector('#generate');

// Main function to generate the password, this has multiple functions inside
function generatePassword()
{
    passWord=""; pwCombination=[0,0,0,0]; pwArray=[]; count=0; pwArrayIndex=0;
    
    pwLength=window.prompt("Please enter the desired length of your password?");
    // Validate the length of the password
    while(pwLength<8 || pwLength>128)
    {
        window.alert("Enter a number between 8 to 128!");
        pwLength=window.prompt("Please enter the desired length of your password?");
    }

    // Get user input for numbers, uppercase, lowercase and special characters
    getUserInput();
    // Validate if the user selects atlease one option out of four
    while(!(incLowerCase || incUpperCase || incNumbers || incSpecialChar))
    {
        window.alert("You need to select at lease one from numbers\n uppercase, lowercase and special characters.");
        getUserInput();
    }

    /* Generate a password combination and a multidimesional array based of user input
       Refer to the function for more details */
    updateCombination(incNumbers,0,numberList);
    updateCombination(incUpperCase,1,capLetters);
    updateCombination(incLowerCase,2,smallLetters);
    updateCombination(incSpecialChar,3,specialChar);

    // Generate one character from each category to satisfy the user input - validation 
    generateFirstChars(0,numberList); 
    generateFirstChars(1,capLetters); 
    generateFirstChars(2,smallLetters); 
    generateFirstChars(3,specialChar); 

    // Generate the remaining number of characters randomly from random arrays
    var remCharacters=pwLength-count; //actual number of times the below for loop would run
    var rIndex1, rIndex2, randomArray;
   
    for(i=0;i<remCharacters;i++)
    {
      rIndex1=Math.floor(Math.random() * pwArray.length); //Pickup any array randomly according to the user input
      randomArray=pwArray[rIndex1];
      rIndex2= Math.floor(Math.random() * randomArray.length); //Pickup random index for the randomly selected above array
        
      passWord=passWord+(pwArray[rIndex1][rIndex2]); 
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
  if(isRequired)
  {
    pwCombination[index]=1;
    pwArray[pwArrayIndex]=listOfChars;
    pwArrayIndex++;
  }
}

/*This function is used to randomlygenerate the first character from each category given by the user and it will
 make sure the password include at least one character from each category that user entered.*/
function generateFirstChars(aIndex,refArray)
{
  if(pwCombination[aIndex]==1)
  {
    var index=Math.floor(Math.random() * refArray.length);
    var firstChar=refArray[index];
    passWord= passWord+""+firstChar+"";
    count=count+1; 
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