/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt_36(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The shirt is ${size} and the message is ${message}.`);
}
make_shirt_36();
make_shirt_36("medium");
make_shirt_36("small", "I love JavaScript");
