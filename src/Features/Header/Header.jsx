import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact Me" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="p-4 bg-white shadow-md flex items-center justify-between relative z-50">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-14 h-11 rounded-xl"
              src="/Omar-Magdy.svg"
              alt="logo"
            />
          </Link>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden z-60 relative">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
    fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    md:static md:transform-none md:flex md:space-x-6 md:h-auto md:w-auto md:bg-transparent md:shadow-none md:p-0
    mt-16 md:mt-0 p-4 flex flex-col md:flex-row z-50
  `}
        >
          {navLinks.map(({ to, label }) => (
            <li key={to} className="p-1">
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-white px-4 py-2 rounded-lg block"
                    : "text-black hover:text-gray-700 px-4 py-2 block"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop Overlay (only on mobile when open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
    </>
  );
}
