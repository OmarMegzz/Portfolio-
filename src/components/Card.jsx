import React from "react";

export default function Card({ children }) {
  return (
    <div className="flex bg-[#FAFAFA] flex-col h-screen items-center justify-center gap-10 px-4 sm:px-8">
      <div className="w-full max-w-4xl h-auto sm:h-3/4 rounded-lg  bg-[#1c1b1b] text-black flex flex-col items-center justify-center gap-8 p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
