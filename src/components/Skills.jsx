import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Next from "../assets/next.png";
import ReactNative from "../assets/reactnative.png"
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
// import Node from "../assets/node.png";
// import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#28a745] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={Next} alt="HTML icon" />
            <p className="my-10 text-[#28a745]">NEXT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-40 mx-auto" src={ReactNative} alt="HTML icon" />
            <p className="my-1 text-[#28a745]">REACT-NATIVE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">GITHUB</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4 text-[#28a745]">MONGO DB</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
