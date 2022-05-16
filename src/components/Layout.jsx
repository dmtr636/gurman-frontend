import styles from './Layout.module.css'
import Header from "./header/Header";
import Nav from './nav/Nav'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, NavLink, HashRouter
} from "react-router-dom";
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

const Layout = observer(() => {
    const categories = category.categories
    const { height, width } = useWindowDimensions()

    return (
        <div className={styles.layout}>
            <Header />
            {width < 768 && <MobileInfo />}

            <Nav />

            <ProductsContainer
                categoryId={navStore.categoryId}
                salePage={navStore.categoryId === 0}
            />

            <Footer />

            {(productStore.cartCost > 0 && width < 768) && <FloatingCartButton />}
        </div>
    )
})

export default Layout
