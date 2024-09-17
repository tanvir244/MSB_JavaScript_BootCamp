MSB JavaScript BootCamp 
Sakib Sir 

// ============================================  Variable and Data Types ===========================================
// =================================================================================================================
// 2.3 Primitive Data types

// How many types of data are there in JS ? Ans: Two types, for example Primitive and Non-primitive.
// How many Primitive Types of Data are available in JS ? Explain all types ?
// Ans: Seven primitive data types available in JavaScript : 

// 01: String Type
let name = 'john';
console.log(typeof name);     

// 02: Number Type
let age = 47;
console.log(typeof age);     

// 03: Boolean Type
let isMarried = true;
console.log(typeof isMarried);  

// 04: Undefined Type
let colors;             // When we initialize a variable but not assigned a value, it would show undefined (that means value is not defined)
console.log(typeof colors); 

// 05: Null Type
let myColor = null;     // That means the value of this variable would assign soon but currently is null
console.log(typeof myColor);  // Output: "object" 
// Why output is object ?
// Ans: The output of typeof myColor is "object", even though null is not actually an object. This behavior is due to a historical quirk in JavaScript.
// When JavaScript was first designed, the typeof operator was intended to return "object" for all non-primitive values (objects).
// null was originally considered a special value representing "no object" or "empty object reference," so typeof null was mistakenly implemented to return "object".
// This mistake has never been fixed for backward compatibility reasons, so the typeof null continues to return "object" even though null is a primitive value, not an actual object. In short, it's a legacy behavior that remains in JavaScript to avoid breaking older code.
 
// variable initialization and assignment  (learned by searching)
let myAge;   // This is variable initialization (no value assigned yet)
myAge = 10; // This assigns the value 10 to the variable
let myAge = 10; // This both initializes and assigns a value


// ============================================================================================
// 2.4 Reference Data types - Object
// How many non-primitive types of data are available in JS ? Why Object includes various types of Objects ? And what are those ?
// Ans: There is one non-primitive data type, only Object. But Object includes various kinds of objects such as:
// 1. Regular objects ({})
// 2. Arrays ([])
// 3. Functions
// 4. Dates
// 5. RegExp objects
// Note: All non-primitive data types in JavaScript are considered objects, regardless of their specific usage or structure.

// why object uses ? 
// Ans: To store multiple property togather (with key-value pairs) in a single Data (Object is one kind of data).  
// How many ways to access object's property's value ? 
// Ans: Two ways like Dot notation and Bracket notation as example below
const user = {
    name: "john",
    age: 47,
    hobby: 'reading'
};
console.log(user.name);      // dot notaion
console.log(user['name']);     // bracket notaion

// ============================================================================================
// 2.5 Reference Data types - Array
// why Array uses ? What do those items called inside an Array ? 
// Ans: To store a list of data like object, string or number. The items inside an array are called elements.
// What is an Array Index ?
// Ans: An array index is a numerical value used to access or identify the position of an element within an array. 
// In most programming languages, arrays are zero-indexed, so the first element is at index 0, the second at index 1, and so forth.
// What data type is Array ? What are the specifications of object ?
// Ans: Array is an Object data type. If something is an Object, that means obviously it has some Properties and Methods.

// ============================================================================================
// 2.6 Reference Data types - Function
// What is Function and describe its all component ?
// Ans: Function is a reusable block of code that performs a specific task or set of tasks. 
// Functions allow you to encapsulate code, making it modular and easier to manage. 
// Let's break down the comopnents of a function: 
// i. Function Keyword: The keyword 'function' is used to declare a function.
// ii. Function Name: This is user-defined identifier for the function. It allows the same rules as variable names. The function name is used to call function later.
// iii. Parameters: Parameters are listed inside the parentheses. 
// iv. Function Body: The code inside the curlly braces ({}) is the body of the function. It contains the statements that define what the function does.
// v. Return Statement: The 'return' statement is optional and used to specify the value that the function should return when it is called.

// How many types of functions are avilable in JS ?
// Ans: Javascripts supports various types of functions, providing developers with flexibility in their coding approach. Here are some common types of functions discussed below :
// 1. Function Declarations / Traditional Function :
//    - Declared using the 'function' keyword, followed by a name and a block of code.
//    - Can be invoked/called from anywhere in the code.
      Example: function add(a, b) {return a + b};
// 2. :
//    - Defined by assigning a function to a variable.
//    - Can be anonymous or named.
//    - Not hoisted in the same way as function declarations.
      Example: const multiply = function (a, b) {return a*b}
