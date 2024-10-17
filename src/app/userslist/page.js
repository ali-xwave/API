"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const users = await fetch("https://dummyjson.com/users");
    const data = await users.json();
    setUsers(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        {users?.map((user) => (
          <li>{user.firstName}</li>
        ))}
      </div>
    </>
  );
};
export default Page;
