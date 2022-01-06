const loginForm =document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting=document.getElementById("greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username"
//const link=document.querySelector("a");


function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username=loginInput.value;
   localStorage.setItem(USERNAME_KEY,username);
   paintGreeting(username);

   todo_form.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreeting(username){
   const date = new Date();
   let hours = String(date.getHours()).padStart(2, "0");
   hours = parseInt(hours);
   if (hours >= 4 && hours < 12) {
     greeting.innerText = `Good morning,  ${username} `;
   } else if (hours >= 12 && hours < 17) {
     greeting.innerText = `Good afternoon,  ${username} `;
   } else if (hours >= 17 || hours < 4) {
     greeting.innerText = `Good evening,  ${username} `;
   } else {
     greeting.innerText = `Hello,username .`;
   }
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName=localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
   todo_form = document.querySelector("#todo-form");
   todo_form.classList.add(HIDDEN_CLASSNAME);
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
  
}else{
 
  paintGreeting(savedUserName);
}

