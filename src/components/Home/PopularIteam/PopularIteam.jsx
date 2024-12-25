import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MenuItam from "../../Shared/MenuItam/MenuItam";

const PopularIteam = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter((item) => item.category === "popular");
        setMenu(PopularItems);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading="Popular Items"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="max-w-5xl mx-auto  my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {menu?.map((item) => (
            <MenuItam key={item._id} item={item}></MenuItam>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button class="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularIteam;
