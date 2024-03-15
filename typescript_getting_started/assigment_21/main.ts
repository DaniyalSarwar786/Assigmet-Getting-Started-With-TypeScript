// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let citiesObject_1: object = {
    "cities": ["Karachi", "New York", "Lahore", "London", "Singapore"]
};
console.log(citiesObject_1);
let mountainsObject_1: object = {
    "mountains": ["K2", "Mount Everest", "Nanga Parbat", "Himalaya", "Karakoram"]
};
console.log(mountainsObject_1);
let riversObject_1: object = {
    "rivers": ["Indus", "Nile", "Amazon", "Chennab", "Ravi"]
};
console.log(riversObject_1);
let countriesObject_1: object = {
    "countries": ["Pakistan", "USA", "UK", "China", "India"]
};
console.log(countriesObject_1);
let languagesObject_1: object = {
    "languages": ["Urdu", "English", "Punjabi", "Sindhi", "Balochi"]
};
console.log(languagesObject_1);

console.log(citiesObject_1["cities"][5]); // Intentional Error
console.log(mountainsObject_1["mountains"][5]); // Intentional Error
console.log(riversObject_1["rivers"][5]); // Intentional Error
console.log(countriesObject_1["countries"][5]); // Intentional Error
console.log(languagesObject_1["languages"][5]); // Intentional Error
// Error: Index out of range
// Correcting the error
console.log(citiesObject_1["cities"][4]);
console.log(mountainsObject_1["mountains"][4]);
console.log(riversObject_1["rivers"][4]);
console.log(countriesObject_1["countries"][4]);
console.log(languagesObject_1["languages"][4]);