// 3. Arrow Functions:
//    - Introduced in ECMAScript 6 (ES6) to provide a more concise syntax.
//    - Lexically bind the 'this' keyword.
      Example: const square = (x) => {x * x};
// 4. Anonymous Functions:
//    - Functions without a name, often use as arguments to other functions or assigned to variables.
      Example: const sum = function (a, b) {return a + b};

// Give me usecases for each functions 
// Traditional Function 
function calculateArea(width, height) {
return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

// Function Expression
const greetUser = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetUser("Tanvir")); // Output: Hello, Tanvir!

// Arrow Function
const squareNumber = (num) => num * num;
console.log(squareNumber(4)); // Output: 16

// Anonymous Function
setTimeout(function() {
    console.log("This message appears after 2 seconds");
}, 2000);

// ===============================================================================================
// 2.7 Template Literals
// Waht is Template Literals in JS ?
// Ans: Template Literals are a feature introduced in ECMAScript6 that allows for more flexible string interpolation in JS.
// They are enclosed by backticks (`) and can contain placeholders `${expression}` that are replaced with evaluated value of the expression.

// Template Literals also support multi-line strings, making it easier to work with multiline text.
// Template literals also allow for expressions and functions. Template literals provide a concise and readable way to work with strings and expressions in JavaScript.





// ========================================================== Conditional Statements ==================================
// ====================================================================================================================
// Problem - 01 
// (i) You need to determine whether a given year is a leap year or not.
function leapYear(year) {
    if(year % 400 === 0){
        return true;
    } else if(year % 100 === 0){
        return true;
    } else if(year % 4 === 0) {
        return true;
    }
}
console.log(leapYear(2020));
console.log(leapYear(1900));
console.log(leapYear(2000));
// Concept: A leap year is divisible by 4, except if divisible by 100 unless also divisible by 400

// (ii) You are given three numbers. You need to determine whether you can form a valid triangle with these numbers as side lengths.
function isValidTriangle(a, b, c){
    if(a + b > c && b + c > a && c+a > b){
        return true;
    } else {
        return false;
    }
}
console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(1, 2, 3));

// (iii) Write a function that accepts a single character and:
// - Checks if it's an alphabet.
// - If it’s an alphabet, check if it’s uppercase or lowercase.
// - If it’s a digit, check if it’s even or odd.
// - If it’s a special character, just display the character.
    function checkCharacter(char) {
        let result;
        if(char >= 'A' && char <= 'Z'){
            result = `${char} is an Uppercase Character`;
        } else if(char >= 'a' && char <= 'z'){
            result = `${char} is a lowercase character`;
        } else if(char >= '0' && char <= '9'){
            let isEven = (parseInt(char) % 2 === 0);
            console.log(`${isEven ? "Even number" : "Odd number"}`)
        } else{
            result = (`${char} is a speacial character`);
        }
        return result;
    }
    console.log(checkCharacter('A'));
    console.log(checkCharacter('g'));
    console.log(checkCharacter('5'));
    console.log(checkCharacter('%'));

// (iv) Write a function that takes a string representing a traffic light color ("red", "yellow", "green") and returns what action a driver should take (e.g., "Stop", "Slow down", "Go").
function trafficLightAction(color) {
    switch(color) {
        case "red":
            return "stop";
        case "yellow":
            return "Slow down";
        case "green":
            return "Go";
        default:
            return "Invalid color";
    }
}
console.log(trafficLightAction("red"));
console.log(trafficLightAction("green"));
console.log(trafficLightAction("blue"));

// (v) Write a function that takes two numbers and a string ("+", "-", "*", "/") representing an operation, and returns the result of that operation.
function calculator(num1, num2, operation){
    switch(operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by Zero";
        default:
            return "Invalid operator";
    }
}
console.log(calculator(5, 3, "/"));
console.log(calculator(5, 0, "/"));

// (vi) Write a function that takes three numbers and returns the largest one using the ternary operator.
function findLargerst(a, b, c) {
    return a > b
        ? (a > c ? a : c)
        : (b > c ? b : c) 
}
console.log(findLargerst(3, 8, 5));





// Problem - 02 : 
// (i) You are given a student's score and a boolean value indicating if the student has completed bonus assignments. Based on the score and bonus, determine the grade:
// - If the score is 90 or above and the student completed the bonus, return "A+"
// - If the score is 90 or above without bonus, return "A"
// - If the score is between 80 and 89, return "B"
// - If the score is between 70 and 79, return "C"
// - If the score is between 60 and 69, return "D"
// - Below 60, return "F"
function getGrade(score, hasBonus){
    return score >= 90 
        ? (hasBonus ? 'A+' : 'A')
        : score >= 80 
            ? "B"
            : score >= 70
                ? "C"
                : score >= 60
                    ? "D"
                    : "F";  
}
console.log(getGrade(95, false)); 
console.log(getGrade(55, false)); 

