import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import Arrow from "../Icons/Arrow";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [sendCount, setSendCount] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef();
  const [isCaptchaRequired, setIsCaptchaRequired] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) setCaptchaVerified(true);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (sendCount >= 3 && !isCaptchaRequired) {
      setIsCaptchaRequired(true);
      return;
    }
    if (sendCount >= 3 && !captchaVerified) {
      alert("Please verify reCAPTCHA before sending.");
      return;
    }

    emailjs
      .sendForm(
        "service_zvhezjq", // SERVICE_ID
        "template_i2nzocm", // TEMPLATE_ID
        form.current,
        "g2I9oqDau9Fx1e5dj" // Public key từ EmailJS
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Email failed to send.");
          console.log(error.text);
        }
      );

    setSendCount((prev) => prev + 1);
    setCaptchaVerified(false);
    if (recaptchaRef.current) recaptchaRef.current.reset();
  };

  return (
    <div className="text-white py-8 px-16 bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147]">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">CONTACT ME</h2>

      <form
        ref={form}
        className="space-y-6 text-xs  md:text-sm"
        onSubmit={sendEmail}
      >
        {/* Name & Email on same row */}
        <div className="flex flex-col md:flex-row  gap-4">
          {/* Name */}
          <div className="md:w-1/2">
            <label htmlFor="name" className="block mb-1 font-medium">
              NAME
            </label>
            <input
              name="user_name"
              type="text"
              id="name"
              placeholder="Your name"
              className="text-sm bg-transparent w-full border-b border-white px-2 py-2 focus:outline-none focus:ring-0 focus:border-white"
            />
          </div>

          {/* Email */}
          <div className="md:w-1/2">
            <label htmlFor="email" className="block mb-1 font-medium">
              EMAIL
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              placeholder="you@example.com"
              className="text-sm bg-transparent w-full border-b border-white px-2 py-2 focus:outline-none focus:ring-0 focus:border-white"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            MESSAGE
          </label>
          <textarea
            name="message"
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
        {isCaptchaRequired && (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfDO28rAAAAAKc8-ga13eQqWRTl5kaUW9iTTs_g" // YOUR_SITE_KEY_HERE
            onChange={handleCaptchaChange}
          />
        )}
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
