const toDoForm = document.getElementById("todo-form");
const toDoInput =toDoForm.querySelector("input")
const toDoList= document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li =event.target.parentElement; //target은 클릭된 HTML elment정보를 가져옴 parentElement는 클릭도니 Element의 부모를 가져옴
    toDos=toDos.filter(toDo => toDo.id !==parseInt(li.id));
    li.remove();
    
    saveToDos();
   
}


function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="✓"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

