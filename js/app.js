const userInp = document.querySelector('.header-input'),
        btnAdd = document.querySelector('.header-button'),
        todoList = document.querySelector('.todo-list');


btnAdd.addEventListener('click', addItem);

let inpValue;

function addItem(e) {
    e.preventDefault();
    inpValue = userInp.value;

    if((inpValue) || (inpValue != '')) {
        userInp.style.border = "none";
        let todoItem = document.querySelector('.todo-item').cloneNode(true);
        todoList.appendChild(todoItem);
        todoList.lastChild.querySelector('.text-todo').textContent = inpValue;
        console.log(todoList.lastChild);
    } else {
        userInp.style.border = "2px solid rgba(255, 0, 0, 0.575)";
    }

}

