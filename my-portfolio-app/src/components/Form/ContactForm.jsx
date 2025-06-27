import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import Arrow from "../Icons/Arrow";
const ContactForm = () => {
  return (
    <div className="text-white py-8 px-16 bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147]">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">CONTACT ME</h2>

      <form className="space-y-6">
        {/* Name & Email on same row */}
        <div className="flex gap-4">
          {/* Name */}
          <div className="w-1/2">
            <label htmlFor="name" className="block mb-1">
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="text-sm bg-transparent w-full border-b border-white px-2 py-2 focus:outline-none focus:ring-0 focus:border-white"
            />
          </div>

          {/* Email */}
          <div className="w-1/2">
            <label htmlFor="email" className="block mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="text-sm bg-transparent w-full border-b border-white px-2 py-2 focus:outline-none focus:ring-0 focus:border-white"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1">
            MESSAGE
          </label>
          <textarea
            id="message"
            rows="2"
            className="text-sm bg-transparent w-full border-b border-white px-2 py-2 resize-none focus:outline-none focus:ring-0 focus:border-white"
          ></textarea>
        </div>

        {/* Attach file */}
        <div>
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="flex items-center mb-1 cursor-pointer"
          >
            <AiOutlinePaperClip />
            ATTACH FILE
          </label>
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-black flex items-center gap-2"
          >
            Send Message <Arrow />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
