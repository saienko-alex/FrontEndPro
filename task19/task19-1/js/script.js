
    $API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
    $photoList = [];
    $listEl = $('.body');

    $photoITemTemplate = `
    <div class="h-smart-thumnail">
	    <ul>
		   <li><img src="{{url}}"></li>
	    </ul>
    </div>
    `;


    // $photoITemTemplate = `
    // <img class="xzoom" src="{{url}}" xoriginal="{{surl}}" />
    // <div class="xzoom-thumbs">
    // <a href="{{surl}}">
    //     <img class="xzoom-gallery" width="80" src="{{surl}}"  xpreview="{{url}}">
    // </a>
    // </div>
    // `;


    initPhoto();  
    
    function initPhoto() {
        fetchPhotoAlbum();
    }

    function fetchPhotoAlbum() {
        fetch(this.$API_URL)
        .then((res) => res.json())
        .then((value) => {
            $photoList = value
            renderPhotoAlbum($photoList)
        });
    }
   
    function renderPhotoAlbum(photolist) {
        const $values = $(photolist.map(generatePhotoAlbumHtml).join('')); 
        $listEl.append($values);  
        $('.h-smart-thumnail').hSmartThumbnail();
        // $('.xzoom, .xzoom-gallery').xzoom({tint: '#333', Xoffset: 15});

    }

    
    function generatePhotoAlbumHtml(photoListEl) {
        return $photoITemTemplate
        .replaceAll('{{url}}', photoListEl.url)
        // .replaceAll('{{surl}}', photoListEl.thumbnailUrl)      
    }
 










    
    // $API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
    // $photoList = [];
    // $listEl = $('.fotorama');

    // $photoITemTemplate = `
    //     <img src="{{url}}">
    // `;

    
   
    // initPhoto();  
    
    
    // function initPhoto() {
    //     fetchPhotoAlbum();
    // }

    // function fetchPhotoAlbum() {
    //     fetch(this.$API_URL)
    //     .then((res) => res.json())
    //     .then((value) => {
    //         $photoList = value
    //         renderPhotoAlbum($photoList)
    //     });
    // }

        
    // function renderPhotoAlbum(photolist) {
    //     $listEl.html(photolist.map(generatePhotoAlbumHtml).join(''));  
    // }

    
    // function generatePhotoAlbumHtml(photoListEl) {
    //     return $photoITemTemplate
    //     .replaceAll('{{url}}', photoListEl.url)   
    // }






// const listEl = document.querySelector('#list');


// const taskITemTemplate = document.querySelector('#AddPhotoItemTemplate').innerHTML;

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

 