// (ii) You need to determine the ticket price for a movie based on the customer's age and whether it’s a weekday or weekend. The price rules are:
// - Children (under 12): $8 on weekdays, $10 on weekends.
// - Seniors (65 and above): $6 on weekdays, $8 on weekends.
// - Adults: $10 on weekdays, $12 on weekends.
function getTicektPrice(age, isWeekend){
    return age < 12 
            ? (isWeekend ? 10 : 8)
            : age >= 60
                ? (isWeekend ? 8 : 6)
                : (isWeekend ? 12 : 10);
}
console.log(getTicektPrice(10, true));
// There is something mistake

// (iii) Create a function that calculates the final price after applying discounts. The discounts are applied based on three conditions:
// - Membership level: Gold members get a 20% discount, Silver members get 10%, and others get no discount.
// - If the order is above $100, add an extra 5% discount.
// - If it's Black Friday, add another 10% discount on top of everything else.
function CalculateFinalPrice(price, membership, isBlackFriday) {
    let discount = membership === "Gold"
        ? 0.20
        : membership === "Silver"
            ? 0.10
            : 0;

    discount = discount + price > 100 ? 0.05 : 0;
    discount = isBlackFriday ? 0.10 : 0;

    return price - (price * discount);
}
console.log(CalculateFinalPrice(50, "Gold", false));

// (iv) Given three side lengths of a triangle, determine the type of triangle:
// - If all sides are equal, it's an Equilateral triangle.
// - If two sides are equal, it's an Isosceles triangle.
// - If all sides are different, it's a Scalene triangle.
// - If the side lengths don't form a valid triangle, return "Not a triangle." 
function triangleType(a, b, c) {
    return (a + b > c && b + c > a && c + a > b)
        ? (a === b && b === c) ? "Equilateral triangle"
            : (a === b || b === c || c === a) ? "Isosceles triagle"
                : "Scalene triangle"
        : "Not a triangle"
} 
console.log(triangleType(1, 2, 3));


// ==============================     JavaScript Loops    ============================================
// ===================================================================================================

// Problem - 03: 
// (i) Find the sum of the numbers from 1 to 10 using for loop
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
}
console.log('Expected result:', sum);

// (ii) Find the even and odd numbers from 1 to 20 using for loop both iterative and recursive way 
// // iterative way
let evenNumbers = [];
let oddNumbers = [];
for(let i = 1; i <= 20; i++){
    i % 2 === 0 ? evenNumbers.push(i) : oddNumbers.push(i);
}
console.log(evenNumbers);
console.log(oddNumbers);

// // recursive way
let evenNumbers = [];
let oddNumbers = [];
for(let i = 20; i >= 1; i--){
    i % 2 === 0 ? evenNumbers.push(i) : oddNumbers.push(i);
}
console.log(evenNumbers);
console.log(oddNumbers);

// (iii) Find the even and odd numbers from 1 to 20 using while loop both iterative and recursive way
// // iterative way
let i = 1;
let evenNumbers = [];
let oddNumbers = [];
while(i <= 20){
    i % 2 === 0 ? evenNumbers.push(i) : oddNumbers.push(i);
    i++;
}
console.log(evenNumbers);
console.log(oddNumbers);

// // recursive way
let i = 20;
let evenNumbers = [];
let oddNumbers = [];
while(i >= 1){
    i % 2 === 0 ? evenNumbers.push(i) : oddNumbers.push(i);
    i--;
}
console.log(evenNumbers);
console.log(oddNumbers);




// Problem - 04: (for loop)
// (i) Give me the list of numbers between 1 to 30 divisible by 5 both iterative and recursive way
// // iterative way
let divisByFive = [];
for(let i = 1; i <= 30; i++){
    i % 5 === 0 ? divesByFive.push(i) : null;
}
console.log(divisByFive);

// // recursive way
let divisByFive = [];
for(let i = 30; i >= 1; i--){
    i % 5 === 0 ? divisByFive.push(i) : null;
}
// console.log(divisByFive);
// (ii) Give me the list of numbers between 1 to 30 divisible by 3 both iterative and recursive way
// (iii) Give me the list of numbers between 1 to 30 divisible by 3 or 5 both iterative and recursive way 
// // iterative way
let divisBoth = [];
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        divisBoth.push(i);
    }
}
console.log(divisBoth);
// (iv) Give me the sum of the numbers from 1 to 30 divisible by 3 by two way 
// // iterative way
let sum = 0;
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        sum = sum + i
    }
}
console.log(sum);
// (v) Give me the sum of the numbers from 1 to 30 divisible by 5 by two way




