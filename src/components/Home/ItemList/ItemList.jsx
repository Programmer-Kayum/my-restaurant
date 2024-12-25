import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowMenu from "./ShowMenu";

const ItemList = () => {
  const [menus, setMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(menus.length / itemsPerPage);

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMenus = menus.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="lg:grid grid-cols-5 gap-8">
        {displayedMenus.map((menu) => (
          <ShowMenu key={menu._id} menu={menu}></ShowMenu>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          className={`px-4 py-2 bg-gray-300 text-gray-800 rounded-lg ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 bg-gray-300 text-gray-800 rounded-lg ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-400"
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ItemList;
