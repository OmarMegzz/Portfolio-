import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className=" flex flex-col h-screen items-center justify-center gap-10 ">
        <div className="w-3/4 h-3/4 rounded-lg bg-black text-white flex flex-col items-center justify-center gap-8 p-8 ">
          <h1 className=" text-xl border-2 px-8 py-1 font-semibold ">
            Projects
          </h1>
          <div className="cards flex w-full justify-center items-center">
            <Link
              to={"https://fresh-cart-e-commrce-gamma.vercel.app/"}
              target="blank_"
            >
              <div className="card hover:scale-105 hover:border p-4 flex flex-col items-center justify-center  ">
                <img src="src/assets/freshEcart.png" alt="" />
                <h2 className="text-xl ">Fresh E-cart</h2>
                <p className="  text-base font-lighttext-center min-w-min w-full">
                  Fresh E-Cart is a modern e-commerce web application designed
                  to provide a seamless online shopping experience
                </p>
              </div>
            </Link>
            <Link
              to={"https://capstone-project-roan-phi.vercel.app/"}
              target="blank_"
            >
              <div className="card hover:scale-105 hover:border p-4 flex flex-col items-center justify-center  ">
                <img src="src/assets/movies.png" alt="Kick Movies" />
                <h2 className="text-xl ">Kick Movies</h2>
                <p className="text-base font-lighttext-center min-w-min w-full">
                  Kick Movies is a dynamic web application designed for movie
                  enthusiasts to explore and discover a wide range of films
                </p>
              </div>
            </Link>
            <Link
              to={"https://to-do-list-iota-lake.vercel.app/"}
              target="blank_"
            >
              <div className="card hover:scale-105 hover:border p-4 flex flex-col items-center justify-center  ">
                <img src="src/assets/todoList.png" alt="" />
                <h2 className="text-xl ">Todo List</h2>
                <p className="text-base font-light text-center min-w-min w-full">
                  The Todo List application is a simple yet powerful tool to
                  manage daily tasks effectively. Built with React
                </p>
              </div>
            </Link>
            <Link
              to={"https://alx-fe-reactjs-fpkr.vercel.app/"}
              target="blank_"
            >
              <div className="hover:scale-105 hover:border p-4 flex flex-col items-center justify-center  ">
                <img src="src/assets/gitHubSearch.png" alt="" />
                <h2 className="text-xl ">GitHub Search</h2>
                <p className="text-base font-light text-center min-w-min w-full">
                  GitHub Search is a robust web application that allows users to
                  explore GitHub repositories and profiles effortlessly
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
