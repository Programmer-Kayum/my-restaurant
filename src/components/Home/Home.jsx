import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import BistroBossSection from "./BistroBossSection/BistroBossSection";
import PopularIteam from "./PopularIteam/PopularIteam";
import Contact from "./Contact/Contact";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import Testimonial from "./Testimonial/Testimonial";
import ItemList from "./ItemList/ItemList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSection></BistroBossSection>
      <PopularIteam></PopularIteam>
      <Contact></Contact>
      <ItemList></ItemList>
      <FeaturedItem></FeaturedItem>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
