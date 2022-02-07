import Link from "next/link";
import React from "react";

export const UserMenu = ({ isShowing }) => {
  return (
    <div className="relative text-white">
      <ul className="absolute top-0 right-0 overflow-hidden rounded-lg bg-zinc-600">
        <Link href="/profile" passHref>
          <li className="px-8 py-2 cursor-pointer hover:bg-orange-600">
            Profile
          </li>
        </Link>
        <Link href="/api/auth/logout" passHref>
          <li className="px-8 py-2 cursor-pointer hover:bg-orange-600">
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};
