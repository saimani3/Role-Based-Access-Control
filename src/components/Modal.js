import React, { useState } from "react";
function Modal({ onClose, user, onSave }) {
  const [name, setName] = useState(user?.name || "");
  const [role, setRole] = useState(user?.role || "");
  const [status, setStatus] = useState(user?.status || "Active");

  const handleSave = () => {
    onSave({ id: user?.id || Date.now(), name, role, status });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{user ? "Edit User" : "Add User"}</h3>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Role:</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
