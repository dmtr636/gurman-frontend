import product from '../../store/productStore'
import Product from "./Product";
import styles from './ProductContainer.module.css'
import {observer} from "mobx-react-lite";
import Carousel from "../carousel/Carousel";

const ProductsContainer = observer((props: {
    categoryId: number,
    salePage: boolean,
    recommendationsPage?: boolean
}) => {

    let products
    if (props.salePage) {
        products = product.productsOnSale
    } else if (props.recommendationsPage) {
        products = product.recommendations
    } else {
        products = product.products.filter(product => product.category === props.categoryId)
    }

    return (
        <>
            {props.salePage && <Carousel />}
            <div className={props.recommendationsPage ? styles["container-3"] : styles["container"]}>
                {products.map(product =>
                    <div>
                        <Product product={product} />
                    </div>
                )}
            </div>
        </>
    )
})

export default ProductsContainer