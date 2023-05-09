import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Supporters = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const partners = [
    { title: "leaveIt", image: "../../assets/partners/partner-1.png" },
    { title: "parmaco", image: "../../assets/partners/partner-2.png" },
    { title: "wimcom", image: "../../assets/partners/partner-3.png" },
    { title: "sacrco", image: "../../assets/partners/partner-4.png" },
    { title: "tenkfo", image: "../../assets/partners/partner-5.png" },
    { title: "tenkfo", image: "../../assets/partners/partner-6.png" },
  ];

  return (
    <div className="bg-[#B0DAFF] p-5">
      <div className="md:flex gap-4 p-1 ">
        <p className="text-3xl font-bold text-[#FFF]">Our Supporters</p>
        <p className="col-md-4 bg-white h-0.5 w-10/12 mt-5"></p>
      </div>

      <div className="md:flex gap-4">
        {/* <Carousel swipeable={true} draggable={true} showDots={true} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3500}> */}
        {partners.map((partner, index) => (
          <div class="grid grid-cols-2 gap-3" key={index}>
            <div>
              <p className="font-bold text-[#fff]">{partner.title}</p>
            </div>

            <div>
              <img className="object-cover h-54 w-70 rounded" src={partner.image} alt="partners" />
            </div>
          </div>
        ))}
        {/* </Carousel> */}
      </div>
    </div>
  );
};
