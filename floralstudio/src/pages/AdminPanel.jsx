// pages/AdminPanel.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>İstifadəçilər</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
