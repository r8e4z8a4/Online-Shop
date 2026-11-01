import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Slider = ({breakpoints,loop,delay=2500,slidesPerView=1,Content,data}) => {
    return (
        <div id="related-products-slider">
            <Swiper spaceBetween={10} autoplay={{delay}} loop={loop} modules={[Autoplay]} slidesPerView={slidesPerView} breakpoints={breakpoints}>
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Content {...item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default Slider;