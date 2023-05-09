import React, { useState, useRef, useEffect } from "react";
import MainLayout from "../layouts/Index";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const read_more = [
  { title: "Finding customers for your new business", image: "../../assets/law.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work."},
  { title: "Finding customers for your new business", image: "../../assets/hr1.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work."},
  { title: "Finding customers for your new business", image: "../../assets/human-rights.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work."},
  { title: "Finding customers for your new business", image: "../../assets/hr3.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work." },
  { title: "Finding customers for your new business", image: "../../assets/hr2.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work." },
  { title: "Finding customers for your new business", image: "../../assets/hr3.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work." },
  { title: "Finding customers for your new business", image: "../../assets/law.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work." },
  { title: "Finding customers for your new business", image: "../../assets/hr3.jpeg", description: "Something Great Getting a new business off the ground is a lot of hard work."},
];

const know_us = [
  { title: "Don’t destroy greenery and don’t spoil scenery", image: "../../assets/hr1.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."},
  { title: "Don’t destroy greenery and don’t spoil scenery", image: "../../assets/law.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."},
  { title: "Don’t destroy greenery and don’t spoil scenery", image: "../../assets/human-rights.jpeg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."},
];

const Media = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EFF7F2] p-8">
        <div className="row-span-3 col grid-rows-4 grid-flow-col">
          <div className="md:flex gap-3 p-12">
            <p className="col-md-4 bg-black h-0.5 w-32 mt-2.5"></p>
            <p className="">TOP NEWS </p>
          </div>

          <div className="px-16 pb-[30px] space-y-4">
            <p className="text-[46px] font-bold font-Roboto leading-tight">
              Our goal is to make <br /> water available for <br /> everyone{" "}
            </p>
            <p className="capitalize text-[13px]">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <button className="bg-[#70C174] text-white btn p-3 rounded">
              <Link to="/blog">Read More</Link>
            </button>
          </div>
        </div>

        <div className="container bg-white rounded m-10 ml-[3px] ">
          <div className="row-span-3 col grid-rows-4 grid-flow-col ">
            {know_us.map((know, index) => (
              <div className="md:flex gap-3 p-4" key={index}>
                <img className="object-cover h-38 w-56 rounded" src={know.image} alt="Know Us" />
                <div className="row-span-3 col grid-rows-4 grid-flow-cols">
                  <p className="text-[20px] font-bold ">{know.title}</p>
                  <p className="text-justify pt-4">{know.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-cols-4 rounded read-more">
        <div className="row-span-3 col grid-rows-3 grid-flow-cols text-center p-10">
          <p className="text-[40px] font-bold font-bold">Read our Recent News</p>
          <p className="pb-10 text-[12px]">
            Edit this text to make it your own. To edit, simply click directly <br /> on the text to start We are served
          </p>
        </div>

        <div className="md:grid gap-12 p-12 mt-[-130px]">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            // focusOnSelect={true}
            autoPlay={true}
            // autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {read_more.map((more, index) => (
              <div className="max-w-md mx-auto bg-white rounded-xl mt-6 shadow-md overflow-hidden md:max-w-2xl hover:bg-[#BEF3C0] hover:ring-black-500 mt-10">
                <div className="p-8 ">
                  <a href="#" className="p-25">
                    <img className="h-full w-full md:h-full md:w-96" src={more.image} alt="Man looking at item at a store" />
                  </a>
                </div>
                <div className="flex grid-cols-12 m-[-5px]">
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{more.title}</div>
                    <p className="mt-2 text-slate-500">{more.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="row-span-3 col grid-rows-4 p-3">
        <div className="col-span-12">
          <div className="flex gap-4 p-1">
            <p className="text-2xl">Our Events</p>
            <p className="col-md-4 bg-black h-0.5 w-6/12 mt-5"></p>
          </div>
        </div>
        <div className="md:grid grid-flow-col gap-3 p-8">
          <div className="bg-[#BEF3C0] col-span-4 mb-10 w-full ">
            <div className="md:grid grid-flow-col gap-3 p-8 ">
              <div className="col-span-2">
                <p className="text-5xl font-bold font-Roboto">23</p>
                <span className="text-sm">SEPT</span>
              </div>
              <div className="col-span-12">
                <div className="flex gap-2 p-1">
                  <p className="text-sm">NEXT EVENTS</p>
                  <p className="col-md-4 bg-black h-0.5 w-24 mt-2.5"></p>
                </div>
                <p className="text-2xl font-bold mt-1">
                  Say no to plastic usage and <br />
                  save the planet
                </p>
              </div>
              <div className="col-span-2 text-4xl text-bold mt-9 text-white">
                <button>
                  <BsArrowRightCircle />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#BEF3C0] col-span-4 mb-10 w-full ">
            <div className="md:grid grid-flow-col gap-3 p-8 ">
              <div className="col-span-2">
                <p className="text-5xl font-bold font-Roboto">25</p>
                <span className="text-sm">OCT</span>
              </div>
              <div className="col-span-12">
                <div className="flex gap-2 p-1">
                  <p className="text-sm">NEXT EVENTS</p>
                  <p className="col-md-4 bg-black h-0.5 w-24 mt-2.5"></p>
                </div>
                <p className="text-2xl font-bold mt-1">
                  Weekly Cleaning Program that <br /> transforms lives
                </p>
              </div>
              <div className="col-span-2 text-4xl text-bold mt-9 text-white">
                <button>
                  <BsArrowRightCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Media;
