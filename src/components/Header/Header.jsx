import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="p-4 bg-gray-100 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-14 h-11 rounded-xl"
            src="src/assets/Omar-Magdy.svg"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="flex  md:flex-row md:space-x-6 p-12 md:p-0 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-gray-700 px-4 py-2"
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
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-gray-700 px-4 py-2"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="skills"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-gray-700 px-4 py-2"
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
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-gray-700 px-4 py-2"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "text-black hover:text-gray-700 px-4 py-2"
            }
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className="p-4 bg-gray-100 shadow-md flex items-center justify-between">
//       {/* Burger Menu */}

//       {/* Logo */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             className="w-14 h-11 rounded-xl"
//             src="src/assets/Omar-Magdy.svg"
//             alt="logo"
//           />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <ul
//         className={`flex w-full bg-gray-100 md:bg-transparent md:absolute md:flex md:flex-row md:space-x-6 p-4 md:p-0 transition-transform transform ${
//           isMenuOpen ? "translate-y-0" : "-translate-y-full"
//         } md:translate-y-0`}
//       >
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-black text-white px-4 py-2 rounded-lg"
//                 : "text-black hover:text-gray-700 px-4 py-2"
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
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
//         <li>
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
//         <li>
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
//         <li>
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
