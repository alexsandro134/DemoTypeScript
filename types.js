"use strict";
//Boolean
var isThisVideoDone = false;
//Numbers
var myNumber = 4;
//Text, string
var myName = "Alex";
//Template strings
var greeting = "Hello, " + myName;
var greeting2 = "Hello, " + myName;
//Arrays
var count = [1, 2, 3, 4];
// If you dont know the type
var anything = 4;
anything = "Some text";
anything = false;
//Returning nothing
function greeter_2(name) {
    console.log("Hello, " + name);
}
//Enums
var joystickStatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickStatus === Directions.Left) {
    // Move the player to left
}
