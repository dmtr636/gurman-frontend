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

const Layout = observer(() => {
    const categories = category.categories
    const { height, width } = useWindowDimensions()

    return (
        <div className={styles.layout}>
            <Header />
            <HashRouter>
                <Nav />

                {width > 1365
                    ?
                    <Routes>
                        {categories.map((category) =>
                            <Route
                                path={'/' + category.path}
                                element={
                                    <ProductsContainer categoryId={category.id} salePage={false} />
                                }
                                key={category.id}
                            />
                        )}
                        <Route path={'/'} element={ <ProductsContainer categoryId={0} salePage={true} />} key={0} />
                        <Route path={'*'} element={<h1>Not found</h1>} key={-1}/>
                    </Routes>

                    :
                    <Routes>
                        {categories.map((category) =>
                            <Route
                                path={'/' + category.path}
                                element={
                                    <ProductsContainer categoryId={category.id} salePage={false} />
                                }
                                key={category.id}
                            />
                        )}
                        <Route path={'/'} element={ <ProductsContainer categoryId={0} salePage={true} />} key={0} />
                        <Route path={'*'} element={<h1>Not found</h1>} key={-1}/>
                    </Routes>
                }


            </HashRouter>
            <Footer />
        </div>
    )
})

export default Layout