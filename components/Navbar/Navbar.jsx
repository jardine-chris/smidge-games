import { useState } from "react";
import { IconButton } from "./IconButton";

import styles from "./Navbar.module.scss";
import { Offcanvas } from "./Offcanvas";

export const Navbar = () => {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <nav className="relative h-16 p-2 text-white bg-black font-montserrat">
      <div className="relative w-full h-full">
        {/* To find values for 'icon', see https://fonts.google.com/icons */}
        <div className="absolute left-0 w-12 h-12 text-center transition duration-200 ease-in-out -translate-y-1/2 border rounded-md border-zinc-700 text-zinc-300 top-1/2 hover:bg-zinc-900 hover:text-bright-orange">
          <button
            className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 material-icons"
            onClick={() => setOffcanvas(true)}
          >
            menu
          </button>
        </div>
        <IconButton icon="login" position="right" />
      </div>
      <div>{offcanvas && <Offcanvas />}</div>
    </nav>
  );
};