// Problem - 05: (while loop)
// (i) Find all the odd numbers from 61 to 100.
let i = 61;
let oddNumbers = [];
while(i <= 100){
    i % 2 === 1 ? oddNumbers.push(i) : null; 
    i++;
}
console.log(oddNumbers);
// (ii) Find all the even numbers from 78 to 98.
// (iii) Display sum of all the odd numbers from 91 to 129.
let i = 91;
let sum = 0;
while(i <= 129){
    if(i % 2 === 1){
        sum = sum + i;
    }
    i++;
}
console.log(sum);
// (iv) Display sum of all the even numbers from 51 to 85.
let i = 51;
let sum = 0;
while(i <= 85){
    if(i % 2 === 0){
        sum = sum + i;
    }
    i++;
}
console.log(sum);
// (v) Generate a multiplication table for number 9
for(let i = 1; i <= 10; i++){
    let table = `9 X ${i} = ${9 * i}`;
    console.log(table);
}
// (vi) Implement a countdown timer that counts down from 81 to 65.
let count = 81;
let countdown = setInterval(() => {
    console.log(count);
    count--;
    if(count < 65){
        clearInterval(countdown);  // Stop the timer when it reaches 65
    }
}, 1000); // Countdown interval is set to 1000ms (1 second)




// Prolem - 06: 
// (i) Write a program that takes an integer and repeatedly sums its digits until the result is a single digit. Use a do-while loop.
let number = 9875; // Start with 9875
do {
        let sum = 0;
        // While there are still digits in the number
        while (number > 0) {
                sum += number % 10; // Add the last digit to sum
                number = Math.floor(number / 10); // Remove the last digit
        }
        number = sum; // Replace number with the sum of its digits
} while (number >= 10); // Repeat if sum is more than one digit

console.log(number);  // Output: 2

// (ii) The task is to check the given number is prime or not 
function isPrime(num){
    let primeStatus = true;
    for(let i = 2; i <= num - 1; i++){
        if(num % i === 0){
            primeStatus = false;
            break;
        }
    }
    return primeStatus;
}
console.log(isPrime(11));

// (iii) The task is to find the first prime number greater than a given number using a do-while loop.
let num = 10;  // Starting with 10
// Function to check if a number is prime
function isPrime(n) {
        // Iterate from 2 to the square root of n (optimized approach)
        for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                        return false;  // If divisible by i, it's not prime
                }
        }
        return n > 1;  // n is prime if greater than 1 and not divisible by any number
}

// Loop to find the next prime number
do {
        num++;  // Increment the number
} while (!isPrime(num));  // Keep looping until you find a prime number

console.log(num);  // Output: 11 (First prime number greater than 10)
// Note: ১. কোনো সংখ্যা মৌলিক হওয়ার শর্ত হচ্ছে ওই সংখ্যা এবং ১ ছাড়া অন্য কোনো সংখ্যা দিয়ে ডিভিজিবল (বিভাজ্য) হতে পারবে না। 
// ২. এখন কথা হচ্ছে কোনো সংখ্যা তো আর তার চেয়ে বড় কোনো সংখ্যা দ্বারা বিভাজিত হয় না, তার মানে সেই সংখ্যাটাকে তার চেয়ে ছোট কোন সংখ্যা দিয়ে ভাগ করলে ভাগশেষ জিরো পাওয়া যাবে। এজন্য লুপের কন্ডিশনে num - 1 ব্যবহার করেছি মানে ওই সংখ্যার ছোট সব সংখ্যা দিয়ে চেক করে দেখছি যে কোনো টা দিয়ে বিভাজ্য যায় কি না। এটা একটা উপায়। 
// ৩. মৌলিক সংখ্যা চেক করতে আমরা সেই সংখ্যাটার ছোট সবগুলো সংখ্যা দিয়ে (১ ব্যাতিত) চেক করে দেখছি কোনোটা দিয়ে বিভাজ্য যায় কি না। এখন আমরা চাইলে এটা ইফিশিয়েন্টভাবে করতে পারি, যেমন: ২০ কে চেক করতে চাই, এখন ২০ কে স্কয়ার রুট করে যা পাবে ৪.৪২৪, এখন আমরা যদি ৪ পর্যন্ত কন্ডিশন চেক করি তাহলেই হবে, কারণ (১, ২০), (৪, ৫), (৫, ২) এই সংখ্যা কটি দিয়েই ২০ ভাগ যায় অর্থাৎ ভাগশেষ জিরো পাওয়া যায়। খেয়াল করলে দেখবো ৪ এর পরবতী যে সংখ্যা গুলো দিয়ে ২০ ভাগ যাচ্ছে সেই সব গুলোই ৪ এর মধ্যে আছে যেমন ১, ৪, ২ অর্থাৎ এগুলো না থাকলে পরবর্তী সংখ্যাও থাকতো না। 




