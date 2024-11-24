import React from "react";

function Navbar({ setActiveTab }) {
  return (
    <nav className="navbar">
      <button onClick={() => setActiveTab("Users")}>Users</button>
      <button onClick={() => setActiveTab("Roles")}>Roles</button>
      <button onClick={() => setActiveTab("Permissions")}>Permissions</button>
    </nav>
  );
}

export default Navbar;
