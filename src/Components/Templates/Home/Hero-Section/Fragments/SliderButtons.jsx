import Button_2 from "@/Components/Common/Buttons/Button_2";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
  const swiper=useSwiper()
  return (
    <>
        <Button_2 handler={()=>swiper.slideNext()} className="button-slider right-5"><BiChevronRight /></Button_2>
        <Button_2 handler={()=>swiper.slidePrev()} className="button-slider left-5"><BiChevronLeft /></Button_2>
    </>
  );
};

export default SliderButtons;
