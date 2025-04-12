import React from "react";
import Slider from "react-slick";
import shop1 from "../../assets/images/shop1.jpeg";
import shop2 from "../../assets/images/shop2.jpeg";
import shop3 from "../../assets/images/shop3.jpeg";
import shop4 from "../../assets/images/shop4.jpeg";
import shop5 from "../../assets/images/shop5.jpeg";
import shop7 from "../../assets/images/shop1.jpeg";
import { useTranslation } from "react-i18next";
export default function Categories() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const images = [
    { id: 1, src: shop1, alt: "Image 1" },
    { id: 2, src: shop2, alt: "Image 2" },
    { id: 3, src: shop3, alt: "Image 3" },
    { id: 3, src: shop4, alt: "Image 3" },
    { id: 3, src: shop7, alt: "Image 3" },
    { id: 3, src: shop5, alt: "Image 3" },
  ];
  const settings = {
    dots: false,              
    infinite: true,             
    speed: 3000,              
    autoplaySpeed: 0,          
    slidesToShow: 5,           
    slidesToScroll: 1,          
    autoplay: true,            
    cssEase: "linear",          
    pauseOnHover: false,        
    arrows: false,              
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <>
     <section className=" mx-10 rounded-2xl">
    <div className="max-w-9xl lg:w-full overflow-hidden  gap-9 justify-center items-center  py-2 my-10  ">
    <h2 className="text-xl font-semibold  mb-4 md:text-3xl text-[#003540] dark:text-[#fff]">{t("categories")} </h2>
    <Slider {...settings} className="w-full">
        {images.map((image) => (
          <div key={image.id} className="px-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>
      </section>
    </>
  );
}
