import styles from './Layout.module.css'
import Header from "./header/Header";
import Nav from './nav/Nav'
import category from "../store/categoryStore";
import {observer} from "mobx-react-lite";
import ProductsContainer from "./product/ProductsContainer";
import Carousel from "./carousel/Carousel";
import Footer from "./footer/Footer";
import useWindowDimensions from "../hooks/hooks";
import MobileInfo from "./header/MobileInfo";
import navStore from "../store/navStore";
import FloatingCartButton from "./cart/FloatingCartButton";
import productStore from "../store/productStore";
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCreative, EffectCube, Virtual} from "swiper";


const Layout = observer(() => {
    const categories = category.categories
    const { width } = useWindowDimensions()

    console.log("RR")

    return (
        <div className={styles.layout}>
            <Header />
            {width < 768 && <MobileInfo />}

            <Nav />

            {width < 768
                ?
                <Swiper
                    effect={"creative"}
                    creativeEffect={{
                        limitProgress: 2,
                        prev: {
                            translate: ["-100%", 0, 0],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                            opacity: 0.2
                        },
                    }}
                    modules={[EffectCreative]}
                    slidesPerView={width / 300}
                    autoHeight
                    onSwiper={swiper => navStore.setNavSwiper(swiper)}
                    className={styles['swiper']}
                    onActiveIndexChange={swiper => {
                        if (swiper.activeIndex === categories.length) {
                            navStore.setNavIndex(swiper.activeIndex - 1, true)
                        } else {
                            navStore.setNavIndex(swiper.activeIndex)
                        }
                    }}
                >
                    {categories.map((category, index) =>
                        <SwiperSlide key={index} virtualIndex={index} className={styles['swiperSlide']}>
                            <ProductsContainer navIndex={index} />
                        </SwiperSlide>
                    )}
                    <SwiperSlide key={1000} virtualIndex={1000} className={styles['swiperSlide']}>
                    </SwiperSlide>
                </Swiper>
                :
                <ProductsContainer navIndex={navStore.navIndex}/>
            }

            <Footer />

            {(productStore.cartCost > 0 && width < 768) && <FloatingCartButton />}
        </div>
    )
})

export default Layout
