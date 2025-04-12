import React, { useState } from "react";
import HainoTake1 from "../../assets/images/HainoTake.jpg";
import HainoTake2 from "../../assets/images/HainoTake5.jpg";
import HainoTake3 from "../../assets/images/HainoTake3.jpg";
import HainoTake4 from "../../assets/images/Sgop6.png";
import HainoTake5 from "../../assets/images/Sgop1.jpg";
import HainoTake6 from "../../assets/images/Sgop3.jpg";
import HainoTake7 from "../../assets/images/Shopper5.jpg";
import HainoTake8 from "../../assets/images/Shopper4.jpg";
import HainoTake9 from "../../assets/images/Sgop5.png";
import { useTranslation } from "react-i18next";

function Home() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
  const products = [
    { id: 1, name: t("item_title"), image: HainoTake1, description:  t("item_description"), price: 500, discountPrice: 450 },
    { id: 2, name: t("model_name"), image: HainoTake2, description:  t("model_description"), price: 600 },
    { id: 3, name: t("watch_nameq"), image: HainoTake3, description:  t("watch_description"), price: 80, discountPrice: 65 },
    { id: 4, name: t("luxury_watch_name"), image: HainoTake4, description:  t("luxury_watch_description"), price: 900 },
    { id: 5, name: t("sports_watch_name"), image: HainoTake9, description:  t("sports_watch_description"), price: 700, discountPrice: 620 },
    { id: 6, name: t("elegant_watch_name"), image: HainoTake4, description:  t("elegant_watch_description"), price: 850 },
    { id: 7, name: t("rectangular_watch_name"), image: HainoTake4, description:  t("rectangular_watch_description"), price: 400 },
    { id: 8, name: t("aviation_watch_name"), image: HainoTake2, description:  t("aviation_watch_description"), price: 300, discountPrice: 270 },
    { id: 9, name: t("fragrance_name"), image: HainoTake4, description:  t("fragrance_description"), price: 120 },
    { id: 10, name: t("perfume_name"), image: HainoTake7, description:  t("perfume_description"), price: 150, discountPrice: 130 },
    { id: 11, name: t("wood_perfume_name"), image: HainoTake4, description:  t("wood_perfume_description"), price: 200 },
    { id: 12, name: t("citrus_perfume_name"), image: HainoTake5, description:  t("citrus_perfume_description"), price: 90 },
    { id: 13, name: t("floral_perfume_name"), image: HainoTake8, description:  t("floral_perfume_description"), price: 110 },
    { id: 14, name: t("fruity_perfume_names"), image: HainoTake7, description:  t("fruity_perfume_description"), price: 100, discountPrice: 85 },
    { id: 15, name: t("sweet_perfume_name"), image: HainoTake6, description:  t("sweet_perfume_description"), price: 130 },
    { id: 16, name: t("smoky_perfume_name"), image: HainoTake5, description:  t("smoky_perfume_description"), price: 250 },
  ];

  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleWishlistClick = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen flex flex-col mt-24 bg-gray-50">
      <div className="flex-1 px-6 py-8 space-y-12">

        {/* Search Box */}
        {/* Search Box - Centered */}
<div className="w-full flex justify-center mb-6">
  <input
    type="text"
    placeholder="Search for a product..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
  />
</div>

        {/* Products Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 md:text-3xl text-[#003540] dark:text-[#fff]">New Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white"
                >
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
              ))
            ) : (
              <p className="text-gray-600 text-lg">No matching products found.</p>

            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
