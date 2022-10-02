const TASK_ITEM_CLASS = 'task-item';
const LIST_DONE_CLASS = 'list-done';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const listEl = document.querySelector('#list');
const buttonEl = document.querySelector('#button');
const toDoList = document.querySelector('#todolist');
const idEl = document.querySelector('#id');

const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
listEl.addEventListener('click', onListClick);

let toDoTaskList = [
    {id: 1, title: 'task1', isdone: true},
    {id: 2, title: 'task2', isdone: false},
    {id: 3, title: 'task3', isdone: true},
    {id: 4, title: 'task4', isdone: false},
];

init();


function onListClick(event) {
    const contactId = getContactId(event.target);
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(contactId);
    } 
    if(event.target.classList.contains(EDIT_BTN_CLASS)) {
        editTodo(contactId);
    }
    if(event.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(event.target);
        
    }
}    

buttonEl.addEventListener('click', onAddButtonClick);

function onAddButtonClick() {
    const newToDoList = getValues();

    saveToDoList(newToDoList);
    resetForm();

}


function getValues() {
    return {
        id: +idEl.value,
        title: toDoList.value,
    };
}

function saveToDoList(toDoList) {
    if(toDoList.id === 0) {
        addtoDoList(toDoList);
    } else {
        updateToDoList(toDoList);
    }
}

function addtoDoList(doList) {
    doList.id = Date.now();
    toDoTaskList.push(doList);
    
    renderToDoList(toDoTaskList);
}


function generateAddTodoHtml(toDolistEl) {
    const template = taskITemTemplate
    .replaceAll('{{id}}', toDolistEl.id)
    .replaceAll('{{title}}', toDolistEl.title);
    
    return template;
}

function updateToDoList(toDoList) {
    toDoTaskList = toDoTaskList.map((item) => (item.id !== toDoList.id ? item : toDoList));
    renderTaskList(toDoTaskList);
}

function resetForm() {
    idEl.value = '';
    toDoList.value = '';
}

function fillForm({id, title}) {
    idEl.value = id;
    toDoList.value = title;
}

// function toggleTodo(todoEl) {
//     todoEl.classList.toggle(LIST_DONE_CLASS);
// }

function deleteTodo(id) {
    // const index = toDoTaskList.findIndex((item) => item.id === id)
    // toDoTaskList.splice(index, 1);
    toDoTaskList = toDoTaskList.filter((item) => item.id !== id);

    renderTaskList(toDoTaskList);
}

function toggleTodo(isdone) {
    isdone.addEventListener('click', () => {
        isdone.classList.toggle('list-done')
    });
addToggleToDo(isdone)
}   

function addToggleToDo (isdone) {
    if(isdone.classList.toggle('list-done')) {
        isdone.isdone = true;
    toDoTaskList.push(isdone);
    } 
    else {
        isdone.isdone = false;
    toDoTaskList.push(isdone);
    }
    
    toDoTaskList = toDoTaskList.filter((item) => item.isdone !== isdone);

    // renderTaskList(toDoTaskList);
}

function init() {
    renderTaskList(toDoTaskList)
}

function renderTaskList(toDoTaskList) {
    listEl.innerHTML = '';
    toDoTaskList.forEach(renderToDoList);
}

function renderToDoList(toDolistEl) {
    const liEl = generateAddTodoHtml(toDolistEl);
    listEl.insertAdjacentHTML('beforeend', liEl);

}

function getContactId(elem) {
   return +elem.parentElement.dataset.contactId;
}

function editTodo(id) {
    const doList = toDoTaskList.find((item) => item.id === id);
    fillForm(doList);
}
























// const TASK_ITEM_CLASS = 'task-item';
// const LIST_DONE_CLASS = 'list-done';
// const DELETE_BTN_CLASS = 'delete-btn';
// const EDIT_BTN_CLASS = 'edit-btn';

// const listEl = document.querySelector('#list');
// const buttonEl = document.querySelector('#button');
// const toDoList = document.querySelector('#todolist');
// const idEl = document.querySelector('#id');

// const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
// listEl.addEventListener('click', onListClick);

// let toDoTaskList = [
//     {id: 1, title: 'task1', isdone: true},
//     {id: 2, title: 'task2', isdone: false},
//     {id: 3, title: 'task3', isdone: true},
//     {id: 4, title: 'task4', isdone: false},
// ];

// init();


// function onListClick(event) {
//     const contactId = getContactId(event.target);
//     if (event.target.classList.contains(DELETE_BTN_CLASS)) {
//         deleteTodo(contactId);
//     } 
//     if(event.target.classList.contains(EDIT_BTN_CLASS)) {
//         editTodo(contactId);
//     }
//     // else if (event.target.classList.contains(TASK_ITEM_CLASS)) {
//     // //     toggleTodo(event.target);
//     // // }
// }    

