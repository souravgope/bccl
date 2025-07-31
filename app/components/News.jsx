import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../language-context";

const News = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {language === "hi"
            ? "नवीनतम समाचार और अपडेट्स"
            : "Latest News & Updates"}
        </h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="space-y-4">
            <motion.div
              className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                {language === "hi" ? "नया" : "NEW"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {language === "hi"
                    ? "पॉलीटेक्निक प्रवेश 2025-26"
                    : "Polytechnic Admission 2025-26"}
                </h3>
                <p className="text-gray-600">
                  {language === "hi"
                    ? "पॉलीटेक्निक, भागा बीसीसीएल कर्मचारियों के पुत्र/पुत्रियों के लिए सत्र 2025-26 हेतु"
                    : "Polytechnic, Bhaga for sons/daughters of BCCL Employees for the session 2025-26"}
                </p>
                <span className="text-sm text-gray-500">
                  {language === "hi" ? "जनवरी 2025" : "January 2025"}
                </span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                {language === "hi" ? "सीएसआर" : "CSR"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {language === "hi"
                    ? "मेडिकल कैंप पहल"
                    : "Medical Camps Initiative"}
                </h3>
                <p className="text-gray-600">
                  {language === "hi"
                    ? "सीएसआर एफवाई 2024-25 के तहत मोबाइल मेडिकल वैन (एमएमवी) के माध्यम से क्षेत्रों और मुख्यालय में मेडिकल कैंप्स"
                    : "Medical Camps across Areas & HQ through Mobile Medical Vans (MMV) on a Hiring Basis under CSR FY 2024-25"}
                </p>
                <span className="text-sm text-gray-500">
                  {language === "hi" ? "दिसंबर 2024" : "December 2024"}
                </span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                {language === "hi" ? "निविदा" : "TENDER"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {language === "hi"
                    ? "तकनीकी सहायता कार्यक्रम"
                    : "Technical Assistance Programme"}
                </h3>
                <p className="text-gray-600">
                  {language === "hi"
                    ? "बीसीसीएल में क्लस्टर वैल्यू-चेन आधारित आर्थिक आजीविका कार्यक्रम के कार्यान्वयन हेतु तकनीकी सहायता प्रदान करने के लिए एक एजेंसी की नियुक्ति"
                    : "Engagement of an Agency to provide Technical Assistance towards implementation of a Cluster Value-Chain based Economic Livelihood Programme in BCCL"}
                </p>
                <span className="text-sm text-gray-500">
                  {language === "hi" ? "जनवरी 2025" : "January 2025"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
