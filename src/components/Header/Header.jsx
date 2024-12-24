import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4 flex items-center  justify-evenly">
      <div className=" w-full">
        <Link to="/">
          <img
            className="w-14 h-11 rounded-xl"
            src="src/assets/Omar-Magdy.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-full ">
        <ul className=" flex flex-wrap justify-evenly items-center  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-6 py-2   rounded-lg"
                  : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-6 py-2  rounded-lg"
                  : "text-black"
              }
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-6 py-1  rounded-lg"
                  : "text-black"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-6 py-2  rounded-lg"
                  : "text-black"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white px-6 py-2  rounded-lg"
                  : "text-black"
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
