// Todo: Remove trash code
//       Add additional input fields (user, duration, date due)

const form = document.getElementById("create-task-form")
const ul = document.getElementById("tasks");
const taskList = [];

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask();
  });

  function createTask() {
    const description = form.querySelector("#new-task-description").value;
    const priority = form.querySelector("#priority").value;
    console.log("Description", description, "Priority", priority);
    const newTask = {
      description: description,
      priority: priority,
      color: setColor(priority)
    }

    taskList.push(newTask);
    sortTasks();
    renderTaskList();
    form.reset();
  }

  function setColor(priority) {
    switch (priority) {
      case '3':
        return 'red';
        break;
      case '2':
        return 'yellow';
        break;
      case '1':
        return 'green';
        break;
    }
  }

  function sortTasks() {
    taskList.sort((a, b) => b.priority - a.priority);
  }

  function renderTaskList() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    for (let i = 0; i < taskList.length; i++) {
      let li = document.createElement("li");
      let button = document.createElement("button");
      let task = taskList[i];

      li.textContent = task.description;
      li.style.color = task.color;
      li.className = setClassName(task);

      button.textContent = "X";
      button.addEventListener("click", () => {
        li.remove();
        taskList.splice(i, 1);
      });

      ul.append(li);
      li.append(button);
      console.log("li: ", li, " button: ", button, " task: ", task);
    }
  }

  function setClassName(item) {
      if (item.priority == "3") {
        return "high-priority"
      } else if (item.priority == "2") {
        return "mid-priority"
      } else {
        return "low-priority"
      }
  }
});