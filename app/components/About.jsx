import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../language-context";

const AboutSection = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* About Us Section */}
      <section>
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
          {language === "hi" ? "हमारे बारे में" : "ABOUT US"}
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2022/09/27232020/Samiran-Dutta_Bharat-Coking-Coal.png"
            alt=""
            className="h-80 w-80 rounded-3xl object-cover"
          />
          <div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md mb-4"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {language === "hi" ? "श्री समीरन दत्ता" : "Sri Samiran Dutta"}
              </h3>
              <p className="text-gray-600">
                {language === "hi"
                  ? "अध्यक्ष सह प्रबंध निदेशक"
                  : "Chairman cum Managing Director"}
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md mb-8"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {language === "hi"
                  ? "भारत कोकिंग कोल लिमिटेड, धनबाद में आपका स्वागत है"
                  : "Welcome To Bharat Coking Coal Limited, Dhanbad"}
              </h2>
              <p className="text-gray-600 mb-4">
                {language === "hi"
                  ? "बीसीसीएल की स्थापना जनवरी 1972 में झरिया और रानीगंज कोलफील्ड्स में कोकिंग कोल खदानों के संचालन के लिए की गई थी, जिन्हें भारत सरकार ने 16 अक्टूबर 1971 को अधिग्रहित किया था ताकि देश में दुर्लभ कोकिंग कोल संसाधनों का योजनाबद्ध विकास सुनिश्चित किया जा सके। यह एक सार्वजनिक क्षेत्र का उपक्रम है जो कोयला खनन और संबद्ध गतिविधियों में संलग्न है। इसका देश में उत्पादित अधिकांश कोकिंग कोल के उत्पादन में महत्वपूर्ण स्थान है।"
                  : "BCCL was incorporated in January, 1972 to operate coking coal mines operating in the Jharia & Raniganj Coalfields, taken over by the Govt. of India on 16th Oct,1971 to ensure planned development of the scarce coking coal resources in the country.It is a Public Sector Undertaking engaged in mining of coal and allied activities. It occupies an important place in as much as it produces bulk of the coking coal mined in the country."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-16">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2">
          {language === "hi" ? "हमारा मिशन और विजन" : "OUR MISSION & VISION"}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {language === "hi" ? "मिशन" : "Mission"}
            </h2>
            <p className="text-gray-600">
              {language === "hi"
                ? "कोयला और कोयला उत्पादों की नियोजित मात्रा का उत्पादन और विपणन कुशलतापूर्वक और आर्थिक रूप से पर्यावरण के अनुकूल तरीके से करना, जिसमें सुरक्षा, संरक्षण और गुणवत्ता का पूरा ध्यान रखा जाए।"
                : "To produce and market the planned quantity of coal and coal products efficiently and economically in an eco-friendly manner with due regard to safety, conservation and quality."}
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {language === "hi" ? "विजन" : "Vision"}
            </h2>
            <p className="text-gray-600">
              {language === "hi"
                ? "प्राथमिक ऊर्जा क्षेत्र में एक वैश्विक खिलाड़ी के रूप में उभरना, देश को ऊर्जा सुरक्षा प्रदान करने के लिए खान से बाजार तक सर्वोत्तम प्रथाओं के माध्यम से पर्यावरणीय और सामाजिक रूप से सतत विकास प्राप्त करने के लिए प्रतिबद्ध।"
                : "To emerge as a global player in the primary energy sector committed to provide energy security to the country by attaining environmentally & socially sustainable growth through best practices from mine to market."}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
