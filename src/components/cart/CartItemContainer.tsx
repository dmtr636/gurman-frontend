import styles from './CartItemContainer.module.css'
import CartItem from "./CartItem";
import cartStore from "../../store/cartStore";

const CartItemContainer = () => {
    const items = cartStore.items

    return (
        <div className={styles.container}>
            {items.map(item =>
                <CartItem item={item} />
            )}
        </div>
    )
}

export default CartItemContainer