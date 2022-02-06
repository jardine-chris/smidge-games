import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>
      <h1>{user.name}</h1>
  </div>;
}
