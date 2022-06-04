import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./../styles/taskForm.css";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const { addTask, updateTask, tasks } = useContext(GlobalContext);

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title-form">{task.id ? "Update " : "Create "}a Task</h2>
        <div className="div-form">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Title"
            autoFocus
          />
        </div>
        <div className="div-form">
          <textarea
            value={task.description}
            name="description"
            rows="2"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
          <button className="form-btn">
            {task.id ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
