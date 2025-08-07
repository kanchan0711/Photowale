import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use heroicons if preferred

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="md:absolute  z-50 top-0 h-20 w-full  text-black md:text-white  font-bold flex justify-between items-center px-10">

    <div
  className={`fixed z-50 top-0 w-full font-bold flex justify-between items-center px-10 h-20 transition-all duration-300 ${
    scrolled
      ? "bg-[#f1f1f1]"
      : "bg-transparent md:text-white text-black h-20"
  }`}
>

      <div className={`${scrolled ? "text-white" : ""}`}>Photowale</div>
      <div className="hidden md:block">
        <ul className="flex gap-14 text-lg">
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ">
            Home
          </li>
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Portfolio
          </li>
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Our Services
          </li>
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] px-10 left-0 w-full bg-white  text-gray-500 overflow-hidden transition-all duration-600 md:hidden z-10 ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className=" space-y-4 h-[250px] flex flex-col justify-between py-5">
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Home
          </li>
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Services
          </li>
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Gallery
          </li>
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
