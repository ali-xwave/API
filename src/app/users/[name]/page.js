"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// custome hook
// const useUser = () => ({ user: null, loading: false }); // agar is is null

// const useUser = () => ({ user: {name: "Ali"}, loading: false });

export default function Page({ params }) {
  const { name } = params;

  const router = useRouter();
  // const user = useUser();

  // useEffect(() => {
  //   if (user.user == null) {
  //     router.replace("/");
  //   }
  // }, [params, user.user]);

  const handleOpenSettings = () => {
    router.push(`/users/${name}/settings`);
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>This is the {name} Page</h1>
      <button onClick={handleOpenSettings}>Open Settings Page</button>
      <button onClick={handleHome}>Go to Home</button>
    </div>
  );
}
