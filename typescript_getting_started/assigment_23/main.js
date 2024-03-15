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
var string1 = "Hello";
var string2 = "hello";
console.log(string1 === string2);
console.log(string1 !== string2);
// Tests using the lower case function
var string3 = "Hello";
var string4 = "hello";
console.log(string3.toLowerCase() === string4);
console.log(string3.toLowerCase() !== string4);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 20;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
// Tests using "and" and "or" operators
var str_1 = "Mango";
var str_2 = "Apple";
console.log(str_1 === "Mango" && str_2 === "Apple");
console.log(str_1 === "Mango" && str_2 === "Banana");
console.log(str_1 === "Mango" || str_2 === "Banana");
console.log(str_1 === "Banana" || str_2 === "Banana");
// Test whether an item is in a array
var fruitList = ["Mango", "Apple", "Banana"];
console.log(fruitList.includes("Mango"));
// Test whether an item is not in a array
console.log(fruitList.includes("Grapes"));
