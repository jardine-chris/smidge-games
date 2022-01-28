import React from "react";

export const Offcanvas = ({ closeOffcanvas }) => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-screen md:w-1/2 lg:w-2/5 xl:w-1/3 bg-zinc-900">
      <header className="relative h-32 border-b border-zinc-800">
        <button
          className="absolute p-2 rounded right-2 top-2 material-icons hover:bg-bright-orange"
          onClick={closeOffcanvas}
        >
          close
        </button>
        <h1 className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Smidge Games</h1>
      </header>
      hi
    </div>
  );
};
