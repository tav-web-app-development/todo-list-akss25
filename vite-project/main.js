import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

const TASKS = [
  {
    dueDate: "2024-03-30",
    completed: false,
    name: "Finish project proposal",
  },
  {
    dueDate: "2024-03-27",
    completed: false,
    name: "Meet with mentor",
  },
  {
    dueDate: "2024-03-28",
    completed: true,
    name: "Review study notes",
  },
  {
    dueDate: "2024-03-29",
    completed: false,
    name: "Practice coding exercises",
  },
  {
    dueDate: "2024-04-01",
    completed: false,
    name: "Plan weekend trip",
  },
  {
    dueDate: "2024-03-26",
    completed: true,
    name: "Attend yoga class",
  },
  {
    dueDate: "2024-03-31",
    completed: false,
    name: "Update resume",
  },
  {
    dueDate: "2024-04-02",
    completed: false,
    name: "Research career options",
  },
  {
    dueDate: "2024-04-03",
    completed: true,
    name: "Start reading new book",
  },
  {
    dueDate: "2024-04-04",
    completed: true,
    name: "Schedule dentist appointment",
  },
];

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

function renderTasks(tasks) {
  var taskList = document.querySelector("#app .card");
  taskList.innerHTML += `
    <div>
      <input type="text" placeholder="Search..." id="searchInput">
      <label>
        <input type="checkbox" id="showCompleted" onchange="toggleCompletedTasks()">
        Show completed tasks
      </label>
    </div>
    <table id="taskTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody id="taskList">
      </tbody>
    </table>
  `;

  tasks.forEach(function(task) {
    var row = document.createElement("tr");
    if (task.completed) {
      row.innerHTML = `<td><span class="completed-task">${task.name}</span></td><td>${task.dueDate}</td>`;
    } else {
      row.innerHTML = `<td>${task.name}</td><td>${task.dueDate}</td>`;
    }
    document.getElementById("taskList").appendChild(row);
  });
}

function toggleCompletedTasks() {
  var showCompletedCheckbox = document.getElementById("showCompleted");
  var completedTasks = document.querySelectorAll(".completed-task");

  completedTasks.forEach(function(task) {
    if (showCompletedCheckbox.checked) {
      task.style.display = "table-row";
    } else {
      task.style.display = "none";
    }
  });
}

const handleInputTextChange = (inputedText) => {
  const filteredTasks = TASKS.filter((task) => {
    task.name.toLowerCase().indexOf(inputedText.toLowerCase()) !== -1;
  });
  return filteredTasks;
};

setupCounter(document.querySelector('#counter'));

renderTasks(TASKS);
