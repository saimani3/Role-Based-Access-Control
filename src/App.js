import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Permissions from "./components/Permissions";
import "./styles.css"

function App() {
  const [activeTab, setActiveTab] = useState("Users");

  return (
    <div>
      <h1 style={{textAlign:"center"}}><u>Role-Based Access Control</u></h1>
      <Navbar setActiveTab={setActiveTab} />
      <div className="container">
        {activeTab === "Users" && <Users />}
        {activeTab === "Roles" && <Roles />}
        {activeTab === "Permissions" && <Permissions />}
      </div>
    </div>
  );
}

export default App;
