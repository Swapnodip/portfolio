"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import MyWork from "./components/MyWork";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import IonIcon from "@reacticons/ionicons";

const pages = [
  <HomePage key={0} />,
  <AboutMe key={1} />,
  <MyWork key={2} />,
  <ContactMe key={3} />,
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row">
      <span className="md:hidden m-8 cursor-pointer w-fit" onClick={()=>{setNavbarOpen(x=>!x)}}>
        <IonIcon name={navbarOpen?"close":"menu"} size="large"/>
      </span>
      <div
        className={`md:w-1/3 w-full md:h-screen z-50 flex flex-col justify-center absolute md:relative ${
          navbarOpen ? "left-0" : "-left-full"
        } md:left-auto transition-all duration-500 top-16 md:top-auto bg-[#000E22]`}
      >
        <Navbar
          active={active}
          setActive={(x) => {
            setActive(x);
            setNavbarOpen(false)
          }}
        />
      </div>
      <div className="relative z-10 w-full md:w-2/3 flex flex-col justify-center">
        {pages.map((e, i) => (
          <div
            className={`absolute top-0 md:top-auto text-center md:text-left px-10 w-full ${
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
