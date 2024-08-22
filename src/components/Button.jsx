import React from "react";

const Button = ({ name, getCategory }) => {
  return (
    <button
      className="px-3 p-2 bg-[#D0B8A8] rounded-xl font-semibold text-sm hover:bg-gray-300"
      onClick={() => getCategory(name)}
    >
      {name}
    </button>
  );
};

export default Button;
