"use strict";
console.log("Hello world!");
// GENERICS
/*When we pass in the object into the function typescript is not aware of the object's properties and therefore throws an error when we try to access it,
This can be solved by using the Generic type: we do this by using a capital T in an angle bracket
but even at that we are not specifying what the type of the parameter is
all we are doing is just capturing the specifics of the type parameter being passed in
to solve this the generic has to extend the specific type you want to pass in
We can even go further by specifying the properties you want the object being passed in must have, you do this by  const addUID = <T  extends {name: string}>(obj: T) => {}
*/
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "cosi", age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ["bread", "milk", "toilet roll"]
};
console.log(docThree, docFour);
// ENUMS
/*
These are a special type in typescript that lets us store a set of keywords as constants and associate them with a numeric value
*/
let Enums;
Enums = () => {
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
        ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    })(ResourceType || (ResourceType = {}));
    const docOne = {
        uid: 1,
        resourceType: ResourceType.BOOK,
        data: { title: "name of the wind" }
    };
    const docTwo = {
        uid: 10,
        resourceType: ResourceType.PERSON,
        data: { title: "Moshi" }
    };
    console.log(docOne, docTwo);
};
Enums();
let Tuples;
Tuples = () => {
    let arr = ['rico', 25, true];
    arr[0] = false;
    arr[1] = 'Moscow';
    arr = [30, false, 'Moscow'];
    /*arrays are very flexible on the positioning of the properties they
    contain*/
    /*In a tuple once the position has been defined that position can't contain any other type other than the type defined in it's position */
    let tup = ['ricosino', 25, true];
    tup[0] = 'Kennokio';
    tup[1] = 30;
    let student;
    student = ['chun-li', 2233223];
};
Tuples();
