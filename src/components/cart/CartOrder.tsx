import styles from "./CartOrder.module.css"
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import productStore from "../../store/productStore";
import orderButtonArrow from "../../images/orderButtonArrow.svg"
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart";


function declOfNum(number: number, titles: string[]) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const InfoRow = observer((props: {title: string, value: string}) => {
    return (
        <div className={styles.infoRow}>
            <div className={styles.infoTitle}>
                {props.title}
            </div>
            <div className={styles.infoValue}>
                {props.value}
            </div>
        </div>
    )
})

const CartOrder = observer(() => {
    const [promoCode, setPromoCode] = useState("")
    const [open, setOpen] = useState(false)

    return(
        <div className={styles.container}>
            <div className={styles.promoInputRow}>
                <input
                    className={styles.promoInput}
                    placeholder={"Промокод"}
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                />
                {promoCode.length > 0 &&
                    <div className={styles.promoApply}>
                        Применить
                    </div>
                }
            </div>
            <div className={styles.divider} />
            <InfoRow
                title={productStore.cartCount + " " + declOfNum(productStore.cartCount, ["товар", "товара", "товаров"])}
                value={productStore.cartCost + " " + declOfNum(productStore.cartCost, ["рубль", "рубля", "рублей"])}
            />
            <InfoRow
                title={"Доставка"}
                value={"Бесплатно"}
            />
            <div className={styles.divider} />
            <InfoRow
                title={"Итого"}
                value={productStore.cartCost + " " + declOfNum(productStore.cartCost, ["рубль", "рубля", "рублей"])}
            />
            <div
                className={styles.button}
                onClick={() => setOpen(true)}
            >
                <div>К оформлению заказа</div>
                <img src={orderButtonArrow} alt={""} />
            </div>

            <Drawer
                anchor={'right'}
                open={open}
            >
                <Cart close={() => setOpen(false)} />
            </Drawer>
        </div>
    )
})

export default CartOrder