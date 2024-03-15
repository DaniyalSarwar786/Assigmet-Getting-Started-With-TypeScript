/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

// Tests for equality and inequality with strings
let string1: string = "Hello";
let string2: string = "hello";

console.log(string1 === string2); 
console.log(string1 !== string2); 

// Tests using the lower case function
let string3: string = "Hello";
let string4: string = "hello";

console.log(string3.toLowerCase() === string4);
console.log(string3.toLowerCase() !== string4);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1: number = 10;
let number2: number = 20;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let str_1 : string = "Mango";
let str_2 : string = "Apple";

console.log(str_1 === "Mango" && str_2 === "Apple");
console.log(str_1 === "Mango" && str_2 === "Banana");
console.log(str_1 === "Mango" || str_2 === "Banana"); 
console.log(str_1 === "Banana" || str_2 === "Banana"); 

// Test whether an item is in a array
let fruitList: string[] = ["Mango", "Apple", "Banana"];
console.log(fruitList.includes("Mango"));

// Test whether an item is not in a array
console.log(fruitList.includes("Grapes")); 



