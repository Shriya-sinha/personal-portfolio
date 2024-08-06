import { DotLottiePlayer } from "@dotlottie/react-player";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="grid grid-flow-row grid-cols-2 gap-8 mx-20">
        <div className="flex float-left">
          <DotLottiePlayer
            src="https://lottie.host/c9843409-59f7-4373-8398-3e27b7b3aa97/pB8QGX51mX.json"
            background="transparent"
            speed="1"
            style={{ width: "650px", height: "650px" }}
            loop
            autoplay
          />
        </div>
        <div className="flex justify-center p-20 text-white mt-36 h-max ">
          <div className="text-center">
            <h1 className="text-base mb-1 font-thin text-cyan-300">
              A DEVELOPER
            </h1>
            <h1 className="text-7xl mb-4 font-caveat font-semibold">
              Shreya Sinha
            </h1>
            <hr className="w-10 mx-auto m-8 " />
            <p className="text-base mb-8 uppercase text-slate-400 tracking-wide ">
              A Frontend developer at IIT-BHU, passionate about crafting
              user-friendly web experiences. Currently expanding my skillset
              with backend technologies.
            </p>
            <a
              href="/Contact"
              className="px-4 py-[6px] text-sm font-semibold button rounded-full border bg-zinc-900 border-cyan-200 text-cyen hover:text-white  hover:border-none hover:bg-cyen drop-shadow-[0_8px_80px_#00fff2b6] focus:outline-none focus:ring-2 shadow-2xl shadow-cyen focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-900"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
