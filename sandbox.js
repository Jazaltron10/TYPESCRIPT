var character = 'luigi';
var age = 30;
var Blackbelt = false;
/*
This gives an error anytime compiled
character = 20;
age = "yoshi"
blackbelt = 43
*/
/*Typescript infers the type based on the value we assign to our variables*/
character = 'luigi';
age = 96;
Blackbelt = true;
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(circumference(10.5));
