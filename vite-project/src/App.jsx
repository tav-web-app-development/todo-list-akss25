import { useState } from "react";
import "./index.css"

function App() {
  let tasks = [
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
  const [checkbox, setcheckbox] = useState(false);
  const [search, setSearch] = useState("");

  if (search) {
    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

  if (checkbox) {
    tasks = tasks.filter((task) => {
      return task.completed === false;
    });
  }
  return (
    <>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <label>
          <input
            type="checkbox"
            onClick={(e) => {
              setcheckbox(e.target.checked);
            }}
          />
          Show completed tasks
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            let temp = "";
            if (task.completed) {
              temp = "line-through";
            }
            return (
              <tr key={task.name}>
                <td>
                  <span
                    style={{
                      textDecoration: temp,
                    }}
                  >
                    {task.name}
                  </span>
                </td>
                <td>{task.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;