import React, { useState, useEffect, useContext } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LanguageContext } from "../language-context";

const EventsSection = () => {
  const { language } = useContext(LanguageContext);
  // Sample events data with multiple images each
  const events = [
    {
      id: 1,
      title: {
        en: "Annual Coal Conference 2023",
        hi: "वार्षिक कोयला सम्मेलन 2023",
      },
      description: {
        en: "Industry leaders gathering to discuss coal mining innovations",
        hi: "कोयला खनन नवाचारों पर चर्चा के लिए उद्योग के नेताओं का सम्मेलन",
      },
      images: [
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.56-AM.jpeg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.52-AM.jpeg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.54-AM.jpeg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.52-AM-1.jpeg",
      ],
      date: { en: "15-17 March 2023", hi: "15-17 मार्च 2023" },
    },
    {
      id: 2,
      title: {
        en: "Safety Training Workshop",
        hi: "सुरक्षा प्रशिक्षण कार्यशाला",
      },
      description: {
        en: "Employee safety training sessions conducted across all sites",
        hi: "सभी साइटों पर कर्मचारी सुरक्षा प्रशिक्षण सत्र आयोजित किए गए",
      },
      images: [
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.45-AM-1.jpeg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.44-AM-1.jpeg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.28.45-AM.jpeg",
      ],
      date: { en: "5-8 June 2023", hi: "5-8 जून 2023" },
    },
    {
      id: 3,
      title: {
        en: "Community Outreach Program",
        hi: "सामुदायिक आउटरीच कार्यक्रम",
      },
      description: {
        en: "Initiatives for local community development near mining areas",
        hi: "खनन क्षेत्रों के पास स्थानीय समुदाय के विकास के लिए पहल",
      },
      images: [
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.29.05-AM.jpeg",
        "https://www.bcclweb.in/files/2025/06/Mastring-2.jpg",
        "https://www.bcclweb.in/files/2025/06/WhatsApp-Image-2025-06-03-at-11.29.06-AM.jpeg",
      ],
      date: { en: "10-12 September 2023", hi: "10-12 सितंबर 2023" },
    },
  ];

  // State to track current image index for each event
  const [currentImageIndices, setCurrentImageIndices] = useState(
    events.reduce((acc, event) => {
      acc[event.id] = 0;
      return acc;
    }, {})
  );

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        events.forEach((event) => {
          newIndices[event.id] =
            (prevIndices[event.id] + 1) % event.images.length;
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation functions
  const goToNextImage = (eventId, totalImages) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [eventId]: (prev[eventId] + 1) % totalImages,
    }));
  };

  const goToPrevImage = (eventId, totalImages) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [eventId]: (prev[eventId] - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        {language === "hi" ? "हमारे कार्यक्रम" : "OUR EVENTS"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Carousel */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              {event.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentImageIndices[event.id]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={() => goToPrevImage(event.id, event.images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={() => goToNextImage(event.id, event.images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition"
              >
                <FiChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {event.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentImageIndices((prev) => ({
                        ...prev,
                        [event.id]: index,
                      }))
                    }
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndices[event.id]
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title[language]}
              </h3>
              <p className="text-gray-600 mb-3">
                {event.description[language]}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.date[language]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
