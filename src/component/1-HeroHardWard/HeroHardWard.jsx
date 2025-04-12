import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/2222.svg";
import Logo1 from "../../assets/images/22222.svg";
import "../1-HeroHardWard/Hero.css";
import { Link, useNavigate } from "react-router-dom";
import Modell from "../16-Modell/Modell";
import { useTranslation } from "react-i18next";

export default function HeroHardWard( ) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const navigate = useNavigate();
  const [currentLogo, setCurrentLogo] = useState(Logo);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentLogo(isDark ? Logo1 : Logo);
    };

    
    checkDarkMode();

    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    navigate("/markting");
  };

  return (
    <div className="container mx-auto  px-1 flex flex-col md:flex-row md:justify-between   md:items-center">
      <div className="md:w-1/2 w-full text-center md:text-left">
      <div className="md:mb-14">
      <h1 className={`bg-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-mons mb-6 dark:text-white ${isArabic ?"lg:ml-[138px] lg:text-right text-nowrap font-cairo ":"tracking-widest"}`}>
    {t("HeroSoftWareTitle")}
    
  </h1>
  <div
    className={`colorP bg-p  text-base  sm:text-lg md:text-xl my-6 text-secondary  font-light  dark:text-white ${
      isArabic ? "lg:ml-[119px] lg:text-right   md:text-2xl font-cairo  " : " font-montserrat tracking-[1.7px]"
    }`}
  >
  
    <p>
      {t("HeroSoftWarep")
        .split("\n")
        .map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br className="hidden md:block" />
          </React.Fragment>
        ))}
    </p>
  </div>
</div>

        <div className={`flex gap-3   sm:gap-5 justify-center md:justify-start  items-center lg:text-[16px] text-[13px] ${isArabic?" py-1 font-cairo":" py-3 "} ` }>
          <button className= " text-nowrap backGroundButton py-[1px]  md:py-[6px] md:px-5 sm:px-6 font-bold rounded-2xl transition font-cairo  dark:text-[#333]   dark:bg-[#B3E5F1]">
            <Modell />
          </button>

          <button
            onClick={handleClick}
            className={`px-6 py-6  text-nowrap  sm:py-7 sm:px-9 rounded-2xl bg-text font-bold backgroundbutton2 dark:text-white dark:hover:text-black ${isArabic?"font-cairo":""}`}
          >
       {t("HeroSoftWareButtonMarkting")}
            {/* Marketing Services */}
              
     
          </button>
        </div>

        <ul className="mt-6 sm:mt-8 flex justify-center md:justify-start items-center gap-7 sm:gap-9 bg-text mb-12 md:mb-[72px]">
  <Link to="https://www.facebook.com/profile.php?id=61569400731269 "><i  className="fa-brands fa-facebook bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.instagram.com/awsgulf/ "> <i className="fa-brands fa-instagram bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.linkedin.com/company/aws-gulf/?viewAsMember=true"> <i className="fa-brands fa-linkedin bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  <Link to="https://www.tiktok.com/@awsgulf?lang=en "> <i className="fa-brands fa-tiktok bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
  {/* <Link to=""> <i className="fa-brands fa-snapchat bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link> */}
  <Link to="https://x.com/AwsGulf">  <i className="fa-brands fa-x-twitter bg-icon transition icon-button dark:text-white text-3xl sm:text-3xl"></i></Link>
</ul>

      </div>

      <div
  className={`md:w-[50%] mb-3 lg:mb-32 flex justify-center md:mb-52 md:ml-24 lg:mr-20 lg:mt-10 
    ${isArabic ? "ml-auto pr-10 lg:pr-20 m-auto md:mt-0 lg:mt-9 mt-1" : ""}`}
>
  <img
    src={currentLogo}
    alt="Marketing Strategy Illustration"
    className={`w-[250px] sm:w-[300px] md:w-[346px] md:mr-9  h-auto  ${isArabic?" m-auto ml-11":""}`}
  />
</div> 



    </div>
  );
}
