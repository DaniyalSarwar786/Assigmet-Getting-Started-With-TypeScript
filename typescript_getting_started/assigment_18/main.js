// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// assigment_18/main.ts
var guests = ["Albert Einstein", "Newton", "Nikola Tesla", "Dani", "Ejaz", "AlBeruni"];
;
console.log("You are inviting ".concat(guests.length, " people to dinner."));
console.log(guests);
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(i, ".").concat(guests[i]));
}
