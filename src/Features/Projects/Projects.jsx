import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../../components/ui/3d-card.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-10 gap-8">
      <div className="w-full max-w-6xl bg-black text-white rounded-lg p-6 md:p-10 flex flex-col items-center gap-8">
        <Header className="text-2xl border-2 px-6 py-2 font-semibold">
          Projects
        </Header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody>
                <CardItem
                  as={Link}
                  to={project.link}
                  target="_blank"
                  className="block bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer w-full h-full p-6"
                  translateZ={20} // effect depth
                  rotateY={5} // rotation effect
                  rotateX={5}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="text-lg font-bold mt-4">{project.title}</h2>
                  <p className="text-sm mt-2">{project.desc}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
