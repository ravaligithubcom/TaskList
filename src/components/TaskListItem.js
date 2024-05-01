import React from "react";
import "../styles.css";
const TaskListItem = ({ task }) => {
  return (
    <div className={`task-list-item ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};
export default TaskListItem;
