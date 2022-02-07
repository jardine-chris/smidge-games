import React from "react";

export const UserMenu = ({ isShowing }) => {
  return (
    <div className="relative text-white">
      <ul className="absolute top-0 right-0 overflow-hidden rounded-lg bg-zinc-600">
        <a href="/profile">
          <li className="px-8 py-2 cursor-pointer hover:bg-orange-600">
            Profile
          </li>
        </a>
        <a href="/api/auth/logout">
          <li className="px-8 py-2 cursor-pointer hover:bg-orange-600">
            Logout
          </li>
        </a>
      </ul>
    </div>
  );
};
