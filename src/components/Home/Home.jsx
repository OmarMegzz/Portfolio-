import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full p-8 flex flex-col md:flex-row items-center justify-evenly gap-8">
      {/* Text Section */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <div className="info-text">
          <h2 className="text-3xl  font-bold">I'M</h2>
          <h1 className="text-5xl md:text-7xl font-bold">Omar Magdy</h1>
          <h3 className="text-xl md:text-2xl font-extrabold text-gray">
            Front-end Developer
          </h3>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
          <Link
            to={"http://linkedin.com/in/omar-magdy-4866a1223"}
            target={"_blank"}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-500 hover:text-blue-600 w-8 h-8 transition-all"
            />
          </Link>
          <Link to={"https://github.com/OmarMegzz"} target={"_blank"}>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-500 hover:text-black w-8 h-8 transition-all"
            />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="rounded-lg bg-slate-950 w-3/4 md:w-1/2 lg:w-1/3">
        <img
          className="w-full h-auto rounded-lg"
          src="/myPhoto.png"
          alt="Omar Magdy"
        />
      </div>
    </div>
  );
};

export default Home;
