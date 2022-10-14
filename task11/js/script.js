
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
const LIST_DONE_CLASS = 'list-done';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const listEl = document.querySelector('#list');
const buttonEl = document.querySelector('#button');
const toDoList = document.querySelector('#todolist');
const idEl = document.querySelector('#id');

const taskITemTemplate = document.querySelector('#AddToDoItemTemplate').innerHTML;
listEl.addEventListener('click', onListClick);
buttonEl.addEventListener('click', onAddButtonClick);

let toDoTaskList = [
    {id: 1, title: 'task1', isdone: true},
    {id: 2, title: 'task2', isdone: false},
    {id: 3, title: 'task3', isdone: true},
    {id: 4, title: 'task4', isdone: false},
];

init();

function init() {
    renderTaskList(toDoTaskList)
}

function renderTaskList(toDoTaskList) {
    listEl.innerHTML = '';
    toDoTaskList.forEach(renderToDoListEl);
}

function renderToDoListEl(toDolistEl) {
    const liEl = generateAddTodoHtml(toDolistEl);
    listEl.insertAdjacentHTML('beforeend', liEl);

}
function generateAddTodoHtml(toDolistEl) {
    const template = taskITemTemplate
    .replaceAll('{{id}}', toDolistEl.id)
    .replaceAll('{{doneClass}}', toDolistEl.isdone ? LIST_DONE_CLASS : '')
    .replaceAll('{{title}}', toDolistEl.title);
    
    return template;
}

function onAddButtonClick() {
    const newToDoItem = getValues();

    addtoDoList(newToDoItem);
    resetForm();

}

function onListClick(event) {
    const toDoId = getToDoId(event.target);
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(toDoId);
    } 
    if(event.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(toDoId);
        
    }
}   

function getValues() {
    return {
        id: +idEl.value,
        title: toDoList.value,
    };
}
function resetForm() {
    idEl.value = '';
    toDoList.value = '';
}
function addtoDoList(doList) {
    doList.id = Date.now();
    doList.isdone = false;
    toDoTaskList.push(doList);
    
    renderTaskList(toDoTaskList);
}
function getToDoId(elem) {
    const parentEl = elem.closest(TASK_ITEM_SELECTOR);
return parentEl ? +parentEl.dataset.contactId : null;
}
 function deleteTodo(id) {
    toDoTaskList = toDoTaskList.filter((item) => item.id !== id);

    renderTaskList(toDoTaskList);
} 
function toggleTodo(id) {
    const toggleToDo = toDoTaskList.find((item) => item.id === id);

    toggleToDo.isdone = !toggleToDo.isdone;

    renderTaskList(toDoTaskList);
}

 









