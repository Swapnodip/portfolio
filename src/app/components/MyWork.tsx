import Image from "next/image";
import Link from "next/link";

export default function MyWork() {
  const elements = [
    {
      name: "Crypto Tracker",
      description:
        "Web app for tracking last 30 day price of top 100 cryptocurrencies. Built using NextJS and Tailwind. ChartJS was used to display the graph. Data is fetched from Coingecko API.",
      warning:
        "Note: Connection might fail sometimes as Coingecko API has limit on API calls.",
      link: "https://swapnodip-crypto-tracker.netlify.app/",
      github: "https://github.com/Swapnodip/crypto-tracker",
    },
    {
      name: "Store App",
      description:
        "Mock store app with custom API. API was built with NodeJS and hosted on render.com. Client was built using ReactJS. Includes Admin dashboard for tracking created orders and generating coupon codes.",
      warning:
        "Note: Back end will take a minute to start on first visit. Please reload the page after that.",
      link: "https://swapnodip-store-app.netlify.app/",
      github: "https://github.com/Swapnodip/store-website",
    },
    {
      name: "Chat App",
      description:
        "Chat app built with ReactJS. Includes functionality for liking messages, adding emojis and mentioning chat members.",
      warning: "",
      link: "https://swapnodip-chat-app.netlify.app/",
      github: "https://github.com/Swapnodip/React-Chat-App",
    },
    {
      name: "X and 0",
      description: "Simple X and 0 game built using NextJS.",
      warning: "",
      link: "https://swapnodip-x-and-0.netlify.app/",
      github: "https://github.com/Swapnodip/X-and-0",
    },
  ];
  return (
    <div>
      <div className="text-2xl flex flex-row w-full h-full flex-wrap justify-around items-center gap-y-16">
        {elements.map((e, i) => (
          <div
            key={i}
            className="p-1 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl hover:bg-gradient-to-tl w-80 h-20 hover:h-96 transition-all duration-500"
          >
            <div className="p-5 bg-[#000E22] rounded-xl w-full h-full overflow-hidden">
              <div className="font-bold text-center">{e.name}</div>
              <div className="mt-5 flex flex-row justify-around">
                <Link href={e.link} target="blank">
                  <Image src="link.svg" alt="link" width={32} height={32} className="inline" />
                </Link>
                <Link href={e.github} target="blank">
                  <Image src="github.svg" alt="github" width={32} height={32} className="inline" />
                </Link>
              </div>
              <div className="text-center mt-3 text-base text-amber-400">
                {e.warning}
              </div>
              <div className="text-center mt-2 text-base">{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
