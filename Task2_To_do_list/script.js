// Selecting elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

// Function to create a task element
function createTaskElement(taskText, completed = false) {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "\u00D7";
    deleteBtn.onclick = function () {
        listItem.remove();
        saveTasks();
    };

    // Apply 'checked' class if the task is marked as complete
    if (completed) {
        taskSpan.classList.add("checked");
    }

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}

// Function to save tasks, including their completion status
function saveTasks() {
    const tasks = Array.from(document.querySelectorAll("#task-list li")).map(li => ({
        text: li.querySelector("span").textContent,
        completed: li.classList.contains("checked"),
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText, false); // Explicitly set 'completed' as false for new tasks
    saveTasks();
    taskInput.value = "";
}


taskList.addEventListener("click", function (ev) {
    // Ensure the click is on the task text (span), not the delete button
    if (ev.target.tagName === "SPAN") {
        ev.target.parentElement.classList.toggle("checked");
        saveTasks(); // Save changes after toggling
    }
}, false);


// Load tasks when the page loads
window.addEventListener("load", loadTasks);
addTaskBtn.addEventListener("click", addTask);


