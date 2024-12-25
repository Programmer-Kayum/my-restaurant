import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import img1 from "../../../assets/home/featured.jpg";

const FeaturedItem = () => {
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:py-16">
          {/* Header */}
          <div className="text-center text-white mb-8 ">
            <p className="text-yellow-400 text-lg font-medium">
              ---Check it out---
            </p>
            <h2 className="lg:text-4xl font-bold mt-2">
              <span className="border-b-4 border-blue-500 pb-1">
                FROM OUR MENU
              </span>
            </h2>
          </div>

          {/* Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8">
            {/* Image */}
            <div>
              <img
                src={img1}
                alt="Menu item"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-white flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-2">March 20, 2023</p>
              <h3 className="text-2xl font-bold mb-4">WHERE CAN I GET SOME?</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequuntur consequuntur omnis ullam maxime tenetur.
              </p>
              <p className="text-white button  underline font-semibold hover:text-yellow-400 transition">
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
