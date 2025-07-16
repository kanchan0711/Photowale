const HeroCard = ({ bg }) => {
    return (
      <div>
        <div
          className="relative bg-cover object-fill bg-center h-[60vh] md:min-h-screen w-full"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Optional Gradient Overlay */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10 "></div>
  
          {/* Text content visible only on lg+ screens */}
          <div className="hidden md:flex relative z-20 text-white w-[40%] px-5 h-full items-center justify-center">
            <div className="flex flex-col font-bold space-y-4 text-left mt-36">
              <p className="text-2xl uppercase">Consistently ranked amongst</p>
              <p className="text-4xl uppercase">The best wedding photographers in India since 2012.</p>
              <p>
                Captured over 1000 weddings worldwide. Based in Gurgaon and Mumbai in India,
                spreading happiness world over.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroCard;
  