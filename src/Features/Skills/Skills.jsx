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
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function Skills() {
  return (
    <Card>
      <Header className="text-xl md:text-2xl border-2 px-6 py-2 font-semibold">
        Skills
      </Header>
      <div className="flex flex-wrap gap-6 md:gap-8 w-full justify-center">
        <Link to={"https://git-scm.com/"} target="_blank">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-white w-16 h-16 md:w-24 md:h-24"
          />
        </Link>
        <Link to={"https://git-scm.com/"} target="_blank">
          <FontAwesomeIcon
            icon={faCode}
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
          to={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faCss}
            className="text-blue-700 w-16 h-16 md:w-24 md:h-24"
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
        <Link to={"https://react.dev/"} target="_blank">
          <FontAwesomeIcon
            icon={faReact}
            className="text-blue-500 w-16 h-16 md:w-24 md:h-24"
          />
        </Link>
        <Link to={"https://tailwindcss.com/docs/installation"} target="_blank">
          <img
            className="w-16 h-16 md:w-24 md:h-24"
            src="/tailwind.svg"
            alt="logo"
          />
        </Link>
        <Link to={"https://git-scm.com/"} target="_blank">
          <FontAwesomeIcon
            icon={faBootstrap}
            className="text-purple-600 w-16 h-16 md:w-24 md:h-24"
          />
        </Link>
        <Link to={"https://git-scm.com/"} target="_blank">
          <FontAwesomeIcon
            icon={faGit}
            className="text-red-500 w-16 h-16 md:w-24 md:h-24"
          />
        </Link>
        <Link to={"https://reactrouter.com/home"} target="_blank">
          <img
            className="w-16 h-16 md:w-24 md:h-24"
            src="/reactRouter.svg"
            alt="logo"
          />
        </Link>
      </div>
    </Card>
  );
}
