let taskBox = document.getElementById("Task-input");
let taskList = document.getElementById("Task-list");
let add = document.getElementById("add-Task");
// localStorage.clear();
restore();
function addTask() {
    let task = taskBox.value;
    if(task===''){
        alert("Enter a Task in the input box!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task + "<button onclick='del()'>X</button>"; 
        taskList.appendChild(li);
        taskBox.value ="";
        save();
    }
}

function del() {
    event.target.parentElement.remove();
    save();
}

function save() {
    localStorage.setItem('data', taskList.innerHTML);
}

function restore(){
    taskList.innerHTML = localStorage.getItem('data');
}