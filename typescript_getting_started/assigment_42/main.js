/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
function show_magicians_3(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians_3 = ["Dani", "Harry", "Potter"];
var copyMagicians = magicians_3.slice();
function make_great_1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return magicians;
}
var greatMagicians = make_great_1(copyMagicians);
console.log(greatMagicians);
console.log(magicians_3);
