import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center lg:w-2/5 mx-auto w-full ">
      <p className="text-yellow-600 pb-2 italic font-semibold">{subHeading}</p>
      <h1 className="lg:text-2xl py-2  mb-2 border-y-4 font-bold text-black">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
