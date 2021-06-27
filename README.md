# Password Generator using javascript

## Overview
This is a project carried out to create a password according to the combination requested by the user. The password generation is done by using javascript and this web page is dynamically updated in HTML. With regards to the styles, CSS has been used.

## Important Links
Refer to the following links:
* [Password Generator - Deployed page](https://vish-opatha.github.io/password-generator/)
* [Password Generator - Github repository](https://github.com/vish-opatha/password-generator)

## Mock-up
The following video clip shows how password generator works.
![Password Generator - Video.](.assets/videos/mockup.mp4)
---
 Highlights :
  1. Get password length
  2. Validate password length
  3. Get password combination or categories
  4. Validate if the user has selected at least one category out of four(numbers,uppercase,lowercase and special characters)
  5. Generate password (Algorithm is designed in a way that it generates first few letters to satisfy the user combination after that draws random characters from the user selected categories)
    ex : If the user selects numbers, uppercase and special with a password lenght of 10, first 3 characters will be any number, any uppercase, any special character and other seven letters can be eighter numbers, uppercase or special characters randomly drawn out.


## Technical Acceptance - Work Done
1. Javascript password generation function is attached to the "Generate password" button and it puts forward series of    prompts to get the user inputs.
2. First prompt is used the get the required lenght of the password.
3. The length of password is validated to make sure that it is between 8 to 128. Otherwise the function will not put forward other prompts. 
4. Once after the user enters the correct password length, then other prompts to get the confirmation for password criteria will appear one by one (numbers, uppercase, lowercase and special character)
5. The criteria is validated before the function generates the password, to make sure that at least one character type is selected by user. If user did not select any category, the prompts will be repeated until one character category is selected out of four.
6. Depending upon the password criteria, in the first stage, one character from each category is generated randomly to make sure the password meets the criteria of the user. In the second stage, randomly characters are drawn from random arrays in the given criteria.
7. Once after the password is generated, it is displayed on the HTML.
8. There are no errors logged on the console after the password is displayed.
8. Several amendments are done in the CSS file to make sure that the user interface is responsive.
9. Additionally, I have added a favicon icon to this page.

## Deployment - Work Done
1. Application is deployed at live URL using Github pages, and the link is in the "Important links" section.
2. No errors were found in loading and executing the function.
3. Link to the Github URL is given and the repository and it contains the whole code.

## Application Quality - Work Done
1. Deployed page resembles the mock-up in design and functionality.
2. Prompts and alerts are put forward accordingly, so that user can navigate easily and it improves user experince.
3. CSS file has been amended to improve the responsive nature of the application.

## Repository Quality - Work Done
1. Repository is named as password-generator.
2. Regarding the folder structure, "Assets" includes separate folders for CSS,Javascript and icons. 
4. Tags are indented accordingly and comments are included while following the best practices for naming conventions.
5. Changes were committed multiple times with messages.

- - -
Created by Vish Opatha (Last updated on 27 June 2021).
