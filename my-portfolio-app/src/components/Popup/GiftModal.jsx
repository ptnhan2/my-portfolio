// components/GiftModal.jsx
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaTimes } from "react-icons/fa";

const messages = {
  non: "",
  vi: "Chúc anh/chị và gia đình luôn mạnh khỏe, hạnh phúc và viên mãn trong công việc cũng như cuộc sống. Cảm ơn anh/chị đã ghé thăm portfolio của em — rất mong có cơ hội được kết nối và trao đổi thêm về khả năng đóng góp vào đội ngũ của anh/chị!",
  en: "Wishing you and your loved ones great health, happiness, and fulfillment both at work and at home. Thank you for visiting my portfolio — I’d be honored to connect and discuss how I could contribute to your team!",
};

const GiftModal = ({ isModalOpen, setIsGiftOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("non");
  const handleCloseModal = () => {
    setSelectedLanguage("non");
    onClose();
  };
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 60 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 60 }}
            transition={{ duration: 0.4 }}
            className="bg-white  shadow-2xl p-6 w-[90%] max-w-md relative rounded"
          >
            <h2 className="text-xl font-bold text-center mb-4">🎁 Your Gift</h2>
            <div
              className={`flex justify-center gap-2 text-sm ${
                selectedLanguage !== "non" && "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setSelectedLanguage("vi");
                  setIsGiftOpen(true);
                }}
                className="px-3 py-1 rounded bg-pink-500 text-white hover:bg-pink-600"
              >
                VN Tiếng Việt
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage("en");
                  setIsGiftOpen(true);
                }}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                US English
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className=" absolute top-3 right-3 bg-black text-white p-2 rounded"
            >
              <FaTimes />
            </button>
            <p className="text-center text-gray-700">
              {messages[selectedLanguage]}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiftModal;
