import React from "react";

const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;

  return (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-300">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover"
        style={{ borderRadius: "0 200px 200px 200px" }}
      />

      {/* Text Section */}
      <div className="flex-1">
        {/* Title and Price */}
        <div className="lg:flex justify-between items-center">
          <h3 className="lg:text-lg font-semibold uppercase text-gray-800">
            {name}{" "}
          </h3>
          <p className="lg:text-lg font-semibold text-yellow-500">$ {price}</p>
        </div>
        {/* Description */}
        <p className="text-gray-600 mt-2"> >> {recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
