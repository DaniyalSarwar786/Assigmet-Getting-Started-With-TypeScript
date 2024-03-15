/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function carInfo(manufacturer: string, model: string, ...options: [string, string][]) {
    let car: {
        manufacturer: string,
        model: string,
        [key: string]: string | number
    } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        car[option[0]] = option[1];
    }
    console.log(car);
}

carInfo("Toyota", "Camry", ["color", "blue"], ["sunroof", "yes"]);
carInfo("Ford", "Fusion", ["color", "black"], ["leather seats", "yes"]);
carInfo("Chevrolet", "Cruze", ["color", "red"], ["GPS", "yes"]);
