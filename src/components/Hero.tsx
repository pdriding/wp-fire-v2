import React from "react";
import hero1 from "../assets/images/fire-alarm-landing-1.jpg";

const HeroSlider: React.FC = () => {
  return (
    <section className="section-1">
      {" "}
      <div className="slideshow-container relative mx-auto max-h-[85vh]">
        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides animate-fade">
          <div
            className="landing-image bg-cover h-[90vh] bg-[position:center_40%] flex flex-col justify-center items-start text-black text-left w-screen"
            style={{
              backgroundImage: `url(${hero1})`,
            }}
          ></div>
        </div>

        {/* <div className="mySlides fade">
          <div
            className="landing-image"
            style={{
              backgroundImage: "url('assets/images/fire-alarm-landing-2.jpg')",
            }}
          ></div>
        </div>

        <div className="mySlides fade">
          <div
            className="landing-image"
            style={{
              backgroundImage: "url('assets/images/fire-alarm-landing-3.jpg')",
            }}
          ></div>
        </div> */}

        {/* <!-- Next and previous buttons --> */}
        {/* <a className="prev cursor-pointer absolute top-1/2 -mt-[11px] px-2 text-white font-bold text-[9px] transition ease-in-out duration-700 select-none rounded-r hover:bg-black/80">
          &#10094;
        </a>
        <a className="next cursor-pointer absolute top-1/2 -mt-[11px] px-2 text-white font-bold text-[9px] transition ease-in-out duration-700 select-none right-0 rounded-l hover:bg-black/80">
          &#10095;
        </a> */}
      </div>
      <br />
      {/* <!-- The dots/circles --> */}
      {/* <div className="text-center">
        <span className="dot relative cursor-pointer h-[6px] w-[6px] mx-[2.5px] bg-transparent border-2 border-[#bbb] rounded-full inline-block transition-all duration-300 ease-in z-[2] -top-6 hover:bg-[#717171] hover:border-[#717171]"></span>
        <span className="dot relative cursor-pointer h-[6px] w-[6px] mx-[2.5px] bg-transparent border-2 border-[#bbb] rounded-full inline-block transition-all duration-300 ease-in z-[2] -top-6 hover:bg-[#717171] hover:border-[#717171]"></span>
        <span className="dot relative cursor-pointer h-[6px] w-[6px] mx-[2.5px] bg-transparent border-2 border-[#bbb] rounded-full inline-block transition-all duration-300 ease-in z-[2] -top-6 hover:bg-[#717171] hover:border-[#717171]"></span>
      </div> */}
      {/* Text */}
      <div className="section-1-text absolute top-1/2 left-[15%] -translate-y-1/2 z-10">
        <h1 className="primary-title font-roboto text-[2rem] font-semibold text-white mb-[2.5px] bg-[rgba(25,25,25,0.5)] p-[22px] rounded-[2.5px]">
          Your Fire Alarm Installation Solutions
        </h1>

        <h2 className="get-quote font-roboto text-[1rem] font-semibold text-white bg-[#e53935] px-[30px] py-[17px] rounded-[2.5px] inline-block cursor-pointer no-underline transition-colors duration-300 mt-[7.5px] hover:bg-[#c62828]">
          Get a Quote Now
        </h2>
      </div>
    </section>
  );
};

export default HeroSlider;
