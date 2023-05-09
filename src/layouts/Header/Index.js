import React from "react";
import HeaderSlide from "../Slider/HeaderSlide";
import { HeaderSlideData } from "../Slider/HeaderSlideData";

const Index = () => {
  return (
    <div className="">
      <div className="flex-container" position={'absolute'}>
        <HeaderSlide slides={HeaderSlideData} />
      </div>
    </div>
  );
};

export default Index;