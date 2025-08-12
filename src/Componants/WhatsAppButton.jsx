// WhatsAppButton.jsx
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "7878323798"; // Your WhatsApp number
  const defaultMessage = "Hello! I would like to know more about your services."; // Your default message
  const encodedMessage = encodeURIComponent(defaultMessage);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center z-50 bottom-5 left-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="font-sans text-white font-semibold mx-2">WhatsApp Us</span>
    </a>
  );
}
