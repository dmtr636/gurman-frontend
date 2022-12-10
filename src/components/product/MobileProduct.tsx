import {IProduct} from "../../model/IProduct";
import styles from './MobileProduct.module.css'
import productStore from '../../store/productStore'
import {observer} from "mobx-react-lite";
import Variants from "./Variants";
import {SERVER_HOST} from "../../constants/constants";
import MobileComposition from "./MobileComposition";
import settingsStore from "../../store/settingsStore";
import navStore from "../../store/navStore";
import cartStore from "../../store/cartStore";

const MobileProduct = observer((props: {product: IProduct}) => {
    const product = props.product

    if (product.activeVariant === undefined) {
        productStore.setActiveVariant(product, product.variants[0])
    }

    const orderButtonClassNames = () => {
        return styles['orderButton'] +
            (cartStore.isVariantInCart(product.activeVariant)
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
                    <span>&nbsp;&nbsp;&nbsp;</span>
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
                        event.stopPropagation()

                        if (!settingsStore.siteOpenState) {
                            navStore.openSiteClosedModal()
                            return
                        }

                        if (cartStore.isVariantInCart(product.activeVariant)) {
                            cartStore.removeVariant(product.activeVariant)
                        } else {
                            if (product.bigPortionAvailable || product.additions.length > 0) {
                                product!.activeVariant.cartCount = 1
                                navStore.openAdditionsModal(product)
                            } else {
                                cartStore.addItem(product, product.activeVariant)
                            }
                        }
                    }}
                >
                    {(product.onSale && cartStore.isVariantInCart(product.activeVariant))
                        ? product.activeVariant.cost * (100 - product.discount) / 100 + " ₽"
                        : product.activeVariant.cost + " ₽"
                    }
                </div>

                {cartStore.isVariantInCart(product.activeVariant) &&
                    <div className={styles.cartCount}>
                        <div
                            className={styles.cartCountButton}
                            onClick={(event) => {
                                cartStore.decVariantAmount(product, product.activeVariant)
                                event.stopPropagation()
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M1 1H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div>{cartStore.getVariantAmount(product, product.activeVariant)}</div>

                        <div
                            className={styles.cartCountButton}
                            onClick={(event) => {
                                if (product.additions.length > 0 || product.bigPortionAvailable) {
                                    navStore.openAdditionsModal(product)
                                } else {
                                    cartStore.incVariantAmount(product, product.activeVariant)
                                }
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