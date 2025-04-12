import React, { useState } from "react";
import HainoTake1 from "../../assets/images/HainoTake.jpg";
import HainoTake2 from "../../assets/images/HainoTake5.jpg";
import HainoTake3 from "../../assets/images/HainoTake3.jpg";
import HainoTake4 from "../../assets/images/HainoTake4.jpg";
import HainoTake9 from "../../assets/images/Shopper1.jpg";
import HainoTake8 from "../../assets/images/Sgop5.png";
import { useTranslation } from "react-i18next";

function Recommended() {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === "ar";
  const products = [
    { id: 1, name: t("product_namee"), image: HainoTake1, description: t("product_infoo"), price: 500, discountPrice: 450 },
    { id: 2, name: t("Omega"), image: HainoTake2, description: t("product_iOmegafo"), price: 600 },
    { id: 3, name: t("Seiko"), image: HainoTake3, description: t("productSeiko"), price: 80, discountPrice: 65 },
    { id: 4, name: t("Patek"), image: HainoTake4, description: t("Patekk"), price: 900 },
    { id: 5, name: t("productTag"), image: HainoTake9, description: t("productTagd"), price: 700, discountPrice: 620 },
    { id: 6, name: t("Audemars"), image: HainoTake4, description: t("productAudemars"), price: 850 },
    { id: 7, name: t("productCartier"), image: HainoTake4, description: t("productCartieer"), price: 400 },
    { id: 8, name: t("productBreitling"), image: HainoTake8, description: t("producBreitling"), price: 300, discountPrice: 270 },
  
  ];

  const [wishlist, setWishlist] = useState([]);

  const handleWishlistClick = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 px-6 py-8 space-y-12">
        {/* Products Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 md:text-3xl text-[#003540] dark:text-[#fff]">    {t("RecommendedProducts")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
              >
                {/* Recommended Badge */}
                <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-4 text-xs font-bold uppercase rounded-br-lg">
               {t("Recommended")}
                </div>

                {/* Sale Badge */}
                {product.discountPrice && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-4 text-xs font-bold uppercase rounded-bl-lg">
                  {t("Sale")}
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-lg mb-2">{product.description}</p>

                  {product.discountPrice ? (
                    <div className="text-lg">
                      <span className="text-red-500 font-bold">${product.discountPrice}</span>
                      <span className="text-gray-400 line-through ml-2">${product.price}</span>
                    </div>
                  ) : (
                    <div className="text-lg text-gray-700 font-semibold">
                      ${product.price}
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center items-center text-center gap-4 p-6 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-2xl">{product.description}</p>
                  </div>
                  <button className="mt-4 px-5 py-2 bg-fuchsia-400 hover:bg-fuchsia-600 text-white rounded-lg transition-all duration-300">
                  {t("Add TO Cart")}
                  </button>
                </div>

                {/* Wishlist Icon */}
                <button
                  onClick={() => handleWishlistClick(product.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                    wishlist.includes(product.id) ? "text-red-500" : "text-white"
                  }`}
                >
                  <i className={`fa-solid fa-heart text-xl ${wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"}`}></i>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recommended;
