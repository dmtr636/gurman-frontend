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
import {EffectCube, Virtual} from "swiper";


const Layout = observer(() => {
    const categories = category.categories
    const { height, width } = useWindowDimensions()

    return (
        <div className={styles.layout}>
            <Header />
            {width < 768 && <MobileInfo />}

            <Nav />

            {width < 768
                ?
                <Swiper
                    modules={[Virtual]}
                    slidesPerView={1}
                    virtual
                    autoHeight
                    onSwiper={swiper => navStore.setNavSwiper(swiper)}
                    className={styles['swiper']}
                    onActiveIndexChange={swiper => {
                        if (swiper.activeIndex === 0) {
                            navStore.setCategoryId(0, false, true)
                        } else {
                            navStore.setCategoryId(categories[swiper.activeIndex - 1].id, false, true)
                        }
                    }}
                >
                    <SwiperSlide key={0} virtualIndex={0} className={styles['swiperSlide']}>
                        <ProductsContainer
                            categoryId={0}
                            salePage={true}
                        />
                    </SwiperSlide>
                    {categories.map(category =>
                        <SwiperSlide key={category.id} virtualIndex={category.id} className={styles['swiperSlide']}>
                            <ProductsContainer
                                categoryId={category.id}
                                salePage={category.id === 0}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
                :
                <ProductsContainer
                    categoryId={navStore.categoryId}
                    salePage={navStore.categoryId === 0}
                />
            }

            <Footer />

            {(productStore.cartCost > 0 && width < 768) && <FloatingCartButton />}
        </div>
    )
})

export default Layout
