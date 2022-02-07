import { useState } from "react";
import { IconButton } from "./IconButton";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdLogin } from "react-icons/md";
import { Offcanvas } from "./Offcanvas";
import { UserMenu } from "./UserMenu";

import { useUser } from "@auth0/nextjs-auth0";

import smidgeBrand from "../../public/images/smidge-games-logo/logo-brand.png";

export const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [userMenu, setUserMenu] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleUserClick = () => setUserMenu(!userMenu);
  const handleMenuClick = () => setOffcanvas(true);
  const handleOffcanvasClose = () => setOffcanvas(false);

  return (
    <nav className="sticky top-0 z-50 h-16 p-2 text-white bg-black border-b-2 border-zinc-800 font-montserrat">
      <div className="relative w-full h-full">
        <div
          className="absolute left-0 w-12 h-12 text-center transition duration-200 ease-in-out -translate-y-1/2 border rounded-md cursor-pointer border-zinc-700 text-zinc-300 top-1/2 hover:bg-zinc-900 hover:text-orange-600"
          onClick={handleMenuClick}
        >
          <button className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 material-icons">
            <MdMenu />
          </button>
        </div>

        <Link href="/" passHref>
          <div className="absolute w-20 h-12 py-1 text-center transition duration-200 ease-in-out -translate-x-1/2 -translate-y-1/2 bg-orange-600 border border-orange-600 rounded-md cursor-pointer left-1/2 hover:border-zinc-700 top-1/2 hover:bg-zinc-900">
            <div className="relative h-full">
              <Image src={smidgeBrand} layout="fill" objectFit="contain" alt="Smidge Games logo." />
            </div>
          </div>
        </Link>

        <div
          className={`${
            !user ? "rounded-md border-zinc-700" : "rounded-full border-0"
          } absolute right-0 w-12 h-12 overflow-hidden text-center transition duration-200 hover:brightness-110 ease-in-out -translate-y-1/2 border text-zinc-300 top-1/2 hover:bg-zinc-900 hover:text-orange-600`}
        >
          {user && (
            // <Link href="/profile">
              <button
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                onClick={handleUserClick}
              >
                <img src={user.picture} alt={user.name} />
              </button>
            // </Link>
          )}
          {!user && (
            <Link href="/api/auth/login" passHref>
              <button className="absolute text-3xl translate-x-1/2 -translate-y-1/2 right-1/2 top-1/2 material-icons">
                <MdLogin />
              </button>
            </Link>
          )}
        </div>
      </div>

      {user && userMenu && <UserMenu isShowing={userMenu} />}
      {offcanvas && <Offcanvas closeOffcanvas={handleOffcanvasClose()} />}
    </nav>
  );
};
