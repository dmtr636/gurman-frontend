import product from '../../store/productStore'
import Product from "./Product";
import styles from './ProductContainer.module.css'
import {observer} from "mobx-react-lite";
import Carousel from "../carousel/Carousel";
import useWindowDimensions from "../../hooks/hooks";
import MobileProduct from "./MobileProduct";
import categoryStore from "../../store/categoryStore";

const ProductsContainer = observer((props: {
    navIndex?: number,
    categoryId?: number,
    salePage?: boolean,
    recommendationsPage?: boolean,
    popularPage?: boolean
}) => {
    const { width } = useWindowDimensions()
    let products

    if (props.navIndex === 0) {
        products = product.products
    } else if (props.navIndex === 1) {
        products = product.productsOnSale
    } else if (props.recommendationsPage) {
        products = product.getRecommendations
    } else {
        let categoryId = categoryStore.categories[props.navIndex!].id
        products = product.products.filter(product => product.category === categoryId)
    }

    return (
        <>
            {props.navIndex === 0 && <Carousel />}
            <div className={props.recommendationsPage ? styles["container-3"] : styles["container"]}>
                {products.map(product =>
                    <>
                        {width > 1365
                            ?
                            <Product product={product} />

                            :
                            <MobileProduct product={product} />
                        }
                    </>
                )}
            </div>
        </>
    )
})

export default ProductsContainer