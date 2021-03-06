import {IProduct} from "../../model/IProduct";
import styles from './MobileProduct.module.css'
import productStore from '../../store/productStore'
import {observer} from "mobx-react-lite";
import Variants from "./Variants";
import Composition from "./Composition";
import {SERVER_HOST} from "../../constants/constants";
import MobileComposition from "./MobileComposition";
import settingsStore from "../../store/settingsStore";
import navStore from "../../store/navStore";

const MobileProduct = observer((props: {product: IProduct}) => {
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
                    <span className={styles.portion}>
                        {props.product.portion + " " + props.product.unit}
                    </span>
                </span>
            </div>

            <MobileComposition product={product} />

            {product.variants.length > 1 &&
                <Variants product={product} />
            }

            <div className={styles.orderRow}>
                <div
                    className={orderButtonClassNames()}
                    onClick={(event) => {
                        if (settingsStore.siteOpenState) {
                            let cartState = productStore.toggleInCartState(product.activeVariant, product)
                            if ((product.bigPortionAvailable || product.additions.length > 0) && cartState) {
                                navStore.openAdditionsModal(product)
                            }
                        } else {
                            navStore.openSiteClosedModal()
                        }
                        event.stopPropagation()
                    }}
                >
                    {(product.onSale && product.activeVariant.cartCount > 0)
                        ? product.activeVariant.cost * (100 - product.discount) / 100 + " ₽"
                        : product.activeVariant.cost + " ₽"
                    }
                </div>

                {product.activeVariant.cartCount > 0 &&
                    <div className={styles.cartCount}>
                        <div
                            className={styles.cartCountButton}
                            onClick={(event) => {
                                productStore.decrementCartCount(product.activeVariant)
                                event.stopPropagation()
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M1 1H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div>{product.activeVariant.cartCount}</div>

                        <div
                            className={styles.cartCountButton}
                            onClick={(event) => {
                                productStore.incrementCartCount(product.activeVariant)
                                event.stopPropagation()
                            }}
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

export default MobileProduct