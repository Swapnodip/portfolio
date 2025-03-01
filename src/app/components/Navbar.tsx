import React, { Dispatch, SetStateAction } from "react";

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const activeClass =
  "py-5 px-9 text-6xl font-bold hover:text-7xl transition-all duration-300 cursor-pointer";
const inactiveClass =
  "py-5 px-9 hover:text-7xl transition-all duration-300 cursor-pointer";
const navbarElements = ["Home", "About me", "My work", "Contact me"];

export default function Navbar(props: Props) {
  return (
    <nav className="w-1/3 h-screen flex flex-col gap-10 text-5xl items-end justify-center relative bg-gradient-to-b from-sky-400 to-emerald-400 bg-clip-text text-transparent">
      {navbarElements.map((e, i) => (
        <div
          className={props.active == i ? activeClass : inactiveClass}
          onClick={() => props.setActive(i)}
          key={i}
        >
          {e}
        </div>
      ))}
      <div className="absolute right-0 w-px h-2/3 bg-gradient-to-b from-transparent via-sky-100 to-transparent" />
    </nav>
  );
}
