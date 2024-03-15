/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
function show_magicians_1(magicians_1) {
    for (var _i = 0, magicians_1_1 = magicians_1; _i < magicians_1_1.length; _i++) {
        var magician = magicians_1_1[_i];
        console.log(magician);
    }
}
var magicians_1 = ["Dani", "Harry", "Potter"];
show_magicians_1(magicians_1);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return magicians;
}
console.log(make_great(magicians_1));
