import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col  w-full h-full p-36 items-center justify-center  ">
        <div className="flex flex-col  items-center justify-center bg-black text-white p-20 gap-8 rounded-lg ">
          <h1 className="text-xl border-2 px-8 py-1 font-semibold ">Skills</h1>
          <div>
            <h2 className="text-2xl  font-medium">Using now</h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-between items-center   ">
            <Link to={"https://react.dev/"} target={"_blank"}>
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-500 w-24 h-24 "
              />
            </Link>
            <Link
              to={"http://linkedin.com/in/omar-magdy-4866a1223"}
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-red-500 w-24 h-24"
              />
            </Link>
            <Link
              to={"http://linkedin.com/in/omar-magdy-4866a1223"}
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={faJs}
                className=" text-yellow-500 w-24 h-24"
              />
            </Link>
            <Link
              to={"http://linkedin.com/in/omar-magdy-4866a1223"}
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={faCss}
                className=" text-blue-700 w-24 h-24"
              />
            </Link>
            <Link
              to={"http://linkedin.com/in/omar-magdy-4866a1223"}
              target={"_blank"}
            >
              <FontAwesomeIcon
                icon={faGit}
                className=" text-red-500 w-24 h-24"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
