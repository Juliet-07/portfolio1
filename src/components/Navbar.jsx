import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#28a745] text-white">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-20 left-0 w-full bg-black/50 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className=" fixed flex flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/juliet-kelechi-8126b8173/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://www.github.com/Juliet-07"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="ohankwerejulietkelechi@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1kAbzD-TJZ3D_cqqFQXVa3OTSYZP7hINW/view?usp=sharing"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
