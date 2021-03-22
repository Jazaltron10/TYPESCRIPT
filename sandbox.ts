let character = 'luigi';
let age = 30 ;
let Blackbelt = false;

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


const circumference = (diameter:number) => {
    return diameter * Math.PI;
}

console.log(circumference(78.7));