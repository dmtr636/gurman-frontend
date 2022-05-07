import styles from './CartItemContainer.module.css'
import CartItem from "./CartItem";
import productStore from "../../store/productStore";

const CartItemContainer = () => {
    const items = productStore.cartItems

    return (
        <div className={styles.container}>
            {items.map(item =>
                <CartItem item={item} />
            )}
        </div>
    )
}

export default CartItemContainer