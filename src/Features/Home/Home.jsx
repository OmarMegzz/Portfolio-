import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { homeData } from "../data";
// import TextLoop from "react-text-loop";

export default function Home() {
  return (
    <div className="h-full  p-8 flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <div className="info-text">
          <h4 className="text-xl md:text-2xl font-mono text-gray-500 min-h-[2.5rem] w-[280px] md:w-[360px] overflow-hidden">
            <Typewriter
              words={["Welcome to My Portfolio"]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h4>
          <h1 className="flex flex-col text-3xl md:text-4xl font-bold">
            <span>{homeData.span}</span> {homeData.name}
          </h1>

          <h3 className="text-xl md:text-2xl font-extrabold text-gray ">
            {homeData.title}
            {/* <Typewriter
              words={[
                "Front-end Developer",
                "React Developer",
                "Chasing Better Every Day",
                "Built Real Projects with React",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            /> */}
          </h3>
        </div>
        <div className="flex items-center gap-4 pt-6">
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
              className="text-gray-500 hover:text-green-500  w-8 h-8 transition-all"
            />
          </Link>
        </div>
      </div>

      <div className="rounded-lg bg-slate-950 w-3/4 md:w-1/2 lg:w-1/3">
        <img
          className="w-full h-full rounded-lg"
          src="/myPhoto.png"
          alt="Omar Magdy"
        />
      </div>
    </div>
  );
}
