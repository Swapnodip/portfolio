import IonIcon from "@reacticons/ionicons";
import Link from "next/link";
import { useState } from "react";

export default function ContactMe() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl py-5">Contact me</h1>
      <div className="text-xl sm:text-3xl py-5 space-y-10 align-middle flex flex-col justify-evenly items-center sm:items-start">
        <div className="relative">
          <button
            onClick={() => {
              navigator.clipboard.writeText("swapnodip641@gmail.com");
              setShowSnackbar(true);
              setTimeout(() => {
                setShowSnackbar(false);
              }, 2000);
            }}
            className="flex flex-col sm:flex-row items-center"
          >
            <IonIcon name="mail" size="large" className="text-cyan-600 mr-7" />
            <span>swapnodip641@gmail.com</span>
          </button>
          <span
            className={`w-fit absolute top-0 right-0 sm:top-2 p-2 text-lg transition-all duration-500 ${
              showSnackbar
                ? "opacity-60 visible sm:-right-20"
                : "opacity-0 invisible sm:-right-40"
            }`}
          >
            Copied
          </span>
        </div>
        <div>
          <Link
            href="https://github.com/Swapnodip"
            target="blank"
            className="flex flex-col sm:flex-row items-center"
          >
            <IonIcon
              name="logo-github"
              size="large"
              className="text-cyan-600 mr-7"
            />
            <span>github.com/Swapnodip</span>
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/swapnodip-chakrabarti-6800b4227"
            target="blank"
            className="flex flex-col sm:flex-row items-center"
          >
            <IonIcon
              name="logo-linkedin"
              size="large"
              className="text-cyan-600 mr-7"
            />
            <span>linkedin.com/in/swapnodip-chakrabarti-6800b4227</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
