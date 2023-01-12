import React from "react";
import Me from "../assets/about.jpg";

const About = () => {
  return (
    <div name="about">
      <div className="flex flex-col justify-center items-center my-10">
        <div>
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#28a745]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <img src={Me} alt="/" />
          </div>
          <div>
            <p>
              I'm a front-end developer that specializes in HTML, CSS,
              JavaScript, and related frameworks including ReactJS, NextJS,
              React-native, and NodeJS. Logistics apps, news websites, inventory
              websites, and real estate websites are examples of my work. <br />
              My software designs are also extremely successful and aimed at
              increasing the productivity of the companies for which I have
              worked. They aid these companies in gaining a competitive
              advantage in their respective industries.
              <br /> With excellent communication abilities, I consistently go
              above and beyond my consumers' expectations. I imagine their aims
              to assist them in accomplishing their objectives while also
              prioritizing their objectives. This method enables me to create
              platforms or systems that are accurate, efficient, and extremely
              productive.
              <br /> Do you want to grow your business? Allow me to work as your
              software engineer today!.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
