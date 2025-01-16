// Get DOM elements
const addBtn = document.getElementById('add-btn');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(title, description) {
    const li = document.createElement('li');

    const taskTitle = document.createElement('div');
    taskTitle.textContent = title;
    taskTitle.classList.add('task-title');

    const taskDescription = document.createElement('div');
    taskDescription.textContent = description;
    taskDescription.classList.add('task-description');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => li.remove();

    li.appendChild(taskTitle);
    li.appendChild(taskDescription);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Event listener to add new task
addBtn.addEventListener('click', () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (title !== '' && description !== '') {
        createTodoItem(title, description);
        taskTitleInput.value = ''; // Clear title input
        taskDescriptionInput.value = ''; // Clear description input
    }
});

// Allow pressing Enter to add a task
taskDescriptionInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
        addBtn.click();
    }
});
