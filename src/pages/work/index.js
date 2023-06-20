import React from "react";
import MainLayout from "../../layouts/Index";
import Blog from "../blog/Blog.js";
import CTA from "../../layouts/CTA";
import Events from "../../layouts/Events";
import Vector from "../../assets/Vector.png";
import Vector2 from "../../assets/Vector2.png";
import Vector3 from "../../assets/Vector3.png";
import Vector4 from "../../assets/Vector4.png";
import Vector5 from "../../assets/Vector5.png";
import Vector6 from "../../assets/Vector6.png";

const WhatWeDo = () => {
  return (
    <MainLayout>
      <div className="w-full select-none  md:border-yellow-600 md:border-2">
        <div className="w-full sm:h-[108vh] md:h-[65vh] lg:w-[1280px] lg:h-[599px] mr-auto ml-auto flex flex-col lg:pt-[95px] pt-[35px]">
          {/* section title */}
          <div className="w-[247px] h-[19px] flex items-center justify-between pb-[60px] lg:pb-[0] md:ml-[10px]">
            <div className="w-[72px] h-[0px] bg-[#1D2130] border-[2px]"></div>
            <h4 className="w-[151px] h-[19px] uppercase text-[16px] font-[700] leading-[19px]">What we do</h4>
          </div>
          {/* section content */}
          <div className="w-[100%] h-[100%] flex flex-col lg:flex-row items-center">
            <div className="w-[90%] lg:w-[694px] lg:h-[114px] mb-[70px] lg:mb-[150px] lg:ml-[100px] ">
              <h1 className=" w-[90%] lg:w-[694px] h-[50px] lg:h-[134px] leading-[120%] text-[30px] lg:text-[56px] font-[700] text-[#1D2130]">We are working worldwide</h1>
              <p className="w-[100%] lg:w-[594px] lg:h-[78px] text-[16px] leading-[160%] font-[400] mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            {/* section image */}
            <div className="w-[90%] lg:w-[480px] h-[384px] rounded-[12px] bg-WhatWeDo  bg-center bg-no-repeat"></div>
          </div>
        </div>

        {/* environment section */}
        <div className="w-full sm:h-[120vh] md:h-[75vh] lg:h-[574px] bg-[#EFF7F2] ">
          <div className="w-[90%] pt-[70px] lg:pt-[0] lg:h-[574px] mr-auto ml-auto flex flex-col justify-center ">
            <h2 className="lg:w-[789px] lg:h-[58px] text-[34px] lg:text-[48px] font-[700] mb-[50px] leading-[120%] ">What we do for the environment</h2>
            {/* grid */}
            <div className="grid lg:grid-cols-3 gap-[20px] md:gap-[40px]">
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[68px] h-[28px] rounded-[4px] bg-[#83D187] mr-[20px] flex items-center justify-center">
                  <img src={Vector} />
                </div>
                <div>
                  <h1 className="lg:w-[220px] h-[28px] text-[19px] font-[700] lg:text-[24px] leading-[28px] mb-[6px]">Build healthy cities</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[58px] h-[28px] rounded-[4px] bg-[#83D187] mr-[20px] flex items-center justify-center">
                  <img src={Vector3} />
                </div>
                <div>
                  <h1 className="lg:w-[264px] h-[28px] text-[19px] font-[700] lg:text-[24px] leading-[28px] mb-[6px]">Protect land and water</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[58px] h-[28px] rounded-[4px] mr-[20px] bg-[#83D187]  flex items-center justify-center">
                  <img src={Vector2} />
                </div>
                <div>
                  <h1 className="lg:w-[220px] h-[28px] text-[19px] font-[700] lg:text-[24px] leading-[28px] mb-[6px]">Tree plantation</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[58px] h-[28px] mr-[20px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                  <img src={Vector5} />
                </div>
                <div>
                  <h1 className="lg:w-[240px] h-[28px] text-[19px] font-[700] lg:text-[24px] leading-[28px] mb-[6px]">Water sustainability</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[58px] h-[28px] mr-[20px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                  <img src={Vector4} />
                </div>
                <div>
                  <h1 className="lg:w-[220px] h-[28px] font-[700] text-[19px] lg:text-[24px] leading-[28px] mb-[6px]">Animal safety</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
              <div className="lg:w-[404px] lg:h-[102px] flex">
                <div className="w-[58px] h-[28px] mr-[20px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                  <img src={Vector6} />
                </div>
                <div>
                  <h1 className="lg:w-[220px] h-[28px] text-[19px] font-[700] lg:text-[24px] leading-[28px] mb-[6px]">Biodiversity</h1>
                  <p className="lg:w-[332px] lg:h-[66px] leading-[160%] lg:text-[14px] font-[400]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* project section */}
        <div className="w-[100%] sm:h-[210vh] md:h-[130vh] lg:w-[1280px]  lg:h-[711.64px] left-[0] right-[0] mx-auto mb-[40px] mt-[70px]">
          {/* project title */}
          <div className="lg:w-[700px] mx-auto lg:h-[151px] flex flex-col items-center mb-[200px]">
            <h4 className="lg:w-[238px] lg:h-[19px] leading-[19px] tracking-[2px] uppercase text-[16px] mb-[10px] lg:mb-[0]">Projects we have done</h4>
            <h2 className="lg:w-[700px] lg:h-[116px] font-[700] text-[28px] lg:text-[48px] leading-[120%] text-center">We are creating a sustainable society, for everyone.</h2>
          </div>
          {/* project content */}
          <div className="w-[80%] h-[190vh] mx-auto lg:w-[1280px] lg:h-[421px] mt-[40px] lg:left-[0] lg:right-[0] lg:mr-auto lg:ml-auto flex flex-col items-center lg:flex-row gap-[20px]">
            <div className="w-[411px] h-[421px] bg-project1 rounded-[12px] flex items-center justify-center relative">
              {/* tint */}
              <div className="w-[411px]  h-[421px]  opacity-[0.5] bg-[#0B0706]"></div>
              {/* content */}
              <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mr-auto ml-auto">
                <h3 className="text-white leading-[150%] text-[20px] font-[700]">Mission 40K: Tree plantation</h3>
                <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <button className="w-[132px] h-[51px] rounded-[4px] text-black bg-white cursor text-center">See more</button>
              </div>
            </div>
            <div className="w-[411px] h-[421] bg-project2  rounded-[12px]  flex items-center justify-center relative">
              {/* tint */}
              <div className="w-[411px]  h-[421px]  opacity-[0.5] bg-[#0B0706]"></div>
              {/* content */}
              <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mr-auto ml-auto ">
                <h3 className="text-white leading-[150%] text-[20px] font-[700]">Weekly cleanliness program in city</h3>
                <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <button className="w-[132px] h-[51px] rounded-[4px] bg-white text-black cursor text-center">See more</button>
              </div>
            </div>
            <div className="w-[411px] h-[421] bg-project3 rounded-[12px] flex items-center justify-center relative ">
              {/* tint */}
              <div className="w-[411px] h-[421px]  opacity-[0.5] bg-[#0B0706]"></div>
              {/* content */}
              <div className="w-[315px] h-[293px] flex flex-col justify-evenly absolute left-[0] right-[0] mr-auto ml-auto">
                <h3 className="text-white leading-[150%] text-[20px] font-[700]">Wildlife safety program 2021</h3>
                <p className="w-[315px] h-[78px] font-[400] text-[16px] leading-[160%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <button className="w-[132px] h-[51px] rounded-[4px] text-black bg-[#FFFFFF] cursor text-center">See more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mt-9"> */}
      <CTA />
      <Blog />
      <Events />
      {/* </div> */}
    </MainLayout>
  );
};
export default WhatWeDo;
