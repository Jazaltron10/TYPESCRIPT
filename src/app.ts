import { Invoice } from './Classes/Invoice.js';
import { Payment } from './Classes/Payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';


let docOne: HasFormatter;
let docTwo: HasFormatter;

/*docOne and docTwo can both be an invoice and a payment respectively because both the invoice and payments class implements the HasFormatter 
interface */

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing wok', 200);

// /*Now we are saying that only objects which implement the HasFormatter interface can go into the array */
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// /* */
// console.log(docs);

//Classes
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [] 
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount, inv.format());
// });




const form = document.querySelector('.new-item-form') as HTMLFormElement;


// Grabbing the different Inputs 
const type  =  document.querySelector('#type') as HTMLSelectElement;
const tofrom  =  document.querySelector('#tofrom') as HTMLInputElement;
const details =  document.querySelector('#details') as HTMLInputElement;
const amount =  document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, +amount.value);
    }else{
        doc = new Payment(tofrom.value, details.value, +amount.value);
    }

    console.log(doc);
});






































