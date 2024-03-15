/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
var guestList_15 = ["Albert Einstein", "Newton", "Nikola Tesla"];
console.log("Dear ".concat(guestList_15[0], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[1], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[2], ", I would like to invite you to dinner"));
console.log("Unfortunately, ".concat(guestList_15[1], " can't make it to dinner"));
guestList_15[1] = "Galileo";
console.log("Dear ".concat(guestList_15[1], ", I would like to invite you to dinner"));
console.log("I found a bigger dinner table");
guestList_15.unshift("Dani");
guestList_15.splice(3, 0, "Ejaz");
guestList_15.push("AlBeruni");
console.log("Dear ".concat(guestList_15[0], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[1], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[2], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[3], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[4], ", I would like to invite you to dinner"));
console.log("Dear ".concat(guestList_15[5], ", I would like to invite you to dinner"));
