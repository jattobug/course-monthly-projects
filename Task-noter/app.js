const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');

// save to Local Storage
const saveToLocalStorage = _ => {
    const nodeList = taskList.querySelectorAll('li'); // gaunam Node.List
    const nodeListToArray = [...nodeList]; // Node.List paverčiam į masyvą (array)
    const tasks = nodeListToArray.map(li => (
        {
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkbox').checked
        }
    ));

    localStorage.setItem('todos', JSON.stringify(tasks));
}

// load from local storage 

const loadFromLocalStorage = () => {
    const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    savedTasks.forEach(({ text, completed }) => addTask(text, completed));
}

// create
const addTask = (text, completed = false) => {
    const taskText = text || taskInput.value.trim();
    if (!taskText) {
        return;
    }
    const li = document.createElement('li');
    // li.textContent = taskText; 
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="taskButtons">
            <button class="editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `
    taskList.appendChild(li);
    taskInput.value = '';

    // update
    const editBtn = li.querySelector('.editBtn');
    const checkbox = li.querySelector('.checkbox');

    if(completed) {
        checkbox.checked = true;
        editBtn.disabled = true;
        editBtn.style.pointerEvents = 'none';
        editBtn.style.opacity = '0.5';
    }

    checkbox.addEventListener('change', () => {
        editBtn.disabled = checkbox.checked;
        editBtn.style.pointerEvents = checkbox.checked ? 'none' : 'auto';
        editBtn.style.opacity = checkbox.checked ? '0.5' : '1';
        saveToLocalStorage();
    })

    editBtn.addEventListener('click', () => {
        if (!checkbox.checked) {
            taskInput.value = li.querySelector('span').textContent;
            li.remove();
            saveToLocalStorage();
        }
    })

    //delete
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
        saveToLocalStorage();
    })

    saveToLocalStorage();
}

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
})

loadFromLocalStorage();