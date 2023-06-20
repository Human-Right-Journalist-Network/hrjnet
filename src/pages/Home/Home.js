import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/Index";
import Header from "../../layouts/Header/Index";
import { Supporters } from "../../layouts/Supporters";

// components
import Events from '../../layouts/Events'
import Blog from '../../pages/blog/Blog'
import Projects from '../../layouts/Projects'
import CTA from '../../layouts/CTA'

// images
import Play from '../../assets/Play.png'
import Vector from '../../assets/Vector.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'
import Vector4 from '../../assets/Vector4.png'


export const Home = () => {
  const video = [{ title: "Watch Video About Us", image: "../../assets/Video.png" }];

  return (
    <MainLayout>
      <Header />
      <div className="w-full select-none lg:border-none bg-[#03D1FF] mt-[-85px] rounded-sm">
        <div className="w-[100%] sm:h-[240vh] md:h-[160vh] flex lg:w-[1280px] lg:h-[724.36px]  flex-col mt-[6rem] left-[0] right-[0] mr-auto ml-auto ">
          <div className="sm:h-[160vh] md:h-[100vh] flex flex-col lg:w-[1280px] lg:h-[578.34px]  lg:flex-row lg:justify-between mb-[40px]">
            <div className="h-[82vh] lg:w-[704px] lg:h-[494px] lg:mt-[50px]">
              <div className="w-[247px] h-[19px] mb-[20px] flex items-center justify-evenly lg:mb-[35px]">
                <div className="w-[72px] h-[0px] border-[2px] border-[#1D2130]"></div>
                <h5 className="w-[151px] h-[19px] font-[700] text-[16px] leading-[19px] uppercase">Know About Us</h5>
              </div>
              <div className="ml-[80px] mt-[55px] pt-[35px]">
                <h2 className=" text-[38px] w-[95%] mb-[30px] lg:text-[48px] font-roboto font-[700] lg:w-[607px]lg:h-[116px] leading-[120%] text-[#1D2130] lg:mb-[20px]">We help nature smile and survive everywhere</h2>

                <div className="pt-[13px] text-white font-bold ">
                  <p className="w-[68%] md:w-[80%] lg:w-[608px] lg:h-[170px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    <br />
                    <p className="pt-[18px]">Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </p>
                </div>

                <button className="bg-[#FF8905] cursor w-[146px] font-bold p-3 text-white rounded-md">
                  <Link to="/what_we_do">Learn More</Link>
                </button>
              </div>
            </div>

            <div className="w-[90%] md:w-[60%] mt-[25px] md:mb-[40px] mr-auto ml-auto h-[80vh] lg:w-[480px] lg:h-[578.434px] relative bg-banner  bg-no-repeat">
              <img src={Play} className="absolute top-[17rem] right-[0] left-[0]  mx-auto my-auto w-[45px] h-[45px] cursor-pointer " />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-col items-center w-full lg:w-[1280px] lg:h-[82.02px] pt-[46px]">
            {/* section title */}
            <div className="w-[100%] md:ml-[30px] lg:w-[1280px] h-[19px] flex items-center mb-[50px] md:mb-[80px] lg:mb-[20px]">
              <h6 className="ml-[15px] w-[162px] md:ml-[0px] font-bold leading-[19px] tracking-[2px] uppercase text-[16px] mr-[15px]">our Supporters</h6>
              <div className=" w-[62%] md:w-[72%] lg:w-[1094px] h-[0px] border-[1px] border-[#E5E5E5] rotate-[180deg]"></div>
            </div>
            {/* logo rows */}
            <div className="md:w-[90%] h-[50vh] lg:w-[1280px] lg:h-[31.02px] grid md:grid-cols-3 gap-[30px] lg:grid-cols-6 ">
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
                <img src={"../assets/partners/partner-5.png"} />
              </div>
              <div className="w-[142.36px] h-[28px] opacity-[0.6]">
                <img src={"../assets/partners/partner-6.png"} />
              </div>
            </div>
          </div>
        </div>

        {/* what we do */}
        <div className="w-full sm:h-[230vh] md:h-[160vh] lg:h-[901px] mt-[49px] bg-[#EFF7F2] rounded-[5px] pt-[5rem]">
          {/* section title */}
          <div className="w-[212px] h-[19px] flex items-center justify-between ml-[20px] lg:ml-[100px] mb-[50px] lg:mb-[20px]">
            <div className="w-[72px] h-[0px] border-[2px] bg-[#1D2130] mr-[15px]"></div>
            <h6 className="w-[238px] h-[19px] text-[16px] font-[700] leading-[19px] uppercase text-black">what we do</h6>
          </div>

          {/* section text */}
          <div className="flex w-[88%] sm:h-[200vh] md:h-[130vh] lg:h-[658px] mx-auto flex-col lg:flex-row items-center justify-between">
            <div className="lg:mr-[40px]">
              <div className=" w-[80%] lg:mb-[30px] mr-auto ml-auto  lg:w-[680px] h-[184px] mb-[10px]">
                <h2 className="lg:w-[680px] lg:h-[116px] font-[700] text-[30px] mb-[10px] mb:mb-[0] lg:text-[48px] leading-[120%] text-[#1D2130]">We care for earth, care for the coming birth</h2>
                <p className="lg:w-[608px] lg:h-[52px] leading-[160%] font-[400] text-[16px] text-[#525560]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>

              <div className="w-[80%] mr-auto ml-auto lg:w-[460px] h-[442px] flex flex-col items-center gap-[10px] mt-[40px] lg:mt-[0]">
                <div className="w-[436px] h-[88px] flex flex-row justify-between">
                  <div className="w-[28px] h-[28px] rounded-[4px] bg-[#83D187] flex items-center justify-center">
                    <img src={Vector} />
                  </div>
                  <div className="">
                    <h6 className="w-[292px] h-[28px] font-[700] text-[24px] leading-[28px] text-[ #1D2130]">Build Healthy Cities</h6>
                    <p className="w-[384px] h-[52px] leading-[160%] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="w-[436px] h-[94px] flex flex-row justify-between">
                  <div className="w-[28px] h-[28px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                    <img src={Vector2} />
                  </div>
                  <div className="">
                    <h6 className="w-[212px] h-[28px] font-[700] text-[24px] leading-[28px] text-[ #1D2130]"> Tree Plantation</h6>
                    <p className="w-[384px] h-[52px] leading-[160%] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="w-[436px] h-[94px] flex flex-row justify-between">
                  <div className="w-[28px] h-[28px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                    <img src={Vector3} />
                  </div>
                  <div className="">
                    <h6 className="w-[292px] h-[28px] font-[700] text-[24px] leading-[28px] text-[ #1D2130]"> Protect Land and Water</h6>
                    <p className="w-[384px] h-[52px] leading-[160%] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="w-[436px] h-[94px] flex flex-row justify-between">
                  <div className="w-[28px] h-[28px] rounded-[4px] bg-[#83D187]  flex items-center justify-center">
                    <img src={Vector4} />
                  </div>
                  <div className="">
                    <h6 className="w-[212px] h-[28px] font-[700] text-[24px] leading-[28px] text-[ #1D2130]"> Animal Safety</h6>
                    <p className="w-[384px] h-[52px] leading-[160%] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* what we do Image */}
            <div className="w-[99%] sm:h-[90vh] md:h-[67vh] lg:w-[480px] lg:h-[658px] rounded-[12px] bg-workImage bg-cover bg-no-repeat"></div>
          </div>
        </div>

        {/* projects */}
        <Projects />

        {/* stats */}
        <div className="w-full sm:h-[150vh] md:h-[100vh] lg:h-[567px] bg-[#0B0706]  text-white flex flex-col lg:flex-row items-center justify-around ">
          <div className="w-[88%] mx-auto lg:w-[611px] h-[395px] lg:mx-0 flex flex-col justify-evenly">
            <div>
              <h2 className="font-[700] text-[48px] leading-[120%]">How we spend your donations and where it goes</h2>
              <p className="opacity-[0.6] leading-[160%] font-[400] text-[16px] mt-[15px]">We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
            </div>
            <div className="lg:w-[772px] h-[88px] grid gap-[10px] md:gap-[0] md:grid-cols-2  lg:grid-cols-3 ">
              <div className="w-[257px] h-[26px] flex flex-row items-center">
                <div className="w-[16px] h-[16px] rounded-[4px] bg-[#BEF3C0] mr-[10px]"></div>
                <h6>40% planting trees</h6>
              </div>
              <div className="w-[204px] h-[26px] flex flex-row items-center">
                <div className="w-[16px] h-[16px] rounded-[4px] bg-[#AC94F1] mr-[10px]"></div>
                <h6>35% cleanliness program</h6>
              </div>
              <div className="w-[263px] h-[26px] flex flex-row items-center">
                <div className="w-[16px] h-[16px] rounded-[4px] bg-[#FFF0CA] mr-[10px]"></div>
                <h6>10% helping people</h6>
              </div>
              <div className="w-[155px] h-[26px] flex flex-row items-center">
                <div className="w-[16px] h-[16px] rounded-[4px] bg-[#F9CF64] mr-[10px]"></div>
                <h6>10% animal safety</h6>
              </div>

              <div className="w-[267px] h-[26px] flex flex-row items-center">
                <div className="w-[16px] h-[16px] rounded-[4px] bg-[#F38FBF] mr-[10px]"></div>
                <h6>5% feeding the poor</h6>
              </div>
            </div>
          </div>
          <div className="w-[375px] h-[375px] rounded-[100%] border-red-600 border-2 bg-Chart bg-center bg-no-repeat"></div>
        </div>
        <CTA />

        <Blog />

        <Events />
      </div>
    </MainLayout>
  );
};

export default Home;
