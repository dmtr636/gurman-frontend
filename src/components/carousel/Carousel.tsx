import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from '../../images/Slider.png'

export default function Carousel() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide>
                    <img src={sliderImage} alt={""}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImage} alt={""}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}