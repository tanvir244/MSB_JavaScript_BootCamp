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
// Reference Data types - Array
// why Array uses ? What do those items called inside an Array ? 
// Ans: To store a list of data like object, string or number. The items inside an array are called elements.
// What is an Array Index ?
// Ans: An array index is a numerical value used to access or identify the position of an element within an array. 
// In most programming languages, arrays are zero-indexed, so the first element is at index 0, the second at index 1, and so forth.
// What data type is Array ? What are the specifications of object ?
// Ans: Array is an Object data type. If something is an Object, that means obviously it has some Properties and Methods.

// ============================================================================================
// Reference Data types - Function
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

