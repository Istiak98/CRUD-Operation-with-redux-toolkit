import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-indigo-600 text-white font-semibold py-2 px-6 my-10 rounded hover:bg-indigo-900"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
