import {IProduct} from "../../model/IProduct";
import styles from './Product.module.css'
import {useState} from "react";
import {IVariant} from "../../model/IVariant";
import productStore from '../../store/product'
import {observer} from "mobx-react-lite";
import Variants from "./Variants";
import Composition from "./Composition";

const Product = observer((props: {product: IProduct}) => {
    const product = props.product

    const orderButtonClassNames = () => {
        return styles['orderButton'] +
            (product.activeVariant.cartCount > 0
                ? ' ' + styles.active
                : '')
    }

    return (
        <div
            className={styles.product}
            onClick={() => product.expanded = false}
        >
            <img src={"http://localhost:8000" + props.product.image} alt={""}/>

            <div className={styles.titleRow}>
                <div className={styles.title}>
                    {props.product.name}
                </div>
                <div className={styles.portion}>
                    {props.product.portion + " г."}
                </div>
            </div>

            {product.variants.length > 1 &&
                <Variants product={product} />
            }

            <Composition product={product} />

            <div className={styles.orderRow}>
                <div
                    className={orderButtonClassNames()}
                    onClick={() => productStore.toggleInCartState(product.activeVariant)}
                >
                    {product.activeVariant.cost + " ₽"}
                </div>
            </div>
        </div>
    )
})

export default Product