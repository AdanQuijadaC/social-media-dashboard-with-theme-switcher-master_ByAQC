import IconFacebook from "./assets/components/IconFacebookSVG";
import IconTwitter from "./assets/components/IconTwitterSVG";
import IconInstagram from "./assets/components/IconInstagramSVG";
import IconYoutube from "./assets/components/IconYoutubeSVG";
import IconUp from "./assets/components/IconUpSVG";
import IconDown from "./assets/components/IconDownSVG";
import { useEffect, useState } from "react";
function App() {
  const [toogle, setToggle] = useState(false);
  function handleOnClickToggle() {
    if (!toogle) {
      setToggle(true);
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
      setToggle(false);
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setToggle(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setToggle(false);
    }
  }, [toogle]);
  return (
    <>
      <div className="bg-white h-full dark:bg-[#1e202a] lg:h-screen">
        <section className="max-w-[1440px]  mx-auto py-8">
          {/* head */}
          <div className="mx-4 md:flex md:justify-between md:items-center">
            <div className="pb-4">
              <h1 className="font-bold text-xl dark:text-white">
                Social Media Dashboard
              </h1>
              <p className="text-[#63687e] dark:text-[#8b97c6] font-bold text-sm">
                Total Followers: 23,004
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-600 md:border-none md:gap-4 md:pt-0">
              <span className="text-[#63687e] dark:text-[#8b97c6] font-bold text-sm">
                Dark Mode
              </span>
              <button>
                <div
                  className={
                    toogle
                      ? "h-5 p-1 bg-gradient-to-l from-[#378fe6] to-[#3eda82] flex items-center gap-1 rounded-xl"
                      : "h-5 p-1 bg-slate-400 hover:bg-gradient-to-r from-[#378fe6] to-[#3eda82] flex items-center gap-1 rounded-xl"
                  }
                  onClick={handleOnClickToggle}
                >
                  <div
                    className={
                      toogle
                        ? "rounded-full w-4 h-4 bg-[#1e202a]"
                        : "opacity-0 rounded-full w-4 h-4 bg-white"
                    }
                  ></div>
                  <div
                    className={
                      toogle
                        ? "opacity-0 rounded-full w-4 h-4 bg-white"
                        : "rounded-full w-4 h-4 bg-white"
                    }
                  ></div>
                </div>
              </button>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col mx-4 mt-8 gap-4 md:grid md:grid-flow-col md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
            {/* items */}
            <div className="flex flex-col text-center w-full cursor-pointer">
              <div className="bg-[#178FF5] h-1 rounded-t-md"></div>
              <div className="bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] py-4 rounded-b-md lg:py-6">
                <div className="flex items-center justify-center gap-2">
                  <IconFacebook></IconFacebook>
                  <span className="text-[#63687e] dark:text-[#8b97c6] font-bold">
                    @nathanf
                  </span>
                </div>
                <p className="font-bold text-6xl mt-4 dark:text-white">1987</p>
                <p className="text-[#63687e] dark:text-[#8b97c6] uppercase tracking-[0.25rem]">
                  followers
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <IconUp></IconUp>
                  <span className="font-bold text-[#1EB589]">12 Today</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-full cursor-pointer">
              <div className="bg-[#1DA1F2] h-1 rounded-t-md"></div>
              <div className="bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] py-4 rounded-b-md lg:py-6">
                <div className="flex items-center justify-center gap-2">
                  <IconTwitter></IconTwitter>
                  <span className="text-[#63687e] dark:text-[#8b97c6] font-bold">
                    @nathanf
                  </span>
                </div>
                <p className="font-bold text-6xl mt-4 dark:text-white">1044</p>
                <p className="text-[#63687e] dark:text-[#8b97c6] uppercase tracking-[0.25rem]">
                  followers
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <IconUp></IconUp>
                  <span className="font-bold text-[#1EB589]">99 Today</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-full cursor-pointer">
              <div className="bg-gradient-to-l from-[#DF4896] to-[#FDC366] h-1 rounded-t-md"></div>
              <div className="bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] py-4 rounded-b-md lg:py-6">
                <div className="flex items-center justify-center gap-2">
                  <IconInstagram></IconInstagram>
                  <span className="text-[#63687e] dark:text-[#8b97c6] font-bold">
                    @realnathanf
                  </span>
                </div>
                <p className="font-bold text-6xl mt-4 dark:text-white">11k</p>
                <p className="text-[#63687e] dark:text-[#8b97c6] uppercase tracking-[0.25rem]">
                  followers
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <IconUp></IconUp>
                  <span className="font-bold text-[#1EB589]">1099 Today</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-full cursor-pointer">
              <div className="bg-[#C4032B] h-1 rounded-t-md"></div>
              <div className="bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] py-4 rounded-b-md lg:py-6">
                <div className="flex items-center justify-center gap-2">
                  <IconYoutube></IconYoutube>
                  <span className="text-[#63687e] dark:text-[#8b97c6] font-bold">
                    Nathan F.
                  </span>
                </div>
                <p className="font-bold text-6xl mt-4 dark:text-white">8239</p>
                <p className="text-[#63687e] dark:text-[#8b97c6] uppercase tracking-[0.25rem]">
                  subscribers
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <IconDown></IconDown>
                  <span className="font-bold text-[#DC414C]">144 Today</span>
                </div>
              </div>
            </div>
          </div>
          {/* overview */}
          <div className="mx-4 mt-8">
            <h2 className="text-[#63687e] dark:text-white font-bold text-2xl">
              Overview - Today
            </h2>
          </div>
          <div className="flex flex-col mx-4 mt-4 gap-4 md:grid md:grid-flow-col md:grid-rows-4 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4">
            {/* Items */}
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Page Views
                </span>
                <IconFacebook></IconFacebook>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">87</span>
                <div className="flex items-center gap-1 self-end">
                  <IconUp></IconUp>
                  <span className="text-[#1EB589] font-bold">3%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Likes
                </span>
                <IconFacebook></IconFacebook>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">52</span>
                <div className="flex items-center gap-1 self-end">
                  <IconDown></IconDown>
                  <span className="text-[#DC414C] font-bold">2%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Likes
                </span>
                <IconInstagram></IconInstagram>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">5462</span>
                <div className="flex items-center gap-1 self-end">
                  <IconUp></IconUp>
                  <span className="text-[#1EB589] font-bold">2257%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Profile Views
                </span>
                <IconInstagram></IconInstagram>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">52k</span>
                <div className="flex items-center gap-1 self-end">
                  <IconUp></IconUp>
                  <span className="text-[#1EB589] font-bold">1375%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Retweets
                </span>
                <IconTwitter></IconTwitter>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">117</span>
                <div className="flex items-center gap-1 self-end">
                  <IconUp></IconUp>
                  <span className="text-[#1EB589] font-bold">303%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Likes
                </span>
                <IconTwitter></IconTwitter>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">507</span>
                <div className="flex items-center gap-1 self-end">
                  <IconUp></IconUp>
                  <span className="text-[#1EB589] font-bold">553%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Page Views
                </span>
                <IconYoutube></IconYoutube>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">107</span>
                <div className="flex items-center gap-1 self-end">
                  <IconDown></IconDown>
                  <span className="text-[#DC414C] font-bold">19%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full cursor-pointer bg-[#f0f2fa] hover:bg-[#E9EAF2] dark:hover:bg-[#363F59] dark:bg-[#252a41] p-4 rounded-md lg:p-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#63687e] dark:text-[#8b97c6]">
                  Total Views
                </span>
                <IconYoutube></IconYoutube>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-4xl dark:text-white">1407</span>
                <div className="flex items-center gap-1 self-end">
                  <IconDown></IconDown>
                  <span className="text-[#DC414C] font-bold">12%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
