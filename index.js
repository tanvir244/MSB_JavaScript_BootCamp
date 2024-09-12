MSB JavaScript BootCamp 
Sakib Sir 

// ============================================  Variable and Data Types ===========================================
// =================================================================================================================
// 2.3 Primitive Data types

// Seven primitive data types available in JavaScript 

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
Why output is object ?
// Ans: The output of typeof myColor is "object", even though null is not actually an object. This behavior is due to a historical quirk in JavaScript.
// When JavaScript was first designed, the typeof operator was intended to return "object" for all non-primitive values (objects).
// null was originally considered a special value representing "no object" or "empty object reference," so typeof null was mistakenly implemented to return "object".
// This mistake has never been fixed for backward compatibility reasons, so the typeof null continues to return "object" even though null is a primitive value, not an actual object. In short, it's a legacy behavior that remains in JavaScript to avoid breaking older code.
 
// variable initialization and assignment  (learned by searching)
let myAge;   // This is variable initialization (no value assigned yet)
myAge = 10; // This assigns the value 10 to the variable
let myAge = 10; // This both initializes and assigns a value


