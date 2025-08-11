import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use heroicons if preferred
import { Link } from "react-router";

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
    <>
    <div
  className={` hidden fixed z-50 top-0 w-full font-bold md:flex justify-between items-center px-10 h-20 transition-all duration-300 ${
    scrolled
      ? "bg-[#f1f1f1] shadow-black opacity-70"
      : "bg-transparent md:text-white text-black h-20"
  }`}
>

      <div className={`${scrolled ? "text-white " : ""} hidden md:block`}>Photowale</div>
      <div className="hidden md:block">
        <ul className="flex gap-14 text-xl">
        <Link to="/">

          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ">
            Home
          </li>
          </Link>
          <Link to="/prewedding">
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Pre Wedding Shoot
          </li>
          </Link>
          <Link to="/portfolio">
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Portfolio
          </li>
          </Link >
          <Link to="/contact">
          <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Contact Us
          </li>
          </Link>
        </ul>
      </div>
      </div>


      {/* Mobile Menu Button */}
      <div className={`md:hidden  fixed z-50 top-0   w-full bg-[#f1f1f1] shadow-black opacity-90 font-bold flex justify-between items-center px-10 h-20 transition-all duration-300 `}>
      <div className={`${scrolled ? "text-white " : ""}`}>Photowale</div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`absolute top-[0px] px-10 left-0 w-full bg-[#f1f1f1] shadow-black opacity-70  text-black overflow-hidden transition-all duration-600 md:hidden z-10
           ${
          open ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="text-black space-y-4 h-[250px] flex flex-col justify-between py-5">
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
            Pre Wedding Shoot
          </li>
          <Link to="/portfolio">
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </li>
          </Link>
          
          <Link to="/contact">
          <li
            className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setOpen(false)}
          >
            Contact
          </li>
          </Link>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
