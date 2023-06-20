import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="grid w-[100%] h-[55vh] md:h-[35vh] lg:w-[1280px] lg:h-[384px] bg-volunteerImage  bg-no-repeat items-center left-[0] right-[0] mx-auto my-[50px] relative">
      {/* tint */}
      <div className="w-[100%] lg:w-[1280px] h-[384px] bg-[#0B0706] lg:rounded-[12px] opacity-[0.5] mb-[45px] lg:mb-[0]  absolute top-[0] left-[0] right-[0] mx-auto pt-[100px] ">
        <div className="flex justify-center">
          <h2 className="lg:w-[631px] h-[116px] text-[#FFFFFF] font-[700] text-[40px] lg:text-[48px] leading-[120%] text-center">You can contribute to make the environment greener!</h2>
        </div>
        <div className="flex justify-center gap-4 mt-9">
          <button className="bg-[#FF8905] cursor w-[146px] font-bold p-3 text-white rounded-md">
            <Link to="/volunteer">Volunteer</Link>
          </button>
          <button className="bg-[#FF8905] cursor w-[146px] font-bold p-3 text-white rounded-md">
            <Link to="/donation">Donate</Link>
          </button>
        </div>
      </div>
      {/* content */}
    </div>
  );
};
export default CTA;
