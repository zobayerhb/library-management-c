import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import slider1 from "../assets/images/slide1.jpg";
import slider2 from "../assets/images/slide3.jpg";
import slider3 from "../assets/images/slide4.jpg";

const SwiperSlider = () => {
  return (
    <div className="container mx-auto my-12 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper rounded"
      >
        <SwiperSlide>
          <Slide img={slider1} title="Hello from books library." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={slider2} title="Hello from books library." />
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={slider3} title="Hello from books library." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
