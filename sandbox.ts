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
