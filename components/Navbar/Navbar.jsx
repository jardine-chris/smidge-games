import { useState } from "react";
import { IconButton } from "./IconButton";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdLogin } from "react-icons/md";

import { Offcanvas } from "./Offcanvas";

import smidgeBrand from "../../public/images/smidge-games-logo/logo-brand.png";

export const Navbar = () => {
  const [offcanvas, setOffcanvas] = useState(false);

  function closeMenu() {
    setOffcanvas(false);
  }

  return (
    <nav className="sticky top-0 z-50 h-16 p-2 text-white bg-black border-b-2 border-zinc-800 font-montserrat">
      <div className="relative w-full h-full">
        <div
          className="absolute left-0 w-12 h-12 text-center transition duration-200 ease-in-out -translate-y-1/2 border rounded-md cursor-pointer border-zinc-700 text-zinc-300 top-1/2 hover:bg-zinc-900 hover:text-orange-600"
          onClick={() => setOffcanvas(true)}
        >
          <button className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 material-icons">
            <MdMenu />
          </button>
        </div>

        <Link href="/">
          <div className="absolute w-20 h-12 py-1 text-center transition duration-200 ease-in-out -translate-x-1/2 -translate-y-1/2 bg-orange-600 border border-orange-600 rounded-md cursor-pointer left-1/2 hover:border-zinc-700 top-1/2 hover:bg-zinc-900">
            <div className="relative h-full">
              <Image src={smidgeBrand} layout="fill" objectFit="contain" />
            </div>
          </div>
        </Link>

        <div className="absolute right-0 w-12 h-12 text-center transition duration-200 ease-in-out -translate-y-1/2 border rounded-md border-zinc-700 text-zinc-300 top-1/2 hover:bg-zinc-900 hover:text-orange-600">
          <Link href="/register">
            <button className="absolute text-3xl translate-x-1/2 -translate-y-1/2 right-1/2 top-1/2 material-icons">
              <MdLogin />
            </button>
          </Link>
        </div>
      </div>

      {offcanvas && <Offcanvas closeOffcanvas={closeMenu} />}
    </nav>
  );
};
