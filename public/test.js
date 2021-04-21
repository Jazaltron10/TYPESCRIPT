"use strict";
var character = 'mario';
var age = 30;
var jump = 50;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ['Trevor', 'Michael', 'Franklin'];
names.push('toad');
// names.push(3);
// names[0] = 3;
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.push(25);
console.log(numbers);
// numbers.push('shaun');
// numbers[1]='shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('sryu');
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.age = "30";
//ninja.skills = ['fighting', "sneaking"];
ninja = {
    name: "koshui",
    belt: 'orange',
    age: 40
};
var message = " hello  there i am the greatest super hero on the planet";
console.log(message);
var message_2 = "John walker is a piece of shit";
console.log(message_2.toUpperCase());
// explicit types
var caracter;
var years;
var isloggedin;
years = +'39';
isloggedin = true;
// arrays 
//let samurais: string[];
/*in order to use the push method in an array in typescript you would
have to initialize the array as an empty array*/
var samurais = [];
samurais.push('john');
// union types             
/*A union type array is an array that can contain multiple data types*/
/*when an array or variable is declared and it could be one of several different types it is known as a union type.*/
var dynamic = [];
dynamic.push('hello');
dynamic.push(35);
dynamic.push(true);
console.log(dynamic);
var dui;
dui = '134';
dui = 342;
// objects
var ninjaone;
ninjaone = { name: 'yoshin', age: 34 };
var ninjatwo;
ninjatwo = { name: 'Godzilla', age: 25, beltcolor: 'black' };
ninjatwo.Games = [];
ninjatwo.Games.push("Fifa 20");
console.log(ninjatwo);
ninjatwo.Games.push("Mortal Kombat 11");
console.log(ninjatwo);
ninjatwo.Games.push("Spiderman");
console.log(ninjatwo);
ninjatwo.Games.push("God Of War");
console.log(ninjatwo);
ninjatwo.Games.push("The Last Of Us");
console.log(ninjatwo);
ninjatwo.Games.push(11 + 9);
console.log(ninjatwo);
// Dynamic Types 
var sage = 25;
sage = true;
console.log(sage);
sage = 'hello';
console.log(sage);
sage = { name: "luigi" };
console.log(sage);
/* This basically defeats the purpose of using typescript as it reverts it back to vanilla javascript*/
var mixedArray = [];
mixedArray.push('mario');
mixedArray.push(34);
mixedArray.push(false);
console.log(mixedArray);
/* Note when declaring an object type or an array type you have to use the colon instead of the = sign, this is because we are not initializing the object*/
var ninjaThree;
ninjaThree = { name: 'john', age: 87 };
console.log(ninjaThree);
ninjaThree = { name: 87, age: 'john' };
console.log(ninjaThree);
