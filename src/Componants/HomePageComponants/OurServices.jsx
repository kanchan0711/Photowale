import React from "react";

export default function OurServices() {
  const services = [
    {
      title: "PHOTOGRAPHY",
      description:
        "Candid photography (focusing on natural candid shots of the bride-groom and main family) & traditional photography (coverage of the entire event).",
    },
    {
      title: "VIDEOGRAPHY",
      description:
        "Cinematography (artistic style videography with focus on the bride-groom and main family and their priceless candid moments) & traditional videography (coverage of the entire event).",
    },
    {
      title: "PHOTOBOOKS & ALBUMS",
      description:
        "Handcrafted custom designed wedding photo books and albums to cater to every taste and preference.",
    },
    {
      title: "POST-PRODUCTION",
      description:
        "Editing services in cinematic teaser and short film & traditional video.",
    },
  ];

  return (
    <div className="py-28 size-full bg-[#f1f1f1]">
      <h1 className="text-6xl md:text-8xl text-center text-[#7D6C4E] font-edu mb-10">
        Our Services
      </h1>

      <div className="h-full mx-5 md:mx-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white py-20 px-6 w-full h-[400px]"
          >
            <h3 className="text-2xl font-sans font-extrabold text-gray-500 mb-2 relative">
              {service.title}
              <span className="block text-start w-8 h-[1px] bg-gray-400 mt-2 mb-10"></span>
            </h3>
            <p className="text-gray-600 text-lg leading-snug my-5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
