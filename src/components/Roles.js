import React, { useState } from "react";
import { mockRoles } from "../data/mockData";
import RoleFormModal from "./RoleFormModal";

function Roles() {
  const [roles, setRoles] = useState(mockRoles);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSave = (role) => {
    if (selectedRole) {
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      setRoles([...roles, { ...role, id: Date.now() }]);
    }
    setModalOpen(false);
    setSelectedRole(null);
  };

  const handleEdit = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={() => setModalOpen(true)} className="add-btn">Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEdit(role)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(role.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <RoleFormModal
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          role={selectedRole}
        />
      )}
    </div>
  );
}

export default Roles;
