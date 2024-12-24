import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-full p-8 gap-8 flex items-center justify-evenly">
      <div>
        <div className="info-text">
          <h2 className="text-3xl font-bold ">I'M</h2>
          <h1 className="text-7xl font-bold ">Omar Magdy</h1>
          <h3 className="text-2xl font-extrabold text-gray ">
            Front-end Developer
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4 pt-8">
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
      </div>
      <div className="rounded-lg bg-slate-950">
        <img
          className="w-full h-full"
          src="src/assets/myPhoto.png"
          alt="myPhoto"
        />
      </div>
    </div>
  );
};

export default Home;
