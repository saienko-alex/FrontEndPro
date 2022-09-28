const contactsListEl = document.querySelector('#contactsList');

const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addContactButtonEl = document.querySelector('#addContactButton');
const contactsTemplate = document.querySelector('#contactsItemTemplate').innerHTML;

addContactButtonEl.addEventListener('click', onAddContactButtonClick)
contactsListEl.addEventListener('click', onContactsClick);
nameEl.addEventListener('input', validateValues);
surnameEl.addEventListener('input', validateValues);
phoneEl.addEventListener('input', validateValues);

function onAddContactButtonClick() {
    if(!validateValues()) {
        return;
    }
    const newContact = getValues();

   addContact(newContact);
   resetForm();
}

function onContactsClick(event) {
    // console.log(event.target);
    if(event.target.classList.contains('close-button')) {
        deleteContactsList(event.target.parentElement);
    } 
    
}
function getValues() {
    return {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
}

function addContact(contact) {

    const contactHtml = generateHtml(contact)
    contactsListEl.insertAdjacentHTML('beforeend', contactHtml)

}

function generateHtml({name, surname, phone}) {
    let template = contactsTemplate
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{phone}}', phone);

    return template;
}    


function resetForm() {
    nameEl.value = '';
    surnameEl.value = '';
    phoneEl.value = '';
}

function deleteContactsList(contactEl) {
    contactEl.remove();
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
    } if(phoneEl.value === '') {
        phoneEl.classList.add('invalid-input');
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
    phoneEl.classList.remove("invalid-input");
}






// function validateValues() {
//     resetValidation();

//     if(nameEl.value === '') {
//         nameEl.classList.add('invalid-input');
//         return false
//     };
//     if(surnameEl.value === '') {
//         surnameEl.classList.add('invalid-input');
//         return false
//     };
//     if(phoneEl.value === '') {
//         phoneEl.classList.add('invalid-input');
//         return false
//     };

//     return true;
// }

// function resetValidation() {
//     nameEl.classList.remove("invalid-input");
//     surnameEl.classList.remove("invalid-input");
//     phoneEl.classList.remove("invalid-input");
// }




// const contactsListEl = document.querySelector('#contactsList');
// const nameEl = document.querySelector('#name');
// const surnameEl = document.querySelector('#surname');
// const phoneEl = document.querySelector('#phone');
// const addContactButtonEl = document.querySelector('#addContactButton');

// addContactButtonEl.addEventListener('click', onAddContactButtonClick);
// contactsListEl.addEventListener('click', onContactsClick);

// function onAddContactButtonClick() {
//     if(!validateValues()) {
//         return;
//     }
//     const newContact = getValues();

//    addContact(newContact);
//    resetForm();
// }

// function onContactsClick(event) {
//     if(event.target.classList.contains('closeButton')) {
//         event.target.parentElement.remove();
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
//     const rowEl = generateContactElement(contact);

//     contactsListEl.append(rowEl);
// }

// function generateContactElement({name, surname, phone}) {
//     const trEL = document.createElement('tr');

//     trEL.append(createCell(name));
//     trEL.append(createCell(surname));
//     trEL.append(createCell(phone));
//     trEL.append(createCell(''));
    
//     return trEL;

// }
// function createCell(value) {
//     const tdEl = document.createElement('td');
//     tdEl.textContent = value;

//     return tdEl;
// }

// function resetForm() {
//     nameEl.value = '';
//     surnameEl.value = '';
//     phoneEl.value = '';
// }

// function validateValues() {
//     resetValidation();

//     if(nameEl.value === '') {
//         nameEl.classList.add('invalid-input');
//         return false
//     };
//     if(surnameEl.value === '') {
//         surnameEl.classList.add('invalid-input');
//         return false
//     };
//     if(phoneEl.value === isNaN) {
//         phoneEl.classList.add('invalid-input');
//         return false
//     };

//     return true;
// }

// function resetValidation() {
//     nameEl.classList.remove("invalid-input");
//     surnameEl.classList.remove("invalid-input");
//     phoneEl.classList.remove("invalid-input");
// }