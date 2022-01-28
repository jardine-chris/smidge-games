import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

export const Offcanvas = ({ closeOffcanvas }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen overscroll-contain md:w-1/2 lg:w-2/5 xl:w-1/3 bg-zinc-900 overscroll-y-contain">
      <header className="relative h-32 border-b border-zinc-800">
        <button
          className="absolute p-2 rounded right-2 top-2 material-icons hover:bg-bright-orange"
          onClick={closeOffcanvas}
        >
          close
        </button>
        <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          Smidge Games
        </h1>
      </header>
      <Menu as="div" className="flex flex-col text-center">
        <Menu.Item>
          <a>Home</a>
        </Menu.Item>
        <Menu>
          <Menu.Button>Games</Menu.Button>
          <Menu.Items className="flex flex-col">
            <Menu.Item>
              <a>Fear Factory</a>
            </Menu.Item>
            <Menu.Item>
              <a>Treasure Hunt</a>
            </Menu.Item>
            <Menu.Item>
              <a>The Ensign</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <Menu>
          <Menu.Button>News</Menu.Button>
          <Menu.Items className="flex flex-col">
            <Menu.Item>
              <a>Latest Posts</a>
            </Menu.Item>
            <Menu.Item>
              <a>Popular Posts</a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </Menu>
    </div>
  );
};
