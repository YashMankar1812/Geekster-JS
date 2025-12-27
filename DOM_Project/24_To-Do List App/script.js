const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTaskHandler);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskHandler();
});

function addTaskHandler() {
  const text = taskInput.value.trim();
  if (!text) return;

  createTask(text);
  saveTasks();
  taskInput.value = "";
}

function createTask(text, completed = false) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (completed) li.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.onchange = () => {
    li.classList.toggle("completed");
    saveTasks();
  };

  const span = document.createElement("span");
  span.textContent = text;

  const controls = document.createElement("div");
  controls.className = "task-controls";

  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  editBtn.onclick = () => {
    const updated = prompt("Edit task:", span.textContent);
    if (updated) {
      span.textContent = updated.trim();
      saveTasks();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  controls.append(editBtn, deleteBtn);
  li.append(checkbox, span, controls);
  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task-item").forEach(item => {
    tasks.push({
      text: item.querySelector("span").textContent,
      completed: item.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
}
