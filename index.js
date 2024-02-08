const form = document.querySelector('form');
const taskList = document.querySelector('.task-list');
const checkbox = document.querySelectorAll('.checkbox');
console.log(task)

if (!task) return alert(" please add a task")
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> 
     <span>${task}</span>`
    taskList.appendChild(listItem);
} 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('.task-input');
    const task = input.value;
    addTask(task);
    input.value = '';
})
 function checkbox (){ 

    for( let i = 0; i < task.length; i++ )
     if(checkbox.checked){
         checkbox.checked = false;
     }else{
         checkbox.checked = true;    
 }
 const result =document.classList.add(checkbox);
 document.querySelector('.task-input')=result;
 }

 checkbox();

 
   




