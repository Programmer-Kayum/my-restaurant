import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import BistroBossSection from "./BistroBossSection/BistroBossSection";
import PopularIteam from "./PopularIteam/PopularIteam";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSection></BistroBossSection>
      <PopularIteam></PopularIteam>
    </div>
  );
};

export default Home;
