import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { AiFillEdit } from "react-icons/ai";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="bg-zinc-800">
      <div className="pt-8 pb-4 font-light text-white main-container font-lato">
        <img
          className="w-16 m-auto rounded-full shadow-md"
          src={user.picture}
          alt={user.name}
        />
        <h1 className="text-2xl text-center">{user.name}</h1>
        <div className="flex justify-between px-8 pt-4 text-base flex-nowrap">
          <div className="text-center">
            <h1>Comments</h1>
            <p>51</p>
          </div>
          <div className="text-center">
            <h1>Comments</h1>
            <p>51</p>
          </div>
        </div>
      </div>
      <div className="py-8 font-bold text-white uppercase font-montserrat">
        <h1>User Details</h1>
      </div>
      <style jsx>
        {`
          .main-container {
            background: radial-gradient(
              circle at 50% 4rem,
              #1e313b,
              #1e303a,
              #1c2d36,
              #1a2931,
              #18242b,
              #151f24,
              #12191d,
              #0e1417,
              #090d10,
              #040608,
              #010202,
              #000000 85%
            );
          }
        `}
      </style>
    </div>
  );
}