// Problem - 07:
// (i) অন্যান্য লুপ গুলোর সাথে "for in" এবং "for of" লুপের পার্থক্য কি ? এবং কোন লুপ কোন ক্ষেত্রে ব্যবহার করা হয় ?
// উত্তরঃ অন্যান্য লুপ গুলোর ক্ষেত্রে আমরা দেখেছি যে তিনটা জিনিস কমন ছিল যেমন: loop variable initialization, loop breaking condition, iteration. কিন্তু এই দুটো লুপের ক্ষেত্রে এগুলো প্রয়োজন নেই। এগুলো আটোমেটিকালি কোন একটা Array বা  Object কে traverse করে। Array ট্রাভার্স করার জন্য ব্যবহৃত হয় for of loop এবং  Object ট্রাভার্স করার জন্য for in loop. 
// (ii) Write a function that takes an object and prints out all of its keys.
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};
for(let key in car){
    console.log(key);
}

// (iii) Write a function that takes an array of numbers and returns the sum of all the numbers.
const numbers = [1, 2, 3, 4, 5];
for(let num of numbers){
    console.log(num);
}

// (iv) Why "break" and "continue" uses ?
// Ans: break and continue are used in loops to control the flow of iteration, such as, break uses to break iteration and continue uses to skip iteration. break ব্যবহারে ডিরেক্টলি লুপটা ফোর্সফুলি ব্রেক হয়ে ইটারেশন বন্ধ হয়ে যায় এবং বাহিরে চলে আসে। আর continue ব্যবহারে লুপের কারেন্ট ইটারেশনটা ফোর্সফুলি স্কিপ করে।  

// (v) Start looping from 1 to 20 and skip for the iteration of all odd numbers using continue
        for(let i = 1; i <= 20; i++){
            if(i % 2 === 1){
                continue;
            }
            console.log("all even numbers", i);
        }
// (vi) Start looping from 1 to 50 and skip for the iteration of the numbers divisible by 5 using continue
        for(let i = 1; i <= 50; i++){
            if(i % 5 === 0){
                continue;
            }
            console.log(i);
        }
// (vii) Write a loop 1 to 10. Use break to exit the loop once you find 5.
        for(let i = 1; i <= 10; i++){
            if(i === 5){
                break;
            }
            console.log(i);
        }
// (viii) Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
        let i = 1;
        let sum = 0;
        while(i <= 100){
            sum = sum + i;
            if(sum === 100){
                break;
            } 
            console.log(i);
            i++;
        }
// (ix) যদি লুপের কন্ডিশন এবং ইনক্রিমেন্ট ডিক্রিমেন্ট সঠিকভাবে না দেই তাহলে কি হতে পারে ?
// উত্তরঃ Infinity loop এ পরে যেতে পারি। 



// ==============================     String in JavaScript    =======================================
// ==================================================================================================

