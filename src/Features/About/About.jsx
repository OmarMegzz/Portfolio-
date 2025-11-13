import React from "react";

export default function About() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10 px-4 sm:px-8">
      {/* Container for the About section */}
      <div className="w-full max-w-4xl h-auto sm:h-3/4 rounded-lg bg-black text-white flex flex-col items-center justify-center gap-8 p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl border-2 px-6 sm:px-8 py-1 font-semibold">
          About Me
        </h1>

        {/* Content */}
        <div className="flex flex-col text-base sm:text-lg text-center items-center justify-center w-full sm:w-3/4">
          <p>
            I am a passionate and dedicated front-end developer with a strong
            foundation in web technologies, including HTML, CSS, JavaScript, and
            React. I thrive on creating user-friendly, responsive, and visually
            appealing web applications. With experience in handling real-world
            projects, I enjoy turning ideas into reality through clean and
            efficient code. My journey as a developer has been fueled by
            curiosity and a constant drive to learn and adapt to new challenges.
            I am excited to contribute my skills to meaningful projects and
            collaborate with others to bring impactful digital experiences to
            life.
          </p>
        </div>
      </div>
    </div>
  );
}
