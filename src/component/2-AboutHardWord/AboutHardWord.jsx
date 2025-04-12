import React from "react";
import Slider from "react-slick";
import microsoft from "../../assets/images/microsoft 1.svg";
import lenovo from "../../assets/images/lenovo 1.svg";
import kaspersky from "../../assets/images/kaspersky 1.svg";
import cisco from "../../assets/images/cisco 1.svg";
import peplink from "../../assets/images/peplink 1.svg";
import dell from "../../assets/images/dell 1.svg";
import { useTranslation } from "react-i18next";
export default function AboutHardWord() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="overflow-hidden  xl:my-14 mb-11 mt-1">
        <hr className="my-5 lg:mt-0" />
        <div
          className={`flex flex-col md:m-auto md:justify-center lg:flex-row justify-center text-center colorText shadow-lg ${
            isArabic ? "font-cairo" : ""
          } `}
        >
          <div
            className={`max-w-7xl justify-center  py-2 mx-auto ${
              isArabic ? "font-cairo" : ""
            }  `}
          >
            <Slider
              {...settings}
              className={`flex  items-center w-full ${
                isArabic ? "font-cairo" : ""
              } `}
            >
              <div className="flex justify-center">
                <img
                  src={microsoft}
                  alt="Slider1"
                  className="h-20 w-60  md:my-6 sm:pe-8 "
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={lenovo}
                  alt="Slider2"
                  className="h-20 w-60   md:my-6 sm:pe-8"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={kaspersky}
                  alt="Slider3"
                  className="h-20 w-60   md:my-6 sm:pe-8"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={cisco}
                  alt="Slider4"
                  className="h-20 w-60   md:my-6 sm:pe-8"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={peplink}
                  alt="Slider5"
                  className="h-20 w-60   md:my-6 sm:pe-8"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={dell}
                  alt="Slider6"
                  className="h-20 w-60   md:my-6 sm:pe-8"
                />
              </div>
            </Slider>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
