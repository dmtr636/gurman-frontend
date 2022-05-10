import styles from './Cart.module.css'
import closeImg from '../../images/Close.svg'
import CartItemContainer from "./CartItemContainer";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";
import CartOrder from "./CartOrder";

function declOfNum(number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const Cart = observer((props: {close: any}) => {

    return (
        <div className={styles.wrapper}>
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
                    {productStore.cartCount
                        + " "
                        + declOfNum(productStore.cartCount, ["товар", "товара", "товаров"])
                        + " на "
                    }
                    <span className={styles.cost}>
                        {productStore.cartCost
                            + " "
                            + declOfNum(productStore.cartCost, ["рубль", "рубля", "рублей"])
                        }
                    </span>
                </div>

                <CartItemContainer />
                <CartOrder />
            </div>
        </div>
    )
})

export default Cart