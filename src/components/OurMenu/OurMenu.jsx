import React from "react";
import img1 from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  return (
    <div className="my-4">
      {/* Featured Section */}
      <div
        className="relative bg-fixed bg-cover py-4 bg-center lg:h-screen"
        style={{
          backgroundImage: `url(${img1})`, // Correctly set the background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:py-16 py-10">
          <div className="text-center text-white bg-opacity-50 bg-black lg:p-20 p-10 w-3/4 mx-auto lg:mt-40 mt-10">
            <h2 className="lg:text-4xl text-2xl font-bold ">OUR MENU</h2>
            <p className="uppercase lg:font-semibold">
              Would you like to try a disk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
