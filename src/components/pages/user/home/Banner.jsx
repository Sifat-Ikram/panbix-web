import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import banner from "../../../../assets/images/banner/banner.webp";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img src={banner} className="w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
