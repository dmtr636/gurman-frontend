import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from '../../images/Slider.png'
import sliderStore from "../../store/sliderStore";
import {observer} from "mobx-react-lite";

const Carousel = observer(() => {
    const images = sliderStore.images

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
            >
                {images.map(image =>
                    <SwiperSlide>
                        <img src={"http://localhost:8000" + image} alt={""}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
})

export default Carousel