// buttonEl.addEventListener('click', onAddButtonClick);

// function onAddButtonClick() {
//     const newToDoList = getValues();

//     saveToDoList(newToDoList);
//     resetForm();

// }

// function renderToDoList(toDolistEl) {
//     const liEl = generateAddTodoHtml(toDolistEl);
//     listEl.insertAdjacentHTML('beforeend', liEl);
//     return liEl;
// }


// function getValues() {
//     return {
//         id: +idEl.value,
//         title: toDoList.value,
//     };

// }

// function saveToDoList(toDoList) {
//     if(toDoList.id === 0) {
//         addtoDoList(toDoList);
//     } else {
//         updateToDoList(toDoList);
//     }


// }

// function addtoDoList(doList) {
//     doList.id = Date.now();
//     toDoTaskList.push(doList);
    
//     renderToDoList(toDoTaskList);
// }


// function generateAddTodoHtml(toDolistEl) {
//     const template = taskITemTemplate
//     .replaceAll('{{id}}', toDolistEl.id)
//     .replaceAll('{{title}}', toDolistEl.title);
    
//     return template;
// }

// function updateToDoList(toDoList) {
//     toDoTaskList = toDoTaskList.map((item) => (item.id !== toDoList.id ? item : toDoList));
//     console.log('update', toDoTaskList, toDoList);
//     renderTaskList(toDoTaskList);
// }

// function resetForm() {
//     idEl.value = '';
//     toDoList.value = '';
// }

// function fillForm({id, title}) {
//     idEl.value = id;
//     toDoList.value = title;
// }

// // function toggleTodo(todoEl) {
// //     todoEl.classList.toggle(LIST_DONE_CLASS);
// // }

// function deleteTodo(id) {
//     // const index = toDoTaskList.findIndex((item) => item.id === id)
//     // toDoTaskList.splice(index, 1);
//     toDoTaskList = toDoTaskList.filter((item) => item.id !== id);
//     console.log({toDoTaskList, id});

//     renderTaskList(toDoTaskList);
// }

// function init() {
//     renderTaskList(toDoTaskList)
// }

// function renderTaskList(toDoTaskList) {
//     listEl.innerHTML = '';
//     toDoTaskList.forEach(renderToDoList);
// }

// function getContactId(elem) {
//    return +elem.parentElement.dataset.contactId;
// }

// function editTodo(id) {
//     const doList = toDoTaskList.find((item) => item.id === id);
//     fillForm(doList);
// }











// const TASK_ITEM_CLASS = 'task-item';
// const LIST_DONE_CLASS = 'list-done';
// const DELETE_BTN_CLASS = 'delete-btn';

// const listEl = document.querySelector('#list');
// const buttonEl = document.querySelector('#button');
// const toDoList = document.querySelector('#todolist');
// const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
// listEl.addEventListener('click', onListClick);

// const toDoTaskList = [
//     {id: 1, title: 'task1', isdone: true},
//     {id: 2, title: 'task2', isdone: false},
// ];

// init();

// addtoDoList({title: 'task1'});
// addtoDoList({title: 'task2'});

// function onListClick(event) {
//     if (event.target.classList.contains(DELETE_BTN_CLASS)) {
//         deleteTodo(event.target.parentElement);
//     } else if (event.target.classList.contains(TASK_ITEM_CLASS)) {
//         toggleTodo(event.target);
//     }
// }    

// buttonEl.addEventListener('click', onAddButtonClick);

// function onAddButtonClick() {
//     const newToDoList = getValues();

//     addtoDoList(newToDoList);
//     resetForm();

// }

// function getValues() {
//     return {
//         title: toDoList.value
//     }
//     // let toDolistEl = toDoList.value
//     // return toDolistEl;

// }


// function addtoDoList(toDolistEl) {
//     const liEl = generateAddTodoHtml(toDolistEl);
//     listEl.insertAdjacentHTML('beforeend', liEl);
//     return liEl;
// }

// function generateAddTodoHtml(toDolistEl) {
//     const template = taskITemTemplate.replaceAll('{{title}}', toDolistEl.title);
//     return template;
// }

// function resetForm() {
//     toDoList.value = '';
// }

// function toggleTodo(todoEl) {
//     todoEl.classList.toggle(LIST_DONE_CLASS);
// }

// function deleteTodo(todoEl) {
//     todoEl.remove();
// }

// function init(toDoTaskList) {
//     renderTaskList(toDoTaskList)
// }

// function renderTaskList() {
//     toDoTaskList.forEach(addtoDoList)
// }





