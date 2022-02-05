import React from "react";
import Link from "next/link";
import Image from "next/image";
import smidgeBrand from "../../public/images/smidge-games-logo/logo.png";
import { BsTwitter, BsTwitch } from "react-icons/bs";
import { FaSteam, FaGooglePlay } from "react-icons/fa";
import { MdSend } from "react-icons/md";

export const Footer = () => {
  return (
    <footer>
      <section className="relative w-screen px-6 py-4 bg-black">
        <div className="w-full m-auto md:w-3/4 xl:w-1/2">
          <Link href="/">
            <div className="cursor-pointer h-28 w-36">
              <div className="relative h-full">
                <Image src={smidgeBrand} layout="fill" objectFit="contain" />
              </div>
            </div>
          </Link>
        </div>
        <div className="m-auto md:w-3/4 xl:w-1/2">
          <div className="grid grid-cols-1 text-sm text-gray-400 sm:grid-cols-2 font-montserrat">
            <div>
              <h3 className="font-bold text-white uppercase">Navigation</h3>
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-1 mr-4">
                  <Link href="/">
                    <button className="py-1 text-left transition duration-150 hover:text-orange-600">
                      Games
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="py-1 text-left transition duration-150 hover:text-orange-600">
                      News
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <Link href="/">
                    <button className="py-1 text-left transition duration-150 hover:text-orange-600">
                      About
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="py-1 text-left transition duration-150 hover:text-orange-600">
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:justify-self-end">
              <h3 className="mt-4 font-bold text-white uppercase sm:mt-0">
                Subscribe for Updates
              </h3>
              <form
                className="flex mt-2 border border-grurp-600 sm:max-w-[18rem]"
                action="submit"
              >
                <input
                  className="w-full p-2 border-r rounded-0 sm:w-64 sm:flex-end border-grurp-600 grow placeholder:text-gray-500 focus:placeholder:text-gray-400 bg-grurp-800 focus:bg-grurp-600 focus:text-white"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="smidge@games.com"
                />
                <button className="relative w-8 px-8 text-xl transition duration-150 bg-transparent hover:text-white hover:bg-orange-600 shrink">
                  <MdSend className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 text-2xl text-white">
          <span className="p-2.5 mx-2 transition duration-150 rounded cursor-pointer hover:bg-grurp-600">
            <BsTwitter />
          </span>
          <span className="p-2.5 mx-2 transition duration-150 rounded cursor-pointer hover:bg-grurp-600">
            <BsTwitch />
          </span>
          <span className="p-2.5 mx-2 transition duration-150 rounded cursor-pointer hover:bg-grurp-600">
            <FaSteam />
          </span>
          <span className="p-2.5 mx-2 transition duration-150 rounded cursor-pointer hover:bg-grurp-600">
            <FaGooglePlay />
          </span>
        </div>
      </section>
      <section className="px-6 py-4 text-xs text-center text-gray-400 bg-grurp-800">
        <p>Copyright &copy; 2020 Smidge Games &bull; All Rights Reserved</p>
        <p>Website by Keplux Development</p>
      </section>
      {/* Remove Apple's auto-sleekness feature of rounded corners on form elements. */}
      <style jsx>
        {`
        textarea,
        input.text,
        input[type="text"],
        input[type="button"],
        input[type="submit"],
        .input-checkbox {
        -webkit-appearance: none;
        border-radius: 0;
        }
        `}
      </style>
    </footer>
  );
};
