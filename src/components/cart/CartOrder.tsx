import styles from "./CartOrder.module.css"
import React from "react";
import {observer} from "mobx-react-lite";
import orderButtonArrow from "../../images/orderButtonArrow.svg"
import Drawer from "@mui/material/Drawer";
import checkMark from "../../images/checkMark.svg"
import promoCodeStore, {CHECKING, EXISTS, NOT_CHECKED, NOT_EXISTS} from "../../store/promoCodeStore";
import navStore from "../../store/navStore";
import SelectTime from "../ordering/SelectTime";
import OrderingResultSuccess from "../ordering/OrderingResultSuccess";
import cartStore from "../../store/cartStore";


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
    const [promoCode, setPromoCode] = [promoCodeStore.code, (code: string) => promoCodeStore.setPromoCode(code)]

    return(
        <div className={styles.container}>
            <div className={styles.promoInputRow}>
                <input
                    className={styles.promoInput}
                    placeholder={"Промокод"}
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                />
                {(promoCodeStore.status === NOT_CHECKED && promoCode.length > 0) &&
                    <div
                        className={styles.promoApply}
                        onClick={() => promoCodeStore.checkPromoCode(promoCode)}
                    >
                        Применить
                    </div>
                }
                {(promoCodeStore.status === CHECKING) &&
                    <div className={styles.promoApply}>
                        Проверка...
                    </div>
                }
                {(promoCodeStore.status === EXISTS) &&
                    <div className={styles.promoApply}>
                        <img src={checkMark} alt={""} />
                    </div>
                }
                {(promoCodeStore.status === NOT_EXISTS) &&
                    <div className={styles.promoNotExists}>
                        Промокод не найден
                    </div>
                }
            </div>
            <div className={styles.divider} />
            <InfoRow
                title={cartStore.cartAmount + " " + declOfNum(cartStore.cartAmount, ["товар", "товара", "товаров"])}
                value={cartStore.cartCost + " " + declOfNum(cartStore.cartCost, ["рубль", "рубля", "рублей"])}
            />
            <InfoRow
                title={"Доставка"}
                value={cartStore.cartCost >= 1100 ? "Бесплатно" : "200 рублей"}
            />
            <div className={styles.divider} />
            <InfoRow
                title={"Итого"}
                value={cartStore.totalCost + " " + declOfNum(cartStore.totalCost, ["рубль", "рубля", "рублей"])}
            />
            <div
                className={styles.button}
                onClick={(event) => {
                    event.stopPropagation()
                    navStore.openSelectTime()
                }}
            >
                <div>К оформлению заказа</div>
                <img src={orderButtonArrow} alt={""} />
            </div>

            <Drawer
                anchor={'right'}
                open={navStore.selectTimeOpenState}
                elevation={0}
                BackdropProps={{style:{opacity:0}}}
            >
                <SelectTime />
            </Drawer>

            <Drawer
                anchor={'right'}
                open={navStore.resultOpenState}
                elevation={0}
                BackdropProps={{style:{opacity:0}}}
            >
                <OrderingResultSuccess />
            </Drawer>
        </div>
    )
})

export default CartOrder