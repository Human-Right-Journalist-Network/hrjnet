import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/Index";
import Header from "../../layouts/Header/Index";
import { Supporters } from "../../layouts/Supporters";

export const Home = () => {
  const video = [{ title: "Watch Video About Us", image: "../../assets/Video.png" }];

  return (
    <MainLayout>
      <Header />
      <div className="pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#B0DAFF] p-8">
          <div className="row-span-3 col grid-rows-4 grid-flow-col">
            <div className="md:flex gap-3 p-12">
              <p className="col-md-4 bg-black h-0.5 w-32 mt-2.5"></p>
              <p className="">KNOW ABOUT US </p>
            </div>

            <div className="pb-[40px] space-y-12 ml-12">
              <p className="text-[46px] font-bold font-Roboto leading-tight">
                We help nature smile and <br />
                survive everywhere
              </p>

              <div className="row-span-3 col grid-rows-4 grid-flow-cols">
                <p className="text-[20px] font-Roboto leading-tight pb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br /> enim in eros elementum tristique. ‍
                </p>

                <p>
                  Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br /> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus <br /> tristique posuere.
                </p>
              </div>

              <button className="bg-[#70C174] text-white btn p-3 rounded">
                <Link to="/blog">LEARN MORE</Link>
              </button>
            </div>
          </div>

          <div className="container rounded m-10 ml-[3px] ">
            <div className="row-span-3 col grid-rows-4 grid-flow-col ">
              {video.map((know, index) => (
                <div className="md:grid gap-3 p-4 hover:bg-blend-darken" key={index}>
                  {/* <img className="object-cover h-38 w-56 rounded" src={know.image} alt="Know Us" /> */}

                  <div class="flex h-screen justify-center items-center flex-col">
                    <div class="w-full h-screen bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
                      <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <span class="text-white text-4xl w-1/2 text-center">
                          <button>Click Here To Play </button>
                        </span>
                      </div>
                    </div>
                    <p className="text-[24px] pt-4 font-bold ">{know.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Supporters className="p-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EFF7F2] mt-8">
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
              {video.map((video, index) => (
                <div className="md:flex gap-3 p-4" key={index}>
                  <img className="object-cover h-38 w-56 rounded" src={video.image} alt="Know Us" />
                  <div className="row-span-3 col grid-rows-4 grid-flow-cols">
                    <p className="text-[20px] font-bold ">{video.title}</p>
                    {/* <p className="text-justify pt-4">{know.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
