import React, { useState } from "react";

function PermissionsFormModal({ onClose, onSave, permission }) {
  const [name, setName] = useState(permission?.name || "");
  const [description, setDescription] = useState(permission?.description || "");

  const handleSubmit = () => {
    onSave({ id: permission?.id, name, description });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{permission ? "Edit Permission" : "Add Permission"}</h3>
        <label>Permission Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter permission name"
          required
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a brief description"
          required
        /><br/>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default PermissionsFormModal;
