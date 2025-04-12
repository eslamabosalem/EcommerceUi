import React, { useEffect, useState, useTransition } from "react";
import { Fade } from "react-awesome-reveal";
import "./MainHerd.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MainHardWard() {

const { t, i18n } = useTranslation();
const isArabic=i18n.language==="ar";
const words = i18n.language === "ar" 
? ["الثقة", "التعاون", "الابتكار", "الاحترام", "الالتزام", "الإيجابية", "التنوع"]
: ["TRUST", "COLLABORATION", "INNOVATION", "RESPECT", "COMMITMENT", "POSITIVE", "DIVERSITY"];



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (

    <div className="w-full mt-[100px]  px-6 lg:px-20   ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        

        <div className="w-full lg:w-1/2 flex justify-center font-cairo">
          <div className={`w-[70%] sm:w-[430px] h-[580px] font-cairo bg-[#EAF5F6] flex justify-center items-center rounded-lg shadow-lg ${isArabic? " lg:ml-12":""}` }>




            <Fade key={words[currentIndex]} duration={1000}>
              <span className="font-bold text-4xl sm:text-[64px] text-[#478B9C]  font-cairo  ">
                {words[currentIndex]}
              </span>
            </Fade>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-red-00 mt-12 lg:mt-0  ">
          <h2 className={`text-2xl font-bold text-[#003540] dark:text-[#B3E5F1] tracking-wide ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>
{t("HeroSoftWareMaintitle")}
            {/* About AWS GULF */}
          </h2>
          <p className={`text-[#333] font-montserrat  dark:text-white mt-8 text-lg font-normal leading-8 sm:text-base tracking-wide  text-justify whitespace-pre-line  ${isArabic?"  sm:tracking-[0] lg:tracking-[0] font-cairo text-lg ":""}`}>
          {t("HeroSoftWareMainP")}
</p>
          {/* القسمين: Creativity & Technology */}
         <div className={`flex justify-between   lg:mt-20   " ${isArabic?" font-cairo ":""}`}>
  {/* قسم Creativity */}
  <div className="w-full md:w-1/2 px-4 ">
      <button className={`${i18n.language==="ar" && "px-4"} text-nowrap mb-5  py-4  font-normal  mt-10 lg:mt-0 text-[20px] leading-[24px] Style lg:py-6 lg:px-10   dark:text-white`}>
      <span className=" text-center lg:pr-0">{t("HeroSoftWareMainCreativity")}</span>
      {/* Technology */}
    </button>

    <ul className={`text-secondary ms-2 text-[15px]  font-montserrat text-color-fool dark:text-white ${isArabic?" sm:tracking-[0] lg:tracking-[0] font-cairo  text-3xl ":""}`}>

      <li className="pb-3">{t("forSixUiCreativity1")} </li>
      <li className="pb-3">{t("forSixUiCreativity2")}</li>
      <li className="pb-3">{t("forSixUiCreativity3")}</li>
      <li className="pb-3">{t("forSixUiCreativity4")}</li>
      <li className="pb-3">{t("forSixUiCreativity5")}</li>
    </ul>
  </div>

  {/* قسم Technology */}
  <div className="w-full md:w-1/2 mr-5">
    <button className=" font-normal mb-5   text-[20px] leading-[24px] Style py-4  mt-10 lg:mt-0 lg:py-6 lg:px-10 dark:text-white">
      {t("HeroSoftWareMainTechnology")}
      {/* Technology */}
    </button>
    <ul className={`text-secondary ms-2   text-[15px] sm:mt-2 md:mt-3 lg:mt-4 sm:space-y-2 md:space-y-3 lg:space-y-4 font-montserrat text-color-fool dark:text-white ${isArabic?"  sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>
    {/* UX UI Design
    Native & Flutter Mobile Apps Coding
    Ecommerce Solutions
    Bespoke Software Development */}
      <li className="pb-3"> {t("forSixUiTechnology1")}</li>
      <li className="pb-3">{t("forSixUiTechnology2")}</li>
      <li className="pb-3">{t("forSixUiTechnology3")}</li>
      <li className="pb-3">{t("forSixUiTechnology4")}</li>
    </ul>
  </div>
</div>
{/* More About Us  */}
<Link to="about"><p className={`mt-8 text-[#003540] underline ml-2  text-[20px] dark:text-[#B3E5F1] ${isArabic?" mr-5  sm:tracking-[0] lg:tracking-[0] font-cairo text-3xl ":""}`}>   {t("MoreAboutUs")} </p>
</Link>   
        </div>

      </div>
      
    </div>
  );
}
