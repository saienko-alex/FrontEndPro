const listEl = document.querySelector('#list');
const buttonEl = document.querySelector('#button');
const toDoList = document.querySelector('#todolist')

buttonEl.addEventListener('click', onAddButtonClick);

function onAddButtonClick() {
    const newToDoList = getValues();

    addtoDoList(newToDoList);
    resetForm();

}

function getValues() {
    let toDolistEl = toDoList.value
    return toDolistEl;

}
function addtoDoList(toDolistEl) {
    const liEl = document.createElement('li');
    liEl.textContent = toDolistEl;
    listEl.append(liEl);
    
    liEl.addEventListener('click', () => {
        liEl.classList.toggle('list-done')
    });
    
    return liEl;
}

function resetForm() {
    toDoList.value = '';
}


