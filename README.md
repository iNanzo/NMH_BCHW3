# 03 JavaScript: Password Generator

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## My Task

I first made global variables for all the possible characters and the password length, as well as booleans for confirmation on including said characters. From there I made a function that would activate when the button was pressed, prompting the user for their choices and changing the variables/booleans; from there it would perform the generatePassword function.

I initially struggled on a way to pull individual characters from the strings while making the generatePassword function , so I made new array variables that converted each individual character and put them into said array. With these separate arrays, I made use of if statements that would add them to the mergedArray if the booleans for respective characters were true.

Finally, to generate the password itself I made a new function that would grab a character from the mergedArray, and used said function to add it onto the string generatedPassword in a for loop making use of the passwordLength.
