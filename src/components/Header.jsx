import React from "react";

function Header({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl border-2 rounded-full px-6 sm:px-8 py-1 font-semibold">
      {children}
    </h1>
  );
}

export default Header;
