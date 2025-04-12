
import { Switch, FormControlLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navbar, Button ,Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/shopt.jpg";
import logo1 from "../../assets/images/shopt.jpg";
import logoA from "../../assets/images/shopt.jpg";
import logoAB from "../../assets/images/shopt.jpg";
import uk from "../../assets/images/iconA.png";
import uk1 from "../../assets/images/iconAu.png";
import uk2 from "../../assets/images/rrrr.png";
import uk3 from "../../assets/images/rr.svg";
import uk4 from "../../assets/images/iconG.png";
import uk5 from "../../assets/images/iconI.jpg";
import uk6 from "../../assets/images/iconS.png";
import uk7 from "../../assets/images/uk1.png";

import { useTranslation } from "react-i18next";

import SidebarFilter from "../Fliter/Fliter";

export default function NavbarHardWard({  toggleLanguage }) {
   
  
  const countries = [
    { name: 'United Kingdom', flag: uk },
    { name: 'Australia ', flag: uk1 },
    { name: 'Canada ', flag: uk2 },
    { name: 'France ', flag: uk3 },
    { name: 'Germany', flag: uk4 },
    { name: 'Italy ', flag: uk5 },
    { name: 'Spain ', flag: uk6 },
    { name: 'United States', flag: uk7 },
    
  ];

  const [darkMode, setDarkMode] = useState(false);

  const { i18n , t} = useTranslation();
  const isArabic = i18n.language === "ar";
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // استخدم اللغة المحفوظة أو الافتراضية
    if (i18n.language !== savedLanguage) {
   
    }
  }, [i18n]); 
  
  // دالة تغيير اللغة بدون تعارض
  const handleToggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); 
  };
  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#242424";
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#242424";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
    }
  };
  const [isOpen, setIsOpen] = useState(false); // لتتبع حالة القائمة (مفتوحة أو مغلقة)
  
  const [selectedCountry, setSelectedCountry] = useState('United States');
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // تغيير حالة القائمة بين مفتوحة ومغلقة
  };

  const handleSelectCountry = (countryName) => {
    setSelectedCountry(countryName);
    setIsOpen(false); // إغلاق القائمة بعد اختيار الدولة
  };
  const selectedCountryFlag = countries.find(country => country.name === selectedCountry)?.flag;

  return (
    <Navbar fluid rounded className="bg-white  dark:bg-[#242424]   shadow-md">
     
     <Link to="/"><Navbar.Brand href="/" className="flex  rtl:space-x-reverse ">
      <div
  className={`${
    document.documentElement.dir === "rtl"
      ? "lg:w-[80px] md:w-[50px] h-[70px] "
      : "lg:w-[80px] md:w-[50px] h-[70px] ml-4"
  }`}
>
  <img
    src={
      darkMode
        ? document.documentElement.dir === "rtl"
          ? logoA
          : logo1
        : document.documentElement.dir === "rtl"
        ? logoAB
        : logo   ///E
    } 
    className="w-full h-full    rounded-full"
    alt="Logo"
  />
</div>



</Navbar.Brand>
</Link> 

   
      <div className="md:hidden ">
        <Navbar.Toggle />
      </div>

    
      <Navbar.Collapse className=" mt-2">
    


        {/* ///////////////////////////////////////////////////////////////////////// */}

        <Navbar.Link 
 
  className={`group text-[#666]  dark:text-white lg:mr-4 xl:mr-9  md:mt-2 lg:mt-1  text-sm cursor-pointer ${isArabic?"font-cairo":""}`}
>    
{t("Home")}
</Navbar.Link>

<Navbar.Link  className={`text-[#666] dark:text-white lg:mr-4 xl:mr-9  md:mr-2  md:mt-2 lg:mt-1  text-sm cursor-pointer ${isArabic?"font-cairo":""}`}>

{t("Products")}

</Navbar.Link>
<Navbar.Link 
 
  className={`group text-[#666]  dark:text-white lg:mr-4 xl:mr-9  md:mt-2 lg:mt-1  text-sm cursor-pointer ${isArabic?"font-cairo":""}`}
>    

{t("Categories")}
</Navbar.Link>

<Navbar.Link  className={`text-[#666] dark:text-white md:mr-2 lg:mr-4 xl:mr-9 lg:mt-1   md:mt-2  text-sm cursor-pointer ${isArabic?"font-cairo":""}`}>

{t("Brand")}

</Navbar.Link>



        {/* mobile */}
 
        <div className="block md:hidden mt-1 md:mr-5   md:my-[-20px] lg:mr-16">
        <button onClick={toggleLanguage} className="flex items-center text-[#666] dark:text-white">
    <i className={`fa-solid fa-globe text-sm sm:text-base md:text-lg lg:text-xl ${isArabic ? "mr-3 my-2" : ""}`}></i>
    <span className="mx-1 text-base  sm:text-sm md:text-base">{i18n.language === "ar" ? "E G" : "العربية"}</span>
 
  </button>

  <div className={`border-b border-b-slate-100    dark:border-hidden ${isArabic ? " " : "ml-2"}`}></div>
        <FormControlLabel
            control={
              <Switch
                className={`ml-4 lg:mx-2 mt-1 ${isArabic?" mr-[-4px]":""}`}
                checked={darkMode}
                onChange={toggleDarkMode}
                name="darkMode"
                size="small"
                sx={{
                  transform: "scale(1.5)",
                }}
              />
              
            }
          />
          
   {/* <hr className="mt-2 bg-[#666] "/> */}
   <div className={`border-b border-b-slate-100   mt-2  dark:border-hidden ${isArabic ? " " : "ml-2"}`}>
    
   </div>
{/*  */}

<div className="relative inline-block">
  <div>
    <button
      type="button"
      onClick={toggleDropdown}
      className="inline-flex justify-center w-full rounded-md z-30 text-lg font-medium text-gray-700 dark:text-white focus:ring-offset-2 focus:ring-offset-gray-100"
    >
      {selectedCountryFlag ? (
        <img src={selectedCountryFlag} alt={selectedCountry} className="w-8 h-6 mr-2" />
      ) : (
        <img src={usaFlag} alt="Default Flag" className="w-9 h-4 mr-2" />
      )}
      {selectedCountry}
    </button>
  </div>

  {isOpen && (
    <div
      className="origin-top-left absolute left-0 mt-2 w-56 z-30 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
    >
      <div className="py-1" role="none">
        {countries.map((country, index) => (
          <button
            key={index}
            onClick={() => handleSelectCountry(country.name)}
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-black hover:bg-gray-100 w-full"
          >
            <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
            {country.name}
          </button>
        ))}
      </div>
    </div>
  )}
</div>

      <div className=" ">
              
              
      <button className="text-xl mr-3 text-gray-700 hover:text-red-500 dark:text-white transition duration-300">
        <i className="fas fa-heart"></i>
      </button>
      <button className="text-xl text-gray-700 hover:text-green-500 dark:text-white transition duration-300">
        <i className="fas fa-sync-alt"></i>
      </button>


      </div>
      {/* زر وضع الظلام */}
    
      <SidebarFilter className="" />
         
        </div> 
     
      </Navbar.Collapse>
   
  
      <div className={`hidden md:flex md:order-2   ${isArabic?"":""}`}>
  {/* زر تغيير اللغة */}
  
  <button onClick={toggleLanguage} className="flex items-center  text-[#666] dark:text-white">
    <i className={`fa-solid fa-globe text-sm  sm:text-base md:text-lg lg:text-xl ${isArabic ? "mr-0" : ""}`}></i>
    <span className="mx-1 text-xs sm:text-sm md:text-base">{i18n.language === "ar" ? "E G" : "العربية"}</span>
  </button>


  <FormControlLabel
    control={
      <Switch
        className={` ml-3 ${isArabic?"mx-4 sm:mx-6 md:mx-1 lg:mx-2 ":""}`}
        checked={darkMode}
        onChange={toggleDarkMode}
        name="darkMode"
        size="xl"
        sx={{
          transform: "scale(1) sm:scale(1.2) md:scale(1.4) lg:scale(1.6)",
        }}
      />
    
    
    }
    
  />

  <div className="flex items-center gap-1 lg:gap-2">
 
  <div className="relative inline-block ">
      <div>
        <button
          type="button"
          onClick={toggleDropdown} 
          className="inline-flex justify-center w-full rounded-md   z-30  text-lg font-medium text-gray-700  dark:text-white focus:ring-offset-2 focus:ring-offset-gray-100"
        >
      
          {selectedCountryFlag ? (
            <img src={selectedCountryFlag} alt={selectedCountry} className="w-8 h-6 mr-2" />
          ) : (
            <img src={usaFlag} alt="Default Flag" className="w-9 h-4 mr-2" />
          )}
          {selectedCountry}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 z-30  rounded-md bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => handleSelectCountry(country.name)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              >
                <img src={country.flag} alt={country.name} className="w-6 h-4 mr-2" />
                {country.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className=" pl-28 ">
    <SidebarFilter/>
    </div>
          
          <button className="text-xl text-gray-700 hover:text-red-500 dark:text-white transition duration-300">
            <i className="fas fa-heart"></i>
          </button>
          <button className="text-xl text-gray-700 hover:text-green-500 dark:text-white transition duration-300">
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
  
</div>

   
    </Navbar>
    
  );
}
















