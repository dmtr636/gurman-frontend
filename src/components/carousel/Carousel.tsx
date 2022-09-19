import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./styles.css";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import sliderStore from "../../store/sliderStore";
import {observer} from "mobx-react-lite";
import {SERVER_HOST} from "../../constants/constants";

const Carousel = observer(() => {
    const images = sliderStore.images

    return (
        <>
            <Swiper
                id={"carousel"}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                loop={true}
            >
                {images.map(image =>
                    <SwiperSlide>
                        <img src={SERVER_HOST + image} alt={""}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
})

export default Carousel