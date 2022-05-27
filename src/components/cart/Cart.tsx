import styles from './Cart.module.css'
import closeImg from '../../images/Close.svg'
import CartItemContainer from "./CartItemContainer";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";
import CartOrder from "./CartOrder";
import DrawerContainer from "../common/DrawerContainer";

function declOfNum(number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const Cart = observer((props: {close: any}) => {

    return (
        <DrawerContainer close={() => props.close()}>
            <div className={styles.header}>
                {productStore.cartCount
                    + " "
                    + declOfNum(productStore.cartCount, ["товар", "товара", "товаров"])
                    + " на "
                }
                <span className={styles.cost}>
                    {productStore.totalCost
                        + " "
                        + declOfNum(productStore.totalCost, ["рубль", "рубля", "рублей"])
                    }
                </span>
            </div>

            <CartItemContainer />
            <CartOrder />
        </DrawerContainer>
    )
})

export default Cart