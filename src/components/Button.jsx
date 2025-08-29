import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200`}
    >
      {text}
    </button>
  );
};

export default Button;
