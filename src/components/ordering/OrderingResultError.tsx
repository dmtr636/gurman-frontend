import styles from "./OrderingResult.module.css"
import navStore from "../../store/navStore";
import errorIcon from "../../images/errorIcon.svg"
import orderButtonArrow from "../../images/orderButtonArrow.svg";
import React from "react";
import {useNavigate} from "react-router-dom";
import phoneIcon from "../../images/orderingErrorPhoneIcon.svg"
import cartStore from "../../store/cartStore";

const OrderingResultError = () => {
    const navigate = useNavigate()

    return(
        <div className={styles["wrapper"]}>
            <div className={styles["result"]}>
                <div className={styles["header"]}>
                    <div className={styles["headerText"]}>
                        Что-то пошло не так!
                    </div>
                    <img src={errorIcon} alt={""} />
                </div>
                <div className={styles['divider']} />

                <div className={styles['text']}>
                    Попробуйте ещё раз или свяжитесь с нами
                </div>

                <div className={styles['phoneText']}>
                    <img src={phoneIcon} alt={""} />
                    8 (910) 914-00-05
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

export default OrderingResultError