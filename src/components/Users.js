import React, { useState } from "react";
import { mockUsers } from "../data/mockData";
import UserFormModal from "./UserFormModal";

function Users() {
  const [users, setUsers] = useState(mockUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSave = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setModalOpen(false);
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={() => setModalOpen(true)} className="add-btn">Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="edit-btn">Edit</button> 
                <button onClick={() => handleDelete(user.id)} className="delete-btn" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <UserFormModal
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          user={selectedUser}
        />
      )}
    </div>
  );
}

export default Users;
