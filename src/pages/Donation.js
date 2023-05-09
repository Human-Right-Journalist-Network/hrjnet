import React, { useState } from "react";
import MainLayout from "../layouts/Index";
import Carousel from "react-multi-carousel";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
// import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from 'react-router-dom'
import JoinUs from '../pages/PopUps/JoinUs'


const tabsData = [
  {
    label: "Overview",
    content: <>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat"}
      <br /> {""}
      <br /> {"Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere"}</>,
  },
  {
    label: "Impact",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
  {
    label: "What you get",
    content: <>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}.
      <br />{""}
      <br />{"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"}
      <br />{""}
      <br /> {"Aenean faucibus nibh et justo cursus id rutrum lorem  imperdiet. Nunc ut sem vitae risus tristique posuere sunt in culpa qui officia deserunt mollit anim id est laborum."},
    </>
  },
];

const donation_spendings = [
  { image: "../../assets/law.jpeg" },
  { image: "../../assets/hr1.jpeg" },
  { image: "../../assets/human-rights.jpeg" },
  { image: "../../assets/hr3.jpeg" },
  { image: "../../assets/hr2.jpeg" },
  { image: "../../assets/hr3.jpeg" },
  { image: "../../assets/law.jpeg" },
  { image: "../../assets/hr3.jpeg" },
];

const Donation = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EFF7F2]">
        <div className="row-span-3 col grid-rows-4 grid-flow-col">
          <div className="flex gap-3 p-12">
            <p className="col-md-4 bg-black h-0.5 w-32 mt-2.5"></p>
            <p className="">DONATE</p>
          </div>

          <div className="px-16 pb-[30px] space-y-4">
            <p className="text-[46px] font-bold font-Roboto text-red leading-tight">
              Making a donation for Nature.
            </p>
            <p className="capitalize text-[13px]">
              When you donate, you’re supporting effective solutions to big <br />environmental challenges—an investment in the future of our planet.
            </p>
            <button className="bg-[#70C174] text-white btn p-3 rounded">
              Donate Now
            </button>
          </div>
        </div>

        <div className="container rounded m-10 ml-[-30px]">
          <div className="row-span-3 col grid-rows-4 grid-flow-col">
            <div className="flex gap-3 p-12">
              <img
                className="object-cover rounded"
                src="../assets/export.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 p-8">
        <div>
          <div className="col-span-2">
            <p className="text-4xl font-bold font-Roboto mb-6">How you can contribute to <br /> protect Earth</p>
            <span className="text-[12px] ine-clamp-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem  imperdiet. Nunc ut sem vitae risus tristique posuere.</span>
          </div>
        </div>

        <div>
          <div className="flex space-x-3 border-b">
            {tabsData.map((tab, idx) => {
              return (
                <button
                  key={idx}
                  className={`px-4 border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                    ? "border-teal-500"
                    : "border-transparent hover:border-gray-200"
                    }`}
                  // Change the active tab on click.
                  onClick={() => setActiveTabIndex(idx)}>
                  {tab.label}
                </button>
              );
            })}
          </div>
          {/* Show active tab content. */}
          <div className="py-4">
            <p>{tabsData[activeTabIndex].content}</p>
          </div>
        </div>
      </div>

      <div className="relative flex px-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Know how we spend your donations</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="md:grid grid-cols-3 gap-12 p-12">
        <div>
          <div className="col-span-2">
            <p className="text-4xl font-bold font-Roboto mb-6 font-">How we use your donations</p>
          </div>
        </div>

        <div>
          <div className="flex grid-cols-3">
            {/* <Carousel> */}
            {/* {donation_spendings.map((donation, index) => ( */}
            <img src='../assets/hr3.jpeg' className="img-responsive" alt="logo" />
            {/* ))} */}
            {/* </Carousel> */}
          </div>
        </div>

        <div>
          <div className="col-span-2">
            <span className="text-[12px] ine-clamp-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem  imperdiet. Nunc ut sem vitae risus tristique posuere.</span>
            <br />
            <button className="bg-[#70C174] text-white btn p-3 rounded mt-8">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="md:grid container mx-auto w-full m-8 relative">
        <img src="../assets/bg-donate.png" className="img-responsive" alt="" />
        <div className="md:grid bg-[#0B0706] rounded-lg p-4 opacity-70 absolute top-0.5 left-0.5 w-full h-full ">
          <div className="mt-[100px] p-4">
            <div className="w-full gap-4 text-center">
              <p className="text-3xl text-white text-center font-bold font-Roboto bold-italic">You can contribute to make the environment greener!</p>
              <button className="bg-[#70C174] text-white btn p-3 rounded mr-8 mt-8">
                Join as a volunteer
               
              </button>

              <button type="submit" className="btn btn-primary bg-white text-black btn p-3 rounded ">
                <Link to='https://github.com/facebook'>Donate</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Donation;    
