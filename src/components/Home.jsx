import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#28a745]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-white mb-3 text-center font-bold">Hi, my name is</p>
        <h1 className="text-2xl text-center sm:text-5xl font-bold text-white">
          Juliet Kelechi
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold py-4 text-center text-white">
          I am a software developer
        </h2>
        {/* <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work{" "}
            <span className="group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
