import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-4">
      <section>
        <SectionTitle
          subHeading="---What Our Clients Say---"
          heading="TESTIMONIALS"
        ></SectionTitle>

        <div className="lg:mx-10">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews?.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="text-center py-8 px-4">
                  {/* Star Rating */}
                  <div className="flex text-2xl justify-center mb-4">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500 text-xl" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, index) => (
                      <FaStar
                        key={index + review.rating}
                        className="text-gray-300 text-xl"
                      />
                    ))}
                  </div>

                  {/* Quote Icon in the Middle */}
                  <div className="flex justify-center items-center mb-4">
                    <div>
                      <FaQuoteLeft className="text-black  text-6xl" />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-600 lg:text-lg  mb-6 lg:max-w-3xl mx-auto">
                    {review.details}
                  </p>

                  {/* Author Name */}
                  <p className="text-yellow-500 font-bold text-lg">
                    {review.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
