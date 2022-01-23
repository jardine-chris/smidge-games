import { IconButton } from "./IconButton";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className="h-16 p-2 text-white bg-black font-montserrat">
      <div className="relative w-full h-full">
        {/* To find values for 'icon', see https://fonts.google.com/icons */}
        <IconButton icon="menu" position="left" />
        <IconButton icon="login" position="right" />
      </div>
    </nav>
  );
};
