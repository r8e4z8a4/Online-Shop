import SliderButtons from "@/Components/Templates/Home/Hero-Section/Fragments/SliderButtons";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import publicAsset from "@/lib/publicAsset.js";

const HeroSection = () => {
    return (
        <section className="w-full h-100">
            <Swiper loop navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 1500 }} className="mySwiper h-100 relative">
                <SwiperSlide>
                    <div className="h-100 w-full">
                        <img className="size-full object-cover" src={publicAsset("Photos/banner1.png")} alt="i cant open this photo" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-100 w-full">
                        <img className="size-full object-cover" src={publicAsset("Photos/banner2.png")} alt="i cant open this photo" />
                    </div>
                </SwiperSlide>
                <SliderButtons/>
            </Swiper>
        </section>
    );
};

export default HeroSection;
