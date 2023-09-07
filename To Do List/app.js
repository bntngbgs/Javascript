// Capture DOM Elements
const toDoForm = document.getElementById('todo-form');
const toDoInput = document.getElementById('todo');
const checkBox = document.getElementById('completed');
const toDo = document.querySelector('.todo-list');
const totalTask = document.querySelector('.total');
const completedTask = document.querySelector('.completed');
const remainingTask = document.querySelector('.remaining');

// Global Variables
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render task if there's are any in local storage
if (localStorage.getItem('tasks')) {
  tasks.forEach((item) => {
    renderTask(item);
  });
  countTask();
}

// EVENT : Todo Form
toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (toDoInput.value == '') {
    return;
  }

  let task = {
    id: Math.floor(100000 + Math.random() * 900000),
    task: toDoInput.value,
    isCompleted: false,
  };

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTask(task);
  countTask();

  toDoForm.reset();
  toDoInput.focus();
});

// EVENT : Todo list delete button
toDo.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    let taskId = e.target.previousElementSibling.id;
    removeTask(taskId);
    e.target.parentElement.remove();
  }
});

// EVENT : Todo list checkbox
toDo.addEventListener('input', (e) => {
  let taskId = e.target.parentElement.id;
  let element = e.target;

  updateTask(taskId, element);
});

// EVENT : Todo list edit
toDo.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    e.target.blur();
  }
});

// FUNCTION : rendering tasks
function renderTask(task) {
  const newTask = document.createElement('div');
  newTask.classList.add('todos');
  if (task.isCompleted) {
    newTask.classList.add('complete');
  }
  newTask.innerHTML = `
    <div class="todo" id="${task.id}" >
      <input type="checkbox" name="completed" id="completed" ${
        task.isCompleted ? 'checked' : ''
      }/>
      <p ${!task.isCompleted ? 'contenteditable' : ''}>${task.task}</p>
    </div>
    <img src="img/close-icon.svg" alt="" class="remove"/>`;
  toDo.appendChild(newTask);
}

// FUNCTION : counting tasks
function countTask() {
  let taskTotal = tasks.length;
  let taskCompleted = tasks.filter((item) => {
    return item.isCompleted === true;
  });
  totalTask.children[0].innerText = taskTotal;
  completedTask.children[0].innerText = taskCompleted.length;
  remainingTask.children[0].innerText = taskTotal - taskCompleted.length;
}

// FUNCTION : remove tasks
function removeTask(id) {
  tasks = tasks.filter((item) => item.id !== parseInt(id));

  localStorage.setItem('tasks', JSON.stringify(tasks));
  countTask();
}

// FUNCTION : update task
function updateTask(id, el) {
  const task = tasks.find((item) => {
    return item.id === parseInt(id);
  });

  if (el.hasAttribute('contenteditable')) {
    task.task = el.textContent;
  } else {
    task.isCompleted = !task.isCompleted;

    if (task.isCompleted) {
      el.nextElementSibling.removeAttribute('contenteditable');
      el.parentElement.parentElement.classList.add('complete');
    } else {
      el.nextElementSibling.setAttribute('contenteditable', 'true');
      el.parentElement.parentElement.classList.remove('complete');
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  countTask();
  // console.log(id, el);
  // if (e.target.checked == true) {
  //   e.target.parentElement.parentElement.classList.add('complete');
  // } else {
  //   e.target.parentElement.parentElement.classList.remove('complete');
  // }
}
