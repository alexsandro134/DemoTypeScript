"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this.name + " and I'm walking " + distance + " meter");
    };
    return Animal;
}());
var myAnimal = new Animal("Phoc");
myAnimal.walk(10);
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    /**
     *
     */
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    Snake.prototype.walk = function (distance) {
        console.log("Snakes dont really walk");
    };
    return Snake;
}(Animal));
