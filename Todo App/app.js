// select classes
const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// create todo 
const createTodo = todo => {
    const newTodo = 
        `
        <li class="list-group-item d-flex justify-content-between align-items-center" >
            <span style="color: rgb(4, 146, 189);">${todo}</span>
            <i class="fa fa-trash-alt delete"></i>
          </li>
        `;
    todoList.innerHTML += newTodo;
    
}

// add todo
addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value;
    createTodo(todo);
});

// delete todo
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

// filter todo
const filterTodos = e => {
    Array.from(todoList.children)
    .filter((todo) => !todo.textContent.includes(e))
    .forEach((todo) => todo.classList.add('filtered'))
    

    Array.from(todoList.children)
    .filter((todo) => todo.textContent.includes(e))
    .forEach((todo) => todo.classList.remove('filtered'))

}

// search todo
search.addEventListener('keyup', () => {
    const key = search.value.trim();
    filterTodos(key);
})