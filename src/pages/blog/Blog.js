import React from "react";

// imports
import Thumbnail from "../../assets/Thumbnail.png";
import Thumbnail2 from "../../assets/Thumbnail2.png";
import Thumbnail3 from "../../assets/Thumbnail3.png";
import Thumbnail4 from "../../assets/Thumbnail4.png";

const Blog = () => {
  return (
    <div className=" w-[100%] sm:h-[210vh] md:h-[100vh] lg:w-[1280px] lg:h-[432px] flex flex-col left-[0] right-[0] mx-auto mb-[40px] lg:mt-[20px] select-none">
      <div className="lg:w-[1280px] h-[56px] flex flex-row items-center">
        <h6 className="ml-[15px] mr-[10px] text-[25px] w-[176px] lg:w-[275px] lg:h-[56px] font-[500] leading-[140%] text-black lg:text-[35px] lg:mr-[0px]">Read Our News</h6>
        <div className=" w-[60%] lg:w-[1062px] h-[0px]  rotate-[180deg] border-[1px] border-[#E5E5E5]"></div>
      </div>
      {/* blog grid */}
      <div className="w-[80%] h-[200vh] md:h-[100vh] ml-auto mr-auto lg:w-[1280px] lg:h[328px] grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[30px]">
        <div className="w-[302px] h-[328px] flex flex-col justify-evenly">
          <div className="w-[302px] h-[192px]">
            <img src={Thumbnail} className="cursor-pointer" />
          </div>
          <h6 className="w-[290px] h-[60px] font-[500] text-[20px] leading-[150%}">Don't destroy greenery and don't spoil scenery</h6>
          <p className="leading-[160%] w-[290px] h-[52px] font-[400] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
        </div>
        <div className="w-[302px] h-[328px] flex flex-col justify-evenly">
          <div>
            <img src={Thumbnail2} className="cursor-pointer" />
          </div>
          <h6 className="w-[290px] h-[60px] font-[500] text-[20px] leading-[150%}"> Is climate change happening faster than expected?</h6>
          <p className="leading-[160%] w-[290px] h-[52px] font-[400] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
        </div>
        <div className="w-[302px] h-[328px] flex flex-col justify-evenly">
          <div>
            <img src={Thumbnail3} className="cursor-pointer" />
          </div>
          <h6 className="w-[290px] h-[60px] font-[500] text-[20px] leading-[150%}"> Top 10 facts about wind farms you didn't know</h6>
          <p className="leading-[160%] w-[290px] h-[52px] font-[400] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
        </div>
        <div className="w-[302px] h-[328px] flex flex-col justify-evenly">
          <div>
            <img src={Thumbnail4} className="cursor-pointer" />
          </div>
          <h6 className="w-[290px] h-[60px] font-[500] text-[20px] leading-[150%}"> Our goal is to make water available for everyone</h6>
          <p className="leading-[160%] w-[290px] h-[52px] font-[400] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
