import React from "react";
import Me from "../assets/me.jpg";

const About = () => {
  return (
    <div name="about">
      <div className="flex flex-col justify-center items-center my-10">
        <div >
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
              I am a front-end developer with expertise in HTML, CSS, JavaScript
              and related frameworks such as ReactJS, NextJS, React-native,
              NodeJS. Some of my works includes Logistics applications, News
              website, Inventory website, Real-estate website.
              <br />
              My software designs are also highly effective and focused on
              improving the productivity of businesses I have worked for. They
              help these businesses gain a competitive advantage in their
              respective fields.
              <br />
              With clear communications skills, I tend to deliver beyond the
              expectations of my customers. I visualize their objectives to help
              them achieve their targets, while also prioritizing their goals.
              This process helps me to deliver platforms or systems that are
              accurate, efficient, and highly productive.
              <br />
              Do you want to take your business to the next level? Let me be
              your software developer today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
