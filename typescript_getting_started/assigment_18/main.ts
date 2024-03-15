// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// assigment_18/main.ts

let guests: string[] = ["Albert Einstein", "Newton", "Nikola Tesla", "Dani", "Ejaz" ,"AlBeruni"];;
console.log(`You are inviting ${guests.length} people to dinner.`);

for (let i: number = 0; i < guests.length; i++) {
    console.log(`${i}.${guests[i]}`);
}