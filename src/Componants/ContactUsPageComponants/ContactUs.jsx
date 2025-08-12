import React from "react";
import img from "../../assets/wed5.avif";
import Banner from "../Banner";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      <Banner img={img} title="Contact US" />

      <div className="m-5 md:m-20  text-gray-500">
      <h1 className="text-5xl md:text-6xl  text-center text-[#EC9A96] font-edu mb-5 md:mb-20"> Our locations        </h1>
        <p className="text-3xl  font-semibold mb-5">We are based in Delhi and Rishikesh in India. Mumbai</p>
        <div className=" gap-10 my-10 ">
            <div className="my-5">
        <p className="text-3xl uppercase font-sans " > Delhi</p>
        <p className="text-lg font-semibold">
          3rd floor, Duru House, Juhu Tara Rd, next to Jw Marriott, Nazir Wadi,
          Theosophical Housing Colony, Juhu, Mumbai, Maharashtra 400049 
        </p>
        </div>
        <div className="my-5">
        <p className="text-3xl uppercase font-sans " >Gurgaon</p>
        <p className="text-lg font-semibold">
          3rd floor, Duru House, Juhu Tara Rd, next to Jw Marriott, Nazir Wadi,
          Theosophical Housing Colony, Juhu, Mumbai, Maharashtra 400049 
        </p>
        </div>
        </div>
<div className="text-xl font-semibold font-sans">
        <p>Phone: 9999999999</p>

        <p>Email: contact@photowaale.com</p>
      </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
