
// const TASK_ITEM_CLASS = 'task-item';
// const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
// const LIST_DONE_CLASS = 'list-done';
// const DELETE_BTN_CLASS = 'delete-btn';
// const EDIT_BTN_CLASS = 'edit-btn';

// const listEl = document.querySelector('#list');
// const buttonEl = document.querySelector('#button');
// const toDoList = document.querySelector('#todolist');
// const idEl = document.querySelector('#id');

// const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
// listEl.addEventListener('click', onListClick);
// buttonEl.addEventListener('click', onAddButtonClick);
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const DELETE_BTN_CLASS = 'close-button';
const CONTACT_ITEM_CLASS = 'contact-item';
const CONTACT_ITEM_SELECTOR = '.' + CONTACT_ITEM_CLASS;
const EDIT_BTN_CLASS = 'edit-button';

const contactsListEl = document.querySelector('#contactsList');

const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const emailEl = document.querySelector('#email');
const idEl = document.querySelector('#id');
const addContactButtonEl = document.querySelector('#addContactButton');
const contactsTemplate = document.querySelector('#contactsItemTemplate').innerHTML;

addContactButtonEl.addEventListener('click', onAddButtonClick)
contactsListEl.addEventListener('click', onContactsClick);
nameEl.addEventListener('input', validateValues);
surnameEl.addEventListener('input', validateValues);
emailEl.addEventListener('input', validateValues);

let contactList = [
    {id: 1, name: 'Bob', surname: 'Charger', email: '+38096'},
    {id: 2, name: 'Bob', surname: 'Charger', email: '+38096'},
    {id: 3, name: 'Bob', surname: 'Charger', email: '+38096'},
];

init();

function init() {
    fetchContactList();
    renderContactList(contactList)
}

function fetchContactList() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((value) => {
            contactList = value;
            renderContactList(contactList)
        });
}
function renderContactList(contactList) {
    contactsListEl.innerHTML = '';
    contactList.forEach(renderContactListEl);
}

function renderContactListEl(contactlistEl) {
    const liEl = generateAddContactHtml(contactlistEl);
    contactsListEl.insertAdjacentHTML('beforeend', liEl);

}

function generateAddContactHtml(contactlistEl) {
    const template = contactsTemplate
    .replaceAll('{{id}}', contactlistEl.id)
    .replaceAll('{{name}}', contactlistEl.name)
    .replaceAll('{{surname}}', contactlistEl.surname)
    .replaceAll('{{email}}', contactlistEl.email);
    
    return template;
}

function onAddButtonClick() {
    if(!validateValues()) {
        return;
    }
    const newContactItem = getValues();
    
    saveContact(newContactItem);
    resetForm();

}

function onContactsClick(event) {
    const contactId = getContactId(event.target);
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(contactId);
    } 
    if (event.target.classList.contains(EDIT_BTN_CLASS)) {
        editContact(contactId);
    } 
   
}   

function getValues() {
    return {
        id: +idEl.value,
        name: nameEl.value,
        surname: surnameEl.value,
        email: emailEl.value,
    };
}
function saveContact(contact) {
    if (!contact.id) {
        addContactList(contact);
    } else {
        updateContact(contact, contact.id);
    }
}

function resetForm() {
    idEl.value = '';
    nameEl.value = '';
    surnameEl.value = '';
    emailEl.value = '';
    contactList.value = '';
}

function fillForm({ id, name, surname, email }) {
    idEl.value = id;
    nameEl.value = name;
    surnameEl.value = surname;
    emailEl.value = email;
}
function  addContactList(contact) {
    // contactList.id = Date.now();
    // contactList.push(contact);

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            contactList = [...contactList, data];
            renderContactList(contactList);
        });  
}

function getContactId(elem) {
    const parentEl = elem.closest(CONTACT_ITEM_SELECTOR);
return parentEl ? +parentEl.dataset.contactId : null;
}
 function deleteContact(id) {
    contactList = contactList.filter((item) => item.id !== id);
    renderContactList(contactList);

    fetch(API_URL + id, {
        method: 'DELETE',
    });
} 


function validateValues() {
    resetValidation();

    if(nameEl.value === '') {
        nameEl.classList.add('invalid-input');
        addContactButtonEl.disabled = true;
        return false;
    } if(surnameEl.value === '') {
        surnameEl.classList.add('invalid-input');
        addContactButtonEl.disabled = true;
        return false
    } if(emailEl.value === '') {
        emailEl.classList.add('invalid-input');
        addContactButtonEl.disabled = true;
        return false
    } else {
        addContactButtonEl.disabled = false;
    }
    return true;
}

function resetValidation() {
    nameEl.classList.remove("invalid-input");
    surnameEl.classList.remove("invalid-input");
    emailEl.classList.remove("invalid-input");
}

function editContact(id) {
    // const contact = contactList.find((item) => item.id === id);

    fetch(API_URL + id)
        .then((res) => res.json())
        .then((value) => {
            updatedItem = value;
            fillForm(updatedItem);
        });
        
}

function updateContact(contact, id) {
    // const item = contactList.find((item) => item.id === id);
    // const updatedItem = {
    //     ...item,
    //     id: item.id,
    //     name: item.name,
    //     surname: item.surname,
    //     email: item.email,
    // };
    
    contactList = contactList.map((item) => (item.id !== contact.id ? item : contact));
    
    fetch(API_URL + id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    renderContactList(contactList);
} 



// const contact = contactList.find((item) => item.id === id);
// const updatedItem = {
//     ...contact,
// };
// contactList = contactList.map((item) => (item.id !== id ? item : updatedItem));

// fetch(API_URL + id, {
//     method: 'PUT',
//     body: JSON.stringify(updatedItem),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });












// function onAddContactButtonClick() {
//     if(!validateValues()) {
//         return;
//     }
//     const newContact = getValues();

//    addContact(newContact);
//    resetForm();
// }

// function onContactsClick(event) {
//     // console.log(event.target);
//     if(event.target.classList.contains('close-button')) {
//         deleteContactsList(event.target.parentElement);
//     } 
    
// }
// function getValues() {
//     return {
//         name: nameEl.value,
//         surname: surnameEl.value,
//         phone: phoneEl.value,
//     }
// }

// function addContact(contact) {

//     const contactHtml = generateHtml(contact)
//     contactsListEl.insertAdjacentHTML('beforeend', contactHtml)

// }

// function generateHtml({name, surname, phone}) {
//     let template = contactsTemplate
//         .replaceAll('{{name}}', name)
//         .replaceAll('{{surname}}', surname)
//         .replaceAll('{{phone}}', phone);

//     return template;
// }    


// function resetForm() {
//     nameEl.value = '';
//     surnameEl.value = '';
//     phoneEl.value = '';
// }

// function deleteContactsList(contactEl) {
//     contactEl.remove();
// }


// function validateValues() {
//     resetValidation();

//     if(nameEl.value === '') {
//         nameEl.classList.add('invalid-input');
//         addContactButtonEl.disabled = true;
//         return false;
//     } if(surnameEl.value === '') {
//         surnameEl.classList.add('invalid-input');
//         addContactButtonEl.disabled = true;
//         return false
//     } if(phoneEl.value === '') {
//         phoneEl.classList.add('invalid-input');
//         addContactButtonEl.disabled = true;
//         return false
//     } else {
//         addContactButtonEl.disabled = false;
//     }
//     return true;
// }

// function resetValidation() {
//     nameEl.classList.remove("invalid-input");
//     surnameEl.classList.remove("invalid-input");
//     phoneEl.classList.remove("invalid-input");
// }




