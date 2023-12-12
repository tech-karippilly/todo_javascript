
let TodoList =[]
let inputTodo = document.getElementById('input-entry')
let addButton = document.getElementById("add-todo")
let showListContainer = document.getElementById('list-ul')
showTodoList()


function showTodoList(){
   
    if (TodoList.length === 0){
        let li = document.createElement('li')
        li.classList.add('li-container','center-div','rounded','p-2')
        let span = document.createElement('span')
        span.classList.add('li-span-container','fs-4','text-capitalize','fw-medium')
        span.innerHTML="No Todo's Left To Do"
        li.appendChild(span)
        showListContainer.appendChild(li)
        

    }else{
        showListContainer.innerHTML=''
        TodoList.forEach(function(value,index,array){

            let li = document.createElement('li')  
            li.classList.add('li-container','rounded','p-2')
            let span = document.createElement('span')
            span.classList.add('li-span-container','fs-4','text-capitalize','fw-medium')
            span.innerHTML=value;

            let div = document.createElement('div')
            div.classList.add('li-icon-container')
            let trashIcon = document.createElement('i')
            trashIcon.classList.add("fa","fa-trash-o","fs-2")
            trashIcon.style="color: gold;"
            let editIcon = document.createElement('i')
            editIcon.classList.add('fa','fa-edit','fs-2')
            editIcon.style='color: gold;'
            div.appendChild(trashIcon)
            div.appendChild(editIcon)

            li.appendChild(span)
            li.appendChild(div)

            showListContainer.appendChild(li)
        })
    }
}


function AddTodo(){
    const inputValue = inputTodo.value;
    if (inputValue === ''){
        alert('Need to enter todo to add')
    }else{
        TodoList.push(inputValue.toLowerCase())
        inputTodo.value=''
        inputTodo.focus()

        showTodoList()
    }
}




function HandleUlClick (event) {



    if (event.target.classList[1] === 'fa-trash-o'){

        deleteTodo(event)
    }else if (event.target.classList[1] === 'fa-edit'){
       
        editTodo(event)
    }

    
}


function deleteTodo(event){
    let parentDivElement = event.target.parentElement;
    let liElement = parentDivElement.parentElement;
    let span = liElement.querySelector('span')

    let spanText = span.innerText
    let todoIndex = TodoList.indexOf(`${spanText.toLowerCase()}`)
    TodoList = TodoList.filter((value,index)=>index !== todoIndex)
    liElement.remove()
    showTodoList()
    
}

function editTodo(event){

    const editedText = prompt('Enter Edited Todo')
    let parentDivElement = event.target.parentElement;
    let liElement = parentDivElement.parentElement;
    let span = liElement.querySelector('span')
    let spanText = span.innerText
    let todoIndex = TodoList.indexOf(`${spanText.toLowerCase()}`)
    
    TodoList[todoIndex] = editedText

    span.innerHTML = editedText
}

addButton.addEventListener('click',AddTodo)

showListContainer.addEventListener('click',HandleUlClick)