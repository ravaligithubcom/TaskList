import React, { useState } from "react";
import "../styles.css";
const TaskAssignment = ({ users, assignTask }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const handleAssign = () => {
    if (!selectedUser) return;
    assignTask(selectedUser);
    setSelectedUser("");
  };
  return (
    <div className="task-assignment">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssign}>Assign Task</button>
    </div>
  );
};
export default TaskAssignment;
