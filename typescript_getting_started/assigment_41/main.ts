/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

function show_magicians_1(magicians_1: string[]) {
    for (let magician of magicians_1) {
        console.log(magician);
    }
}
let magicians_1: string[] = ["Dani","Harry","Potter"];
show_magicians_1(magicians_1);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
    return magicians;
}
console.log(make_great(magicians_1));
