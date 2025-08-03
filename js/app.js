document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const completedTasks = document.getElementById("completedTasks");

    // Add Task
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create task item
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm complete-btn mr-1">Complete</button>
                <button class="btn btn-warning btn-sm edit-btn mr-1">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    });

    // Handle Task Actions (Complete, Edit, Delete)
    taskList.addEventListener("click", function (e) {
        const li = e.target.closest("li");
        if (e.target.classList.contains("complete-btn")) {
            // Move to completed
            li.querySelector(".complete-btn").remove();
            completedTasks.appendChild(li);
        } else if (e.target.classList.contains("edit-btn")) {
            const span = li.querySelector("span");
            const newTask = prompt("Edit your task:", span.textContent);
            if (newTask !== null && newTask.trim() !== "") {
                span.textContent = newTask.trim();
            }
        } else if (e.target.classList.contains("delete-btn")) {
            li.remove();
        }
    });

    // Optional: Handle delete in completed tasks
    completedTasks.addEventListener("click", function (e) {
        const li = e.target.closest("li");
        if (e.target.classList.contains("delete-btn")) {
            li.remove();
        }
    });
});