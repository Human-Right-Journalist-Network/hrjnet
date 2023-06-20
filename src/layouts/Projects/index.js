import React from "react";

const Projects = () => {
  return (
    <div className="w-[100%] h-[250vh] md:h-[150vh] lg:w-[1280px] lg:h-[711.64px] left-[0] right-[0] mx-auto mb-[40px] mt-[70px] select-none">
      {/* section title */}
      <div className="ml-[20px] w-[334px] h-[19px] flex  items-center justify-between my-[20px] lg:ml-[0px]">
        <div className="w-[72px] h-[0px] border-[2px] bg-[#1D2130]"></div>
        <h6 className="w-[238px] h-[19px] text-[16px] font-[700] leading-[19px] uppercase text-black">Projects we have done</h6>
      </div>
      <h2 className="text-[38px] ml-[60px] w-[66%] pt-[18px] h-[30vh] md:w-[80%] md:mt-[40px] lg:w-[640px] lg:h-[174px] lg:ml-[80px] font-[700] lg:text-[48px] leading-[120%] text-[#1D2130] ">We are Creating sustainable society, for everyone and forever.</h2>

      {/* flex box */}
      <div className="w-[80%] md:w-[90%] h-[190vh] mx-auto lg:w-[1280px] lg:h-[421px] mt-[40px] md:mt-[-100px] lg:left-[0] lg:right-[0] lg:mr-auto lg:ml-auto flex flex-col md:items-center lg:flex-row gap-[20px] md:gap-[35px]">
        <div className="w-[411px] h-[421px] bg-project1 rounded-[12px] flex items-center justify-center relative">
          <div className="w-[411px] h-[421px]  opacity-[0.5] bg-[#0B0706]  rounded-[12px] "></div>
          <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mx-auto">
            <h3 className="text-white leading-[150%] text-[20px] font-[700]">Mission 40K: Tree plantation</h3>
            <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="w-[132px] h-[51px] rounded-[4px] text-black bg-white cursor text-center">See more</button>
          </div>
        </div>
        <div className="w-[411px] h-[421] bg-project2  rounded-[12px]  flex items-center justify-center relative">
          {/* tint */}
          <div className="w-[411px]  h-[421px]  opacity-[0.5] bg-[#0B0706]  rounded-[12px] "></div>
          {/* content */}
          <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mr-auto ml-auto ">
            <h3 className="text-white leading-[150%] text-[20px] font-[700]">Weekly cleanliness program in city</h3>
            <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="w-[132px] h-[51px] rounded-[4px] bg-white text-black cursor text-center">See more</button>
          </div>
        </div>
        <div className="w-[411px] h-[421] bg-project3 rounded-[12px] flex items-center justify-center relative">
          {/* tint */}
          <div className="w-[411px] h-[421px]  opacity-[0.5] bg-[#0B0706]  rounded-[12px] "></div>
          {/* content */}
          <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mr-auto ml-auto">
            <h3 className="text-white leading-[150%] text-[20px] font-[700]">Wildlife safety program 2021</h3>
            <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <button className="w-[132px] h-[51px] rounded-[4px] text-black bg-[#FFFFFF] cursor text-center">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
