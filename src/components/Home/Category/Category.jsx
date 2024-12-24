import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="lg:py-4">
      <section>
        <SectionTitle
          subHeading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className=" lg:text-4xl -mt-8 uppercase text-center lg:-mt-16  text-white">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className=" lg:text-4xl -mt-8 uppercase text-center lg:-mt-16  text-white">
              Pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className="lg:text-4xl -mt-8 uppercase text-center lg:-mt-16  text-white">
              soup
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className=" lg:text-4xl -mt-8 uppercase text-center lg:-mt-16  text-white">
              Cake
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className=" lg:text-4xl -mt-8 uppercase text-center lg:-mt-16  text-white">
              Salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
