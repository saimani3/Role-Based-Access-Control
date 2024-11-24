import React, { useState } from "react";

function RoleFormModal({ onClose, onSave, role }) {
  const [name, setName] = useState(role?.name || "");
  const [permissions, setPermissions] = useState(role?.permissions || []);

  const availablePermissions = ["Read", "Write", "Delete", "Update"];

  const handlePermissionToggle = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = () => {
    onSave({ id: role?.id, name, permissions });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{role ? "Edit Role" : "Add Role"}</h3>
        <label>Role Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter role name"
          required
        />
        <label>Permissions</label>
        <div>
          {availablePermissions.map((perm) => (
            <label key={perm}>
              <input
                type="checkbox"
                checked={permissions.includes(perm)}
                onChange={() => handlePermissionToggle(perm)}
                required
              />
              {perm}
            </label>
          ))}
        </div>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default RoleFormModal;
