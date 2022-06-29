const form = document.getElementById("create-task-form")
const taskList = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    description = document.getElementById("new-task-description").value;
    addNewTask(description);
  });
});

function sortTasks() {
  taskArray = [...document.querySelectorAll("#tasks li")];
  
  for (let task of taskArray) {
    switch (task.className) {
      case "high-priority":
        task.value = 3;
        break;
      case "mid-priority":
        task.value = 2;
        break;
      case "low-priority":
        task.value = 1;
        break;
    }
  }

  taskArray.sort((a, b) => b.value - a.value);
}

function addNewTask(description) {
  const li = document.createElement("li");
  const priority = document.getElementById("priority");
  li.textContent = description;
  addDeleteButton(li);
  setColor(li, priority);
  taskList.append(li);
  li.id = description;
  document.getElementById("new-task-description").value = "";
  sortTasks();
}

function setColor(item, priority) {
  switch (priority.value) {
    case "high priority":
      item.style.color = "red";
      item.className = "high-priority";
      break;
    case "mid priority":
      item.style.color = "yellow";
      item.className = "mid-priority";
      break;
    default:
      item.style.color = "green";
      item.className = "low-priority";
      break;
  }
}

function addDeleteButton(listItem) {
  deleteButton = document.createElement("button")
  deleteButton.textContent = "X";
  listItem.append(deleteButton);
  deleteButton.addEventListener("click", e => e.target.parentElement.remove());
}