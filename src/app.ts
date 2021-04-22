//const anchor = document.querySelector('a')!;
/* The exclammation mark tells typescript that we know what the return value would be and it would not be null */

//if(anchor){console.log(anchor.href);}

/*Typescript does not have a direct access to the html page during development */

//console.log(anchor.href);

/*
Typescript contains special types for every DOM Element 
So when we use a particular DOM ELement typescript knows all the different types of properties on that element and provides it to us in vscode with intellisense 
*/

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
/* Typecasting  is used to tell typescript the type of an element being used in the DOM*/
//console.log(form.children);


// Grabbing the different Inputs 
const type  =  document.querySelector('#type') as HTMLSelectElement;
const tofrom  =  document.querySelector('#tofrom') as HTMLInputElement;
const details =  document.querySelector('#details') as HTMLInputElement;
const amount =  document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit' , (e:Event)=>{
    e.preventDefault();
    
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})







