// Problem - 08
// (i) Write a function that takes a string as input and:
    // - Finds the middle character of the string using charAt().
    // - If the middle character is an alphabet, determine if it's uppercase or lowercase using charCodeAt().
    // - Convert the character to the opposite case using either toUpperCase() or toLowerCase().
    function middleCharacter(str) {
        let middleIndex = Math.floor(str.length / 2);
        let middleChar = str.charAt(middleIndex);

        if(middleChar.charCodeAt(0) >= 65 && middleChar.charCodeAt(0) <= 90){
            console.log(`{${middleChar} is uppercase. Converting to lowercase : ${middleChar.toLowerCase()}}`);
        } else if(middleChar.charCodeAt(0) >= 97 && middleChar.charCodeAt(0) <= 122){
            console.log(`{${middleChar} is lowercase. Converting to uppercase: ${middleChar.toUpperCase()}}`)
        } else {
            console.log(`{${middleChar} is not an alphabet.}`)
        }
    }
    middleCharacter("hello");
    middleCharacter("WORLD");
    middleCharacter('1234');

    // (ii) Write a function that takes a string and capitalizes the first character using charAt() and toUpperCase(), leaving the rest of the string unchanged.
    function capitalizeFirst(str) {
        if(str.length === 0) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log(capitalizeFirst("hello"));
    console.log(capitalizeFirst("javascript"));

    // (iii) Write a function that takes a string and counts how many uppercase and lowercase letters it contains using charCodeAt() and toUpperCase()/toLowerCase().
        function countUpperLower(str) {
            let upperCount = 0;
            let lowerCount = 0;

            for(let i = 0; i < str.length; i++){
                let char = str.charAt(i);
                let code = char.charCodeAt(0);

                if(code >= 65 && code <= 90){
                    upperCount++;
                } else if(code >= 97 && code <= 122){
                    lowerCount++;
                }
            }
            console.log(`Total Uppercase: ${upperCount}, Total Lowercase: ${lowerCount}`);
        }
        countUpperLower("HelloWorld");
        countUpperLower("JavaScript");

    // (iv) Write a function that takes a string and converts the even-indexed characters to uppercase and the odd-indexed characters to lowercase.
            function convertEvenOddCase(str) {
                let newStr = "";

                for(let i = 0; i < str.length; i++){
                    if(i % 2 === 0){
                        newStr += str.charAt(i).toUpperCase(); //The += operator appends the result of str.charAt(i).toUpperCase() to the string newStr. string concatenation operatior (+=)
                    } else {
                        newStr += str.charAt(i).toLowerCase();
                    }
                }
                console.log(newStr);
            }
            convertEvenOddCase("Environment");

    // (v) Write a function that takes a string and returns the sum of the ASCII values of all the characters using charCodeAt(). (সবগুলো লেটারের এসকি ভ্যালু গুলো যোগ করতে হবে)
            function sumAsciiValues(str) {
                let sum = 0;
                for(let i = 0; i < str.length; i++){
                    sum += str.charCodeAt(i);
                }
                console.log(sum);
            }
            sumAsciiValues("ABC");

    // (vi) Write a function that takes a string and swaps the case of each character. If the character is uppercase, convert it to lowercase, and if it’s lowercase, convert it to uppercase.
            function swapCase(str) {
                let swapped = '';
                for(let i = 0; i < str.length; i++){
                    let char = str.charAt(i);
                    if(char === char.toUpperCase()){
                        swapped += char.toLowerCase();
                    } else {
                        swapped += char.toUpperCase();
                    }
                }
                console.log(swapped);
            }
            swapCase("HelloWorld");
            swapCase("JavaScript");

// Problem - 09
// (i) Given the sentence "I am a web developer", check if the word "Developer" is present.
const sentence = "I am a web developer";
console.log(sentence.includes("Developer"));

// (ii)  Given the URL "https://example.com", check if it starts with "https://".
const url = "https://example.com";
console.log(url.startsWith("https://"))

// (iii) Given the filename "image.png", check if it ends with .png.
const filename = "image.png";
console.log(filename.endsWith(".png"));

// (iv) Given the array ["red", "green", "blue", "yellow"], check if "blue" is present.
const colors = ["red", "green", "blue", "yellow"];
console.log(colors.includes("blue"));

// (v) Given the string "Hello, world!", check if the first 5 characters are "Hello".
const greeting = "Hello, world!";
console.log(greeting.startsWith("Hello, wor", 0));

// (vi) Given the array ["dog", "catapult", "elephant"], check if any word contains "cat".
const words = ["dog", "catapult", "elephant"];
let found = words.some(word => word.includes("cat"));

// (vii) Write a function that checks if the string "abcdef" ends with "de" within the first 5 characters.
const str = "abcdef";
console.log(str.endsWith("de", 5));

// (viii) Write a function that checks if both "html" and "css" are included in a skills array.
const skills = ["html", "javascript", "css"];
const includesBoth = skills.includes("html") && skills.includes("css");
console.log(includesBoth);

// Problem - 10
// (i) search method এবং indexOf method - এর কাজ কি ? এবং এদের মধ্যে পার্থক্য কি ?
// ধরা যাক কোনো একটা স্টিং আছে, ওই স্ট্রিং এর মধ্যে একই occurence মাল্টিপল বার আছে। like :
// const sentence = "I love JavaScript, and JavaScript is fun!"
// এই স্টিং এর মধ্যে "JavaScript" occurence টা দুইবার আছে। 

// sentence.search("JavaScript")
// ব্রাকেটের ভেতরের অংশটাকে বলা হয় search pattern. এখন এখান দিয়ে স্ট্রিং পাস্ হতে পারে, নাম্বার পাস্ হতে পারে, regular expression পাস্ হতে পারে ইত্যাদি। এখানে search pattern টা একটা স্ট্রিং (JavaScript ). এখানে স্টিংয়ের পাশাপাশি আরো কিছু থাকতে পারে। অর্থাৎ এখানে মাল্টিপল টাইপ search pattern পাস হতে পারে।
// Ans : search এবং indexOf দিয়ে মূলত ওকি কাজ করা হয়. যেমন : কোনো একটা স্টিং এর মধ্যে occurence দুইবার আছে, search এবং indexOf method ব্যবহার করে first occurence এর first index টা পেতে এই মেথড দুটো ব্যবহার করা হয়। পাৰ্থক্য হচ্ছে, indexOf মেথডে শুধুমাত্র একটা search pattern (string) ব্যবহৃত হয়; আর search মেথডে দুটো search pattern (string & regular expression) ব্যবহার করা যায়। 

// (ii) Given the sentence "I love JavaScript, and JavaScript is fun!", find the index of the first occurrence of "JavaScript".
const sentence = "I love JavaScript, and JavaScript is fun!";
console.log(sentence.indexOf("JavaScript"));
// (iii) Given the sentence "I love JavaScript, and JavaScript is fun!", find the index of the last occurrence of "JavaScript".
const sentence = "I love JavaScript, and JavaScript is fun!";
console.log(sentence.lastIndexOf("JavaScript"));
// (iv) Given the string "I have 2 apples and 5 oranges", find the index of the first digit.
const text = "I have 2 apples and 5 oranges";
console.log(text.search(/\d/));
// (v)  Given the sentence "I love apples and bananas", check if "apple" is in the sentence.
const sentence = "I love apples and bananas";
console.log(sentence.indexOf("apple") !== -1);

// (vi) Given the string "cat catapult category catalog", find all the indices where "cat" appears.
const str = "cat catapult category catalog";
let index = str.indexOf("cat");     // just check where you find "cat" and give me only that index value
let indices = [];

while (index !== -1) {
    indices.push(index);
    index = str.indexOf("cat", index + 1);
}
console.log(indices);

// str.indexOf("cat") এটা মুলত খোঁজা শুরু করে শুন্য ইনডেক্স থেকে, বাট আমরা চাইলে সেটা বলে দিতে পারি search pattern এর ভেতর। 
// যেমন ঃ str.indexOf("cat", 1); অর্থাৎ ১ ইনডেক্স এর পর থেকে খুঁজতে থাকো কোথায় cat টা পুনরায় আছে, তারপর যেখানে আবার এই cat টা খুঁজে পাবে ঠিক ওই ইনডেক্স টা আবার রিটার্ন করবে, এভাবে আবার পরবর্তী টা খুজার জন্য আমরা ইনডেক্স এর ভ্যালু ১ বাড়িয়ে দেব, মানে (index  + ১) যাতে পরবর্তী আবার খোঁজা শুরু করে যে কোথায় আবার cat পাওয়া যায়। 

// (vii) Given the string "abc12345xyz", find the index of the last digit.
const str = "abc222533354445xyz";
console.log(str.lastIndexOf("5"));

// (viii) Given the file path "/users/tanvir/documents/filename.txt", extract the filename "filename.txt"
const filePath = "/users/tanvir/documents/filename.txt";
const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
console.log(fileName);

// Note: "/" character এর সর্বশেষ occurrence এর index টা হচ্ছে ২৩। আর আমার ফাইলনেম টা শুরু হয়েছে ২৪ নম্বর ইনডেক্স থেকে, এজন্য (filePath.lastIndexOf("/") + 1) দেয়া হয়েছে ফলে (index  + 1) পাওয়া যাবে। আল্টিমেটলি দাঁড়ায় substring(24)। এবং  substring(24) extracts everything from index 24 to the end of the string. 

// (ix) Given the string "skyline", find the index of the first vowel.
const str = "skyline";
console.log(str.search(/[aeiou]/)); 
// Note: এখানে search pattern টা স্ট্রিং নয়, বরং এটা regular expression 

// (x) You are given a number. Write a function that:
    // - Converts the number to a string using toString().
    // - Splits the number into individual digits using split().
    // - Converts each digit to its corresponding word form (like 1 becomes "one", 2 becomes "two", etc.).
    // - Concatenates the word forms of each digit into a single string using concat().
    function numberToWords(num) {
        const digitToWord = {'0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'}

        // convert number to string
        const numStr = num.toString();

        // split the numbers into individual digit  
        const digitsInArray = numStr.split("");
        const wordArray = digitsInArray.map(digi => digitToWord[digi]);
        console.log(wordArray); 
    }
    numberToWords(4956);


    // Problem - 11
    (i) slice(), substring() এবং substr() এর মধ্যে পার্থক্য ?
    // Ans: slice এর মধ্যে যে দুটো parameter আছে সেগুলো অপশনাল, একটাও হতে পারে দুটোও হতে পারে আবার একটাও নাও হতে পারে। কিন্তু subString মেথডের মধ্যে যে দুটো parameter আছে সেগুলো বাধ্যতামূলক, তবে অনলি starting position টা বলে দিলেও হবে, এক্ষেত্রে বাইডিফল্টলি lenght টা পুরোটা নিয়ে নিবে মানে একদম শেষ পর্যন্ত।

    // slice মেথডে প্যারামিটার পসিটিভ বা নেগেটিভও হতে পারে কিন্তু subString মেথডে প্যারামিটার নেগেটিভ হতে পারবে না। slice মেথডে প্যারামিটার দুটোই index প্যারামিটার কিন্তু subString মেথডে প্রথমটা index parameter আর দ্বিতীয়টা length প্যারামিটার।   

    substr(startIndex, length) method ==========
    // messege.substr(0, 6);
    // এক্ষেত্রে 0 হচ্ছে starting position এবং 6 হচ্ছে length 

    substring(startIndex, endIndex) method ==========
    // message.substring(4, 10);
    // এক্ষেত্রে 0 হচ্ছে starting position এবং 10 হচ্ছে endIndex 

    slice(startIndex, endIndex) method ============
    // message.slice(0, 6);
    // অর্থাৎ message string এর 0 index থেকে শুরু করে 6 index এর আগ পর্যন্ত (5 index পর্যন্ত) যে substring টা রয়েছে সেটা তৈরি হবে। 

    // message.slice(3);
    // এক্ষেত্রে 3 index থেকে শুরু করে একদম শেষ পর্যন্ত string টা আমাদের substring হিসেবে তৈরি হবে। 

    // message.slice();
    // এক্ষেত্রে 0 index থেকে একদম শেষ পর্যন্ত substring হিসেবে তৈরি হবে যা কিনা মূল string এর সমান। 

    // message.slice(-5, -1);
    // এক্ষেত্রে একদম শেষের index থেকে শুরু হবে, অর্থাৎ -5 index থেকে শুরু করে -1 index (একদম শেষ index পর্যন্ত)  

    // (ii) You are given the string: "JavaScript is fun!". Write a function that:
    //      - Extracts the substring "Script" using slice().
    //      - Extracts the substring "is" using substr().
    //      - Extracts the substring "fun" using substring().
    //      - Concatenates these extracted parts into a new string with spaces between them.
            function extractAndCombine(str) {
                // step 1: Extract "Script" using slice()
                const step1 = str.slice(4, 10);

                // step 2: Extract "is" using subStr()
                const step2 = str.substr(11, 2);

                // step 3: Extract "fun" using substring()
                const step3 = str.substring(14, 17);

                const result = step1 + " " + step2 + " " + step3;
                console.log(result);
            }
            extractAndCombine("JavaScript is fun!");

    // (iii) What is Escape Sequences ?
            Escape sequences are special character combinations in strings that represent characters that are difficult or impossible to type directly in code, such as newline, tab, or certain special characters. In most programming languages, escape sequences begin with a backslash (\), examples :
            (\n: Newline, \t: Tab, \': Single Quote, \": Double Quote, \\: Backslash, \r: Carriage Return, \b: Backspace, \f: Form Feed, \v: Vertical Tab, \u or \x, )

    // (iv) Escape Sequences related problem: Make the string as like mensioned below :
            - He said, \ "It's a sunny day".
            - Have a good day.
            let message = '\tHe said, \\ "It\'s a sunny day".\n Have a nice day.'
            console.log(message);
    // (v) String Immutability কি ?
         // কোনো একটা স্ট্রিং এর মধ্যে যদি আমরা নির্দিষ্ট কোনো অংশে পরিবর্তন আনতে চাই তাহলে সেটা সম্ভব নয়, যদি পরিবর্তন আনতেই হয় তাহলে পরিবর্তিত অংশ সহ মডিফাইড নতুন স্ট্রিংটা ঐ ভারিয়াবলের মধ্যে assign করতে হবে। যেহেতু স্টিংয়ের নির্দিষ্ট কোনো অংশে আলাদা করে পরিবর্তন আনার কোনো সুযোগ নেই, এজন্য স্ট্রিংয়ের এই বৈশিষ্ট টাকে বলা হয় String Immutability.
         যেমনঃ 
         let message = "Jello World"; 
         message = "Hello World";  // assign a new string to the variable 
