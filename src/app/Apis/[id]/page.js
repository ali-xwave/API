"use client";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [userinfo, setUserInfo] = useState();

  const getUserById = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    setUserInfo(data);
  };

  useEffect(() => {
    const id = params.id;
    getUserById(id);
  }, [params.id]);

  return (
    <>
      <div>Details</div>
      {userinfo && (
        <div>
          <h1>
            {userinfo.firstName} {userinfo.lastName}
          </h1>
          <p>Email: {userinfo.email}</p>
        </div>
      )}
    </>
  );
};

export default Page;
