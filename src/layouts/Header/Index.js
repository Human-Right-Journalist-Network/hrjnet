import React from "react";
import HeaderSlide from "../Slider/HeaderSlide";
import { HeaderSlideData } from "../Slider/HeaderSlideData";
import Play from "../../assets/Play.png";

const Index = () => {
  return (
    // <div className="">
    //   <div className="flex-container" position={"absolute"}>
    //     <HeaderSlide slides={HeaderSlideData} />
    //   </div>
    // </div>
    <div className="w-full overflow-hidden">
      <div className="flex-container relative ">
        <HeaderSlide slides={HeaderSlideData} />
        {/* Header text */}
        <div className="absolute top-[8rem] left-[20px] w-[80%] h-[200px]  md:left-[110px] w-[640px] h-[330px] text-white">
          <h1 className="text-white leading-[40px] text-[30px] w-[300px] ml-[5px] h-[200px] md:text-[64px] md:leading-[76.8px] md:font-[700] md:w-[640px] md:h-[231px]">Save the Environment for a better tomorrow</h1>
          {/* button row */}
          <div className="flex w-[300px] h-[51px] absolute top-[100px] mb-[30px] md:w-[312px] md:h-[51px] md:mt-[55px] md:top-[220px]">
            <button className=" border-[4px] border-white flex flex-row  items-center px-[32px] py-[16px] bg-white ">
              <p className="text-[#1D2130] leading-[19px] border-none cursor text-right  text-[16px] font-roboto font-[500] leading-[19px] ">What we do</p>
            </button>
            <button className="w-[140px] h-[51px] border-none cursor flex items-center py-[12px] px-[16px] gap-[8px] ">
              <img className="w-[24px] h-[24px]" src={Play} />
              <p className="text-white">PlayVideo</p>
            </button>
          </div>
        </div>
        {/* statistics */}
        <div className="hidden  h-[21px] gap-[10px] lg:flex lg:block lg:flex-row lg:items-center lg:justify-evenly  absolute lg:w-[1280px] lg:left-[100px] lg:top-[640px]  ">
          <h6 className="text-[15px] lg:w-[196px] h-[21px] text-right text-white  font-roboto font-[500] lg:text-[18px] leading-[21px]">23,800 trees planted </h6>
          <div className=" w-[100px] h-[0px] bg-white border-[1px] border-[#E5E5E5] lg:w-[861px] "></div>
          <h6 className=" h-[21px] lg:w-[215px] text-left text-white text-[18px] leading-[21px]  font-roboto font-[500]">5840 donations collected</h6>
        </div>
      </div>
    </div>
  );
};

export default Index;