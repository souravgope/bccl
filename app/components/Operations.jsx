import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../language-context";

const BusinessOperations = () => {
  // Sample icons - replace with your actual image paths or imported icons
  const { language } = useContext(LanguageContext);
  const operations = [
    {
      title: { en: "BUSINESS", hi: "व्यवसाय" },
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
      color: "blue",
    },
    {
      title: { en: "Human Resource", hi: "मानव संसाधन" },
      icon: "https://st4.depositphotos.com/11956860/28788/v/450/depositphotos_287889946-stock-illustration-illustration-icon-concept-human-resource.jpg",
      color: "green",
    },
    {
      title: { en: "OPERATIONS", hi: "संचालन" },
      icon: "https://t3.ftcdn.net/jpg/05/49/16/00/360_F_549160004_7XcA69JKnnEo5f4BlgLhmkWs53CqpOi6.jpg",
      color: "purple",
    },
    {
      title: { en: "PROJECT", hi: "परियोजना" },
      icon: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
      color: "green",
    },
    {
      title: { en: "FINANCE", hi: "वित्त" },
      icon: "https://icon-library.com/images/finance-icon/finance-icon-15.jpg",
      color: "purple",
    },
    {
      title: { en: "VIGILANCE", hi: "सतर्कता" },
      icon: "https://cdn-icons-png.flaticon.com/512/16318/16318613.png",
      color: "purple",
    },
  ];

  const getBorderColor = (color) => {
    switch (color) {
      case "blue":
        return "border-blue-500";
      case "green":
        return "border-green-500";
      case "purple":
        return "border-purple-500";
      default:
        return "border-gray-500";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
        {language === "hi" ? "व्यावसायिक संचालन" : "BUSINESS OPERATIONS"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {operations.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${getBorderColor(
              item.color
            )} flex items-center space-x-4`}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                {item.title[language]}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOperations;
