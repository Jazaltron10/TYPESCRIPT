import { Invoice } from './Classes/Invoice.js';
import { ListTemplate } from './Classes/ListTemplate.js';
import { Payment } from './Classes/Payments.js';
const form = document.querySelector('.new-item-form');
//list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// Grabbing the different Inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, +amount.value);
    }
    else {
        doc = new Payment(tofrom.value, details.value, +amount.value);
    }
    list.render(doc, type.value, 'end');
});
