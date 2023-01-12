import React from "react";
import ReactTyped from "react-typed";
// import { HiArrowNarrowRight } from "react-icons/hi";
import Me from "../assets/me.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-[70vh] bg-[#28a745]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full">
        <div className="flex flex-col justify-center">
          <p className="text-2xl text-white mb-3 text-center font-bold">
            Hi, my name is
          </p>
          <h1 className="text-2xl text-center sm:text-5xl font-bold text-white">
            Juliet Kelechi
          </h1>
          <h2 className="text-2xl sm:text-5xl font-bold py-4 text-center text-white">
            I am a software developer, expert in
          </h2>
          <ReactTyped
            className="md:text-5xl text-xl font-bold pl-4"
            strings={[
              "Web Applications",
              "Mobile Applications",
              "Andriod & iOS",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-10">
          <img
            src={Me}
            alt="/"
            className="w-32 h-32 md:w-96 md:h-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
