import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactMe() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  return (
    <div>
      <h1 className="text-5xl py-5">Contact me</h1>
      <div className="text-3xl py-5 space-y-10 align-middle flex flex-col justify-evenly">
        <div>
          <button
            onClick={() => {
              navigator.clipboard.writeText("swapnodip641@gmail.com");
              setShowSnackbar(true);
              setTimeout(() => {
                setShowSnackbar(false);
              }, 2000);
            }}
          >
            <Image
              src="email.svg"
              alt="email"
              width={64}
              height={64}
              className="inline mr-5"
            />
            <span>swapnodip641@gmail.com</span>
          </button>
          <span
            className={`w-fit p-2 text-lg text-center transition-all duration-500 ${
              showSnackbar
                ? "opacity-60 visible ml-20"
                : "opacity-0 invisible ml-10"
            }`}
          >
            Copied
          </span>
        </div>
        <div>
          <Link href="https://github.com/Swapnodip" target="blank">
            <Image
              src="github.svg"
              alt="github"
              width={56}
              height={56}
              className="inline mr-7"
            />
            <span>github.com/Swapnodip</span>
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/swapnodip-chakrabarti-6800b4227"
            target="blank"
          >
            <Image
              src="linkedin.svg"
              alt="linkedin"
              width={64}
              height={64}
              className="inline mr-5"
            />
            <span>linkedin.com/in/swapnodip-chakrabarti-6800b4227</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
