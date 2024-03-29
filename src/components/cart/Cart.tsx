import styles from './Cart.module.css'
import CartItemContainer from "./CartItemContainer";
import {observer} from "mobx-react-lite";
import CartOrder from "./CartOrder";
import DrawerContainer from "../common/DrawerContainer";
import cartStore from '../../store/cartStore';

function declOfNum(number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const Cart = observer((props: {close: any}) => {

    return (
        <DrawerContainer close={() => props.close()}>
            <div className={styles.header}>
                {cartStore.cartAmount
                    + " "
                    + declOfNum(cartStore.cartAmount, ["товар", "товара", "товаров"])
                    + " на "
                }
                <span className={styles.cost}>
                    {cartStore.totalCost
                        + " "
                        + declOfNum(cartStore.totalCost, ["рубль", "рубля", "рублей"])
                    }
                </span>
            </div>

            <CartItemContainer />
            <CartOrder />
        </DrawerContainer>
    )
})

export default Cart