import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "./../styles/taskList.css";
import Task from "./Task";

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="task-list">
      {tasks.length > 0 ? <Task /> : <p className="no-task">Nothing Todo</p>}
    </div>
  );
};

export default TaskList;
