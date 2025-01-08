import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-full p-8 bg-slate-600 flex flex-col items-center justify-center gap-8 md:p-12">
      <div>
        <h2 className="text-gray text-xl font-medium text-center">
          Omar Magdy
        </h2>
      </div>
      <div className="flex items-center justify-center gap-6 md:gap-8">
        <Link
          to={"http://linkedin.com/in/omar-magdy-4866a1223"}
          target={"_blank"}
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-gray w-6 h-6" />
        </Link>
        <Link to={"https://github.com/OmarMegzz"} target={"_blank"}>
          <FontAwesomeIcon icon={faGithub} className="text-gray w-6 h-6" />
        </Link>
      </div>
      <p className="text-gray font-light text-center text-sm md:text-base">
        &copy; {currentYear} OMAR MAGDY. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
