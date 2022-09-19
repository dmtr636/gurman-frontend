import styles from "./OrderingResult.module.css"
import navStore from "../../store/navStore";
import successIcon from "../../images/successIcon.svg"
import orderButtonArrow from "../../images/orderButtonArrow.svg";
import React from "react";
import {useNavigate} from "react-router-dom";
import cartStore from "../../store/cartStore";

const OrderingResultSuccess = () => {
    const navigate = useNavigate()

    return(
        <div className={styles["wrapper"]}>
            <div className={styles["result"]}>
                <div className={styles["header"]}>
                    <div className={styles["headerText"]}>
                        Спасибо за заказ!
                    </div>
                    <img src={successIcon} alt={""} />
                </div>
                <div className={styles['divider']} />

                <div className={styles['text']}>
                    Мы перезвоним в течение пяти
                    минут для подтверждения
                </div>

                <div
                    className={styles.button}
                    onClick={(event) => {
                        event.stopPropagation()
                        navStore.closAll()
                        cartStore.clearCart()
                        navigate("/")
                    }}
                >
                    <div>В меню</div>
                    <img src={orderButtonArrow} alt={""} />
                </div>
            </div>
        </div>
    )
}

export default OrderingResultSuccess