//Boolean
let isThisVideoDone: boolean = false;

//Numbers
let myNumber: number = 4;

//Text, string
let myName: string = "Alex";

//Template strings
let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;

//Arrays
let count: Array < number > = [1, 2, 3, 4];

// If you dont know the type
let anything: any = 4;
anything = "Some text";
anything = false;

//Returning nothing
function greeter_2(name: string): void {
    console.log("Hello, " + name);
}

//Enums
let joystickStatus = 1;
enum Directions{Up, Down, Left, Right};

if (joystickStatus === Directions.Left) {
    // Move the player to left
}