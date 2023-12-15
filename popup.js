let taskBox = document.getElementById("Task-input");
let taskList = document.getElementById("Task-list");
restore();

function addTask() {
    let task = taskBox.value;
    let li = document.createElement("li");
    li.innerHTML = task + "<button onclick='del()'>X</button>"; 
    taskList.appendChild(li);
    taskBox.value ="";
    save();
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