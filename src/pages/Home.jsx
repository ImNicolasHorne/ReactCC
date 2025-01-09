import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1500);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Home;
