"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getUser = () => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUsers(res.data.users);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.firstName}</p>
        ))}
      </div>
    </>
  );
}
