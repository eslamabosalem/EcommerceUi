import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import LayoutHardWord from "./component/7-LayoutHardWard/LayoutHardWord";
import AboutHardWord from "./component/2-AboutHardWord/AboutHardWord";
import OurServicesHaedWard from "./component/4-OurServicesHaedWard/OurServicesHaedWard";
import HomeHardWard from "./component/HomeHardWard/HomeHardWard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Categories from "./component/Categories/Categories";
import Fliter from "./component/Fliter/Fliter";
import Recommended from "./component/Recommended/Recommended";

function App() {
  const { t, i18n } = useTranslation();
  const savedLanguage = localStorage.getItem("language") || "en";
  const [isRTL, setIsRTL] = useState(savedLanguage === "ar");

  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
    document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [savedLanguage, i18n]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    document.dir = newLanguage === "ar" ? "rtl" : "ltr";
    setIsRTL(newLanguage === "en");
    localStorage.setItem("language", newLanguage);
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <LayoutHardWord toggleLanguage={toggleLanguage} />,
      children: [
        { index: true, element: <HomeHardWard /> },
        { path: "aboutHardWord", element: <AboutHardWord i18n={i18n}  t={t}  /> },
        { path: "ourServicesHaedWard", element: <OurServicesHaedWard /> },
        { path: "categories", element: <Categories/> },
        { path: "fliter", element: <Fliter/> },
        { path: "recommended", element: <Recommended/> },
     
    
      
       
      
      
      ],
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
