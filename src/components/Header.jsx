import React, { useState } from 'react';
import {
  Search,
  MapPin,
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  // Simple state for active dropdowns
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown items data
  const standardDropdowns = {
    diwali: {
      title: 'Diwali',
      items: ['Diwali Hampers', 'Home Decor', 'View All'],
    },
    birthdays: {
      title: 'Birthdays',
      items: [
        'Curated Hampers',
        'Plants & Flowers',
        'Balloons',
        'For Her',
        'For Him',
        'View All',
      ],
    },
    anniversary: {
      title: 'Anniversary',
      items: [
        'Curated Hampers',
        'Plants & Flowers',
        'Jewellery',
        'Personalised',
        'View All',
      ],
    },
    corporateGifts: {
      title: 'Corporate Gifts',
      items: [
        'Writing & Stationery',
        'Bags & Travel',
        'Apparel',
        'Tech Accessories',
        'Branded Merchandise',
        'Explore All',
      ],
    },
    moreGifts: {
      title: 'More Gifts',
      items: [
        'Home Decor',
        'Baby & Kids',
        'Personalised Games',
        'Fashion & Personal Care',
        'For Him',
        'For Her',
        'Personal Care & Grooming',
        'Balloons',
        'Corporate Gifting',
        'Wedding Gifts',
        'Jewellery',
      ],
    },
  };

  // Best Sellers 6-Column Mega Menu Data
  const bestSellersMegaMenu = [
    {
      title: 'View All Hampers',
      items: [
        'All Gift Hampers',
        'Festive Bestsellers',
        'Luxury Keepsake Hampers',
        'Signature Wooden Boxes',
        'Gourmet Delicacies',
        'View All Hampers',
      ],
    },
    {
      title: 'Hampers By Features',
      items: ['Bestsellers', 'Featured', 'View All'],
    },
    {
      title: 'Hampers By Type',
      items: [
        'Build Your Own Hamper',
        'Chocolates & Candy',
        'Snacks & Munchies',
        'Tea & Coffee',
        'Dry Fruits',
        'View All Hampers',
      ],
    },
    {
      title: 'Hampers By Occasion',
      items: [
        'Sorry Hamper',
        'Love & Romance',
        'Birthday',
        'Housewarming',
        'Wedding',
        'Farewell',
        'Congratulations',
        'Anniversary',
        'Date Night',
        'Movie Night',
      ],
    },
    {
      title: 'Hampers For Recipient',
      items: [
        'For Him',
        'For Her',
        'Parents',
        'Corporate Hampers',
        'Employee Onboarding',
        'Rewards & Appreciation',
        'Promotion & Appraisal',
        'View All',
      ],
    },
    {
      title: 'Hampers By Price',
      items: [
        'Under 1500',
        'Rs. 1500 - Rs. 3000',
        'Rs. 3000 - Rs. 5000',
        'Rs. 5000 - Rs. 7000',
        'View All',
      ],
    },
  ];

  const cities = ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Kolkata', 'Hyderabad', 'Pune', 'Chennai'];

  return (
    <header className="w-full bg-white relative z-40">
      {/* 1. Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide">
        FOR QUERIES PLEASE CALL OR WHATSAPP - 7506210892
      </div>

      {/* 2. Main Navbar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo Placeholder */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-gray-700 hover:text-black hover:bg-gray-100 rounded-md"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <a href="/" className="flex items-center gap-2 text-left">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-gray-950">
                THE GIFT STUDIO
              </span>
              <span className="hidden sm:inline text-gray-300 font-light">|</span>
              <span className="hidden sm:inline text-xs sm:text-sm font-medium text-emerald-800 tracking-wide">
                Nature's Basket
              </span>
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative flex items-center bg-gray-100 hover:bg-gray-50 focus-within:bg-white border border-transparent focus-within:border-gray-300 rounded-full px-4 py-2 transition">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Gifts"
                className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Location Pill */}
            <div className="relative">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs sm:text-sm text-gray-700 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="font-medium">{selectedCity}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              {/* City Selection Dropdown */}
              {isCityDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Select City
                  </div>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 transition ${
                        selectedCity === city ? 'font-semibold text-black bg-gray-50' : 'text-gray-700'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Black Pill Button: Bulk/Corporate Enquiry */}
            <a
              href="#corporate-enquiry"
              className="hidden sm:inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition shadow-sm whitespace-nowrap"
            >
              Bulk/Corporate Enquiry
            </a>

            {/* Shopping Cart Icon with Badge */}
            <button
              className="relative p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Profile Icon */}
            <button
              className="p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
              aria-label="User Profile"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (visible on small screens) */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Gifts"
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 3. Navigation Links & Dropdowns (Desktop) */}
      <nav className="hidden lg:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between text-xs xl:text-sm font-medium text-gray-700">
            
            {/* 1. Diwali Dropdown */}
            <li
              className="relative py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('diwali')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 hover:text-black transition">
                Diwali <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {activeDropdown === 'diwali' && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 z-50">
                  {standardDropdowns.diwali.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* 2. Celebrity Hampers */}
            <li className="py-3.5">
              <a href="#celebrity-hampers" className="hover:text-black transition">
                Celebrity Hampers
              </a>
            </li>

            {/* 3. Birthdays Dropdown */}
            <li
              className="relative py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('birthdays')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 hover:text-black transition">
                Birthdays <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {activeDropdown === 'birthdays' && (
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 z-50">
                  {standardDropdowns.birthdays.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* 4. Anniversary Dropdown */}
            <li
              className="relative py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('anniversary')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 hover:text-black transition">
                Anniversary <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {activeDropdown === 'anniversary' && (
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 z-50">
                  {standardDropdowns.anniversary.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* 5. Last Minute Gifting */}
            <li className="py-3.5">
              <a href="#last-minute-gifting" className="hover:text-black transition">
                Last Minute Gifting
              </a>
            </li>

            {/* 6. Best Sellers - 6 COLUMN MEGA MENU */}
            <li
              className="py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('bestSellers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 font-semibold text-black hover:text-gray-600 transition">
                Best Sellers <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>

              {/* Mega Menu Container */}
              {activeDropdown === 'bestSellers' && (
                <div className="absolute left-0 right-0 top-full bg-white border-t border-b border-gray-200 shadow-2xl py-8 px-6 lg:px-12 z-50">
                  <div className="max-w-7xl mx-auto grid grid-cols-6 gap-6 text-left">
                    {bestSellersMegaMenu.map((column, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider pb-1 border-b border-gray-100">
                          {column.title}
                        </h4>
                        <ul className="space-y-2">
                          {column.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a
                                href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="text-xs text-gray-600 hover:text-black hover:translate-x-0.5 inline-block transition"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* 7. Create Your Own Hamper */}
            <li className="py-3.5">
              <a href="#create-your-own-hamper" className="hover:text-black transition">
                Create Your Own Hamper
              </a>
            </li>

            {/* 8. Corporate Gifts Dropdown */}
            <li
              className="relative py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('corporateGifts')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 hover:text-black transition">
                Corporate Gifts <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {activeDropdown === 'corporateGifts' && (
                <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 z-50">
                  {standardDropdowns.corporateGifts.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* 9. Home Decor */}
            <li className="py-3.5">
              <a href="#home-decor" className="hover:text-black transition">
                Home Decor
              </a>
            </li>

            {/* 10. More Gifts Dropdown */}
            <li
              className="relative py-3.5 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('moreGifts')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1 hover:text-black transition">
                More Gifts <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
              </span>
              {activeDropdown === 'moreGifts' && (
                <div className="absolute top-full right-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 z-50">
                  {standardDropdowns.moreGifts.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>

          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white px-4 py-4 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="pb-2 border-b border-gray-100">
            <a
              href="#corporate-enquiry"
              className="block w-full text-center bg-black text-white text-sm font-medium py-2.5 rounded-full"
            >
              Bulk / Corporate Enquiry
            </a>
          </div>

          <div className="space-y-2 text-sm font-medium text-gray-800">
            {/* Mobile Diwali */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                <span>Diwali</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-2 space-y-1.5 text-sm text-gray-600">
                {standardDropdowns.diwali.items.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="block py-1 hover:text-black">
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <a href="#celebrity-hampers" className="block py-2 hover:text-black">
              Celebrity Hampers
            </a>

            {/* Mobile Birthdays */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                <span>Birthdays</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-2 space-y-1.5 text-sm text-gray-600">
                {standardDropdowns.birthdays.items.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="block py-1 hover:text-black">
                    {item}
                  </a>
                ))}
              </div>
            </details>

            {/* Mobile Anniversary */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                <span>Anniversary</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-2 space-y-1.5 text-sm text-gray-600">
                {standardDropdowns.anniversary.items.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="block py-1 hover:text-black">
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <a href="#last-minute-gifting" className="block py-2 hover:text-black">
              Last Minute Gifting
            </a>

            {/* Mobile Best Sellers Mega */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none font-semibold text-black">
                <span>Best Sellers (All Categories)</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-3 space-y-3 text-xs text-gray-600">
                {bestSellersMegaMenu.map((col, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-gray-900 mb-1">{col.title}</p>
                    <div className="space-y-1 pl-2">
                      {col.items.map((subItem, sIdx) => (
                        <a key={sIdx} href={`#${subItem}`} className="block py-0.5 hover:text-black">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>

            <a href="#create-your-own-hamper" className="block py-2 hover:text-black">
              Create Your Own Hamper
            </a>

            {/* Mobile Corporate Gifts */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                <span>Corporate Gifts</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-2 space-y-1.5 text-sm text-gray-600">
                {standardDropdowns.corporateGifts.items.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="block py-1 hover:text-black">
                    {item}
                  </a>
                ))}
              </div>
            </details>

            <a href="#home-decor" className="block py-2 hover:text-black">
              Home Decor
            </a>

            {/* Mobile More Gifts */}
            <details className="group">
              <summary className="flex items-center justify-between py-2 cursor-pointer list-none">
                <span>More Gifts</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pb-2 space-y-1.5 text-sm text-gray-600">
                {standardDropdowns.moreGifts.items.map((item, idx) => (
                  <a key={idx} href={`#${item}`} className="block py-1 hover:text-black">
                    {item}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
