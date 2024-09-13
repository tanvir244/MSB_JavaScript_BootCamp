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
// 2. Function Expressions:
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

// ===============================================================================================
// 2.7 Template Literals
// Waht is Template Literals in JS ?
// Ans: Template Literals are a feature introduced in ECMAScript6 that allows for more flexible string interpolation in JS.
// They are enclosed by backticks (`) and can contain placeholders `${expression}` that are replaced with evaluated value of the expression.

// Template Literals also support multi-line strings, making it easier to work with multiline text.
// Template literals also allow for expressions and functions. Template literals provide a concise and readable way to work with strings and expressions in JavaScript.





// ========================================================== Conditional Statements ==================================
// ====================================================================================================================
// Problem - 01: You need to determine whether a given year is a leap year or not.
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

// Problem - 02: You are given three numbers. You need to determine whether you can form a valid triangle with these numbers as side lengths.
function isValidTriangle(a, b, c){
    if(a + b > c && b + c > a && c+a > b){
        return true;
    } else {
        return false;
    }
}
console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(1, 2, 3));

// Problem - 03: Write a function that takes a string representing a traffic light color ("red", "yellow", "green") and returns what action a driver should take (e.g., "Stop", "Slow down", "Go").
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

// Problem - 04: Write a function that takes two numbers and a string ("+", "-", "*", "/") representing an operation, and returns the result of that operation.
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

// Problem - 04: Write a function that takes three numbers and returns the largest one using the ternary operator.
function findLargerst(a, b, c) {
    return a > b
        ? (a > c ? a : c)
        : (b > c ? b : c) 
}
console.log(findLargerst(3, 8, 5));

// Problem - 05 : You are given a student's score and a boolean value indicating if the student has completed bonus assignments. Based on the score and bonus, determine the grade:
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

// Problem - 06: You need to determine the ticket price for a movie based on the customer's age and whether it’s a weekday or weekend. The price rules are:
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

// Problem - 07 : Create a function that calculates the final price after applying discounts. The discounts are applied based on three conditions:
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

// Problem - 08: Given three side lengths of a triangle, determine the type of triangle:
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

