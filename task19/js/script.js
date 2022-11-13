
new PhotoAlbum($('.container'));
// const el = document.querySelector('.container');

// new PhotoAlbum(el);




// const TASK_ITEM_CLASS = 'task-item';
// const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;
// const LIST_DONE_CLASS = 'list-done';
// const DELETE_BTN_CLASS = 'delete-btn';
// const EDIT_BTN_CLASS = 'edit-btn';

// const listEl = document.querySelector('#list');
// // const buttonEl = document.querySelector('#button');
// // const toDoList = document.querySelector('#todolist');
// // const idEl = document.querySelector('#id');

// const taskITemTemplate = document.querySelector('#AddPhotoItemTemplate').innerHTML;
// // listEl.addEventListener('click', onListClick);
// // buttonEl.addEventListener('click', onAddButtonClick);

// let toDoTaskList = [];

// init();

// function init() {
//     fetchToDoList();
//     renderTaskList(toDoTaskList);
// }

// function fetchToDoList() {
//     fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
//         .then((res) => res.json())
//         .then((value) => {
//             toDoTaskList = value;
//             renderTaskList(toDoTaskList)
//         });
// }

// function renderTaskList(toDoTaskList) {
//     listEl.innerHTML = '';
//     toDoTaskList.forEach(renderToDoListEl);
// }

// function renderToDoListEl(toDolistEl) {
//     const liEl = generateAddTodoHtml(toDolistEl);
//     listEl.insertAdjacentHTML('beforeend', liEl);

// }
// function generateAddTodoHtml(toDolistEl) {
//     const template = taskITemTemplate
//     .replaceAll('{{id}}', toDolistEl.id)
//     .replaceAll('{{url}}', toDolistEl.url)
//     .replaceAll('{{surl}}', toDolistEl.thumbnailUrl)
//     .replaceAll('{{title}}', toDolistEl.title);
    
//     return template;
// }

// // function onAddButtonClick() {
// //     const newToDoItem = getValues();

// //     addtoDoList(newToDoItem);
// //     resetForm();

// // }

// // function onListClick(event) {
// //     const toDoId = getToDoId(event.target);
// //     if (event.target.classList.contains(DELETE_BTN_CLASS)) {
// //         deleteTodo(toDoId);
// //     } 
// //     if(event.target.classList.contains(TASK_ITEM_CLASS)) {
// //         toggleTodo(toDoId);
        
// //     }
// // }   

// // function getValues() {
// //     return {
// //         id: +idEl.value,
// //         title: toDoList.value,
// //     };
// // }
// // function resetForm() {
// //     idEl.value = '';
// //     toDoList.value = '';
// // }
// // function addtoDoList(doList) {
// //     doList.id = Date.now();
// //     doList.completed = false;
// //     toDoTaskList.push(doList);
    
// //     renderTaskList(toDoTaskList);
// // }
// // function getToDoId(elem) {
// //     const parentEl = elem.closest(TASK_ITEM_SELECTOR);
// // return parentEl ? +parentEl.dataset.contactId : null;
// // }
// //  function deleteTodo(id) {
// //     toDoTaskList = toDoTaskList.filter((item) => item.id !== id);

// //     renderTaskList(toDoTaskList);
// // } 
// // function toggleTodo(id) {
// //     const toggleToDo = toDoTaskList.find((item) => item.id === id);

// //     toggleToDo.completed = !toggleToDo.completed;

// //     renderTaskList(toDoTaskList);
// // }