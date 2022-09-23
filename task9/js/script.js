const listEl = document.querySelector('#list');
const buttonEl = document.querySelector('#button');
const toDoList = document.querySelector('#todolist')

buttonEl.addEventListener('click', onAddButtonClick);

function onAddButtonClick() {
    const newToDoList = getValues();

    // listEl.addEventListener('click', () => {
    //     liEl.remove();
    // });

    addtoDoList(newToDoList);
    resetForm();

    // const liEl = document.createElement('li');
    // liEl.textContent = 'to do';
    // listEl.append(liEl);
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


