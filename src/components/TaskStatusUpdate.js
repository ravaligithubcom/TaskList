import React from "react";
import "../styles.css";
const TaskStatusUpdate = ({ task, updateStatus }) => {
  const handleStatusUpdate = (status) => {
    updateStatus(task.id, status);
  };
  return (
    <div className="task-status-update">
      <button onClick={() => handleStatusUpdate("start")}>Start Task</button>
      <button onClick={() => handleStatusUpdate("end")}>End Task</button>
      <button onClick={() => handleStatusUpdate("complete")}>
        Complete Task
      </button>
    </div>
  );
};
export default TaskStatusUpdate;
