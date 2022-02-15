const userInp = document.querySelector('.header-input'),
        todoCont = document.querySelector('.todo-container'),
        btnAdd = document.querySelector('.header-button'),
        todoList = document.querySelector('.todo-list'),
        btnsRemove = document.querySelectorAll('.todo-remove');


btnAdd.addEventListener('click', addItem);
todoCont.addEventListener('click', actionItem);

let todoData = {
    'completed': [],
    'notCompleted': [],
}

// (function setLocalStorage(){
//     if(localStorage.getItem('todoStates') {
//         todoData
//     }
// }())

let inpValue;

function createItem() {
    let todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    let todoText = document.createElement('span');
    todoText.textContent = inpValue;
    todoText.classList.add('text-todo');

    let todoBtns = document.createElement('div');
    todoBtns.classList.add('todo-buttons');

    let todoRemove = document.createElement('button');
    todoRemove.classList.add('todo-remove');
        
    let todoComplete = document.createElement('button');
    todoComplete.classList.add('todo-complete');

    todoBtns.appendChild(todoRemove);
    todoBtns.appendChild(todoComplete);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoBtns);
    todoList.appendChild(todoItem);
}

function addItem(e) {
    e.preventDefault();
    inpValue = userInp.value.trim();

    if(inpValue) {
        userInp.style.border = "none";

        createItem();
        userInp.value = '';  
    } else {
        userInp.style.border = "2px solid rgba(255, 0, 0, 0.575)";
    }
}


function actionItem(e) {
    e.preventDefault();
    let target = e.target;
    //DELETE
    if((target.tagName == 'BUTTON') && (target.classList.contains("todo-remove"))) {
        let parentTarget = target.parentNode.parentNode;
        parentTarget.parentNode.removeChild(parentTarget);
    };
    //CHECK
    if((target.tagName == 'BUTTON') && (target.classList.contains("todo-complete"))) {
        let parentTarget = target.parentNode.parentNode.parentNode;
        let itemTarget = parentTarget.querySelector('.todo-item');
        console.log(parentTarget);
        if(parentTarget.classList.contains('todo-completed')) {
            parentTarget.parentNode.querySelector('.todo-list').appendChild(itemTarget);
        } else {
            parentTarget.parentNode.querySelector('.todo-completed').appendChild(itemTarget);
        }
    };
}

function setLocalStorage(){
    todoData['notCompleted'].push(todoText.textContent);
    localStorage.setItem('todoStates', JSON.stringify(todoData));
}
