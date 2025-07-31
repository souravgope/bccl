import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../language-context";
import {
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-326-2296211</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@bcclweb.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded transition-colors focus:outline-none ${
                language === "hi"
                  ? "bg-white text-blue-900 font-bold"
                  : "hover:bg-white hover:text-blue-900"
              }`}
              aria-pressed={language === "hi"}
            >
              हिंदी
            </button>
            <span>|</span>
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded transition-colors focus:outline-none ${
                language === "en"
                  ? "bg-white text-blue-900 font-bold"
                  : "hover:bg-white hover:text-blue-900"
              }`}
              aria-pressed={language === "en"}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto px-4 py-4"
        >
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src="https://www.bcclweb.in/files/2025/06/BCCL_LOGO-1.jpeg"
                alt="BCCL Logo"
                className="h-20 w-36"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  BHARAT COKING COAL LIMITED
                </h1>
                <p className="text-gray-600">A Coal India Limited Subsidiary</p>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/49/Coal_India_Logo.svg"
                alt="CIL Logo"
                className="h-20 w-20"
              />
              <img
                src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg"
                alt="Government of India"
                className="h-20 w-20"
              />
            </motion.div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>
      </header>
    </div>
  );
};
export default Header;
