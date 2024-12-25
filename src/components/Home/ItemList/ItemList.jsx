import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowMenu from "./ShowMenu";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [menus, setMenus] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  const displayedMenus = showAll ? menus : menus.slice(0, 4);

  return (
    <div className="my-4">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="lg:grid lg:grid-cols-4 lg:ml-0 ml-10  lg:gap-8">
        {displayedMenus.map((menu) => (
          <ShowMenu key={menu._id} menu={menu}></ShowMenu>
        ))}
      </div>

      {/* Toggle Button */}
      <Link to="/menu">
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            View All
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemList;
