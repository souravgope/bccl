import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../language-context";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:p-10"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {language === "hi"
                  ? "भारत के इस्पात उद्योग को शक्ति प्रदान करना"
                  : "Powering India's Steel Industry"}
              </motion.h2>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
              >
                {language === "hi"
                  ? "बीसीसीएल भारत का प्रमुख कोकिंग कोल उत्पादक है, जो देश की इस्पात क्षेत्र की प्रमुख कोकिंग कोल आवश्यकता का 50% योगदान देता है।"
                  : `BCCL is India's premier coking coal producer, contributing 50% of the nation's prime coking coal requirement for the steel sector.`}
              </motion.p>
              <motion.button
                className=" cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                {language === "hi"
                  ? "हमारे संचालन देखें"
                  : "Explore Our Operations"}
              </motion.button>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src="https://swarajya.gumlet.io/swarajya/2022-04/9de1477c-6683-4d8e-a4aa-f72ef5c621fd/China_Coal_Shortage_1.png?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
                alt="Coal Mining Operations"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
