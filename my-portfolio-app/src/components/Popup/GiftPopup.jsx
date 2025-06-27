// src/components/GiftPopup.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaTimes } from "react-icons/fa";
import CtaButton from "../Button/CtaButton";
const GiftPopup = ({
  isBottomOpen,
  isTopOpen,
  isGiftOpen,
  onClose,
  onSetModalOpen,
  topPopupPosition,
}) => {
  const POPUP_WIDTH = 450;
  const MARGIN = 16;
  // 2) Tính maxX
  const maxX = window.innerWidth - POPUP_WIDTH - MARGIN;
  // 3) Clamp giá trị con trỏ vào [MARGIN, maxX]
  //    + nếu mouse quá bên trái (< MARGIN) ⇒ đặt ở MARGIN
  //    + nếu mouse quá bên phải (> maxX) ⇒ đặt ở maxX
  //    + ngược lại ⇒ giữ nguyên mouse.x
  let offsetX = topPopupPosition.x;
  if (offsetX < MARGIN) {
    offsetX = MARGIN;
  } else if (offsetX > maxX) {
    offsetX = maxX;
  }

  const offsetY = topPopupPosition.y;

  console.log("topPopupPositon inside = ", topPopupPosition);
  return (
    <AnimatePresence>
      {isBottomOpen && !isTopOpen && !isGiftOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 bg-white p-4  w-84 flex items-start gap-3 shadow-lg border border-gray-200"
        >
          <div className="flex flex-col gap-2 justify-center text-sm text-black ">
            <div>
              <p> Thanks for visiting my portfolio!</p>
              <p>I have a gift for you!</p>
            </div>
            <div className="flex justify-center gap-2 text-sx ">
              <button
                onClick={() => {
                  onSetModalOpen(true);
                  onClose();
                }}
                className="bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] text-white px-2 flex items-center gap-2"
              >
                <FaGift className="text-white text-xl" />
                <span>Receive Gift</span>
              </button>
              <button onClick={onClose} className="bg-black text-white px-12">
                Maybe Later
              </button>
            </div>
          </div>

          <button onClick={onClose} className="ml-2 bg-black text-white p-2">
            <FaTimes />
          </button>
        </motion.div>
      )}
      {!isBottomOpen && isTopOpen && !isGiftOpen && (
        <motion.div
          initial={{
            opacity: 0,
            x: offsetX,
            y: offsetY,
          }}
          animate={{
            opacity: 1,
            x: offsetX,
            y: offsetY,
          }}
          exit={{
            opacity: 0,
            x: offsetX,
            y: offsetY,
          }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 z-50 bg-white p-4  w-84 flex items-start gap-3 shadow-lg border border-gray-200"
        >
          <div className="flex flex-col gap-2 justify-center text-sm text-black ">
            <div>
              <p> Thanks for visiting my portfolio!</p>
              <p>I have a gift for you!</p>
            </div>
            <div className="flex justify-center gap-2 text-sx ">
              <button
                onClick={() => {
                  onSetModalOpen(true);
                  onClose();
                }}
                className="bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] text-white px-2 flex items-center gap-2"
              >
                <FaGift className="text-white text-xl" />
                <span>Receive Gift</span>
              </button>
              <button onClick={onClose} className="bg-black text-white px-12">
                Maybe Later
              </button>
            </div>
          </div>

          <button onClick={onClose} className="ml-2 bg-black text-white p-2">
            <FaTimes />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiftPopup;
