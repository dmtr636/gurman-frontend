import styles from "./HeaderCart.module.css";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore"
import Cart from "../../store/cartStore";

const HeaderCart = observer(() => {
    const cartCount = Cart.cartCount

    const cartClassName = () => {
        let empty = cartCount === 0 ? styles.empty : " "
        return `${styles.cart} ${empty}`
    }

    return (
        <div className={cartClassName()} onClick={() => alert("Open cart")}>
            <div className={styles.image}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0455 6.25H15.9886V5.75C15.9886 2.575 13.5307 0 10.5 0C7.46932 0 5.01136 2.575 5.01136 5.75V6.25H0.954546C0.426563 6.25 0 6.69687 0 7.25V24C0 24.5531 0.426563 25 0.954546 25H8.74988C8.47006 24.2835 8.2632 23.5304 8.13844 22.75H2.14773V8.5H5.01136V11.25C5.01136 11.3875 5.11875 11.5 5.25 11.5H6.92046C7.0517 11.5 7.15909 11.3875 7.15909 11.25V8.5H13.8409V11.25C13.8409 11.2606 13.8415 11.2711 13.8428 11.2814C14.5192 10.9217 15.2375 10.6306 15.9886 10.4173V8.5H18.8523V10.001C18.9014 10.0003 18.9507 10 19 10C19.683 10 20.3514 10.0622 21 10.1814V7.25C21 6.69687 20.5734 6.25 20.0455 6.25ZM7.15909 5.75C7.15909 3.81562 8.65355 2.25 10.5 2.25C12.3465 2.25 13.8409 3.81562 13.8409 5.75V6.25H7.15909V5.75Z" fill="white"/>
                </svg>
            </div>
            <div className={styles.positions}>
                <div className={styles.positionsText}>
                    {cartCount}
                </div>
            </div>
            <div className={styles.text}>
                Оформить заказ
            </div>
        </div>
    )
})

export default HeaderCart