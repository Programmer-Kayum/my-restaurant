import React from "react";

const ShowMenu = ({ menu }) => {
  return (
    <div className="w-64 lg:my-0 my-4 bg-white shadow-md rounded-lg overflow-hidden h-90 flex flex-col justify-between">
      {/* Image Section */}
      <img
        src={menu.image || "https://via.placeholder.com/150"}
        alt={menu.name}
        className="w-full h-40 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{menu.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{menu.recipe}</p>
        </div>
        <button className="mt-4 w-full py-1 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShowMenu;
