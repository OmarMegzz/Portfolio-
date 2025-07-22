import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-10 gap-8">
      <div className="w-full max-w-6xl bg-black text-white rounded-lg p-6 md:p-10 flex flex-col items-center gap-8">
        <h1 className="text-2xl border-2 px-6 py-2 font-semibold">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Kick Movies Card */}
          <Link
            to={"https://kick-movies.vercel.app/"}
            target="_blank"
            className="card hover:scale-105 hover:border p-4 flex flex-col items-center bg-white text-black rounded-lg shadow-md"
          >
            <img
              src="/movies.png"
              alt="Kick Movies"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-4">Kick Movies</h2>
            <p className="text-sm text-center mt-2">
              Kick Movies is a dynamic web application designed for movie
              enthusiasts to explore and discover a wide range of films.
            </p>
          </Link>

          {/* Fresh E-cart Card */}
          <Link
            to={"https://fresh-cart-e-commrce-gamma.vercel.app/"}
            target="_blank"
            className="card hover:scale-105 hover:border p-4 flex flex-col items-center bg-white text-black rounded-lg shadow-md"
          >
            <img
              src="/freshEcart.png"
              alt="Fresh E-cart"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-4">Fresh E-cart</h2>
            <p className="text-sm text-center mt-2">
              Fresh E-Cart is a modern e-commerce web application designed to
              provide a seamless online shopping experience.
            </p>
          </Link>

          {/* Todo List Card */}
          <Link
            to={"https://to-do-list-iota-lake.vercel.app/"}
            target="_blank"
            className="card hover:scale-105 hover:border p-4 flex flex-col items-center bg-white text-black rounded-lg shadow-md"
          >
            <img
              src="/todoList.png"
              alt="Todo List"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-4">Todo List</h2>
            <p className="text-sm text-center mt-2">
              The Todo List application is a simple yet powerful tool to manage
              daily tasks effectively. Built with React.
            </p>
          </Link>

          {/* GitHub Search Card */}
          <Link
            to={"https://alx-fe-reactjs-fpkr.vercel.app/"}
            target="_blank"
            className="card hover:scale-105 hover:border p-4 flex flex-col items-center bg-white text-black rounded-lg shadow-md"
          >
            <img
              src="/gitHubSearch.png"
              alt="GitHub Search"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-4">GitHub Search</h2>
            <p className="text-sm text-center mt-2">
              GitHub Search is a robust web application that allows users to
              explore GitHub repositories and profiles effortlessly.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
