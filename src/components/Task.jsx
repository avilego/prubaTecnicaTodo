import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "./../styles/task.css";

const Task = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  console.log(tasks);

  return (
    <div className="task">
      {tasks.map((task) => (
        <div className="task-inline" key={task.id}>
          <div className="task-text" onClick={() => toggleTaskDone(task.id)}>
            <h1 className={task.done ? "task-title task-done" : "task-title"}>
              {task.title}
            </h1>
            <p className={task.done ? "task-title task-done" : "task-title"}>
              {task.description}
            </p>
          </div>
          <div className="task-buttons">
            <Link to={`/edit/${task.id}`} className="task-btn">
              Edit
            </Link>

            <button className="task-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
