import React, { useState } from "react";
import { mockPermissions } from "../data/mockData";
import PermissionsFormModal from "./PermissionsFormModal";

function Permissions() {
  const [permissions, setPermissions] = useState(mockPermissions);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  const handleSave = (permission) => {
    if (selectedPermission) {
      setPermissions(
        permissions.map((perm) =>
          perm.id === permission.id ? permission : perm
        )
      );
    } else {
      setPermissions([...permissions, { ...permission, id: Date.now() }]);
    }
    setModalOpen(false);
    setSelectedPermission(null);
  };

  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setPermissions(permissions.filter((perm) => perm.id !== id));
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <button onClick={() => setModalOpen(true)} className="add-btn">Add Permission</button>
      <table>
        <thead>
          <tr>
            <th>Permission Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <button onClick={() => handleEdit(permission)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(permission.id)} className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <PermissionsFormModal
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          permission={selectedPermission}
        />
      )}
    </div>
  );
}

export default Permissions;
