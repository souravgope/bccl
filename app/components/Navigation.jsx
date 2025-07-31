import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LanguageContext } from "../language-context";

const navLinks = [
  {
    label: { en: "Home", hi: "होम" },
    href: "#",
  },
  {
    label: { en: "Company", hi: "कंपनी" },
    sublinks: [
      { label: { en: "About BCCL", hi: "बीसीसीएल के बारे में" }, href: "#" },
      { label: { en: "Board of Directors", hi: "निदेशक मंडल" }, href: "#" },
      { label: { en: "Our Ex-CMDs", hi: "हमारे पूर्व सीएमडी" }, href: "#" },
      { label: { en: "How to Reach Us", hi: "हमसे कैसे पहुंचे" }, href: "#" },
      { label: { en: "Organization Chart", hi: "संगठन चार्ट" }, href: "#" },
      { label: { en: "BCCL Departments", hi: "बीसीसीएल विभाग" }, href: "#" },
      { label: { en: "Area", hi: "क्षेत्र" }, href: "#" },
      { label: { en: "Washery", hi: "वॉशरी" }, href: "#" },
      {
        label: { en: "Delegation of Power", hi: "शक्ति का प्रत्यायोजन" },
        href: "#",
      },
      {
        label: { en: "Physical Performance", hi: "भौतिक प्रदर्शन" },
        href: "#",
      },
      { label: { en: "Annual Report", hi: "वार्षिक रिपोर्ट" }, href: "#" },
      { label: { en: "Coal Reserve", hi: "कोयला भंडार" }, href: "#" },
    ],
  },
  {
    label: { en: "Vigilance", hi: "सतर्कता" },
    sublinks: [
      { label: { en: "CHETNA-2024", hi: "चेतना-2024" }, href: "#" },
      { label: { en: "Lodge a Complaint", hi: "शिकायत दर्ज करें" }, href: "#" },
      {
        label: { en: "Compendium of Circulars", hi: "परिपत्रों का संकलन" },
        href: "#",
      },
      { label: { en: "Vigilance Manual", hi: "सतर्कता मैनुअल" }, href: "#" },
      {
        label: { en: "VIGILANCE-An Overview", hi: "सतर्कता - एक अवलोकन" },
        href: "#",
      },
      {
        label: {
          en: "Integrity Pact Programme",
          hi: "ईमानदारी संधि कार्यक्रम",
        },
        href: "#",
      },
      {
        label: {
          en: "Vigilance Awareness Week",
          hi: "सतर्कता जागरूकता सप्ताह",
        },
        href: "#",
      },
      { label: { en: "CVO Profile", hi: "सीवीओ प्रोफाइल" }, href: "#" },
      {
        label: {
          en: "Vigilance Executive Details",
          hi: "सतर्कता कार्यकारी विवरण",
        },
        href: "#",
      },
      { label: { en: "Useful Links", hi: "उपयोगी लिंक" }, href: "#" },
      {
        label: {
          en: "Tender Details for AT Complaince",
          hi: "एटी अनुपालन के लिए टेंडर विवरण",
        },
        href: "#",
      },
    ],
  },
  {
    label: { en: "Tenders", hi: "निविदाएं" },
    sublinks: [
      { label: { en: "Current Tender", hi: "वर्तमान निविदा" }, href: "#" },
      { label: { en: "General Notices", hi: "सामान्य सूचनाएं" }, href: "#" },
      { label: { en: "Finalised Tenders", hi: "अंतिम निविदाएं" }, href: "#" },
      {
        label: {
          en: "Finalised Orders of MM Department (HQ)",
          hi: "एमएम विभाग (मुख्यालय) के अंतिम आदेश",
        },
        href: "#",
      },
      {
        label: {
          en: "General Terms and Conditions",
          hi: "सामान्य नियम और शर्तें",
        },
        href: "#",
      },
      {
        label: { en: "Tenders at NIC Portal", hi: "एनआईसी पोर्टल पर निविदाएं" },
        href: "#",
      },
      { label: { en: "E-Tender", hi: "ई-निविदा" }, href: "#" },
      {
        label: {
          en: "Tender on e-procurement",
          hi: "ई-प्रोक्योरमेंट पर निविदा",
        },
        href: "#",
      },
      { label: { en: "Tender (Archives)", hi: "निविदा (पुरालेख)" }, href: "#" },
    ],
  },
  {
    label: { en: "Investor Relations", hi: "निवेशक संबंध" },
    href: "#",
  },
  {
    label: { en: "Info Bank", hi: "सूचना बैंक" },
    sublinks: [
      {
        label: {
          en: "Online Quarter Application",
          hi: "ऑनलाइन क्वार्टर आवेदन",
        },
        href: "#",
      },
      { label: { en: "Careers in BCCL", hi: "बीसीसीएल में करियर" }, href: "#" },
      { label: { en: "Notices", hi: "सूचनाएं" }, href: "#" },
      { label: { en: "Circulars", hi: "परिपत्र" }, href: "#" },
      { label: { en: "Policies", hi: "नीतियां" }, href: "#" },
      { label: { en: "Download Forms", hi: "फॉर्म डाउनलोड करें" }, href: "#" },
      { label: { en: "UTKARSH", hi: "उत्कर्ष" }, href: "#" },
      {
        label: {
          en: "News, Events & Media",
          hi: "समाचार, कार्यक्रम और मीडिया",
        },
        href: "#",
      },
    ],
  },
  {
    label: { en: "Contact Us", hi: "संपर्क करें" },
    href: "#",
  },
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((nav, idx) => {
              if (!nav.sublinks) {
                return (
                  <motion.a
                    key={nav.label.en}
                    href={nav.href}
                    className="py-4 px-2 hover:bg-blue-700 transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.4 }}
                  >
                    {nav.label[language]}
                  </motion.a>
                );
              }
              // Dropdown
              return (
                <motion.div
                  key={nav.label.en}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(nav.label.en)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                >
                  <button
                    className="py-4 px-2 hover:bg-blue-700 transition-colors flex items-center"
                    type="button"
                    tabIndex={0}
                  >
                    {nav.label[language]}{" "}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === nav.label.en && (
                      <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b-lg min-w-[220px] z-50 p-2"
                      >
                        {nav.sublinks.map((link, i) => (
                          <motion.a
                            key={link.label.en}
                            href={link.href}
                            className="block px-4 py-2 hover:bg-gray-100 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03, duration: 0.2 }}
                          >
                            {link.label[language]}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu (accordion style) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-800 text-white"
        >
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((nav, idx) =>
              !nav.sublinks ? (
                <motion.a
                  key={nav.label.en}
                  href={nav.href}
                  className="block py-2 hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                >
                  {nav.label[language]}
                </motion.a>
              ) : (
                <div key={nav.label.en}>
                  <button
                    className="w-full text-left font-semibold px-2 py-2 flex items-center justify-between focus:outline-none hover:bg-blue-700"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === nav.label.en
                          ? null
                          : nav.label.en
                      )
                    }
                  >
                    {nav.label[language]}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform ${
                        openMobileDropdown === nav.label.en ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileDropdown === nav.label.en && (
                      <motion.div
                        key="mobile-dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {nav.sublinks.map((link, i) => (
                          <motion.a
                            key={link.label.en}
                            href={link.href}
                            className="block py-1 px-2 hover:bg-blue-700 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03, duration: 0.15 }}
                          >
                            {link.label[language]}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
