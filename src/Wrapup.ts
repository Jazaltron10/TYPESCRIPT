console.log("Hello world!");


// GENERICS

/*When we pass in the object into the function typescript is not aware of the object's properties and therefore throws an error when we try to access it,
This can be solved by using the Generic type: we do this by using a capital T in an angle bracket
but even at that we are not specifying what the type of the parameter is 
all we are doing is just capturing the specifics of the type parameter being passed in
to solve this the generic has to extend the specific type you want to pass in 
We can even go further by specifying the properties you want the object being passed in must have, you do this by  const addUID = <T  extends {name: string}>(obj: T) => {}
*/
const addUID = <T  extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return{...obj, uid};
}

let docOne = addUID({name: "cosi", age: 40});

console.log(docOne);



// Using Generics with Interfaces 

/*Remember an interface defines how an object should look*/
interface Resource <T>{
    uid: number;
    resourceName: string;
    // we want to make the data generic 
    /*
    The data is going to be whatever type we specify when we create 
    an object which implements this "Resource" interface
    */
    data: T;
}

const docThree: Resource <object> = {
    uid: 1,
    resourceName: 'person',
    data: {name:'shaun'}
}

const docFour: Resource <string[]> = {
    uid: 2, 
    resourceName: 'shoppingList',
    data: ["bread","milk","toilet roll"]
}

console.log(docThree, docFour)


// ENUMS
/*
These are a special type in typescript that lets us store a set of keywords as constants and associate them with a numeric value
*/


let Enums: Function;

Enums = () => {
    enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
    /*Each one of the above keywords is associated with a specific number, so now we don't have to remember the numbers we want to use
    for our resourceType
    */

    interface Resource<T>{
        uid: number;
        resourceType: number;
        data: T;
    }


    const docOne: Resource <object> = {
        uid: 1,
        resourceType: ResourceType.BOOK,
        data: { title:"name of the wind" }
    }
    const docTwo: Resource <object> = {
        uid: 10,
        resourceType: ResourceType.PERSON,
        data: { title:"Moshi" }
    }

    console.log(docOne, docTwo)

}

Enums ()

let Tuples: Function;

Tuples = () => {
    let arr = ['rico', 25, true];
    arr[0] = false;
    arr[1] = 'Moscow';

    arr = [30, false, 'Moscow'];
    /*arrays are very flexible on the positioning of the properties they 
    contain*/
    /*In a tuple once the position has been defined that position can't contain any other type other than the type defined in it's position */
    let tup: [string, number, boolean] = ['ricosino', 25, true];
    tup[0] = 'Kennokio';
    tup[1] =  30;

    let student: [string, number];

    student = ['chun-li', 2233223];

    let studentName: string = "jasper"
    console.log(tup, typeof(studentName), student)

}

Tuples()


























