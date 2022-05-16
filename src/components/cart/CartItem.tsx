import {ICartItem} from "../../model/ICartItem";
import styles from './CartItem.module.css'
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";
import {SERVER_HOST} from "../../constants/constants";

const COMPOSITION_MAX_LEN = 60

function truncate(input: string) {
    if (input.length > COMPOSITION_MAX_LEN) {
        return input.substring(0, COMPOSITION_MAX_LEN) + '...';
    }
    return input;
}

const CartItem = observer((props: {item: ICartItem}) => {
    const item = props.item

    return (
        <div className={styles.item}>
            <img className={styles.image} src={SERVER_HOST + item.product.image} alt={""}/>
            <div className={styles.infoColumn}>
                <div className={styles.titleRow}>
                    <span className={styles.title}>
                        {item.product.name}
                        <span className={styles.portion}>
                            {item.product.portion + " г."}
                        </span>
                    </span>
                </div>

                <div className={styles['composition']}>
                    <span className={styles['compositionText']}>
                        {truncate(item.variant.composition)}
                    </span>
                </div>

                <div className={styles.orderRow}>
                    <div className={styles.cost}>
                        {item.product.onSale
                            ? item.variant.cost * (100 - item.product.discount) / 100 + " ₽"
                            : item.variant.cost + " ₽"
                        }
                    </div>

                    <div className={styles.cartCount}>
                        <div
                            className={styles.cartCountButton}
                            onClick={() => {
                                productStore.decrementCartCount(item.variant)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                <path d="M1 1H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <div>{item.variant.cartCount}</div>

                        <div
                            className={styles.cartCountButton}
                            onClick={() => {
                                productStore.incrementCartCount(item.variant)
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 6H11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 1L6 11" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['divider']} />
        </div>
    )
})

export default CartItem