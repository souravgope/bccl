import React, { useContext } from "react";
import { LanguageContext } from "../language-context";

const Links = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {language === "hi" ? "त्वरित लिंक" : "Quick Links"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              {language === "hi" ? "कर्मचारी पोर्टल" : "Employee Portal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  {language === "hi" ? "पेस्लिप लॉगिन" : "Payslip Login"}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  {language === "hi" ? "क्वार्टर आवेदन" : "Quarter Application"}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  {language === "hi" ? "कर्मचारी सेवाएं" : "Employee Services"}
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  {language === "hi" ? "फॉर्म डाउनलोड करें" : "Download Forms"}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-green-800">
              {language === "hi" ? "व्यवसाय" : "Business"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-600 hover:underline">
                  {language === "hi" ? "निविदा सूचनाएं" : "Tender Notices"}
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:underline">
                  {language === "hi" ? "कोयला बिक्री" : "Coal Sales"}
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:underline">
                  {language === "hi" ? "क्रय" : "Procurement"}
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:underline">
                  {language === "hi"
                    ? "विक्रेता पंजीकरण"
                    : "Vendor Registration"}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">
              {language === "hi" ? "सार्वजनिक जानकारी" : "Public Information"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-orange-600 hover:underline">
                  {language === "hi" ? "आरटीआई जानकारी" : "RTI Information"}
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-600 hover:underline">
                  {language === "hi" ? "वार्षिक रिपोर्ट" : "Annual Reports"}
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-600 hover:underline">
                  {language === "hi"
                    ? "सुरक्षा दिशानिर्देश"
                    : "Safety Guidelines"}
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-600 hover:underline">
                  {language === "hi" ? "पर्यावरण नीति" : "Environmental Policy"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
