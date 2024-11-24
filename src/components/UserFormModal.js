import React, { useState } from "react";
function UserFormModal({ onClose, onSave, user }) {
  const [name, setName] = useState(user?.name || "");
  const [role, setRole] = useState(user?.role || "");
  const [status, setStatus] = useState(user?.status || "Active");

  const handleSubmit = () => {
    onSave({ id: user?.id, name, role, status });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{user ? "Edit User" : "Add User"}</h3>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required/>
        <label>Role</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} required/>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default UserFormModal;
