// Todo: Remove trash code
//       Add additional input fields (user, duration, date due)

const form = document.getElementById("create-task-form")
const ul = document.getElementById("tasks");
const taskList = [];
// const taskList = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // description = document.getElementById("new-task-description").value;
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
    // taskList.sort((a, b) => b.priority - a.priority);
    sortTasks();
    // renderTask(newTask);
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

  // function renderTask(task) {
  //   const li = document.createElement('li');
  //   const button = document.createElement('button');

  //   button.addEventListener("click", li.remove());

  //   li.textContent = task.description.value;
  //   li.style.color = task.color;
  //   li.className = setClassName(li);
  //   ul.append(li);
  //   li.append(button);
  //   console.log(li);
  // }
});

function setClassName(item) {
    if (item.priority == "3") {
      return "high-priority"
    } else if (item.priority == "2") {
      return "mid-priority"
    } else {
      return "low-priority"
    }
}

// // for (let key in taskList) {
  
// // };

// function sortTasks() {
//   console.log(taskList)
//   taskArray = [...document.querySelectorAll("#tasks li")];
  
//   for (let task of taskArray) {
//     switch (task.className) {
//       case "high-priority":
//         task.value = 3;
//         break;
//       case "mid-priority":
//         task.value = 2;
//         break;
//       case "low-priority":
//         task.value = 1;
//         break;
//     }
//   }

//   taskArray.sort((a, b) => b.value - a.value);

// }

// function addNewTask(description) {
//   const li = document.createElement("li");
//   const priority = document.getElementById("priority");
//   li.textContent = description;
//   addDeleteButton(li);
//   setColor(li, priority);
//   taskList.append(li);
//   li.id = description;
//   document.getElementById("new-task-description").value = "";
//   sortTasks();
// }

// function setColor(item, priority) {
//   switch (priority.value) {
//     case "high priority":
//       item.style.color = "red";
//       item.className = "high-priority";
//       break;
//     case "mid priority":
//       item.style.color = "yellow";
//       item.className = "mid-priority";
//       break;
//     default:
//       item.style.color = "green";
//       item.className = "low-priority";
//       break;
//   }
// }

// function addDeleteButton(listItem) {
//   deleteButton = document.createElement("button")
//   deleteButton.textContent = "X";
//   listItem.append(deleteButton);
//   deleteButton.addEventListener("click", e => e.target.parentElement.remove());
// }