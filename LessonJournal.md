# This File Simply Tracks All that I Haved learned So far

>console.log(character);
<const inputs = document.querySelectorAll('input');
   console.log(inputs);
   inputs.forEach(input => {
   console.log(input);
})
-----------------------------------------------------------------------

# In Typescript if you declare a variable to be a specific type then you
# can't change that type,

# also

# If you declare a property or an array to be of a specific type then    you can't just change it down the line.

# once you have defined an object in typescript you then can't add additional properties to it.
-------------------------------------------------------------------------

/_You use tsc filename.ts -w for automatic recompilation anytime you save_/

-------------------------------------------------------------------------

<let character = 'luigi';
let age = 30 ;
let Blackbelt = false;

/* 
This gives an error anytime compiled
character = 20;
age = "yoshi"
blackbelt = 43
*/

/*Typescript infers the type based on the value we assign to our variables*/

<character = 'luigi';
age = 96;
Blackbelt = true;


<const circumference = (diameter:number) => {
    return diameter * Math.PI;
}

>console.log(circumference(78.7));


# arrays
<let names = ['Trevor', 'Michael', 'Franklin'];

<names.push('toad');
// names.push(3);
// names[0] = 3;


<let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

<numbers.push(25);
//console.log(numbers);
// numbers.push('shaun');
// numbers[1]='shaun';


<let mixed = ['ken',4,'chun-li', 8, 9, true];

<mixed.push('sryu');
<mixed.push(10);

<mixed[0] = 3;


//objects
<let ninja = {
    name:'mario',
    belt:'black',
    age:30
};

<ninja.age = 40;
<ninja.name = 'ryu';

//ninja.age = "30";

//ninja.skills = ['fighting', "sneaking"];


<ninja = {
    name: "koshui",
    belt: 'orange',
    age: 40
    //skills: [] //gives error
}

>to compile typescript files you'll have to use the command 

        "tsc filename.ts"

>to watch your tsc file and compile on save you'll use the command 

        "tsc filename.ts -w"

>to create a tsconfig.json file you'll have to use 

        "tsc --init"
























let character = 'mario';

let age = 30;
let jump = 50;


const circ =(diameter:number)=>{
    return diameter * Math.PI
}

console.log(circ(7.5))

// arrays
let names = ['Trevor', 'Michael', 'Franklin'];

names.push('toad');
// names.push(3);
// names[0] = 3;


let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers.push(25);
console.log(numbers);
// numbers.push('shaun');
// numbers[1]='shaun';


let mixed = ['ken',4,'chun-li', 8, 9, true];

mixed.push('sryu');
mixed.push(10);

mixed[0] = 3;


//objects
let ninja = {
    name:'mario',
    belt:'black',
    age:30
};

ninja.age = 40;
ninja.name = 'ryu';

//ninja.age = "30";

//ninja.skills = ['fighting', "sneaking"];


ninja = {
    name: "koshui",
    belt: 'orange',
    age: 40
}

let message : string  = " hello  there i am the greatest super hero on the planet"
console.log(message)
let message_2 : string = "John walker is a piece of shit"
console.log(message_2.toUpperCase())




// explicit types
let caracter: string;
let years : number ;
let isloggedin: boolean;


years = +'39'
isloggedin = true;



// arrays 
//let samurais: string[];
/*in order to use the push method in an array in typescript you would 
have to initialize the array as an empty array*/
let samurais : string[] = [];
samurais.push('john')

// union types             
/*A union type array is an array that can contain multiple data types*/
/*when an array or variable is declared and it could be one of several different types it is known as a union type.*/


let dynamic :(string|number|boolean)[] = []
dynamic.push('hello');
dynamic.push(35);
dynamic.push(true);
console.log(dynamic)


let dui: string | number;
dui = '134';
dui = 342;


// objects
let ninjaone: object;
ninjaone = {name:'yoshin', age: 34};


let ninjatwo:{
    name : string,
    age: number,
    beltcolor: string
    Games ?:(string|number)[];
}

ninjatwo = {name:'Godzilla', age: 25, beltcolor:'black'}
ninjatwo.Games = [];
ninjatwo.Games.push("Fifa 20");
console.log(ninjatwo)


ninjatwo.Games.push("Mortal Kombat 11");
console.log(ninjatwo)

ninjatwo.Games.push("Spiderman");
console.log(ninjatwo)

ninjatwo.Games.push("God Of War");
console.log(ninjatwo)

ninjatwo.Games.push("The Last Of Us");
console.log(ninjatwo)

ninjatwo.Games.push(11 + 9 );
console.log(ninjatwo)








// Dynamic Types 

let sage : any = 25;

sage = true ;
console.log(sage)

sage = 'hello'
console.log(sage)

sage = {name:"luigi"};
console.log(sage)

/* This basically defeats the purpose of using typescript as it reverts it back to vanilla javascript*/


let mixedArray : any [] = [];
mixedArray.push('mario');
mixedArray.push(34);
mixedArray.push(false);

console.log(mixedArray);

/* Note when declaring an object type or an array type you have to use the colon instead of the = sign, this is because we are not initializing the object*/


let ninjaThree : {name : any, age:any };
ninjaThree = {name: 'john', age :87}
console.log(ninjaThree);

ninjaThree = {name: 87, age :'john'}
console.log(ninjaThree);





