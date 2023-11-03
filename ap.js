const form=document.getElementById('form')
const input=document.getElementById('todo-in')
const todoUl=document.querySelector('.todo_list')

const todos= JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    addTodo()
})

function addTodo(todo){
    let todoText=input.value
    if(todo){
        todoText=todo.text
    }
    
    if(todoText){
        const todoEl=document.createElement('li')

        if(todo && todo.completed){
            todoEl.classList.add('completed')
            updateLS()
        }

        const checker= '<i class="fa fa-check done"></i> <i class="fa fa-close dismis"></i>'

              
        todoEl.classList.add('task')

        todoEl.innerHTML = `${todoText} ${checker}`       

        todoUl.appendChild(todoEl)

        input.value= ' '

        const done=document.querySelectorAll('.done')
        done.forEach((d)=>{
            d.addEventListener('click' ,()=>{
                d.parentNode.classList.add('completed')
                updateLS()
            })
        })
        const dismis=document.querySelectorAll('.dismis')
        dismis.forEach((d)=>{
            d.addEventListener('click', ()=>{
                d.parentNode.remove()
                updateLS()
            })
        })

        updateLS()
    }
}

function updateLS() {
    todoEl= document.querySelectorAll('li')

    const todos= []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))

}