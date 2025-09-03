function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
    if (!taskText) return;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskSpan.style.cssText = 'text-decoration: line-through; font-style: italic; color: gray;';
        } else {
            taskSpan.style.cssText = 'text-decoration: none; font-style: normal; color: inherit;';
        }
    });
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });
    listItem.append(checkbox, taskSpan, deleteButton);
    taskList.append(listItem);
    taskInput.value = '';
}
