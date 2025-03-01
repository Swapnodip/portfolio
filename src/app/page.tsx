"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import MyWork from "./components/MyWork";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

const pages = [<HomePage key={0}/>, <AboutMe key={1}/>, <MyWork key={2}/>, <ContactMe key={3}/>];

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-row">
      <Navbar
        active={active}
        setActive={(x) => {
          setActive(x);
        }}
      />
      <div className="relative w-2/3 flex flex-col justify-center">
        {pages.map((e, i) => (
          <div
            className={`absolute text-left px-10 w-full ${
              active == i ? "opacity-100" : "opacity-0 invisible"
            } transition-all duration-700`}
            key={i}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
