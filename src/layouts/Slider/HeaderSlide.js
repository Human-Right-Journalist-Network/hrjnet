import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <div className="">
      <div className="w-full">
        <Carousel infiniteLoop showThumbs={false} autoPlay={true}>
          {slides.map((slide, index) => {
            return (
              <img
                className="w-16 md:w-32 lg:w-48"
                key={index}
                src={slide.image}
                // height="350px"
                // width="800px"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
