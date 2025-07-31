import { Mail, MapPin, Phone } from "lucide-react";
import React, { useContext } from "react";
import { LanguageContext } from "../language-context";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "hi" ? "संपर्क जानकारी" : "Contact Info"}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {language === "hi"
                    ? "कोयला भवन, कोयला नगर, धनबाद - 826005"
                    : "Koyla Bhavan, Koyla Nagar, Dhanbad - 826005"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-326-2296211</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bcclweb.in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "बीसीसीएल के बारे में" : "About BCCL"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "करियर" : "Career"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "निविदाएं" : "Tenders"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "सीएसआर" : "CSR"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "hi" ? "सेवाएं" : "Services"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "कोयला खनन" : "Coal Mining"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "कोयला बिक्री" : "Coal Sales"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "कर्मचारी सेवाएं" : "Employee Services"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "सार्वजनिक सेवाएं" : "Public Services"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "hi" ? "संबंधित लिंक" : "Related Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi"
                    ? "कोल इंडिया लिमिटेड"
                    : "Coal India Limited"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "कोयला मंत्रालय" : "Ministry of Coal"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "भारत सरकार" : "Government of India"}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  {language === "hi" ? "कोयला नियंत्रक" : "Coal Controller"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            {language === "hi"
              ? "कॉपीराइट © बीसीसीएल 2025. सर्वाधिकार सुरक्षित। | साइट डिज़ाइन और विकास: सिस्टम विभाग, बीसीसीएल"
              : "Copyright © BCCL 2025. All Rights Reserved. | Site Designed & Developed by System Department, BCCL."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
