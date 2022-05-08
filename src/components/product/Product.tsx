import {IProduct} from "../../model/IProduct";
import styles from './Product.module.css'
import productStore from '../../store/productStore'
import {observer} from "mobx-react-lite";
import Variants from "./Variants";
import Composition from "./Composition";
import {SERVER_HOST} from "../../constants/constants";

const Product = observer((props: {product: IProduct}) => {
    const product = props.product

    if (product.activeVariant === undefined) {
        productStore.setActiveVariant(product, product.variants[0])
    }

    const orderButtonClassNames = () => {
        return styles['orderButton'] +
            (product.activeVariant.cartCount > 0
                ? ' ' + styles.active
                : '')
    }

    return (
        <div
            className={styles.product}
            onClick={() => productStore.setExpanded(product, false)}
        >
            <img src={SERVER_HOST + props.product.image} alt={""}/>

            {product.onSale &&
                <div className={styles.saleBg}>
                    <div className={styles.saleText}>
                        {`-${product.discount}% при заказе`}
                    </div>
                </div>
            }

            <div className={styles.titleRow}>
                <span className={styles.title}>
                    {props.product.name}
                </span>
                <span className={styles.portion}>
                    {props.product.portion + " г."}
                </span>
            </div>

            {product.variants.length > 1 &&
                <Variants product={product} />
            }

            <Composition product={product} />

            <div className={styles.orderRow}>
                <div
                    className={orderButtonClassNames()}
                    onClick={() => productStore.toggleInCartState(product.activeVariant, product)}
                >
                    {product.activeVariant.cost + " ₽"}
                </div>

                {product.activeVariant.cartCount > 0 &&
                    <div className={styles.cartCount}>
                        <div
                            className={styles.cartCountButton}
                            onClick={() => productStore.decrementCartCount(product.activeVariant)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M1 1H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div>{product.activeVariant.cartCount}</div>

                        <div
                            className={styles.cartCountButton}
                            onClick={() => productStore.incrementCartCount(product.activeVariant)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 1L6 11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
})

export default Product