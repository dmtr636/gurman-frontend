import styles from './Cart.module.css'
import closeImg from '../../images/Close.svg'
import cartStore from "../../store/cartStore";

function declOfNum(number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const Cart = (props: {close: any}) => {

    return (
        <div className={styles.cart}>
            <img
                src={closeImg}
                className={styles.closeImg}
                alt={""}
                onClick={(event) => {
                    props.close()
                    event.stopPropagation()
                }}
            />
            <div className={styles.header}>
                {cartStore.cartCount
                    + " "
                    + declOfNum(cartStore.cartCount, ["товар", "товара", "товаров"])
                    + " на "}
            </div>
        </div>
    )
}

export default Cart