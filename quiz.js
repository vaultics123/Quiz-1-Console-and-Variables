const prompt = require('prompt-sync')();


//Program 1: Temperature Converter
let t = number(prompt("Please enter the temperature in degrees Fahrenheit: ")); // t represents the input given by the user - in this case, the temperature in degrees Fahrenheit.

let c = (5*(t-32))/9; // Converts the user input in degrees Fahrenheit to degrees Celsius, then stores it in a variable called "c".

console.log(t, "degrees Fahrenheit is equal to", c, "in degrees Celsius."); // Outputs the user input in degrees Celsius


//Program 2: Grade Calculator
let grade = prompt("Please enter your grade percentage this school year (without the percent symbol): "); // Gets grade from user and stores it in a variable called "grade"

if (100 <= grade <= 90){
    console.log("You have gotten an A this year! Congratulations!") // If the grade is between 90%-100%, this line is outputted and the user is given an A.
}
else if (89 <= grade <= 80){
    console.log("You have gotten a B this year! You have reached good expectations.") // If the grade is between 80%-89%, this line is outputted and the user is given an B.
}
else if (79 <= grade <= 70){
    console.log("You have gotten a C this year. You might have to work on your expectations for next year.") // If the grade is between 70%-79%, this line is outputted and the user is given an C.
}
else if (69 <= grade <= 60){
    console.log("You have gotten a D this year. This is not good, but you still have a chance for next year.") // If the grade is between 60%-69%, this line is outputted and the user is given an D.
}
else if (59 <= grade <= 0){
    console.log("You have gotten an F this year. This is very bad. You have basically failed.") // If the grade is below 60%, this line is outputted and the user is given an F.
}
else{
    console.log("This value is undefined in terms of the grading scale.") // If the grade is undefined (ie. user inputs a negative number), this message will be outputted to the user.
}


//Program 3: Leap Year Checker
let year = parseInt(prompt("Please enter the current year: "));
if (year % 4 === 0){
    console.log("The year", year, "is a leap year.") // Uses modulus operation to get the leap year, since every leap year is divisible by four.
}
else{
    console.log("The year", year, "is not a leap year.") // Prints if remainder is not 0, meaning the year is not divisible by four (not a leap year).
}


//Program 4: Largest Number Finder
let num1 = number(prompt("Please enter a random number: ")); // Asks for the first number from the user and stores it in a variable.

let num2 = number(prompt("Please enter the second random number: ")); // Asks for the second number from the user and stores it in a different variable.

let num3 = number(prompt("Please enter the third random number: ")); // Asks for the third number from the user and stores it in another different variable.

if (num1 > num2){
    if (num1 > num3){
        console.log(num1, "is the greatest number.") // Checks if num1 is greater than both num2 and num3. If so, it outputs num1 as the greatest number.
    }
}
else if (num1 > num3){
    if (num1 > num2){
        console.log(num1, "is the greatest number.") 
    }
}

else if (num2 > num1){
    if (num2 > num3){
        console.log(num2, "is the greatest number.") // Checks if num2 is greater than both num1 and num3. If so, it outputs num2 as the greatest number.
    }
}
else if (num2 > num3){
    if (num2 > num1){
        console.log(num2, "is the greatest number.")
    }
}

else if (num3 > num2){
    if (num3 > num1){
        console.log(num3, "is the greatest number.") // Checks if num3 is greater than both num1 and num2. If so, it outputs num3 as the greatest number.
    }
}
else if (num3 > num1){
    if (num3 > num2){
        console.log(num3, "is the greatest number.")
    }
}