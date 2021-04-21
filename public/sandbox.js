"use strict";
//FUNCTIONS
var greet;
//greet = "john"
greet = function () {
    console.log("Hello world again");
};
/*
The Question mark makes calling the parameter optional when calling it in the function, likewise you can also give it a default value by equating it to that value. Note it is not advisable to use both the question mark and default value together you have to choose between either
*/
/*
Also the optional or general parameters usually go at the end of the function in which it is being passed into

const add = (a: number, b: number, c: number|string = 10) => {} == default value

const add = (a: number, b: number, c?: number|string) => {} == optional parameter
*/
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
/*We can explicitly define the return type of a function by adding a colon and specifying the return type after the parameter brackets
Likewise a function in typescript returns void in typescript when we don't actually return anything
but there's usually no need to do all this as typescript already infers the return type of any given function*/
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
