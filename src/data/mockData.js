export const mockUsers = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "Editor", status: "Inactive" },
  ];
  
  export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  export const mockPermissions = [
    { id: 1, name: "Read", description: "Allows reading data" },
    { id: 2, name: "Write", description: "Allows writing data" },
    { id: 3, name: "Delete", description: "Allows deleting data" },
  ];
    