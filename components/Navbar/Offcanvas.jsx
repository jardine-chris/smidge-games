import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MultilinkButton } from "./MultilinkButton";
import { MdClose } from "react-icons/md";

export const Offcanvas = ({ closeOffcanvas }) => {
  const [links, setLinks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLinks([
      {
        link: { text: "Home", url: "/" },
      },
      {
        multilink: {
          text: "Games",
          links: [
            { text: "Fear Factory", url: "/games/fear-factory" },
            { text: "Treasure Hunt", url: "/games/treasure-hunt" },
            { text: "The Ensign", url: "/games/the-ensign" },
          ],
        },
      },
      {
        multilink: {
          text: "News",
          links: [
            { text: "Latest Posts", url: "/posts/latest-posts" },
            { text: "Popular Posts", url: "/posts/popular-posts" },
          ],
        },
      },
      { link: { text: "About", url: "/about" } },
      { link: { text: "Contact", url: "/contact" } },
    ]);
  }, []);

  const menuItemStyle =
    "py-4 tracking-wide uppercase cursor-pointer font-montserrat hover:bg-orange-600 transition duration-150";

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen overscroll-contain md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/5 bg-grurp-800 overscroll-y-contain">
      <header className="relative h-32 border-b bg-grurp-700 border-grurp-900">
        <button
          className="absolute p-2 -translate-y-1/2 rounded right-2 top-1/2 material-icons hover:bg-orange-600"
          onClick={closeOffcanvas}
        >
          <MdClose />
        </button>
        <div className="absolute w-1/3 h-24 -translate-x-1/2 -translate-y-1/2 rounded left-1/2 top-1/2">
          <div className="relative h-full">
            <Image
              src="/images/smidge-games-logo/logo-brand.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </header>
      <Menu
        as="div"
        className="grid grid-cols-1 text-center border-b divide-y divide-grurp-900 border-grurp-900"
      >
        {links &&
          links.map((link) => {
            const data = link.link || link.multilink;
            if (!data.links) {
              console.log(data);
              return (
                <Link key={link.text} href={data.url}>
                  <Menu.Item className={menuItemStyle} onClick={closeOffcanvas}>
                    <a>{data.text}</a>
                  </Menu.Item>
                </Link>
              );
            }
            return (
              <Menu key={data.text}>
                <Menu.Button className={menuItemStyle}>
                  <MultilinkButton text={data.text} />
                </Menu.Button>
                <Transition
                  enter="transition duration-150 ease-out"
                  enterFrom="transform scale-y-0"
                  enterTo="transform scale-y-100"
                  leave="transition duration-150 ease-out"
                  leaveFrom="transform scale-y-100"
                  leaveTo="transform scale-y-0"
                >
                  <Menu.Items className="grid grid-cols-1 text-center border divide-y divide-grurp-800 border-zinc-800 bg-grurp-900">
                    {data.links &&
                      data.links.map((multilink) => {
                        return (
                          <Link key={multilink.text} href={multilink.url}>
                            <Menu.Item
                              className={`${menuItemStyle}`}
                              onClick={closeOffcanvas}
                            >
                              <a>{multilink.text}</a>
                            </Menu.Item>
                          </Link>
                        );
                      })}
                  </Menu.Items>
                </Transition>
              </Menu>
            );
          })}
      </Menu>
    </div>
  );
};
