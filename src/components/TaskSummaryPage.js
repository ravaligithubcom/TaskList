import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "../styles.css";
const TaskSummaryPage = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "completed")
    .length;
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress")
    .length;
  const pendingTasks = totalTasks - completedTasks - inProgressTasks;
  const data = [
    { name: "Completed", value: completedTasks },
    { name: "In Progress", value: inProgressTasks },
    { name: "Pending", value: pendingTasks },
  ];
  return (
    <div className="task-summary">
      <h2>Task Summary</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};
export default TaskSummaryPage;
