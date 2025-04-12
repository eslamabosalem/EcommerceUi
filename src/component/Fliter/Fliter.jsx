import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SidebarFilter = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  // Filter Data
  const categories = [
   
      { label: 'Electronics', value: 'electronics' },
      { label: 'Clothing', value: 'fashion' },
      { label: 'Home & Kitchen', value: 'home_kitchen' },
      { label: 'Sports', value: 'sports' },
      { label: 'Books', value: 'books' }
    
    
  ];

  const priceRanges = [
    { label: 'أقل من 50$', value: 'under_50' },
    { label: '50$ - 100$', value: '50_100' },
    { label: '100$ - 200$', value: '100_200' },
    { label: 'أكثر من 200$', value: 'over_200' }
  ];

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  // Change Category
  const handleCategoryChange = (category) => setSelectedCategory(category);

  // Change Price Range
  const handlePriceRangeChange = (range) => setSelectedPriceRange(range);

  return (
    <div className="relative mb-16">
      <button
        onClick={toggleSidebar}
        className="p-3 mt-2 text-[16px] bg-[#003540] dark:bg-white dark:text-black text-white rounded-2xl mb-4 flex items-center gap-2 absolute right-0 top-0 mr-4 "
      >
        {t("Filter")}
        <span
          className={`transform transition-all duration-500 ${isSidebarVisible ? "rotate-90" : ""}`}
        >
          <i className="fa-solid fa-filter"></i>
        </span>
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 p-4 border-r border-gray-200 bg-white fixed left-0 top-0 h-full z-40 transform transition-transform duration-500 ease-in-out ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{t("Filters")}</h2>
          <button
            onClick={() => setIsSidebarVisible(false)}
            className="text-2xl text-gray-500"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">{t("Category")}</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.value}>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="radio"
                    name="category"
                    className="accent-blue-500"
                    checked={selectedCategory === category.value}
                    onChange={() => handleCategoryChange(category.value)}
                  />
                  {category.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-medium text-gray-700 mb-2">{t("Price")}</h3>
          <ul className="space-y-2">
            {priceRanges.map((range) => (
              <li key={range.value}>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="radio"
                    name="priceRange"
                    className="accent-blue-500"
                    checked={selectedPriceRange === range.value}
                    onChange={() => handlePriceRangeChange(range.value)}
                  />
                  {range.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Dark background to hide sidebar */}
      {isSidebarVisible && (
        <div
          onClick={() => setIsSidebarVisible(false)}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default SidebarFilter;
