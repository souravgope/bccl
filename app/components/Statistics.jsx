import { Award, Briefcase, Target, Users } from "lucide-react";
import React, { useContext } from "react";
import { LanguageContext } from "../language-context";

const Statistics = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {language === "hi" ? "हमारा प्रभाव" : "Our Impact"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">36</h3>
            <p className="text-gray-600">
              {language === "hi" ? "सक्रिय कोयला खदानें" : "Active Coal Mines"}
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">50%</h3>
            <p className="text-gray-600">
              {language === "hi"
                ? "भारत की कोकिंग कोल आपूर्ति"
                : "India's Coking Coal Supply"}
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">50K+</h3>
            <p className="text-gray-600">
              {language === "hi" ? "कर्मचारी" : "Employees"}
            </p>
          </div>

          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">1972</h3>
            <p className="text-gray-600">
              {language === "hi" ? "स्थापना वर्ष" : "Year Established"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
