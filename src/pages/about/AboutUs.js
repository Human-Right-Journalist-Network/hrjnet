import React from "react";
import MainLayout from "../../layouts/Index";
import Header from "../../layouts/Header/Index";
// import CTA from "../../layouts/CTA";
import Blog from "../blog/Blog.js";
// import Events from "../../layouts/Events";
import Banner from "../../assets/BG2.png";
import Play from "../../assets/Play.png";
import LeftVector from "../../assets/LeftVector.png";
import RightVector from "../../assets/RightVector.png";
import v from "../../assets/v.png";
import StarVector from "../../assets/StarVector.png";
import Union from "../../assets/Union.png";
import Union2 from "../../assets/Union2.png";
import Group from "../../assets/Group.png";
import staff1 from "../../assets/staff1.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import staff4 from "../../assets/staff4.png";
import staff5 from "../../assets/staff5.png";
import staff6 from "../../assets/staff6.png";
import staff7 from "../../assets/staff7.png";
import staff8 from "../../assets/staff8.png";
import Facebook from "../../assets/Facebook.png";
import Twitter from "../../assets/Twitter.png";
import LinkedIn from "../../assets/LinkedIn.png";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="w-full relative  select-none ">
        <div className="w-[100%] sm:h-[40vh] md:h-[20vh] mb-[40px] lg:w-[1280px] lg:h-[747px] mx-auto flex flex-col md:pt-[45px] lg:pt-[95px]">
          {/* section title */}
          <div className="  border-re w-[247px] h-[19px] flex items-center justify-between ml-[15px] md:ml-[0]">
            <div className="w-[72px] h-[0px] bg-[#1D2130] border-[2px]"></div>
            <h4 className="w-[151px] h-[19px] uppercase text-[16px] font-[700] leading-[19px]">Know about us</h4>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-[40px] ">
            <div className="lg:w-[694px] lg:h-[134px] mb-[100px] lg:mb-[0]">
              <h1 className="text-center text-[30px] lg:w-[694px] lg:h-[134px] leading-[120%] lg:text-[56px] font-[700] text-[#1D2130]">We are a nonprofit team working worldwide</h1>
            </div>
            <div>
              <h3 className="w-[90%] text-[18px] mb-[10px] mx-auto lg:w-[520px] lg:mb-[10px] lg:h-[60px] leading-[150%] lg:text-[20px] font-[700]">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
              <p className="w-[90%] mx-auto font-[400] lg:text-[16px] lg:leading-[25.6px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[1280px] lg:h-[448px] lg:rounded-[12px] mx-auto absolute lg:top-[506px] left-[0] right-[0] ">
          <img src={Banner} className="relative lg:w-[1280px] lg:h-[448px]" />
          <img src={Play} className=" cursor-pointer w-[40px] h-[40px] absolute top-[230px] left-0 right-0 ml-auto mr-auto" />
        </div>

        {/* mission section */}
        <div className=" pt-[70px] lg:pt-[300px] w-full lg:h-[867px] bg-[#EFF7F2]">
          <div className="w-[100%] lg:w-[1080px] lg:h-[277px] flex flex-col lg:flex-row justify-between mb-[120px] mx-auto">
            <div className="mb-[100px] border-green-600 border-4 lg:mb-[0]">
              <h4 className="text-center lg:w-[122px] lg:h-[19px] mb-[10px] text-[16px] font-[700] uppercase leading-[19px]">our mission</h4>
              <h3 className="w-[85%] mb-[20px] lg:mb-[0] mx-auto lg:w-[496px] lg:h-[84px] mb-[10px] font-[700] text-[28px]">We make the world we save our own environment</h3>
              <p className="w-[92%] ml-[40px] border-red-600 border-2 mx-auto lg:w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className="border-green-600 border-4">
              <h4 className="text-center lg:w-[122px] lg:h-[19px] mb-[10px] text-[16px] font-[700] uppercase leading-[19px]">our vision</h4>
              <h3 className="w-[85%] mb-[20px] lg:mb-[0] mx-auto lg:w-[496px] lg:h-[84px] mb-[10px] font-[700] text-[28px]">Plant more trees to make world air pollution free</h3>
              <p className="w-[92%] border-red-600 border-2 mx-auto lg:w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-[1280px] lg:h-[82.02px] mx-auto pb-[80px] lg:pb-[0]">
            <div className="w-[100%] lg:w-[1280px] h-[19px] flex items-center mb-[20px]">
              <h6 className="ml-[15px] w-[162px] h-[19px] md:ml-[0px] font-[500] leading-[19px] tracking-[2px] uppercase text-[16px] mr-[15px]">our Supporters</h6>
              <div className=" w-[62%] lg:w-[1094px] h-[0px] border-[1px] border-[#E5E5E5] rotate-[180deg]"></div>
            </div>
            <div className=" h-[50vh] lg:w-[1280px] lg:h-[31.02px] flex  flex-col lg:flex-row items-center justify-between">
              <div className="w-[142.36px] h-[28px] opacity-[0.6]">
                <img src={"../assets/partners/partner-1.png"} />
              </div>
              <div className="w-[136.82px] h-[30.95px] opacity-[0.6]">
                <img src={"../assets/partners/partner-2.png"} />
              </div>
              <div className="w-[123.5px] h-[24.56px] opacity-[0.6] ">
                <img src={"../assets/partners/partner-3.png"} />
              </div>
              <div className="w-[125.32px] h-[28.48px] opacity-[0.6]">
                <img src={"../assets/partners/partner-4.png"} />
              </div>
              <div className="w-[136.82] h-[30.95] opacity-[0.6] ">
                <img src={"../assets/partners/partner-1.png"} />
              </div>
              <div className="w-[142.36px] h-[28px] opacity-[0.6]">
                <img src={"../assets/partners/partner-1.png"} />
              </div>
            </div>
          </div>
        </div>
        {/* award section */}
        <div className="w-[100%] sm:h-[140vh] md:h-[90vh] lg:w-[1099.25px] lg:h-[305px] mb-[30px] mx-auto my-[60px] flex flex-col items-center">
          <h2 className="align-center text-[20px] lg:text-[48px] lg:w-[501px] lg:h-[58px] text-center mb-[35px]">Awards & Recognitions</h2>
          {/* award row */}
          <div className="lg:w-[1099.25px] lg:h-[199px] mx-auto flex flex-col gap-[50px] lg:flex-row  items-center justify-evenly">
            <div className="mb-[15px] lg:mb-[0] lg:w-[120px] lg:h-[199px] flex flex-col items-center">
              <div className=" w-[111px] h-[92px] flex items-center justify-center">
                <img src={LeftVector} />
                <img src={StarVector} />
                <img src={RightVector} />
              </div>
              <h4 className="font-[700] leading-[160%] lg:w-[56px] lg:h-[38px] lg:text-[24px]">2021</h4>
              <h6 className="leading-[160%] font-[700] lg:text-[16px] lg:w-[129px] lg:h-[26px]">Best NGO Award</h6>
              <p className="uppercase leading-[160%] lg:text-[12px] font-[500] opacity-[0.6] lg:w-[103px] lg:h-[19px]">Berlin, Germany</p>
            </div>
            <div className="mb-[15px] lg:mb-[0] lg:w-[111px] lg:h-[199px] flex flex-col items-center">
              <div className=" w-[111px] h-[92px] flex items-center justify-center">
                <img src={LeftVector} />
                <img src={v} />
                <img src={RightVector} />
              </div>
              <h4 className="font-[700] leading-[160%] lg:w-[56px] lg:h-[38px] lg:text-[24px]">2018</h4>
              <h6 className="leading-[160%] font-[700] lg:text-[16px] lg:w-[129px] lg:h-[26px]">Global Award</h6>
              <p className="uppercase leading-[160%] lg:text-[12px] font-[500] opacity-[0.6] lg:w-[103px] lg:h-[19px]">New York, USA</p>
            </div>
            <div className="mb-[15px] lg:mb-[0] lg:w-[111px] lg:h-[199px] flex flex-col items-center">
              <div className=" w-[111px] h-[92px] flex items-center justify-center">
                <img src={LeftVector} />
                <img src={Union} />
                <img src={RightVector} />
              </div>
              <h4 className="font-[700] leading-[160%] lg:w-[56px] lg:h-[38px] lg:text-[24px]">2014</h4>
              <h6 className="leading-[160%] font-[700] lg:text-[16px] lg:w-[129px] lg:h-[26px]">Foresto Award</h6>
              <p className="uppercase leading-[160%] lg:text-[12px] font-[500] opacity-[0.6] lg:w-[103px] lg:h-[19px]">New Delhi, India</p>
            </div>
            <div className="mb-[15px] lg:mb-[0]lg:w-[133px] lg:h-[199px] flex flex-col items-center">
              <div className=" w-[111px] h-[92px] flex items-center justify-center">
                <img src={LeftVector} />
                <img src={Union2} />
                <img src={RightVector} />
              </div>
              <h4 className="font-[700] leading-[160%] lg:w-[56px] lg:h-[38px] lg:text-[24px]">2010</h4>
              <h6 className="leading-[160%] font-[700] lg:text-[16px] lg:w-[143px] lg:h-[26px]">Earth Saver Award</h6>
              <p className="uppercase leading-[160%] lg:text-[12px] font-[500] opacity-[0.6] lg:w-[103px] lg:h-[19px]">Vienna, Austria</p>
            </div>
          </div>
        </div>
        {/* our journey section */}
        <div className="sm:h-[120vh] md:h-[90vh] bg-black lg:w-[1280px] lg:h-[576px] mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white ml-[80px] mt-[70px] ">
            <div className="text-white w-[90%]  lg:w-[488.22px] lg:h-[213px] flex flex-col justify-between lg:mb-[40px]">
              <h6 className="uppercase font-[700] text-center mb-[10px] lg:mb-[0] text-[16px] leading-[19px] tracking-[2px]">OUR JOURNEY </h6>
              <h2 className="font-[700] text-[32px] text-center mb-[20px] lg:mb-[0] lg:w-[447px] lg:h-[58px] lg:text-[48px]">How we raised 34M</h2>
              <p className="mb-[20px] lg:mb-[0]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
            </div>
            <div className="w-[90%] lg:w-[294px] lg:h-[57px] flex items-center justify-between">
              <div>
                <h3 className="lg:w-[62px] lg:h-[38px] lg:text-[24px] leading-[160%] font-[600]">34M+</h3>
                <p className="lg:w-[105px] opacity-[0.6] lg:h-[19px] text-[12px] font-[500]">Donation Received</p>
              </div>
              <div>
                <h3 className="lg:w-[55px] lg:h-[38px] lg:text-[24px] font-[500] leading-[160%]">400+</h3>
                <p className="lg:w-[52px] opacity-[0.6] lg:h-[19px] text-[12px] font-[500]">Volunteers</p>
              </div>
              <div>
                <h3 className="lg:w-[56px] lg:h-[38px] font-[500] leading-[160%] lg:text-[24px]">40K+</h3>
                <p className="lg:w-[74px] opacity-[0.6] lg:h-[19px] text-[12px] font-[500]">Trees planted</p>
              </div>
            </div>
          </div>
          <div className="w-[90%] flex justify-center mb-[60px] lg:mb-[0] mx-auto lg:w-[647.78px] lg:h-[448px] ">
            <img src={Group} />
          </div>
        </div>

        {/* meet our team section */}
        <div className="lg:w-[1280px] lg:h-[1084px] mr-auto ml-auto mt-[100px] flex flex-col items-center ">
          {/* section title */}
          <div className="lg:w-[519px] lg:h-[126px] mb-[70px] flex flex-col items-center">
            <h2 className="lg:w-[356px] lg:h-[58px] text-center font-[700] text-[30px] lg:text-[48px] leading-[120%] mb-[10px]">Meet our team</h2>
            <p className="w-[90%] md:text-[20px] lg:w-[519px] lg:h-[52px] lg:text-[16px] text-center font-[400] leading-[160%] opacity-[0.6] text-[#525560]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
          {/* team grid */}
          <div className="lg:w-[1280px] lg:h-[910px] mr-auto ml-auto grid lg:grid-cols-4 gap-[30px]">
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff1} />
              <h6 className="w-[188px] h-[32px] font-[500] leading-[160%] text-[20px]">Leonard John Davies</h6>
              <p className="w-[89px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Cofounder, CEO</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff2} />
              <h6 className="w-[138px] h-[32px] font-[500] leading-[160%] text-[20px]">Francis Weber</h6>
              <p className="w-[79px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Vice Chairman</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff3} />
              <h6 className="w-[118px] h-[32px] font-[500] leading-[160%] text-[20px]">Kyla Obrien</h6>
              <p className="w-[99px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Head of Authority</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff4} />
              <h6 className="w-[128px] h-[32px] font-[500] leading-[160%] text-[20px]">Adrian Dixon</h6>
              <p className="w-[99px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Support Executive</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff5} />
              <h6 className="w-[128px] h-[32px] font-[500] leading-[160%] text-[20px]">Freddy Busby</h6>
              <p className="w-[99px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Project Manager</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff6} />
              <h6 className="w-[128px] h-[32px] font-[500] leading-[160%] text-[20px]">Dale Banks</h6>
              <p className="w-[119px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Accountant, Finance</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff7} />
              <h6 className="w-[178px] h-[32px] font-[500] leading-[160%] text-[20px]">Miriam Middleton</h6>
              <p className="w-[99px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Cofounder, CEO</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
            <div className="lg:w-[296px] h-[431px] flex flex-col items-center justify-evenly">
              <img src={staff8} />
              <h6 className="w-[128px] h-[32px] font-[500] leading-[160%] text-[20px]">Ellen Walton</h6>
              <p className="w-[79px] h-[19px] opacity-[0.6] font-[500] leading-[160%] text-[12px]">Vice Chairman</p>
              <div className="w-[100px] h-[20px] flex items-center justify-between">
                <img src={Facebook} />
                <img src={Twitter} />
                <img src={LinkedIn} />
              </div>
            </div>
          </div>
        </div>

        {/* <CTA />
        <Blog />
        <Events /> */}
      </div>
    </MainLayout>
  );
};
export default AboutUs;
