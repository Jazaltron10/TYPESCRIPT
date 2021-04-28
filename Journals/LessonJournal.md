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





"include":["src"]
This is used to prevent any typescript file outside of the src folder from compiling to vanilla js 



in typescript we have three different types of access modifiers they are 
- public -> this is the default access modifier, it simply means that the propertyof a class can be accessed and modified from anywhere outside the class as well as within the class

- private -> this access modifier restricts the accessing and modification of the properties of a class to within the class alone.
with this type of accessing, properties can only be accessed through the class methods.

- readonly -> this type of access modifier, allows the properties of a class to be accessed from anywhere with the caveat that it cannot be changed at all not even within the class itself, but it can be accessed from anywhere.





readonly client: string; // Only allows us to read the value both
inside and outside of the class but not change the value 
private details: string; //change and read value only within the
class 
public amount: number;  // change and read value outside/inside ofthe class

  

### Webpack and Typescript
+   How to use Webpack to compile TypeScript into JavaScript
+   How to bundle source code into a single javascript file
+   How to use a Webpack dev server
+   How to use ES6 modules and source maps(debugging)

