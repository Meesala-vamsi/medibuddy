import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ bannerData }) => {
  const settings = {
    dots: true, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <div className="slider-container mt-7">
      <Slider {...settings}>
        {bannerData?.props?.map((eachBanner, index) => (
          <div key={index} className="slider-item">
            <img
              src={eachBanner.bannerUrl}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
