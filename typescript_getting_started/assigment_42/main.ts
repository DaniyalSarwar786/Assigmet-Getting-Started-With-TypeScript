/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

function show_magicians_3(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}	
let magicians_3: string[] = ["Dani","Harry","Potter"];
let copyMagicians: string[] = magicians_3.slice();

function make_great_1(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
    return magicians;
}	
let greatMagicians: string[] = make_great_1(copyMagicians);
console.log(greatMagicians);
console.log(magicians_3);
