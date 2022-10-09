const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
const LIST_DONE_CLASS = 'list-done';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const listEl = document.querySelector('#list');
const buttonEl = document.querySelector('#button');
const toDoInput = document.querySelector('#todoinput');
const idEl = document.querySelector('#id');
const newTaskForm = document.querySelector('#formItem');

const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
buttonEl.addEventListener('click', onButtonClick);
listEl.addEventListener('click', onTaskListElementClick)


let toDoList = [
    {id: 1, title: 'task1', isDone: false},
    {id: 2, title: 'task2', isDone: true},
    {id: 3, title: 'task3', isDone: false},
    {id: 4, title: 'task4', isDone: false},
];

init();

function init() {
renderList(toDoList);
}

function onButtonClick() {

    const newTask = getFormValues();
    addToDo(newTask);

    resetInput();
}

function onTaskListElementClick(e) {
   if(e.target.classList.contains(DELETE_BTN_CLASS)) {
    const toDoId = e.target.parentElement.dataset.toDoId;
        console.log(toDoId);
   };
}

function renderList(list) {
    const htmls = list.map((todo) => generateToDoItemHtml(todo));
    
    listEl.innerHTML = htmls.join('');
}

function generateToDoItemHtml({id, title, isDone}) {
    return taskITemTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{doneClass}}', isDone ? LIST_DONE_CLASS : '');
        
}

function getFormValues() {
    return {
        title: toDoInput.value,
    };
}

function addToDo(todo) {
    todo.id = Date.now();
    todo.isDone = true;

    toDoList.push(todo);

    renderList(toDoList);
}

function resetInput() {
    return toDoInput.value = '';
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
//     if(event.target.classList.contains(TASK_ITEM_CLASS)) {
//         toggleTodo(event.target);
        
//     }
// }    

// buttonEl.addEventListener('click', onAddButtonClick);

// function onAddButtonClick() {
//     const newToDoList = getValues();

//     saveToDoList(newToDoList);
//     resetForm();

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

//     renderTaskList(toDoTaskList);
// }

// function toggleTodo(isdone) {
//     isdone.addEventListener('click', () => {
//         isdone.classList.toggle('list-done')
//     });
// addToggleToDo(isdone)
// }   

// function addToggleToDo (isdone) {
//     if(isdone.classList.toggle('list-done')) {
//         isdone.isdone = true;
//     toDoTaskList.push(isdone);
//     } 
//     else {
//         isdone.isdone = false;
//     toDoTaskList.push(isdone);
//     }
    
//     toDoTaskList = toDoTaskList.filter((item) => item.isdone !== isdone);

//     // renderTaskList(toDoTaskList);
// }

// function init() {
//     renderTaskList(toDoTaskList)
// }

// function renderTaskList(toDoTaskList) {
//     listEl.innerHTML = '';
//     toDoTaskList.forEach(renderToDoList);
// }

// function renderToDoList(toDolistEl) {
//     const liEl = generateAddTodoHtml(toDolistEl);
//     listEl.insertAdjacentHTML('beforeend', liEl);

// }

// function getContactId(elem) {
//    return +elem.parentElement.dataset.contactId;
// }

// function editTodo(id) {
//     const doList = toDoTaskList.find((item) => item.id === id);
//     fillForm(doList);
// }