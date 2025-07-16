const Navbar = () =>{
    return(
        <div className="absolute z-50 top-0 h-20 w-full text-white font-bold flex justify-between items-center px-5">
            <div>LOGO</div>
            <div>
                <ul className="flex gap-14 text-lg">
                <li className="cursor-pointer relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
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
            
        </div>
    )

}

export default Navbar