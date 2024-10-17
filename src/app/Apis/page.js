"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]);

  console.log("users", users);

  const userById = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const res = await data.json();
    setUsers(res.users);
  };

  useEffect(() => {
    userById();
  }, []);
  return (
    <>
      {users?.map(({ id, firstName }) => {
        return (
          <>
            <Link href={`/Apis/${id}`} key={id}>
              <div style={{ color: "black", textDecoration: "none" }}>
                {firstName}
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Page;
