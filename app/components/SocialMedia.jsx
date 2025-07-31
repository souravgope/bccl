import React, { useContext } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { LanguageContext } from "../language-context";

const SocialMediaSection = () => {
  //   const videoUrl =
  //     "https://www.bcclweb.in/files/2024/06/enviroment_day2024.mp4";
  const { language } = useContext(LanguageContext);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Social Media Links - Takes 1/3 width on desktop */}
      <div className="w-full space-y-6 grid grid-cols-2 gap-4">
        {/* Facebook Box */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 shadow-sm h-full">
          <div className="flex items-center text-blue-600 mb-3">
            <FaFacebook className="mr-2" size={24} />
            <span className="font-semibold">
              {language === "hi" ? "फेसबुक" : "Facebook"}
            </span>
          </div>
          <p className="text-gray-600 mb-3">
            {language === "hi"
              ? "अपडेट्स के लिए फेसबुक पर हमें फॉलो करें"
              : "Follow us on Facebook for updates"}
          </p>
          <a
            href="https://www.facebook.com/BCCLofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm"
          >
            {language === "hi" ? "पेज देखें" : "Visit Page"}
          </a>
        </div>

        {/* Twitter Box */}
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 shadow-sm h-full">
          <div className="flex items-center text-blue-400 mb-3">
            <FaTwitter className="mr-2" size={24} />
            <span className="font-semibold">
              {language === "hi" ? "ट्विटर" : "Twitter"}
            </span>
          </div>
          <p className="text-gray-600 mb-3">
            {language === "hi"
              ? "ट्विटर पर नवीनतम अपडेट्स"
              : "Latest updates on Twitter"}
          </p>
          <a
            href="https://twitter.com/BCCLofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors text-sm"
          >
            {language === "hi" ? "हमें फॉलो करें" : "Follow Us"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
