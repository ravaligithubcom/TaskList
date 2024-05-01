// App.js
import React from "react";
import TaskListUI from "./components/TaskListUI";
import TaskForm from "./components/TaskForm";
import TaskAssignment from "./components/TaskAssignment";
import TaskStatusUpdate from "./components/TaskStatusUpdate";
import TaskSummaryPage from "./components/TaskSummaryPage";
import "./App.css"; // Import CSS file for styling

const App = () => {
  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: "Create UI Design Mockups",
      description: "Design high-fidelity mockups for task list interface",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Implement Task Creation Interface",
      description: "Develop frontend components for adding new tasks",
      status: "pending",
    },
    {
      id: 3,
      title: "Integrate Task Assignment Feature",
      description: "Implement UI for assigning tasks to users or teams",
      status: "pending",
    },
    {
      id: 4,
      title: "Create Task Status Update Components",
      description: "Develop UI elements for updating task status",
      status: "completed",
    },
    {
      id: 5,
      title: "Design Task Summary Page",
      description: "Create dedicated page for displaying task metrics",
      status: "pending",
    },
  ];

  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "user 5" },
  ];

  const addTask = (newTask) => {
    // Add new task logic
    console.log("Adding task:", newTask);
  };

  const assignTask = (userId) => {
    // Assign task logic
    console.log("Assigning task to user:", userId);
  };

  const updateStatus = (taskId, status) => {
    // Update task status logic
    console.log("Updating status for task:", taskId, "to", status);
  };

  return (
    <div className="app">
      <h1 className="header">Task Management System</h1>
      <div className="section">
        <TaskForm addTask={addTask} />
      </div>
      <div className="section">
        <TaskAssignment users={users} assignTask={assignTask} />
      </div>
      <div className="section">
        <TaskListUI tasks={tasks} />
      </div>
      <div className="section">
        <TaskStatusUpdate task={tasks[0]} updateStatus={updateStatus} />
      </div>
      <div className="section">
        <TaskSummaryPage tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
