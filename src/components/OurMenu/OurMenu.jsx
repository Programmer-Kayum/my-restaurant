import React, { useEffect, useState } from "react";
import ShowMenu from "../Home/ItemList/ShowMenu";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-4 lg:ml-0 ml-10  lg:gap-8">
        {menus.map((menu) => (
          <ShowMenu key={menu._id} menu={menu}></ShowMenu>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
