import { Invoice } from './Classes/Invoice.js';
import { ListTemplate } from './Classes/ListTemplate.js';
import { Payment } from './Classes/Payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement;


//list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


// Grabbing the different Inputs 
const type  =  document.querySelector('#type') as HTMLSelectElement;
const tofrom  =  document.querySelector('#tofrom') as HTMLInputElement;
const details =  document.querySelector('#details') as HTMLInputElement;
const amount =  document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Using tuples and the spread operator on the user input
    let values: [string, string, number];
    values = [tofrom.value, details.value, +amount.value] 

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end')
    
});


































