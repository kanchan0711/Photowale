import React, { useState, useRef } from "react";
import img from "../../assets/Gal3.jpg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const formRef = useRef(null);

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const servicesList = [
    "Candid wedding photography",
    "Candid cinematography",
    "Pre wedding shoot/Couple shoot",
    "Photo books and albums",
  ];

  const validateForm = () => {
    const form = formRef.current;
    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const phone = form.phone_number.value.trim();
    const city = form.city.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      toast.error("Please enter your name");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return false;
    }
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service");
      return false;
    }
    if (!city) {
      toast.error("Please enter your city");
      return false;
    }
    if (!message) {
      toast.error("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully! We will contact you soon.");
        formRef.current.reset();
        setSelectedServices([]);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="w-full lg:flex justify-between bg-[#f1f1f1]">
      <img
        src={img}
        alt="img"
        className="hidden lg:block w-full md:w-[40%] mt-10 md:mt-0 rounded object-cover"
      />

      <div className="w-full md:w-2/3 md:p-10 p-5 ">
        <h1 className="text-6xl text-center text-[#7D6C4E] font-edu mb-5">
          Contact Us
        </h1>

        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Hidden field for services */}
          <input type="hidden" name="services" value={selectedServices.join(", ")} />

          <div>
            <label htmlFor="name" className="block font-semibold text-sm">
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="mt-1 block w-full px-4 py-2 bg-white focus:outline-none"
            />
          </div>

          <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between w-full ">
            <div>
              <label htmlFor="emailId" className="block text-sm font-semibold ">
                Your Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailId"
                name="reply_to"
                className="mt-1 block w-full md:min-w-[320px] px-4 py-2 bg-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold">
                Your Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phone_number"
                className="mt-1 block w-full md:min-w-[320px] px-4 py-2 bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4">
              Services you are interested in <span className="text-red-500">*</span>
            </p>

            <div className="grid grid-cols-2 space-y-4">
              {servicesList.map((service, index) => (
                <label key={index} className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    value={service}
                    checked={selectedServices.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="mt-1 w-4 h-4 accent-white bg-white border-white rounded"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-semibold">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full px-4 py-2 bg-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-40 border-2 border-white p-2 text-gray-600 mt-1 hover:text-black"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUsForm;
