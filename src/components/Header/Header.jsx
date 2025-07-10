// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="p-4 bg-gray-100 shadow-md   flex items-center  justify-between">
//       {/* Logo */}
//       <div>
//         <Link to="/">
//           <img
//             className="w-14 h-11 rounded-xl"
//             src="/Omar-Magdy.svg"
//             alt="logo"
//           />
//         </Link>
//       </div>
//       {/* Burger Icon */}
//       <div className="md:hidden  ">
//         <button onClick={toggleMenu} className="text-black focus:outline-none">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>
//       {/* Navigation Links */}
//       <ul
//         className={`${
//           isOpen ? "block" : "hidden"
//         }  md:static   bg-gray-100 md:flex md:space-x-6 p-4 md:p-0`}
//       >
//         <li className=" p-1">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2 "
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className=" p-1">
//           <NavLink
//             to="about"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2"
//             }
//           >
//             About Me
//           </NavLink>
//         </li>
//         <li className=" p-1">
//           <NavLink
//             to="skills"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2"
//             }
//           >
//             Skills
//           </NavLink>
//         </li>
//         <li className=" p-1">
//           <NavLink
//             to="projects"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2"
//             }
//           >
//             Projects
//           </NavLink>
//         </li>
//         <li className="p-1">
//           <NavLink
//             to="contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2"
//             }
//           >
//             Contact Me
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
            fixed top-0 right-0 h-full w-64 mt-16 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            md:static md:transform-none md:flex md:space-x-6 md:h-auto md:w-auto md:bg-transparent md:shadow-none md:p-0
            p-4 flex flex-col md:flex-row z-50
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
};

export default Header;
