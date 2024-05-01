import React from "react";
import TaskListItem from "./TaskListItem";
import "../styles.css";
const TaskListUI = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskListUI;
