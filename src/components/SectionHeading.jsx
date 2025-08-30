import React from "react";

const SectionHeading = ({ text }) => {
  return (
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {text}
          </h3>
  );
};

export default SectionHeading;
