import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt as faCss,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-10 gap-8">
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl bg-black text-white rounded-lg p-6 md:p-10">
        <h1 className="text-xl md:text-2xl border-2 px-6 py-2 font-semibold">
          Skills
        </h1>
        <h2 className="text-lg md:text-2xl font-medium">Using Now</h2>
        <div className="flex flex-wrap gap-6 md:gap-8 w-full justify-center">
          <Link to={"https://react.dev/"} target="_blank">
            <FontAwesomeIcon
              icon={faReact}
              className="text-blue-500 w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
          <Link
            to={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-red-500 w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
          <Link
            to={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faJs}
              className="text-yellow-500 w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
          <Link
            to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCss}
              className="text-blue-700 w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
          <Link to={"https://git-scm.com/"} target="_blank">
            <FontAwesomeIcon
              icon={faGit}
              className="text-red-500 w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
