function addTask() {
    var taskInput = document.getElementById('task-input');
    var dueDateInput = document.getElementById('due-date');
    var prioritySelect = document.getElementById('priority');
    var taskList = document.getElementById('task-list');
    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <span class="due-date">${dueDateInput.value}</span>
            <span class="priority">${prioritySelect.value}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
        dueDateInput.value = '';
    }
}
function completeTask(button) {
    var task = button.parentNode;
    task.classList.toggle('completed');
}