import React from "react";

// imports
import Arrow from "../../assets/Arrow.png";

const Events = () => {
  return (
    <div className="w-[100%] sm:h-[80vh] md:h-[50vh] lg:w-[1280px] lg:h-[295px] mb-[40px] left-[0] right-[0] mx-auto">
      {/* section title */}
      <div className="w-[100%] lg:w-[1280px] h-[56px] flex flex-row items-center">
        <h6 className="pl-[15px] pr-[10px] lg:pl-[0] lg:pr[0] text-[26px] h-[40px] lg:w-[194px] lg:h-[56px] font-[500] leading-[140%] text-black lg:text-[35px] ">Our Events</h6>
        <div className="w-[60%]  h-[0px] lg:w-[1062px] h-[0px] rotate-[180deg] border-[1px] border-[#E5E5E5]"></div>
      </div>
      {/* events container */}
      <div className="w-full flex flex-col gap-[30px] mt-[30px] lg:w-[1280px] lg:flex-row lg: items-center lg:gap-[20px]  lg:mt-[20px]">
        <div className="w-[86%] md:w-[60%] mx-auto lg:w-[628px] h-[191px]  bg-[#BEF3C0] rounded-[8px]  flex items-center justify-center">
          <div className=" w-[100%] h-[90%] lg:w-[540px] lg:h-[119px] flex flex-row justify-center">
            <div className=" lg:w-[55px] lg:h-[77px] flex flex-col items-center mr-[20px]">
              <h6 className="text-[#1D2130] leading-[120%] font-[500] text-[29px] lg:text-[48px] w-[30px] h-[40px] lg:w-[55px] lg:h-[58px]">23</h6>
              <h6 className="uppercase">Sep</h6>
            </div>
            <div className="ml-[10px] ">
              <div className="w-[190px] h-[40px] flex flex-row items-center">
                <h6 className="uppercase text-[#1D2130] font-[500] text-[16px] leading-[19px] tracking-[2px] ">Next Events</h6>
                <div className=" w-[44px] h-[0px] border-[2px] border-[#1D2130] "></div>
              </div>
              <h3 className="w-[270px] lg:w-[381px] h-[84px] leading-[150%] font-[700] text-[28px] text-[#1D2130]">Say no to plastic usage and save the planet</h3>
            </div>
            <div className=" flex w-[100px] h-[120px] items-center">
              <div className="w-[56px] h-[56px] bg-[#FFFFFF] rounded-[100%] flex items-center justify-center cursor ml-[20px]">
                <img src={Arrow} />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[86%] md:w-[60%] mx-auto lg:w-[628px] h-[191px]  bg-[#BEF3C0] rounded-[8px] flex items-center justify-center ">
          <div className="w-[100%] h-[90%] lg:w-[540px] lg:h-[119px] flex flex-row justify-center">
            <div className="llg:w-[55px] lg:h-[77px] flex flex-col items-center mr-[20px]">
              <h6 className="text-[#1D2130] leading-[120%] font-[500] text-[29px] h-[40px] w-[30px] lg:text-[48px] lg:w-[55px] lg:h-[58px]">25</h6>
              <h6 className="uppercase">Sep</h6>
            </div>
            <div className=" ml-[10px]">
              <div className="w-[190px] h-[40px] flex flex-row items-center">
                <h6 className="uppercase text-[#1D2130] font-[500] text-[16px] leading-[19px] tracking-[2px] ">Next Events</h6>
                <div className=" w-[44px] h-[0px] border-[2px] border-[#1D2130] "></div>
              </div>
              <h3 className="w-[270px] lg:w-[381px] h-[84px] leading-[150%] font-roboto font-[700] text-[28px] text-[#1D2130]">Weekly cleaning program</h3>
            </div>
            <div className="flex w-[100px] h-[120px] items-center">
              <div className=" w-[56px] h-[56px] bg-[#FFFFFF] rounded-[100%] flex items-center justify-center cursor ml-[10px]">{/* <img src={Arrow} /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
